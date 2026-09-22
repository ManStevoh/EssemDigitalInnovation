'use client';

import { audiences } from '@/lib/site';

export function Industries() {
  return (
    <section id="audiences" className="border-b border-[#E7EAF0] bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Who we serve</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-4xl">
              For businesses ready to professionalize operations.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              We work best with operators who want practical systems — not another layer of
              complexity.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className="rounded-md border border-[#E7EAF0] bg-white p-6 transition-colors hover:border-[#CBD5E1]"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#94A3B8]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-base font-semibold text-[#0B1220]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
