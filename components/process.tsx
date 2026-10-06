'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    n: '01',
    title: 'Tell us your challenge',
    body: 'Reach out via WhatsApp or our contact form. We listen, ask questions, and understand your needs.',
  },
  {
    n: '02',
    title: 'We propose a solution + quote',
    body: 'You get a clear proposal with scope, timeline, and transparent pricing in KES.',
  },
  {
    n: '03',
    title: 'We build and iterate with you',
    body: 'Regular updates, demos, and feedback loops. You stay in control throughout.',
  },
  {
    n: '04',
    title: 'Launch + ongoing support',
    body: 'We deploy, train your team, and provide maintenance and support after go-live.',
  },
];

export function Process() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Our process
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
            From first conversation to launch — simple and transparent
          </h2>
          <Button
            asChild
            className="h-11 w-fit rounded-full bg-[#0A0F1C] px-6 text-sm font-medium text-white hover:bg-black"
          >
            <Link href="#contact">
              Start your project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.n}
              className="rounded-xl border border-[#E7EAF0] bg-[#F7F8FA] p-6 transition-colors hover:border-[#CBD5E1] hover:bg-white"
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#2563EB]">{step.n}</p>
              <h3 className="mt-3 text-base font-semibold text-[#0B1220]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
