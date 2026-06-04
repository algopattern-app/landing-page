export const experienceMap: Record<string, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
}

export const platformMap: Record<string, string> = {
    ios: 'iOS',
    android: 'Android',
}

export const hearAboutMap: Record<string, string> = {
    youtube: 'YouTube',
    instagram: 'Instagram',
    search: 'Search',
    other: 'Other',
}

interface OptionalFields {
    platform?: string
    experience?: string
    struggle?: string
    hearAbout?: string
    comments?: string
}

export function buildOptionalNotionProperties(data: OptionalFields): Record<string, unknown> {
    const properties: Record<string, unknown> = {}

    if (data.platform) {
        properties['Platform'] = {
            select: { name: platformMap[data.platform] || data.platform },
        }
    }

    if (data.experience) {
        properties['Experience'] = {
            select: { name: experienceMap[data.experience] || data.experience },
        }
    }

    if (data.struggle) {
        properties['Biggest struggle'] = {
            rich_text: [{ text: { content: data.struggle } }],
        }
    }

    if (data.hearAbout) {
        properties['Hear about'] = {
            select: { name: hearAboutMap[data.hearAbout] || data.hearAbout },
        }
    }

    if (data.comments) {
        properties['Additional comments'] = {
            rich_text: [{ text: { content: data.comments } }],
        }
    }

    return properties
}
