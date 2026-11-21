import discovery from "@/lib/api-discovery.json"

export function GET() {
  return Response.json(discovery, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
