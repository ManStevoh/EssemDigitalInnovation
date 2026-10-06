import { trustChips } from '@/lib/site';

export function ClientLogos() {
  return (
    <section className="border-y border-[#E7EAF0] bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#94A3B8]">
          Trusted by growing businesses across Kenya and East Africa
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {trustChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-[#E7EAF0] bg-white px-4 py-2 text-sm font-medium text-[#334155]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
