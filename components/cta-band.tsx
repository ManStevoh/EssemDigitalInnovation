'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function CtaBand() {
  return (
    <section className="border-b border-[#E7EAF0] bg-[#0A0F1C]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6EE7B7]">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Ready to digitize, automate, or show up online?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            Tell us what is manual today. We will reply within one business day with clear next
            steps — from {siteConfig.location}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="h-12 rounded-full bg-white px-7 text-[15px] font-medium text-[#0A0F1C] hover:bg-[#F4F6F8]"
          >
            <Link href="#contact">
              Book a consultation
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Link
            href="#products"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white"
          >
            Explore RelayIQ
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
