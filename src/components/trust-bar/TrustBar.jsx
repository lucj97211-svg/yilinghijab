import React from 'react';

const metrics = [
  { value: '16+', label: 'Years Experience' },
  { value: '200+', label: 'Skilled Workers' },
  { value: '600+', label: 'Designs per Year' },
  { value: '50+', label: 'Export Countries' },
];

export default function TrustBar() {
  return (
    <section className="py-12" style={{ background: 'var(--brand-gold-light)' }} data-component="trust-bar">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-[#C8962E] tracking-[-0.02em] mb-1">{m.value}</p>
              <p className="text-sm text-[#4A4A5E] font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
