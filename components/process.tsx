'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
        <p className="text-sm font-bold text-[#2563EB]">
          How we work
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
            A clear path from conversation to live systems.
          </h2>
          <p className="max-w-sm text-[15px] leading-7 text-[#475569]">
            No mystery process. Four steps we actually use with every engagement.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.n}
              className="rounded-md border border-[#DDE3EA] border-l-2 border-l-[#2563EB] bg-[#F4F6F8] p-5 transition-colors hover:bg-white"
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#2563EB]">{step.n}</p>
              <h3 className="mt-3 text-base font-bold text-[#0F172A]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Start your project
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
