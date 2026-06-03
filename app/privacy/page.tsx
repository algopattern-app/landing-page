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
        <p className="text-muted-foreground mb-12">Last updated: June 3, 2026</p>

        <div className="space-y-10 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              AlgoPattern ("we", "us", or "our") operates the website at algopattern.dev and the AlgoPattern mobile
              app. This policy explains what information we collect when you visit our site, sign up for our beta, or use
              the app, how we use it, and your rights regarding that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>

            <h3 className="font-medium mb-2">Beta signup form</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you sign up for our beta, we collect:
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

            <h3 className="font-medium mb-2">App account</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can use the app anonymously without creating an account. If you choose to create an account, we
              collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 ml-2">
              <li>Email address and display name</li>
              <li>Password, stored as a cryptographic hash — never in plain text</li>
              <li>
                If you sign in with Apple: Apple provides your name and email (or an Apple private relay address)
                on first sign-in; we store what Apple shares
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When creating an email/password account, a one-time verification code is sent to confirm your address.
              This email is delivered via Resend on our behalf. We do not store the code itself.
            </p>

            <h3 className="font-medium mb-2">App activity and progress</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When you use the app, we store activity and progress data tied to your account (or anonymous session).
              This includes responses you provide during onboarding, your interactions with quiz content (such as
              answers and time spent), and your progress over time (such as streaks and scores). The specific data
              stored may evolve as the app develops.
            </p>

            <h3 className="font-medium mb-2">App analytics and session recording</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use PostHog for analytics, session recording, and crash reporting in the app. PostHog collects:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 ml-2">
              <li>App lifecycle events (opens, backgrounds, resumes)</li>
              <li>Screen views — every screen transition is automatically recorded</li>
              <li>Custom usage events, such as completing onboarding</li>
              <li>
                Session recordings — PostHog records visual sessions of app use, including screen content and
                interactions. Input fields are masked, but other on-screen content such as quiz text may appear in
                recordings. Sessions are reviewed for product improvement and bug investigation.
              </li>
              <li>Crash reports, including stack traces and device context when the app encounters an error</li>
            </ul>

            <h3 className="font-medium mb-2">Website analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
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
            <p className="text-muted-foreground leading-relaxed mb-3">
              We also use PostHog on the landing page and signup flow to understand how visitors interact with the
              site. PostHog collects:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 ml-2">
              <li>Page view and navigation events</li>
              <li>Button and CTA click events (e.g., when the signup modal is opened)</li>
              <li>
                Signup form submission events
              </li>
              <li>Errors and exceptions encountered in the browser</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PostHog uses a cookie or local storage to assign you a persistent anonymous identifier before signup.
              You can opt out of PostHog tracking by enabling "Do Not Track" in your browser.
            </p>

            <h3 className="font-medium mb-2">In-app feedback</h3>
            <p className="text-muted-foreground leading-relaxed">
              The app includes a feedback option that pre-populates an email with your device model, OS version, and
              app version. This email is sent directly from your email client to algopattern.dev@gmail.com. We
              receive and store whatever you include in that message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>To notify you when AlgoPattern launches or early access becomes available</li>
              <li>To understand what features matter most to people on the waitlist</li>
              <li>To prioritize product decisions based on aggregated feedback</li>
              <li>To provide and improve the app experience</li>
              <li>To track and display your progress, streaks, and scores</li>
              <li>To personalize quiz content based on your activity</li>
              <li>To understand feature usage and onboarding through aggregated analytics</li>
              <li>To review session recordings for UX improvements and bug investigation</li>
              <li>To respond to feedback you send us directly</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell or rent your personal information to anyone, for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All third parties listed here act as data processors on our behalf. They receive only the data
              necessary to provide their service and are not permitted to use it for their own purposes.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Notion</p>
                <p className="leading-relaxed">
                  Beta signup submissions are stored in a Notion database. See{" "}
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
                <p className="font-medium text-foreground mb-1">Supabase</p>
                <p className="leading-relaxed">
                  App account data and activity are stored in Supabase, a managed database and authentication
                  service. See{" "}
                  <a
                    href="https://supabase.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supabase's Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">PostHog</p>
                <p className="leading-relaxed">
                  We use PostHog for analytics on both the website and the app. On the website, PostHog receives
                  page interaction events, signup form metadata, and — after a successful signup — your email and
                  name for identity linking. In the app, PostHog receives screen views, lifecycle events, custom
                  usage events, session recordings, and crash data. See{" "}
                  <a
                    href="https://posthog.com/privacy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PostHog's Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Apple Sign-In</p>
                <p className="leading-relaxed">
                  When you sign in with Apple, Apple authenticates you and shares your name and email (or a private
                  relay address) with us. See Apple's privacy policy for how Apple handles this authentication flow.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Resend</p>
                <p className="leading-relaxed">
                  Transactional emails such as account verification codes are delivered via Resend. Resend receives
                  the recipient email address in order to deliver the message. See{" "}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend's Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Vercel</p>
                <p className="leading-relaxed">
                  Our site is hosted on Vercel, which provides infrastructure and automatic country detection based
                  on your IP address. This happens at the network level — your IP address is not forwarded to our
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
            <p className="text-muted-foreground leading-relaxed mb-3">
              We retain waitlist data for as long as AlgoPattern is operating and may contact you with relevant
              updates such as early access or launch announcements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              App account data and activity history are retained while your account is active. You can request
              deletion of your data at any time by emailing{" "}
              <a href="mailto:algopattern.dev@gmail.com" className="text-primary hover:underline">
                algopattern.dev@gmail.com
              </a>
              . Account deletion removes all associated data from our systems. Anonymous usage data held by PostHog
              is subject to PostHog's own retention settings.
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
              This site and app are not directed at children under 13. We do not knowingly collect personal
              information from children.
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
