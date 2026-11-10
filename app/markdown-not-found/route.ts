const body = `# 404: Page not found

The requested page does not exist on AlgoPattern.

Visit the [homepage](https://algopattern.app/) or the [sitemap](https://algopattern.app/sitemap.xml) to find available pages.
`

export function GET() {
  return new Response(body, {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "no-store",
      Vary: "Accept",
    },
  })
}
