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
        <p className="text-sm font-bold text-[#2563EB]">
          Sound familiar?
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
            Your business deserves better than manual chaos
          </h2>
          <Link
            href="#solutions"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
          >
            See how we do it <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {pains.map((pain) => (
            <article
              key={pain.title}
              className="rounded-md border border-[#DDE3EA] border-l-2 border-l-[#2563EB] bg-[#F4F6F8] p-6 transition-colors hover:bg-white"
            >
              <h3 className="text-lg font-bold text-[#0F172A]">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#475569]">{pain.body}</p>
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
