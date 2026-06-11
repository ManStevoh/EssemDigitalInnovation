'use client';

import { useEffect, useRef, ReactNode } from 'react';

export function ScrollFadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('[data-stagger-child]');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0');
                child.classList.remove('opacity-0', 'translate-y-4');
              }, index * (delay || 100));
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

export function StaggerChild({ children }: { children: ReactNode }) {
  return (
    <div
      data-stagger-child
      className="opacity-0 translate-y-4 transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
}
