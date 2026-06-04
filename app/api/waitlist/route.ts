import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { Resend } from 'resend'
import { betaAccessEmailHtml } from '@/emails/beta-access-email'
import { getPostHogClient } from '@/lib/posthog-server'
import { buildOptionalNotionProperties, experienceMap, platformMap } from '@/lib/notion-waitlist'

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

function getCountryFromRequest(request: NextRequest): string {
    const code = request.headers.get('x-vercel-ip-country')
    if (!code) return 'Unknown'
    try {
        return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code
    } catch {
        return code
    }
}

// Helper function to get data source ID from database ID
async function getDataSourceId(databaseId: string): Promise<string> {
    try {
        console.log('Attempting to fetch database:', databaseId)

        const database = await notion.databases.retrieve({
            database_id: databaseId,
        }) as any // Type assertion for new API features

        console.log('Database response:', JSON.stringify(database, null, 2))

        // In the new API version, databases have data_sources array
        if (database.data_sources && database.data_sources.length > 0) {
            console.log('Found data sources:', database.data_sources)
            // Use the first data source (most common case)
            return database.data_sources[0].id
        }

        // Fallback: If no data_sources field, this might be a legacy database
        // In this case, we can try using the database_id directly for page creation
        console.log('No data_sources found, this might be a legacy database')
        throw new Error('No data sources found for this database')
    } catch (error) {
        console.error('Error fetching data source ID:', error)
        throw error
    }
}

// Helper function to check if email already exists in the database
async function checkEmailExists(databaseId: string, email: string): Promise<boolean> {
    try {
        console.log('Checking if email exists:', email)

        const dataSourceId = await getDataSourceId(databaseId)
        console.log('Using data source ID for query:', dataSourceId)

        const response = await notion.request({
            path: `data_sources/${dataSourceId}/query`,
            method: 'post',
            body: {
                filter: {
                    property: 'Email',
                    email: {
                        equals: email
                    }
                },
                page_size: 1
            }
        }) as any

        console.log('Data source email check response:', response.results?.length > 0 ? 'Email exists' : 'Email not found')
        return response.results?.length > 0 || false
    } catch (error) {
        console.error('Error checking email existence:', error)
        // In case of error, allow the submission to proceed (fail open)
        return false
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, platform, experience, struggle, hearAbout, comments } = body

        // Validate required fields
        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            )
        }

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        if (!NOTION_DATABASE_ID) {
            console.error('NOTION_DATABASE_ID environment variable is not set')
            return NextResponse.json(
                { error: 'Database configuration error' },
                { status: 500 }
            )
        }

        // Check if email already exists in the database
        const emailExists = await checkEmailExists(NOTION_DATABASE_ID, email)
        if (emailExists) {
            const distinctId = request.headers.get('X-POSTHOG-DISTINCT-ID') || email
            const posthog = getPostHogClient()
            posthog.capture({
                distinctId,
                event: 'beta_signup_duplicate_email',
                properties: { email },
            })
            return NextResponse.json(
                { error: 'This email is already on our list! Thanks for your interest.' },
                { status: 409 }
            )
        }

        const country = getCountryFromRequest(request)

        // Try to get the data source ID, but fall back to database ID if it fails
        let parentConfig: any
        try {
            const dataSourceId = await getDataSourceId(NOTION_DATABASE_ID)
            parentConfig = {
                type: 'data_source_id',
                data_source_id: dataSourceId,
            }
            console.log('Using data source parent:', parentConfig)
        } catch (error) {
            console.log('Falling back to database_id parent due to error:', error)
            // Fallback to the old database_id approach
            parentConfig = {
                type: 'database_id',
                database_id: NOTION_DATABASE_ID,
            }
        }

        // Create the page properties
        const properties: any = {
            'Name': {
                title: [{ text: { content: name } }],
            },
            'Email': {
                email: email,
            },
            'Submitted at': {
                date: { start: new Date().toISOString() },
            },
            'Country': {
                rich_text: [{ text: { content: country } }],
            },
            ...buildOptionalNotionProperties({ platform, experience, struggle, hearAbout, comments }),
        }

        // Create the page using the determined parent configuration
        const response = await notion.pages.create({
            parent: parentConfig,
            properties,
        })

        // Send confirmation email
        const { error: emailError } = await resend.emails.send({
            from: 'AlgoPattern <hello@updates.algopattern.dev>',
            to: [email],
            replyTo: 'algopattern.dev@gmail.com',
            subject: 'Your AlgoPattern beta access',
            html: betaAccessEmailHtml(name),
        })

        if (emailError) {
            console.error('Failed to send confirmation email:', emailError)
        }

        const distinctId = request.headers.get('X-POSTHOG-DISTINCT-ID') || email
        const sessionId = request.headers.get('X-POSTHOG-SESSION-ID') || undefined
        const posthog = getPostHogClient()
        posthog.identify({
            distinctId,
            properties: {
                name,
                email,
                platform: platformMap[platform] || platform || undefined,
                experience: experienceMap[experience] || experience || undefined,
                $session_id: sessionId,
            },
        })
        posthog.capture({
            distinctId,
            event: 'beta_signup_step1_completed',
            properties: {
                email,
                country,
                $session_id: sessionId,
            },
        })

        return NextResponse.json({
            success: true,
            id: response.id,
            message: 'Successfully added to list!'
        })

    } catch (error) {
        console.error('Error adding to Notion database:', error)

        try {
            const posthog = getPostHogClient()
            posthog.capture({
                distinctId: 'server',
                event: 'beta_signup_failed',
                properties: {
                    error: error instanceof Error ? error.message : String(error),
                },
            })
        } catch {
            // ignore telemetry errors
        }

        // Provide more specific error messages
        if (error instanceof Error) {
            if (error.message.includes('Unauthorized')) {
                return NextResponse.json(
                    { error: 'Notion API authentication failed. Please check your API key.' },
                    { status: 401 }
                )
            }
            if (error.message.includes('object_not_found')) {
                return NextResponse.json(
                    { error: 'Notion database not found. Please check your database ID.' },
                    { status: 404 }
                )
            }
            if (error.message.includes('No data sources found')) {
                return NextResponse.json(
                    { error: 'No data sources found for this database. Please ensure your database is properly configured.' },
                    { status: 400 }
                )
            }
        }

        return NextResponse.json(
            { error: 'Failed to add to list. Please try again.' },
            { status: 500 }
        )
    }
}