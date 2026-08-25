"use client"

import posthog from "posthog-js";

export const APP_STORE_URL = "https://apps.apple.com/us/app/algopattern/id6775235476"
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.algopattern.app"

export function StoreBadges({ source }: { source: string }) {
    const trackClick = (store: "app_store" | "google_play") => {
        posthog.capture("store_badge_clicked", { source, store })
    }

    return (
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackClick("app_store")}
                className="transition-opacity hover:opacity-80"
            >
                <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-10 min-[360px]:h-11 sm:h-12 w-auto"
                />
            </a>
            <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackClick("google_play")}
                className="transition-opacity hover:opacity-80"
            >
                <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-10 min-[360px]:h-11 sm:h-12 w-auto"
                />
            </a>
        </div>
    )
}
