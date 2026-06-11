'use client';

import { ScrollFadeIn, ScrollStaggerContainer, StaggerChild } from '@/components/scroll-animations';
import { industries } from '@/lib/site';

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Industries</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Sector experience that informs better delivery
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We adapt our approach to the regulations, workflows, and commercial realities of
              each sector — including startups entering the market and security firms managing
              distributed field teams.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollStaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <StaggerChild key={industry.title}>
                <article className="rounded-xl border border-border/60 bg-background p-6 h-full">
                  <h3 className="text-base font-semibold mb-2 tracking-tight">{industry.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{industry.description}</p>
                </article>
              </StaggerChild>
            ))}
          </div>
        </ScrollStaggerContainer>
      </div>
    </section>
  );
}
