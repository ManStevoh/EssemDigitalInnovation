export function ClientLogos() {
  const items = [
    { k: '01', t: 'Discovery', d: 'Understand the operation before proposing tools.' },
    { k: '02', t: 'Build', d: 'Ship systems, sites, and automations with clear scope.' },
    { k: '03', t: 'Launch', d: 'Go live with training, handover, and support paths.' },
    { k: '04', t: 'Improve', d: 'Refine from real usage — not slide-deck theory.' },
  ];

  return (
    <section className="border-b border-[#E7EAF0] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
