/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Vary", value: "Accept" }],
      },
    ]
  },
  async rewrites() {
    return {
      // Negotiate the homepage before the existing HTML page is matched.
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "header", key: "accept", value: ".*text/markdown.*" }],
          destination: "/markdown-home",
        },
      ],
      afterFiles: [
        {
          source: "/ingest/static/:path*",
          destination: "https://us-assets.i.posthog.com/static/:path*",
        },
        {
          source: "/ingest/array/:path*",
          destination: "https://us-assets.i.posthog.com/array/:path*",
        },
        {
          source: "/ingest/:path*",
          destination: "https://us.i.posthog.com/:path*",
        },
      ],
      // Fallbacks run only after existing pages, assets, and dynamic routes.
      fallback: [
        {
          source: "/:path*",
          has: [{ type: "header", key: "accept", value: ".*text/markdown.*" }],
          destination: "/markdown-not-found",
        },
      ],
    }
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
