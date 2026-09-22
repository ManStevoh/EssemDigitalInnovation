'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, products } from '@/lib/site';

export function Products() {
  const relay = products[0];

  return (
    <section id="products" className="border-b border-[#E7EAF0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Products</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              ESSEM builds products, not only projects.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#64748B]">
              RelayIQ is our first product under the company mission. Custom systems sit beside it
              when a business needs something unique.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-[#E7EAF0] lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[260px] md:min-h-full">
                <Image
                  src={images.product}
                  alt="WhatsApp-first business operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#F7F8FA] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10B981]">
                  {relay.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0B1220]">
                  {relay.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{relay.description}</p>
                <ul className="mt-5 space-y-2">
                  {relay.highlights.map((item) => (
                    <li key={item} className="text-sm text-[#334155]">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 h-11 w-fit rounded-md bg-[#0B1220] px-5 text-sm text-white hover:bg-[#111827]"
                >
                  <Link href={relay.href} target="_blank" rel="noopener noreferrer">
                    Open RelayIQ
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
