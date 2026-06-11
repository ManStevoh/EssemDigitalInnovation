'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Megaphone,
  Rocket,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn, ScrollStaggerContainer, StaggerChild } from '@/components/scroll-animations';
import { solutions, type SolutionIcon } from '@/lib/site';
import { brandHoverClasses } from '@/lib/brand-guide';

const iconMap: Record<SolutionIcon, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  cpu: Cpu,
  rocket: Rocket,
  layers: Layers,
  megaphone: Megaphone,
  cloud: Cloud,
  shield: Shield,
};

export function Solutions() {
  return (
    <section id="solutions" className="solutions-section relative overflow-hidden py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-[0.2em]">Solutions</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-foreground">
              Technology and growth services under one roof
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you represent a school, research institution, government agency, NGO, startup,
              or enterprise, we deliver the software, mobile apps, ICT support, and digital marketing
              needed to operate professionally and serve your community.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollStaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {solutions.map((solution, index) => {
              const Icon = iconMap[solution.icon];
              return (
                <StaggerChild key={solution.title}>
                  <article className="solution-card group">
                    <div className="solution-card-glow" aria-hidden />
                    <span className="solution-card-number" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="solution-card-icon">
                      <Icon size={26} strokeWidth={1.75} aria-hidden />
                    </div>

                    <h3 className={`relative z-10 text-xl font-semibold mb-3 tracking-tight text-foreground ${brandHoverClasses.cardTitle}`}>
                      {solution.title}
                    </h3>
                    <p className="relative z-10 text-sm leading-relaxed text-foreground/65 mb-6">
                      {solution.description}
                    </p>

                    <ul className="solution-card-features">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground/85">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 ring-1 ring-secondary/20">
                            <Check className="text-secondary" size={11} strokeWidth={3} aria-hidden />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="solution-card-footer">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="group/btn h-auto w-full justify-between px-0 text-primary hover:bg-transparent hover:text-primary"
                      >
                        <Link href="/#contact" className="inline-flex items-center gap-2">
                          <span className="font-semibold">Request a consultation</span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover/btn:bg-primary group-hover/btn:text-primary-foreground">
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                              aria-hidden
                            />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </article>
                </StaggerChild>
              );
            })}
          </div>
        </ScrollStaggerContainer>

        <ScrollFadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-background to-secondary/[0.07] p-8 sm:p-10 shadow-[0_8px_32px_rgba(37,99,235,0.08)] md:flex md:items-center md:justify-between md:gap-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative mb-6 md:mb-0 md:max-w-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 tracking-tight">
                Tell us what you are trying to achieve
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Share your goals and we will recommend the right combination of development, ICT
                support, or marketing services — with a clear scope and timeline.
              </p>
            </div>
            <Button
              asChild
              className={`relative shrink-0 bg-primary text-primary-foreground shadow-lg shadow-primary/25 ${brandHoverClasses.button}`}
            >
              <Link href="/#contact">Book a consultation</Link>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
