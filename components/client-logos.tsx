import { clientLogos } from '@/lib/site';

export function ClientLogos() {
  return (
    <section aria-label="Trusted by" className="border-y border-border/40 bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by organizations across East Africa
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-2 text-center"
              title={client.name}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/50 bg-background text-sm font-bold text-primary">
                {client.initials}
              </div>
              <span className="text-xs text-muted-foreground leading-tight max-w-[8rem]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
