'use client';

import Link from 'next/link';
import { ArrowUpRight, Check, Globe2, Laptop, Smartphone, Workflow } from 'lucide-react';
import { solutions } from '@/lib/site';

const icons = {
  workflow: Workflow,
  laptop: Laptop,
  globe: Globe2,
  smartphone: Smartphone,
} as const;

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-[#E7EAF0] bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              What we deliver
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              Four focused offers. No inflated agency menu — just the work that moves a business
              from manual to modern.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1220] underline-offset-4 hover:underline"
          >
            Discuss a project <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = icons[solution.icon as keyof typeof icons] ?? Workflow;
            return (
              <article
                key={solution.title}
                className="group rounded-md border border-[#E7EAF0] bg-white p-7 transition-colors hover:border-[#CBD5E1]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-[#0B1220] text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium tabular-nums text-[#94A3B8]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#0B1220]">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{solution.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[#E7EAF0] pt-5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[#334155]">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#10B981]" strokeWidth={2.25} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
