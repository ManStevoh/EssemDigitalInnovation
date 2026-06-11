'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const interval = setInterval(() => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / (duration * 1000), 1);
              const currentCount = Math.floor(progress * end);
              setCount(currentCount);

              if (progress === 1) {
                clearInterval(interval);
              }
            }, 16);

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}
