'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-animations';
import { featuredCaseStudy, images } from '@/lib/site';

export function CaseStudy() {
  const study = featuredCaseStudy;

  return (
    <section id="case-study" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Case study</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Results that speak for themselves</h2>
            <p className="text-lg text-foreground/70">
              Real outcomes from a recent engagement — see how we help organizations modernize operations.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ScrollFadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50">
              <Image
                src={images.caseStudy}
                alt="Logistics operations at a shipping port"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {study.industry}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {study.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">{study.title}</h3>
              <p className="text-foreground/70">{study.summary}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">The challenge</h4>
                  <p className="text-sm text-foreground/70">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our approach</h4>
                  <p className="text-sm text-foreground/70">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {study.results.map((result) => (
                  <div key={result.label} className="rounded-xl border border-border/50 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{result.metric}</p>
                    <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                  </div>
                ))}
              </div>

              <blockquote className="rounded-xl border border-border/50 bg-muted/30 p-6">
                <Quote className="text-primary mb-3" size={20} aria-hidden />
                <p className="text-foreground/80 italic mb-3">&ldquo;{study.testimonial.quote}&rdquo;</p>
                <footer className="text-sm text-muted-foreground">
                  — {study.testimonial.author}, {study.testimonial.company}
                </footer>
              </blockquote>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/case-studies">
                  View all case studies
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
