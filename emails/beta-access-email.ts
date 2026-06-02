export function betaAccessEmailHtml(name?: string): string {
    const greeting = name ? ` ${name}` : ' there'
    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <p>Hi${greeting}!</p>

            <p>
            Thanks for signing up for the AlgoPattern beta.
            </p>

            <p>
            The beta is intentionally simple right now. It's built around the most common challenge people reported:
            recognizing patterns in problems and staying consistent with practice. You get 3 quick daily questions where
            you read a short prompt and choose which algorithmic pattern fits best.
            </p>

            <p>You can try it here:</p>

            <p>
                <strong>iOS (TestFlight):</strong><br />
                <a href="https://testflight.apple.com/join/NHMTvq5D">https://testflight.apple.com/join/NHMTvq5D</a>
            </p>

            <p>
                <strong>Android (Google Play testing):</strong><br />
                <a href="https://play.google.com/store/apps/details?id=com.algopattern.app">https://play.google.com/store/apps/details?id=com.algopattern.app</a>
            </p>
            <span>
                Note: Android access may take up to 24 hours to activate.
                If the link still doesn't work after that, please let me know by replying to this email.
            </span>

            <p>What I'd love feedback on:</p>
            <ul>
                <li>Do the questions make sense?</li>
                <li>Are the explanations helpful?</li>
                <li>Does the daily quiz flow feel useful?</li>
                <li>Is anything confusing, buggy, or missing?</li>
            </ul>

            <p>This is still an early version, so honest feedback is extremely helpful.</p>

            <p>Thank you again for being one of the first people to try AlgoPattern!</p>

            <p>Anna</p>

            <p style="font-size: 12px; color: #666;">
                You're receiving this because you signed up for AlgoPattern beta access.
            </p>
        </div>
    `
}
