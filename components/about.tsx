'use client';

import Image from 'next/image';
import { Eye, Target } from 'lucide-react';
import { ScrollFadeIn, ScrollStaggerContainer, StaggerChild } from '@/components/scroll-animations';
import { focusAreas, images } from '@/lib/site';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <ScrollFadeIn>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
              <Image
                src={images.about}
                alt="ESSEM Digital Innovations team consulting with a client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">About us</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              A technology partner for businesses at every stage
            </h2>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              ESSEM Digital Innovations is based in Mombasa and works with established companies,
              startups, and security firms across Kenya and East Africa. We deliver software,
              mobile apps, ICT support, and digital marketing with the same standard of
              professionalism — whether you are going online for the first time or modernizing
              enterprise operations.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our work is grounded in clear communication, defined deliverables, and systems
              built to function in real operating environments — not just in presentations.
            </p>
          </ScrollFadeIn>
        </div>

        <ScrollStaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <StaggerChild>
              <div className="rounded-xl border border-border/60 bg-background p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="text-primary" size={20} aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Our vision</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  An East Africa where every business — from a first-time startup to a national
                  security provider — has access to dependable technology that supports growth
                  and professional operations.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="rounded-xl border border-border/60 bg-background p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Target className="text-secondary" size={20} aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">Our mission</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Deliver well-engineered digital solutions and practical ICT support that help
                  clients operate more efficiently, reach customers online, and build lasting
                  competitive advantage.
                </p>
              </div>
            </StaggerChild>
          </div>
        </ScrollStaggerContainer>

        <ScrollFadeIn>
          <div className="rounded-xl border border-border/60 bg-background p-8 sm:p-10">
            <h3 className="text-2xl font-semibold mb-8 tracking-tight">Who we work with</h3>
            <div className="space-y-6">
              {focusAreas.map((item) => (
                <div
                  key={item.area}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-8 pb-6 last:pb-0 border-b border-border/30 last:border-0"
                >
                  <div className="text-foreground font-medium sm:min-w-48 sm:max-w-48">{item.area}</div>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
