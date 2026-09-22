import { faqs } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" className="border-b border-[#E8ECF2] bg-[#F4F6F8] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0A0F1C] sm:text-4xl">
            Clear answers before you commit.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#64748B]">
            Straight talk on what ESSEM does, who we serve, and how engagement starts.
          </p>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[#E8ECF2] bg-white open:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-[#0A0F1C] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-[#94A3B8] transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <div className="border-t border-[#E8ECF2] px-5 py-4 text-sm leading-7 text-[#526072]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
