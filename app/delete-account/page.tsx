import { Footer } from "@/components/footer"

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/icon.svg" alt="AlgoPattern logo" className="h-8 w-8 object-contain" />
              <span className="font-bold text-xl text-foreground">AlgoPattern</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-12">Delete Your Account</h1>

        <div className="space-y-10 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">Delete from the app</h2>
            <p className="text-muted-foreground leading-relaxed">
              To delete your AlgoPattern account and associated data, open the AlgoPattern app and go to{" "}
              <strong className="text-foreground">Settings → Account → Delete Account</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">No longer have access to the app?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you no longer have access to the app, email{" "}
              <a href="mailto:algopattern.dev@gmail.com" className="text-primary hover:underline">
                algopattern.dev@gmail.com
              </a>{" "}
              from the email address associated with your account and request account deletion.
              We will delete your account and associated app data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Some records may be retained if required for legal, security, or abuse-prevention purposes.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
