'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const pains = [
  {
    title: 'Manual work eating 20+ hours every week',
    body: 'Orders in chats, records in notebooks, follow-ups from memory. That is over 1,000 hours a year your team is not growing.',
  },
  {
    title: 'Off-the-shelf tools that do not fit how you operate',
    body: 'You pay for features you never use and still miss the ones you need for M-Pesa, WhatsApp, and walk-in customers.',
  },
  {
    title: 'A weak online presence that does not convert',
    body: 'Customers check you online first. An unclear site or silent social page turns interest into doubt before you ever speak.',
  },
  {
    title: 'Scattered systems and double work',
    body: 'Paper, spreadsheets, and disconnected apps mean inconsistent service — and growth costs more effort than it should.',
  },
];

export function PainPoints() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Sound familiar?
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
            Your business deserves better than manual chaos
          </h2>
          <Link
            href="#solutions"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1220] underline-offset-4 hover:underline"
          >
            See how we fix it <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {pains.map((pain, i) => (
            <article
              key={pain.title}
              className="rounded-md border border-[#E7EAF0] bg-[#F7F8FA] p-7 transition-colors hover:border-[#CBD5E1] hover:bg-white"
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#94A3B8]">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-[#0B1220]">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{pain.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#64748B]">
          We fix all of these — with automations, digitization, and online presence built for
          real operations.
        </p>
      </div>
    </section>
  );
}
