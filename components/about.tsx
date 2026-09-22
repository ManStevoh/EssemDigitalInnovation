'use client';

import Image from 'next/image';
import { images, siteConfig, trustChips } from '@/lib/site';

export function About() {
  return (
    <section id="about" className="border-b border-[#E7EAF0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">About ESSEM</p>
            <h2 className="mt-4 max-w-[14ch] text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              Built for operators who need systems that work.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-[#E7EAF0] bg-[#F7F8FA] px-3 py-1.5 text-xs font-medium text-[#475569]"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-[#475569]">
              Too many businesses still run on manual processes and weak digital setup. Work slows
              down, customers get inconsistent service, and growth costs more effort than it should.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              ESSEM helps businesses digitize, automate, and show up online — through systems,
              websites, apps, and smart automations. Based in {siteConfig.location}, we design for
              real operating environments.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-[#E7EAF0] bg-[#F7F8FA] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Vision</p>
                <p className="mt-3 text-sm leading-6 text-[#334155]">{siteConfig.vision}</p>
              </div>
              <div className="rounded-md border border-[#E7EAF0] bg-[#F7F8FA] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Mission</p>
                <p className="mt-3 text-sm leading-6 text-[#334155]">{siteConfig.mission}</p>
              </div>
            </div>

            <div className="relative mt-4 h-52 overflow-hidden rounded-md border border-[#E7EAF0] sm:h-64">
              <Image
                src={images.about}
                alt="East African small business context"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
