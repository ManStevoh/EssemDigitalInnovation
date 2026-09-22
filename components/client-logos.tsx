export function ClientLogos() {
  const items = [
    { k: '01', t: 'Discovery', d: 'Understand the operation before proposing tools.' },
    { k: '02', t: 'Build', d: 'Ship systems, sites, and automations with clear scope.' },
    { k: '03', t: 'Launch', d: 'Go live with training, handover, and support paths.' },
    { k: '04', t: 'Improve', d: 'Refine from real usage — not slide-deck theory.' },
  ];

  return (
    <section className="border-b border-[#E7EAF0] bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
              How we work
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-3xl">
              A clear path from conversation to live systems.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#64748B]">
            No mystery process. Four steps we actually use with every engagement.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 border-t border-[#E7EAF0] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.k}
            className={`px-4 py-8 sm:px-6 lg:px-8 ${i < items.length - 1 ? 'border-b border-[#E7EAF0] sm:border-b-0 lg:border-r' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}`}
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#94A3B8]">{item.k}</p>
            <p className="mt-3 text-base font-semibold text-[#0B1220]">{item.t}</p>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
