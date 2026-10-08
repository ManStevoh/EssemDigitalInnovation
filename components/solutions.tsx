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
    <section id="solutions" className="border-y border-[#DDE3EA] bg-[#F4F6F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">
          What we do
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Everything your business needs to grow digitally
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#475569]">
              From automations to brand presence — four focused offers, one team. No inflated
              agency menu.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
          >
            Get a free quote <ArrowUpRight className="size-4" />
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
                className="group rounded-md border border-[#DDE3EA] border-t-2 border-t-[#10B981] bg-white p-6 transition-colors hover:border-[#2563EB]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-[#2563EB] text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                  <Link href={route} className="transition-colors hover:text-[#2563EB]">
                    {solution.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{solution.description}</p>
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
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
                  >
                    Learn more <ArrowUpRight className="size-4" />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#475569] underline-offset-4 hover:text-[#2563EB] hover:underline"
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
