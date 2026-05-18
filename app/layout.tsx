import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "AlgoPattern - Master Coding Interview Patterns",
  description:
    "AlgoPattern is a mobile app for coding interview prep. Practice algorithm patterns in bite-sized sessions and build intuition for LeetCode problems.",
  keywords: [
    "coding interview",
    "coding interview patterns",
    "data structures",
    "algorithms",
    "leetcode",
    "programming",
    "dsa",
    "tech interview",
    "dsa patterns",
    "leetcode patterns",
    "coding app",
    "algorithm practice",
    "coding practice"
  ],
  icons: {
    icon: [
      { url: "/images/icon.svg", type: "image/svg+xml" },
      { url: "/images/icon-round.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon-round.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
