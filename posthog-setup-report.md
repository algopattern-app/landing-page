# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your AlgoPattern landing page. PostHog is initialized client-side via `instrumentation-client.ts` (the Next.js 15.3+ recommended approach), with a reverse proxy configured in `next.config.mjs` so events route through `/ingest` to reduce ad-blocker interference. A server-side client in `lib/posthog-server.ts` captures API route events. Environment variables are stored in `.env.local`.

| Event | Description | File |
|---|---|---|
| `cta_clicked` | User clicks any "Join Beta" call-to-action button. Includes `source` property (`header`, `hero`, `cta_section`) | `app/page.tsx` |
| `signup_modal_opened` | Beta signup modal is opened. Includes `source` property | `app/page.tsx` |
| `beta_signup_submitted` | User submits the signup form (client-side). Includes `platform`, `experience`, `hear_about` properties | `components/signup-modal.tsx` |
| `beta_signup_completed` | Server confirmed the user was added to the waitlist. Includes `email`, `platform`, `experience`, `hear_about`, `country` | `app/api/waitlist/route.ts` |
| `beta_signup_duplicate_email` | User submitted with an email already on the list | `app/api/waitlist/route.ts` |
| `beta_signup_failed` | Server-side error when adding to the waitlist | `app/api/waitlist/route.ts` |

User identification is called on successful signup (`posthog.identify`) both client-side (via `components/signup-modal.tsx`) and server-side (via `app/api/waitlist/route.ts`). The client passes its `distinct_id` and `session_id` as `X-POSTHOG-DISTINCT-ID` and `X-POSTHOG-SESSION-ID` headers so the server-side events are correlated with the same person.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/452966/dashboard/1664933)
- [Beta Signup Conversion Funnel](https://us.posthog.com/project/452966/insights/bKuJVi8s) — 3-step funnel: CTA clicked → form submitted → signup completed
- [Beta Signups Over Time](https://us.posthog.com/project/452966/insights/YizdItnx) — Daily completed signups over the last 90 days
- [Total Beta Signups](https://us.posthog.com/project/452966/insights/nbf4CEvj) — All-time signup count (bold number)
- [CTA Clicks by Source](https://us.posthog.com/project/452966/insights/ZzmlHnA0) — Which CTA button (header, hero, cta_section) drives the most opens
- [Signup Issues](https://us.posthog.com/project/452966/insights/KWHSPxVj) — Duplicate email attempts and server failures over time

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
