import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { format } from 'date-fns';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name} website and digital services.`,
  path: '/terms',
});

export default function TermsPage() {
  const lastUpdated = format(new Date(siteConfig.legalUpdated.terms), 'd MMMM yyyy');

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs items={[{ name: 'Terms of Service', path: '/terms' }]} />

          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement</h2>
              <p>
                By accessing {siteConfig.url} or engaging {siteConfig.name} (&quot;ESSEM&quot;,
                &quot;we&quot;, &quot;us&quot;) for services, you agree to these Terms of Service. If
                you do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>
                ESSEM provides software development, mobile applications, ICT support, digital
                marketing, and related technology services. Specific deliverables, timelines, and
                fees are defined in separate proposals or contracts agreed with each client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Website use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to disrupt, damage, or gain unauthorized access to our systems</li>
                <li>Copy or redistribute site content without written permission</li>
                <li>Submit false or misleading information through our contact forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual property</h2>
              <p>
                Website content, branding, and materials are owned by ESSEM or used with permission.
                Client project ownership and licensing terms are specified in individual service
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of liability</h2>
              <p>
                Our website is provided &quot;as is.&quot; To the fullest extent permitted by law,
                ESSEM is not liable for indirect or consequential damages arising from use of this
                website. Service-specific liability limits are governed by client contracts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Third-party links</h2>
              <p>
                Our site may link to third-party websites or services. We are not responsible for
                their content, policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes</h2>
              <p>
                We may update these terms from time to time. Continued use of the website after
                changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing law</h2>
              <p>
                These terms are governed by the laws of Kenya. Disputes shall be subject to the
                jurisdiction of Kenyan courts unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.location}
                <br />
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                {' · '}
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="mt-3">
                See also our{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
