"use client"

import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Clock, Gamepad2, BookOpen, Smartphone, Trophy, Zap, Target, ChevronDown } from "lucide-react"
import { HeaderCtaButton, MainCtaButton } from "@/components/cta-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/icon.svg" alt="AlgoPattern logo" className="h-8 w-8 object-contain" />
              <span className="font-bold text-xl text-foreground">AlgoPattern</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <HeaderCtaButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Master Coding Interview Patterns, <span className="text-primary">5 Minutes at a Time</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              A Duolingo-style app for data structures &amp; algorithms. Build intuition, sharpen your problem-solving skills, and recognize patterns that unlock LeetCode problems.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <MainCtaButton source="hero" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-accent/20 opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why AlgoPattern Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-foreground">Why AlgoPattern?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Practicing LeetCode on mobile is clunky.</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Most apps force you to type code on a tiny screen. But interviews aren't just about syntax — they're
                  about recognizing patterns fast.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Train your brain to spot algorithmic patterns quickly</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Practice in short, snackable sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Turn downtime into productive prep</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="p-5 bg-white border-border/50 max-w-xs mx-auto">
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-foreground">Which pattern best fits?</p>
                    <div className="rounded-2xl border border-gray-200 bg-white p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Given a sorted array, find two numbers that add up to a target value.
                      </p>
                    </div>
                    <div className="space-y-2">
                      {["Hash Map / Set", "Two Pointers", "Sliding Window", "Modified Binary Search"].map((option) => (
                        <div
                          key={option}
                          className="w-full rounded-2xl border border-gray-200 bg-white py-2.5 px-4 text-center text-sm font-semibold text-gray-900"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Master coding patterns in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">1. Learn a Pattern</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear, visual breakdowns of core interview patterns like Sliding Window, Two Pointers, and Binary Search.
              </p>
            </Card>

            <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2. Drill It</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick interactive exercises: choose the right approach, trace the algorithm, or spot the bug.
              </p>
            </Card>

            <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">3. Level Up</h3>
              <p className="text-muted-foreground leading-relaxed">
                Earn streaks, track mastery by topic, and see your skills compound over time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Built for Busy Learners</h2>
            <p className="text-lg text-muted-foreground">Everything you need to master coding patterns on the go</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-border/50">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-foreground">Micro-learning</h3>
              <p className="text-sm text-muted-foreground">Practice anywhere, anytime</p>
            </Card>

            <Card className="p-6 border-border/50">
              <Gamepad2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2 text-foreground">Gamified</h3>
              <p className="text-sm text-muted-foreground">Streaks, achievements, leaderboards</p>
            </Card>

            <Card className="p-6 border-border/50">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-foreground">Pattern Library</h3>
              <p className="text-sm text-muted-foreground">20+ common interview approaches</p>
            </Card>

            <Card className="p-6 border-border/50">
              <Smartphone className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2 text-foreground">On-the-Go</h3>
              <p className="text-sm text-muted-foreground">Designed for mobile, no coding IDE required</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about AlgoPattern</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <Card className="p-6 border-border/50">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground">How does this compare to LeetCode?</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  <p>
                    {
                      "AlgoPattern focuses on pattern recognition and conceptual understanding rather than coding syntax. Instead of writing code, you train to recognize the problem-solving patterns that show up on LeetCode. Think of LeetCode as the gym and AlgoPattern as the daily warm-up that keeps your brain sharp."
                    }
                  </p>
                </div>
              </details>
            </Card>

            <Card className="p-6 border-border/50">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground">Do I need to write code in the app?</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  <p>
                    No! AlgoPattern is designed for mobile-first learning without typing code. You'll engage through
                    multiple choice questions, drag-and-drop exercises, pattern matching, and conceptual challenges that
                    build algorithmic intuition.
                  </p>
                </div>
              </details>
            </Card>

            <Card className="p-6 border-border/50">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground">What patterns will be covered?</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  <p>
                    We'll cover 20+ essential interview patterns including Two Pointers, Sliding Window, Binary Search,
                    DFS/BFS, Dynamic Programming, Backtracking, and more. Each pattern includes multiple difficulty
                    levels and real interview scenarios.
                  </p>
                </div>
              </details>
            </Card>

            <Card className="p-6 border-border/50">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground">How much time do I need to spend daily?</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  <p>
                    AlgoPattern is designed for micro-learning sessions. You can make meaningful progress in just 5-10
                    minutes per day. The gamified system encourages consistent daily practice rather than long cramming
                    sessions.
                  </p>
                </div>
              </details>
            </Card>

            <Card className="p-6 border-border/50">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-foreground">When will the app be available?</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  <p>
                    AlgoPattern is currently in beta! Join today to get access and help shape the app's features with your feedback.
                  </p>
                </div>
              </details>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Start Learning Today</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AlgoPattern is currently in beta.
              <br></br>
              Join to get access and help shape the app with your feedback.
            </p>
            <MainCtaButton source="cta_section" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
