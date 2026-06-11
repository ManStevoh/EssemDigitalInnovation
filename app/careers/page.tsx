import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { JobPostingJsonLd } from '@/components/json-ld';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { openRoles, siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = createPageMetadata({
  title: 'Careers — Build With Us',
  description: `Join ${siteConfig.name}. Open roles in software development, mobile apps, digital marketing, and ICT support in Mombasa, Kenya.`,
  path: '/careers',
});

export default function CareersPage() {
  const applyUrl = getWhatsAppUrl(
    `Hello ${siteConfig.shortName}, I would like to apply for a position at your company.`
  );

  return (
    <>
      <JobPostingJsonLd roles={[...openRoles]} />
      <Navigation />
      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs items={[{ name: 'Careers', path: '/careers' }]} />

          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Build with us</h1>
          <p className="text-lg text-foreground/70 mb-4 max-w-2xl leading-relaxed">
            {siteConfig.name} is growing its team in Mombasa. We work on software, mobile apps,
            ICT support, and digital marketing for businesses across Kenya and East Africa.
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <MapPin size={14} className="text-primary" aria-hidden />
            {siteConfig.location}
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Open positions</h2>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-border/60 bg-background p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{role.title}</h3>
                      <p className="text-sm text-primary mb-3">{role.type}</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{role.description}</p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0 border-primary/30 text-primary">
                      <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border/60 bg-muted/30 p-8 sm:p-10">
            <h2 className="text-xl font-semibold mb-3">Don&apos;t see your role?</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Send us your CV and a short note about what you do best. We review general applications
              and reach out when there is a fit.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={applyUrl} target="_blank" rel="noopener noreferrer">
                Send a general application
                <ArrowRight size={16} />
              </a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
