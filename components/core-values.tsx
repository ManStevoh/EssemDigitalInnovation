'use client';

import {
  Accessibility,
  Award,
  Leaf,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { ScrollFadeIn, ScrollStaggerContainer, StaggerChild } from '@/components/scroll-animations';
import { coreValues, type CoreValueIcon } from '@/lib/site';
import { brandHoverClasses } from '@/lib/brand-guide';

const iconMap: Record<CoreValueIcon, LucideIcon> = {
  innovation: Lightbulb,
  impact: TrendingUp,
  integrity: ShieldCheck,
  collaboration: Users,
  sustainability: Leaf,
  accessibility: Accessibility,
  excellence: Award,
};

export function CoreValues() {
  return (
    <section id="values" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-[0.2em]">
              Core values
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              What guides everything we build
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our values shape how we design technology, work with clients, and contribute to the
              communities and industries we serve.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollStaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <StaggerChild key={value.title}>
                  <article className="value-card group h-full">
                    <div className="value-card-icon">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className={`mb-2 text-lg font-semibold tracking-tight text-foreground ${brandHoverClasses.cardTitle}`}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:text-foreground/85">
                      {value.description}
                    </p>
                  </article>
                </StaggerChild>
              );
            })}
          </div>
        </ScrollStaggerContainer>
      </div>
    </section>
  );
}
