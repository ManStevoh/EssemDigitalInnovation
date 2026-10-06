'use client';

import Link from 'next/link';
import { ArrowUpRight, Check, Globe2, Laptop, Smartphone, Workflow } from 'lucide-react';
import { solutions } from '@/lib/site';
import { servicePages } from '@/lib/services-content';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const icons = {
  workflow: Workflow,
  laptop: Laptop,
  globe: Globe2,
  smartphone: Smartphone,
} as const;

const serviceRoutes = [
  '/services/automations',
  '/services/digitization',
  '/services/online-presence',
  '/services/websites-and-apps',
] as const;

const serviceKeys = ['automations', 'digitization', 'online-presence', 'websites-and-apps'] as const;

export function Solutions() {
  return (
    <section id="solutions" className="border-y border-[#E7EAF0] bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          What we do
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              Everything your business needs to grow digitally
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              From automations to brand presence — four focused offers, one team. No inflated
              agency menu.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1220] underline-offset-4 hover:underline"
          >
            View all services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = icons[solution.icon as keyof typeof icons] ?? Workflow;
            const route = serviceRoutes[index] ?? '/#contact';
            const key = serviceKeys[index];
            const waHref = key ? getWhatsAppUrl(servicePages[key].whatsappPrefill) : '#contact';
            return (
              <article
                key={solution.title}
                className="group rounded-xl border border-[#E7EAF0] bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-[#0B1220] text-white transition-colors group-hover:bg-[#2563EB]">
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
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href={route}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] underline-offset-4 hover:underline"
                  >
                    Learn more <ArrowUpRight className="size-4" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1220] underline-offset-4 hover:underline"
                  >
                    WhatsApp <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
