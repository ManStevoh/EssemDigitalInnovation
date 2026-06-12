import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { format } from 'date-fns';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect your information.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  const lastUpdated = format(new Date(siteConfig.legalUpdated.privacy), 'd MMMM yyyy');

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 prose prose-slate max-w-none">
          <SeoBreadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy' }]} />

          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10 not-prose">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-foreground/80 leading-relaxed not-prose">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Who we are</h2>
              <p>
                {siteConfig.name} ({siteConfig.location}) provides software development, ICT
                support, and digital services. This policy explains how we handle information when
                you visit our website or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information we collect</h2>
              <p className="mb-3">When you use our contact form, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name, email, project type, budget range, timeline, and message</li>
                <li>Whether you opted in to marketing communications (optional checkbox)</li>
                <li>Basic technical data such as browser type (via standard server logs)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cookies and analytics</h2>
              <p className="mb-3">
                Our website uses cookies — small text files stored on your device — to provide core
                functionality and, with your consent, to understand how the site is used.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>
                  <strong className="text-foreground">Essential cookies</strong> — required for basic
                  operation, including remembering your cookie preferences.
                </li>
                <li>
                  <strong className="text-foreground">Analytics cookies</strong> — optional. If you
                  accept them, we use Vercel Analytics and Google Analytics (GA4) to collect
                  anonymized usage data (such as pages visited, traffic sources, and general usage
                  patterns). We do not use advertising or cross-site tracking cookies such as the
                  Meta (Facebook) Pixel.
                </li>
              </ul>
              <p>
                You can accept, reject, or change your cookie choices at any time using the cookie
                banner or the &ldquo;Cookie settings&rdquo; link in the site footer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Newsletter & marketing</h2>
              <p className="mb-3">
                If you subscribe to our newsletter, we collect your email address and record your
                explicit consent to receive marketing communications from us, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Newsletters and industry insights</li>
                <li>Service updates and announcements</li>
                <li>Promotional offers related to our digital services</li>
              </ul>
              <p className="mb-3">
                We store the date and source of your consent. Marketing emails are sent through our
                email platform (such as Brevo or Mailchimp). We do not sell your email address to
                third parties.
              </p>
              <p>
                You can unsubscribe at any time using the link in each email or by contacting us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cookie consent vs marketing consent</h2>
              <p>
                Accepting analytics cookies on our cookie banner allows us to understand how visitors
                use the website. It does <strong className="text-foreground">not</strong> automatically
                add you to marketing lists. Marketing emails are only sent if you separately opt in
                via the newsletter form or another explicit signup.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How we use your information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send newsletters and marketing communications you have opted into</li>
                <li>To improve our website and communications</li>
                <li>To comply with legal obligations where applicable</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data retention</h2>
              <p>
                We retain contact form submissions only as long as needed to respond to your inquiry
                and maintain a reasonable business record, unless a longer period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data by
                contacting us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.location}
                <br />
                {siteConfig.email} · {siteConfig.phone}
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
