'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { images } from '@/lib/site';

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-[#DDE3EA] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div>
            <h1 className="max-w-[13ch] text-4xl font-bold leading-[1.08] text-[#0F172A] sm:text-5xl lg:text-6xl">
              Infrastructure for modern business.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">
              We help companies digitize operations, automate work, and present themselves
              online with the clarity of a serious brand — not another generic agency site.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                Get a free quote
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[#CBD5E1] px-6 py-3 text-[15px] font-semibold text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                See our work
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t-2 border-[#10B981] pt-5 sm:gap-6">
              {[
                ['Automations', 'Workflows that remove friction'],
                ['Presence', 'Sites and apps with intent'],
                ['Products', 'Systems like RelayIQ'],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-sm font-bold text-[#0F172A]">{dt}</dt>
                  <dd className="mt-1 text-xs leading-5 text-[#64748B]">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-md border border-[#0F172A]">
              <div className="relative aspect-[4/3.4] sm:aspect-[4/3]">
                <Image
                  src={images.hero}
                  alt="Operator running a modern business with digital tools"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>

            <div className="mt-4 max-w-md border-l-4 border-[#10B981] pl-4">
              <p className="text-sm font-bold text-[#0F172A]">
                Building a connected world
              </p>
              <p className="mt-1 text-sm leading-6 text-[#475569]">
                Mombasa-based. Built for East African businesses that want dependable
                digital systems — not theatre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
