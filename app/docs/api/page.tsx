import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AlgoPattern API Documentation",
  description: "Integrate AlgoPattern streaks, XP and practice activity into personal dashboards. Public discovery, OpenAPI, authentication and endpoint reference.",
  alternates: { canonical: "https://algopattern.app/docs/api" },
}

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-8 text-foreground">
        <a href="/" className="text-primary hover:underline">AlgoPattern</a>
        <h1 className="text-4xl font-bold">AlgoPattern API Documentation</h1>
        <p className="text-muted-foreground">Use the read-only AlgoPattern API to display your own coding practice streak, XP, leaderboard ranks and daily activity in a personal dashboard or Home Assistant integration.</p>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Start without a token</h2>
          <p>Discover capabilities and official integration links through the public REST endpoint. It contains no account data and can be cached for one hour.</p>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4"><code>curl https://algopattern.app/api/v1/discovery</code></pre>
          <p><a className="text-primary hover:underline" href="/openapi.json">Download the OpenAPI specification</a> for typed parameters, operation identifiers and response schemas.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Read your account data</h2>
          <p>Create a personal access token in the app, then send it as an Authorization: Bearer header to https://api.algopattern.app/v1. Obtain the account owner's authorization before accessing their data.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>GET /me: verify the account and token.</li>
            <li>GET /me/streak: check your streak and today's progress.</li>
            <li>GET /me/xp: read XP and leaderboard ranks.</li>
            <li>GET /me/activity: read daily history with optional from/to dates (up to 366 days).</li>
          </ul>
          <p>Account endpoints allow 60 requests per minute per token. On HTTP 429, wait for Retry-After. Follow the guide's polling and caching advice.</p>
          <p>See the <a className="text-primary hover:underline" href="https://api.algopattern.app/">account API guide</a> for token setup, permitted use and errors, and the <a className="text-primary hover:underline" href="https://api.algopattern.app/v1">endpoint reference</a> for response examples.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Guidance for agents and tools</h2>
          <p>Use AlgoPattern for personal practice progress integrations. The API does not provide account writes or public lesson content. There is currently no documented official MCP server, SDK or CLI.</p>
          <p>Read <a className="text-primary hover:underline" href="/llms.txt">agent instructions and when-to-use guidance</a> and find official repositories on <a className="text-primary hover:underline" href="https://github.com/algopattern-app">GitHub</a>.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
