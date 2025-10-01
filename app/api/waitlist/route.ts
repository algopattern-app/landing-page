import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    notionVersion: '2025-09-03',
})

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

// Helper function to get country from IP address
async function getCountryFromIP(request: NextRequest): Promise<string> {
    try {
        // Get the user's IP address
        const forwarded = request.headers.get('x-forwarded-for')
        const realIP = request.headers.get('x-real-ip')
        const ip = forwarded?.split(',')[0] || realIP || request.ip || 'unknown'

        console.log('User IP:', ip)

        // Skip geolocation for localhost/development
        if (ip === 'unknown' || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
            return 'Unknown'
        }

        // Use a free IP geolocation service
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch(`http://ip-api.com/json/${ip}?fields=country,countryCode`, {
            signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (response.ok) {
            const data = await response.json()
            const country = data.country || 'Unknown'
            console.log('Detected country:', country)
            return country
        }

        return 'Unknown'
    } catch (error) {
        console.error('Error detecting country:', error)
        return 'Unknown'
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, platform, experience, struggle, pricing } = body

        // Validate required fields
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

        // Get user's country from IP address
        const country = await getCountryFromIP(request)

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

        // Map form values to Notion database schema
        const experienceMap: { [key: string]: string } = {
            'beginner': 'Beginner',
            'intermediate': 'Intermediate',
            'advanced': 'Advanced'
        }

        const platformMap: { [key: string]: string } = {
            'ios': 'iOS',
            'android': 'Android',
            'both': 'Both' // Note: Your schema only has iOS/Android, you may need to update it
        }

        const pricingMap: { [key: string]: string } = {
            'under-5': '< $5 / month',
            '5-10': '$5-$10 / month',
            '10-20': '$10-$20 / month',
            '20-plus': '$20+ / month'
        }

        // Create the page properties
        const properties: any = {
            'Email': {
                title: [
                    {
                        text: {
                            content: email,
                        },
                    },
                ],
            },
            'Submitted at': {
                date: {
                    start: new Date().toISOString(),
                },
            },
            'Country': {
                rich_text: [
                    {
                        text: {
                            content: country,
                        },
                    },
                ],
            },
        }

        // Add optional properties only if they exist
        if (platform) {
            properties['Platform'] = {
                select: {
                    name: platformMap[platform] || platform,
                },
            }
        }

        if (experience) {
            properties['Experience'] = {
                select: {
                    name: experienceMap[experience] || experience,
                },
            }
        }

        if (pricing) {
            properties['Pricing'] = {
                select: {
                    name: pricingMap[pricing] || pricing,
                },
            }
        }

        if (struggle) {
            properties['Biggest struggle'] = {
                rich_text: [
                    {
                        text: {
                            content: struggle,
                        },
                    },
                ],
            }
        }

        // Create the page using the determined parent configuration
        const response = await notion.pages.create({
            parent: parentConfig,
            properties,
        })

        return NextResponse.json({
            success: true,
            id: response.id,
            message: 'Successfully added to waitlist!'
        })

    } catch (error) {
        console.error('Error adding to Notion database:', error)

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
            { error: 'Failed to add to waitlist. Please try again.' },
            { status: 500 }
        )
    }
}