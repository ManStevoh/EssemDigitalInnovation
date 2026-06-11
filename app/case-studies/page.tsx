import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { caseStudies, images } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { brandHoverClasses } from '@/lib/brand-guide';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'See how ESSEM Digital Innovations helps schools, government agencies, NGOs, and businesses across East Africa modernize with custom software and digital solutions.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs items={[{ name: 'Case Studies', path: '/case-studies' }]} />

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Case studies</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-16">
            Real projects, measurable outcomes. Explore how we partner with organizations across East Africa.
          </p>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start rounded-2xl border border-border/50 p-8 sm:p-10"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={images.caseStudy}
                    alt={`Case study: ${study.title} for ${study.client}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {study.industry}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {study.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold">{study.title}</h2>
                  <p className="text-foreground/70">{study.summary}</p>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-1">Challenge</h3>
                      <p className="text-foreground/70">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Solution</h3>
                      <p className="text-foreground/70">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {study.results.map((result) => (
                      <div key={result.label} className="rounded-lg border border-border/50 p-3 text-center">
                        <p className="text-xl font-bold text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/80">
                    &ldquo;{study.testimonial.quote}&rdquo;
                    <footer className="text-sm text-muted-foreground not-italic mt-2">
                      — {study.testimonial.author}, {study.testimonial.company}
                    </footer>
                  </blockquote>

                  <Link
                    href="/#contact"
                    className={`inline-flex items-center gap-2 text-primary font-medium ${brandHoverClasses.link}`}
                  >
                    Start a similar project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border/50 bg-primary/5 p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold mb-3">Have a project in mind?</h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              We&apos;re always looking for meaningful partnerships. Tell us about your challenge.
            </p>
            <Link
              href="/#contact"
              className={`inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ${brandHoverClasses.button}`}
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
