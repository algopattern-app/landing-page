import { Footer } from "@/components/footer"

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-2">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-12">Last updated: May 31, 2026</p>

        <div className="space-y-10 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              AlgoPattern ("we", "us", or "our") operates the website at algopattern.dev and the AlgoPattern mobile
              application. By accessing or using our site or app, you agree to be bound by these Terms and Conditions.
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              AlgoPattern is a mobile application that teaches LeetCode problem-solving patterns to help users prepare
              for software engineering technical interviews. The service is currently in free beta. Features, content,
              and availability may change as the product develops.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 13 years old to use AlgoPattern. By using our service, you represent and warrant
              that you meet this age requirement. If you are under 13, please do not use our site or application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Use of the Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The service is provided free of charge during the beta period. We reserve the right to modify, suspend,
              or discontinue any part of the service at any time, with or without notice. We are not liable to you or
              any third party for any such modification, suspension, or discontinuation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the service only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content available through AlgoPattern — including lessons, problem patterns, explanations, graphics,
              and branding — is the property of AlgoPattern and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or create derivative works from our content without our prior written
              permission. Personal, non-commercial use for interview preparation is permitted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Attempt to gain unauthorized access to any part of the service or its infrastructure</li>
              <li>Scrape, crawl, or systematically extract content from the site or app</li>
              <li>Use the service in any way that violates applicable local, national, or international law</li>
              <li>Interfere with or disrupt the integrity or performance of the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided "as is" and "as available" without warranties of any kind, either express or
              implied. We do not warrant that the content is error-free, complete, or current, or that the service
              will be uninterrupted or secure. Your use of the service is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, AlgoPattern shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or related to your use of — or inability to
              use — the service, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the United States. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of courts located in the United
              States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. Changes take effect when posted, as indicated by the
              "Last updated" date above. Your continued use of the service after changes are posted constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about these Terms? Email us at{" "}
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
