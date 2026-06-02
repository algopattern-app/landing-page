import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/icon.svg" alt="AlgoPattern logo" className="h-8 w-8 object-contain" />
              <span className="font-bold text-xl text-foreground">AlgoPattern</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="/#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button>Join Beta</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Get <span className="text-primary">in touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions about AlgoPattern? Want to share feedback or suggestions? We'd love to hear from you. Please email us at <a href="mailto:algopattern.dev@gmail.com" className="font-bold text-primary">algopattern.dev@gmail.com</a>.
            </p>
          </div>
        </div>


      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
