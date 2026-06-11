'use client';

import Link from 'next/link';
import {
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
    <section id="solutions" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Solutions</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Technology and growth services under one roof
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you are launching a startup, scaling an enterprise, or running a security
              operation, we deliver the software, mobile apps, ICT support, and digital marketing
              needed to operate professionally and compete online.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollStaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon];
              return (
                <StaggerChild key={solution.title}>
                  <article className="rounded-xl border border-border/60 bg-background p-7 h-full flex flex-col">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 mb-5">
                      <Icon className="text-primary" size={22} aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 tracking-tight">{solution.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-grow">
                      {solution.description}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-fit border-border text-foreground hover:bg-muted"
                    >
                      <Link href="#contact">Request a consultation</Link>
                    </Button>
                  </article>
                </StaggerChild>
              );
            })}
          </div>
        </ScrollStaggerContainer>

        <ScrollFadeIn>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-8 sm:p-10 md:flex md:items-center md:justify-between md:gap-10">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 tracking-tight">
                Tell us what you are trying to achieve
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Share your goals and we will recommend the right combination of development, ICT
                support, or marketing services — with a clear scope and timeline.
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
              <Link href="#contact">Book a consultation</Link>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
