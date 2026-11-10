// Keep this representation aligned with the product content in app/page.tsx.
const body = `# AlgoPattern

## Master Coding Interview Patterns, 5 Minutes at a Time

AlgoPattern is a mobile app for coding interview prep on iOS and Android. Practice data structures and algorithms in bite-sized sessions, build intuition, and recognize patterns that unlock LeetCode problems.

## How it works

1. Learn a pattern: visual breakdowns of approaches such as Sliding Window, Two Pointers, and Binary Search.
2. Drill it: choose the right approach, trace an algorithm, or spot a bug through interactive exercises.
3. Level up: earn streaks, track mastery by topic, and build your skills through daily practice.

## Features

- Micro-learning: practice anywhere in short sessions.
- Gamified learning with streaks, achievements, and leaderboards.
- A pattern library covering 20+ common interview approaches.
- Designed for mobile, with no coding IDE required.

## Frequently asked questions

### How does this compare to LeetCode?

AlgoPattern focuses on pattern recognition and conceptual understanding. Use it as a daily warm-up for coding interview practice.

### Do I need to write code in the app?

No. Practice through multiple choice questions, drag-and-drop exercises, pattern matching, and conceptual challenges.

### What patterns are covered?

Topics include Two Pointers, Sliding Window, Binary Search, DFS/BFS, Dynamic Programming, and Backtracking, with multiple difficulty levels and interview scenarios.

### How much time do I need daily?

AlgoPattern is designed for 5–10 minute sessions and consistent daily practice.

### Where can I get the app?

Download it for free on the [App Store](https://apps.apple.com/us/app/algopattern/id6775235476) or [Google Play](https://play.google.com/store/apps/details?id=com.algopattern.app).

## Links

- [Homepage](https://algopattern.app/)
- [API documentation](https://algopattern.app/docs/api)
- [OpenAPI](https://algopattern.app/openapi.json)
- [Agent instructions](https://algopattern.app/llms.txt)
- [GitHub](https://github.com/algopattern-app)
- [Contact](https://algopattern.app/contact)
- [Privacy Policy](https://algopattern.app/privacy)
- [Terms](https://algopattern.app/terms)
- [Sitemap](https://algopattern.app/sitemap.xml)
`

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "no-store",
      Vary: "Accept",
    },
  })
}
