import type { Metadata } from "next"
import HomePage from "@/components/home-page"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://algopattern.app/",
  },
}

export default function Page() {
  return <HomePage />
}
