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
        <p className="text-muted-foreground mb-12">Last updated: August 16, 2026</p>

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
              for software engineering technical interviews. The app offers both free features and paid features,
              described under "Purchases and Subscriptions" below. Features, content, and availability may change as
              the product develops.
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
              We may modify, suspend, or discontinue parts of the service as the product develops. If we discontinue a
              paid feature while you have paid access to it, we will give reasonable advance notice where we are able
              to. Except in that case, we are not liable to you or any third party for any modification, suspension, or
              discontinuation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the service only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Purchases and Subscriptions</h2>

            <h3 className="font-medium mb-2">Free and paid access</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AlgoPattern offers free features and paid features. Paid access is available both as an auto-renewing
              subscription and as a one-time purchase. What each includes, and the current price, are shown in the app
              at the point of purchase.
            </p>

            <h3 className="font-medium mb-2">How purchases are processed</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All purchases are made through the Apple App Store or Google Play using their in-app purchase systems.
              Apple or Google — not AlgoPattern — is the seller of record, processes your payment, and collects any
              applicable taxes. We never receive or store your payment card details. Your purchase is also governed by
              the terms of the store you bought it from.
            </p>

            <h3 className="font-medium mb-2">Auto-renewing subscriptions</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Subscriptions renew automatically at the end of each billing period at the then-current price, charged to
              your Apple or Google account, unless you cancel at least 24 hours before the period ends. You can view,
              manage, and cancel your subscription in your Apple or Google account settings — cancellation is handled
              there, not inside AlgoPattern. Cancelling stops future renewals; your access continues through the end of
              the period you have already paid for.
            </p>

            <h3 className="font-medium mb-2">One-time purchases</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A one-time purchase grants access to the features described at the point of purchase for as long as we
              operate the service. It does not renew, and it is not a guarantee that any specific feature will exist
              indefinitely.
            </p>

            <h3 className="font-medium mb-2">Price changes</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may change our prices. For subscriptions, a change takes effect on your next renewal, and Apple or
              Google will notify you in advance and, where required, ask you to confirm before it applies. A price
              change never affects a billing period you have already paid for.
            </p>

            <h3 className="font-medium mb-2">Refunds and withdrawal rights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Because Apple and Google process all purchases, refunds are handled by them under their own policies —
              we are not able to issue a refund directly. Refund requests go through Apple Support or Google Play
              support. If you are a consumer in the EU or UK with a statutory right to withdraw from a digital
              purchase, that right applies to your contract with the store you purchased from and is exercised through
              their process. If you have trouble reaching a resolution, contact us and we will help where we can.
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
            <p className="text-muted-foreground leading-relaxed mt-4">
              To the fullest extent permitted by law, our total liability for all claims relating to the service will
              not exceed the greater of the amount you paid for AlgoPattern in the twelve months before the claim
              arose, or USD 50. Some jurisdictions do not allow the exclusion or limitation of certain damages, so
              parts of this section may not apply to you, and nothing here limits liability that cannot be limited by
              law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Account Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may suspend or terminate your account if you breach these Terms or use the service in a way that
              harms other users or the service itself. You may stop using AlgoPattern and request deletion of your
              account at any time by emailing us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Deleting your AlgoPattern account does not by itself cancel a subscription billed through Apple or
              Google. You need to cancel that separately in your store account settings, or it will keep renewing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Province of Alberta and the
              federal laws of Canada applicable therein. Any disputes arising under these Terms may be brought in the
              courts of Alberta.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you are a consumer, nothing in this section deprives you of the protection of the mandatory consumer
              protection laws of the province or country where you live, or of any right you have under those laws to
              bring proceedings there.
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
