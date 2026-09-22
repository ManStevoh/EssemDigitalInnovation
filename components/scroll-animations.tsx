'use client';

import { useEffect, useRef, ReactNode } from 'react';

export function ScrollFadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      element.classList.add('opacity-100', 'translate-y-0');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(element);
    // Failsafe: never leave content invisible
    const timer = window.setTimeout(() => {
      element.classList.add('opacity-100', 'translate-y-0');
      element.classList.remove('opacity-0', 'translate-y-4');
    }, 1200);

    return () => {
      observer.unobserve(element);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="translate-y-0 opacity-100 transition-all duration-700 ease-out motion-safe:opacity-0 motion-safe:translate-y-4"
    >
      {children}
    </div>
  );
}

export function ScrollStaggerContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => {
      const kids = element.querySelectorAll('[data-stagger-child]');
      kids.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('opacity-100', 'translate-y-0');
          child.classList.remove('opacity-0', 'translate-y-4');
        }, index * (delay || 80));
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
    const timer = window.setTimeout(reveal, 1200);
    return () => {
      observer.unobserve(element);
      window.clearTimeout(timer);
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

export function StaggerChild({ children }: { children: ReactNode }) {
  return (
    <div
      data-stagger-child
      className="h-full translate-y-0 opacity-100 transition-all duration-500 ease-out motion-safe:opacity-0 motion-safe:translate-y-4"
    >
      {children}
    </div>
  );
}
