'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/animated-counter';
import { heroStats, images, siteConfig } from '@/lib/site';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles = Array.from({ length: 16 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.25 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden pt-16 border-b border-border/40">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary shrink-0" aria-hidden />
              {siteConfig.location} — serving businesses and startups across East Africa
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight mb-6 leading-[1.12] text-foreground">
              Software, mobile apps, and digital growth for{' '}
              <span className="text-primary">ambitious organizations</span>
            </h1>

            <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
              We help businesses and startups build reliable technology — custom software, mobile
              applications, ICT infrastructure, digital marketing, and specialized systems for
              security and field-based operations.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  Discuss your project
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border">
                <Link href="#solutions">View our services</Link>
              </Button>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/40">
              {heroStats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums leading-none">
                    <span className="inline-flex items-baseline whitespace-nowrap">
                      <AnimatedCounter end={stat.value} />
                      {stat.suffix ? (
                        <span className="text-primary">{stat.suffix}</span>
                      ) : null}
                    </span>
                  </dt>
                  <dd className="text-xs sm:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
            <Image
              src={images.hero}
              alt="ESSEM team delivering technology solutions for East African businesses"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
