import { faqs } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Common questions</h2>
          <p className="text-foreground/70">
            Straight answers about how we work, who we serve, and how to get started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={cn(
                'group rounded-xl border border-border/60 bg-background overflow-hidden',
                'open:shadow-sm'
              )}
              open={index === 0}
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium hover:bg-muted/40 transition-colors [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-foreground/70 leading-relaxed border-t border-border/40 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
