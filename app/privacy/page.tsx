import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: May 10, 2026</p>

        <div className="space-y-10 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              AlgoPattern ("we", "us", or "our") operates the website at algopattern.dev. This policy explains what
              information we collect when you visit our site or join our waitlist, how we use it, and your rights
              regarding that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <h3 className="font-medium mb-2">Waitlist form</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you join our waitlist, we collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 ml-2">
              <li>Name and email address</li>
              <li>Preferred platform (iOS or Android)</li>
              <li>Self-reported experience level</li>
              <li>Your biggest struggle with interview prep (free text)</li>
              <li>Preferred pricing range</li>
              <li>How you heard about us</li>
              <li>Any additional comments you choose to share</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We also record the date and time of your submission and your approximate country, which we detect
              automatically from your IP address using Vercel's built-in geolocation. Your IP address is not stored
              by us or shared with any third party for this purpose.
            </p>

            <h3 className="font-medium mb-2">Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use Vercel Analytics to understand site traffic. Vercel Analytics does not use cookies and does not
              store personally identifiable information. It collects anonymized data such as page views, referrer, and
              general device type. See{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel's privacy documentation
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>To notify you when AlgoPattern launches or early access becomes available</li>
              <li>To understand what features matter most to people on the waitlist</li>
              <li>To prioritize product decisions based on aggregated feedback</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third Parties</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Notion</p>
                <p className="leading-relaxed">
                  Waitlist submissions are stored in a Notion database. Notion acts as a data processor on our behalf.
                  See{" "}
                  <a
                    href="https://privacycenter.notion.so/policies"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Notion's Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Vercel</p>
                <p className="leading-relaxed">
                  Our site is hosted on Vercel, which provides infrastructure and automatic country detection based on
                  your IP address. This happens at the network level — your IP address is not forwarded to our
                  application code or stored by us. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel's Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain waitlist data for as long as AlgoPattern is operating and may contact you with relevant
              updates such as early access or launch announcements. You can request deletion of your data at any
              time by emailing{" "}
              <a href="mailto:algopattern.dev@gmail.com" className="text-primary hover:underline">
                algopattern.dev@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to access, correct, or delete the personal information we hold about you. To exercise
              any of these rights, email us at{" "}
              <a href="mailto:algopattern.dev@gmail.com" className="text-primary hover:underline">
                algopattern.dev@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This site is not directed at children under 13. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy as the product evolves. If we make material changes, we will update the "Last
              updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about this policy? Email us at{" "}
              <a href="mailto:algopattern.dev@gmail.com" className="text-primary hover:underline">
                algopattern.dev@gmail.com
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
