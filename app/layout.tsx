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
    "A Duolingo-style app for Data Structures & Algorithms. Build intuition, sharpen your problem-solving skills, and recognize patterns that unlock LeetCode problems.",
  keywords: ["coding interview", "data structures", "algorithms", "leetcode", "programming", "dsa", "leetcode patterns", "coding app", "algorithm practice", "coding practice"],
  icons: {
    icon: [
      { url: "/images/algopattern-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/algopattern-logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/images/algopattern-logo.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        url: "/images/algopattern-logo.png",
      }
    ]
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
