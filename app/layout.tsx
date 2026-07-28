import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

const description =
  "AlgoPattern is a mobile app for coding interview prep. Practice algorithm patterns in bite-sized sessions and build intuition for LeetCode problems."

export const metadata: Metadata = {
  metadataBase: new URL("https://algopattern.dev"),
  title: "AlgoPattern - Master Coding Interview Patterns",
  description,
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
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AlgoPattern",
    title: "Master Coding Interview Patterns, 5 Minutes at a Time",
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "AlgoPattern - daily pattern practice for coding interviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${nunito.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
