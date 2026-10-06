'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, siteConfig } from '@/lib/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function Hero() {
  const whatsappHref = getWhatsAppUrl('Hello ESSEM! I found your website and would like to discuss a project.');

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E7EAF0] bg-[#F7F8FA] px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-[#10B981]" />
            <p className="text-xs font-medium text-[#475569]">
              {siteConfig.location} · {siteConfig.brandTagline}
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0A0F1C] sm:text-5xl lg:text-6xl">
            We build the systems that run modern African businesses
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526072]">
            Automations. Digitization. Online presence. M-Pesa and WhatsApp-first tools like
            RelayIQ — built for how businesses across Kenya and East Africa actually operate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-12 rounded-full bg-[#0A0F1C] px-7 text-[15px] font-medium text-white hover:bg-black"
            >
              <Link href="#contact">
                Get a free consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[#E7EAF0] px-7 text-[15px] font-medium text-[#0A0F1C]"
            >
              <Link href="#products">
                See our work
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-[#E7EAF0] pt-6">
            {[
              ['Mombasa-based', 'Built for East African operations'],
              ['WhatsApp-first', 'RelayIQ + M-Pesa ready'],
              ['1-day reply', 'Clear scope, no theatre'],
            ].map(([dt, dd]) => (
              <div key={dt}>
                <dt className="text-sm font-semibold text-[#0A0F1C]">{dt}</dt>
                <dd className="mt-1 text-xs leading-5 text-[#64748B]">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[1.25rem] border border-[#E8ECF2]">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
            <Image
              src={images.hero}
              alt="Operator running a modern business with digital tools"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/60 via-[#0A0F1C]/10 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">
                RelayIQ — ESSEM product
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/90">
                WhatsApp storefront, bookings, dine-in QR, and M-Pesa. Start free, scale when
                ready.
              </p>
              <Link
                href="https://relayiq.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                Open RelayIQ <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/15 bg-[#0A0F1C]/70 p-5 text-white shadow-2xl backdrop-blur-xl sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                Custom work
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">
                Automations, digitization, websites and apps — scoped clearly, built for real
                operating environments.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                Chat on WhatsApp <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
