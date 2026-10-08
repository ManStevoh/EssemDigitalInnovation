import { faqs } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" className="border-b border-[#DDE3EA] bg-[#F4F6F8] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <p className="text-sm font-bold text-[#2563EB]">Questions</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            Clear answers before you commit.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#475569]">
            Straight talk on what ESSEM does, who we serve, and how engagement starts.
          </p>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-md border border-[#DDE3EA] bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-[#0F172A] [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
                {faq.question}
                <span className="text-[#2563EB] transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <div className="border-t border-[#DDE3EA] px-5 py-4 text-sm leading-7 text-[#475569]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
