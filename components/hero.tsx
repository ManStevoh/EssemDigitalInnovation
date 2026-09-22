'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, siteConfig } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[1.25rem] border border-[#E8ECF2] bg-[#F4F6F8]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:col-span-6 lg:px-12 lg:py-16">
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#2563EB]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
                    ESSEM Digital Innovations
                  </p>
                </div>

                <h1 className="max-w-[12ch] text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0A0F1C] sm:text-[3.25rem] lg:text-[3.85rem]">
                  Infrastructure for modern business.
                </h1>

                <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-[#526072]">
                  We help companies digitize operations, automate work, and present themselves online
                  with the clarity of a serious brand — not another generic agency site.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#0A0F1C] px-7 text-[15px] font-medium text-white hover:bg-black"
                  >
                    <Link href="#contact">
                      Book a consultation
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Link
                    href="#products"
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#0A0F1C]"
                  >
                    See RelayIQ
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-[#E0E5EC] pt-8">
                {[
                  ['Automations', 'Workflows that remove friction'],
                  ['Presence', 'Sites and apps with intent'],
                  ['Products', 'Systems like RelayIQ'],
                ].map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className="text-sm font-semibold text-[#0A0F1C]">{dt}</dt>
                    <dd className="mt-1 text-xs leading-5 text-[#6B7280]">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative min-h-[340px] lg:col-span-6 lg:min-h-[640px]">
              <Image
                src={images.hero}
                alt="Operator running a modern business with digital tools"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-[#0A0F1C]/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">
                    {siteConfig.brandTagline}
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/90">
                    Mombasa-based. Built for East African businesses that want dependable digital
                    systems — not theatre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
