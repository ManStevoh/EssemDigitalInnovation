'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { audiences, images } from '@/lib/site';

const cardImages = [images.about, images.cafe, images.audience, images.caseStudy] as const;

export function Industries() {
  return (
    <section id="audiences" className="border-b border-[#E7EAF0] bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Industries we serve
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              Solutions built for your industry
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              We understand your business. That is why we build for real operating environments —
              not slide-deck theory.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1220] underline-offset-4 hover:underline"
          >
            Find your fit <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-xl border border-[#E7EAF0] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cardImages[index % cardImages.length]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 to-transparent" />
                <p className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-[#0A0F1C]">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-[#0B1220]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.description}</p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] underline-offset-4 hover:underline"
                >
                  Learn more <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
