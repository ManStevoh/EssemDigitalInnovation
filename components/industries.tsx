'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { audiences, images, industryServiceRoutes } from '@/lib/site';

const cardImages = [images.about, images.cafe, images.audience, images.caseStudy] as const;

export function Industries() {
  return (
    <section id="audiences" className="border-b border-[#DDE3EA] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">
          Industries we serve
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Solutions built for your industry
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#475569]">
              We understand your business. That is why we build for real operating environments —
              not slide-deck theory.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
          >
            Find your fit <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-md border border-[#DDE3EA] bg-white transition-colors hover:border-[#2563EB]"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cardImages[index % cardImages.length]}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-[#0F172A]">
                  <Link
                    href={industryServiceRoutes[index % industryServiceRoutes.length]}
                    className="transition-colors hover:text-[#2563EB]"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">{item.description}</p>
                <Link
                  href={industryServiceRoutes[index % industryServiceRoutes.length]}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline"
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
