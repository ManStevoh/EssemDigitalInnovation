'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, products } from '@/lib/site';

const featured = [
  {
    eyebrow: 'Product · WhatsApp + M-Pesa',
    title: 'RelayIQ',
    body: 'WhatsApp-first storefront, bookings, dine-in QR, and M-Pesa — with a free Starter plan to begin.',
    image: images.product,
    alt: 'WhatsApp-first business operations',
    href: '/products/relayiq',
    cta: 'See how',
    external: false,
  },
  {
    eyebrow: 'Custom builds',
    title: 'Websites and apps that convert',
    body: 'Fast, mobile-first websites and web apps — SEO-ready, responsive, and built to turn visitors into enquiries.',
    image: images.digitize,
    alt: 'Modern business website on a laptop',
    href: '/services/websites-and-apps',
    cta: 'Start a build',
    external: false,
  },
  {
    eyebrow: 'Operations',
    title: 'Automations and digitization',
    body: 'Replace paper and scattered chats with connected workflows, clear records, and staff-ready tools.',
    image: images.operations,
    alt: 'Team running digitized operations',
    href: '/services/automations',
    cta: 'Digitize my ops',
    external: false,
  },
];

export function Products() {
  const relay = products[0];

  return (
    <section id="products" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">
          Our work
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Featured work — products and systems
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              {relay.name} is our first product under the company mission. Custom systems sit
              beside it when a business needs something unique.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
          >
            See all projects <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-md border border-[#DDE3EA] bg-white transition-colors hover:border-[#2563EB]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-[#2563EB]">{item.eyebrow}</p>
                <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="transition-colors hover:text-[#2563EB]"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">{item.body}</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 h-10 rounded-md border-[#DDE3EA] px-5 text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] hover:bg-[#EFF6FF]"
                >
                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {item.cta}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
