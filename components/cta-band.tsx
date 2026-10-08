'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function CtaBand() {
  const whatsappHref = getWhatsAppUrl('Hello ESSEM! I found your website and I am interested in discussing a project.');

  return (
    <section className="border-t-4 border-[#10B981] bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-[#6EE7B7]">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to build? Let&apos;s talk.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            Free consultation — no obligation. Tell us your challenge and we will show you what is
            possible. From {siteConfig.location}.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <Phone className="size-4" /> {siteConfig.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="h-12 rounded-md bg-[#2563EB] px-7 text-[15px] font-semibold text-white hover:bg-[#1D4ED8]"
          >
            <Link href="#contact">
              Get a free quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-white/30 px-7 text-[15px] font-semibold text-white hover:border-white hover:bg-white/5"
          >
            <MessageCircle className="size-4" />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
