import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { getPostHogClient } from '@/lib/posthog-server'
import { buildOptionalNotionProperties, experienceMap, platformMap, hearAboutMap } from '@/lib/notion-waitlist'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        if (!UUID_REGEX.test(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
        }

        const body = await request.json()
        const { platform, experience, struggle, hearAbout, comments } = body

        const properties = buildOptionalNotionProperties({ platform, experience, struggle, hearAbout, comments })

        if (Object.keys(properties).length > 0) {
            try {
                await notion.pages.update({ page_id: id, properties: properties as any })
            } catch (notionError) {
                console.error('Notion update failed (step 2 data not saved):', notionError)
            }
        }

        const distinctId = request.headers.get('X-POSTHOG-DISTINCT-ID') || 'unknown'
        const posthog = getPostHogClient()
        posthog.capture({
            distinctId,
            event: 'beta_signup_step2_completed',
            properties: {
                platform: platformMap[platform] || platform || undefined,
                experience: experienceMap[experience] || experience || undefined,
                hear_about: hearAboutMap[hearAbout] || hearAbout || undefined,
            },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error in step 2 handler:', error)
        return NextResponse.json({ success: true })
    }
}
