import { trustChips } from '@/lib/site';

export function ClientLogos() {
  return (
    <section className="border-y border-[#DDE3EA] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-[#0F172A]">
          Built for growing businesses across Kenya and East Africa
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {trustChips.map((chip) => (
            <li
              key={chip}
              className="rounded-sm border border-[#DDE3EA] border-l-2 border-l-[#10B981] bg-[#F4F6F8] px-3 py-2 text-sm font-medium text-[#334155]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
