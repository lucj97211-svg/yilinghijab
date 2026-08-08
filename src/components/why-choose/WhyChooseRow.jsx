import React from 'react';

export default function WhyChooseRow() {
  return (
    <section data-component="factory-story" style={{ background: 'var(--cream-2)' }}>
      {/* Factory floor full-bleed */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '560px' }}>
        <img
          src="/assets/images/factory-floor.png"
          alt="Yiling factory production floor"
          className="w-full object-cover"
          style={{ maxHeight: '560px' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(43,37,34,0.45)' }} />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="eyebrow mb-4" style={{ color: 'rgba(248,244,239,0.7)' }}>Est. 2008 · Yiwu, Zhejiang</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--cream)', maxWidth: '700px' }}>
              Built on 16 years of<br /><em>hijab craftsmanship.</em>
            </h2>
          </div>
        </div>
      </div>

      {/* 3-col factory stats */}
      <div className="container-site py-16">
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'var(--border)' }}>
          {[
            {
              img: '/assets/images/factory-qc.png',
              title: 'Three-Stage QC',
              body: 'Every batch passes incoming fabric inspection, in-line checks, and final audit before shipment. Defect rate below 0.3%.',
            },
            {
              img: '/assets/images/factory-swatches.png',
              title: '600+ Designs / Year',
              body: 'Our in-house design team releases new colourways and patterns every season — all available for OEM private label.',
            },
            {
              img: '/assets/images/factory-warehouse.png',
              title: 'Ready-Stock & Made-to-Order',
              body: 'Keep 200+ SKUs in stock for fast turnaround. Or place a custom order — sample in 7 days, bulk in 25–35 days.',
            },
          ].map((col, i) => (
            <div key={i} className="p-8 md:p-10">
              <div className="overflow-hidden mb-6" style={{ borderRadius: '2px' }}>
                <img src={col.img} alt={col.title} className="w-full object-cover" style={{ height: '220px', objectPosition: 'center' }} />
              </div>
              <h3 className="serif text-2xl mb-3">{col.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.75 }}>{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
