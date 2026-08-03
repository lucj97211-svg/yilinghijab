import React from 'react';

const logos = [
  { country: 'United States', initials: 'US' },
  { country: 'United Kingdom', initials: 'UK' },
  { country: 'Indonesia', initials: 'ID' },
  { country: 'Australia', initials: 'AU' },
  { country: 'Canada', initials: 'CA' },
  { country: 'UAE', initials: 'AE' },
];

export default function ClientLogoStrip() {
  return (
    <section className="py-10 bg-white border-b border-[#DDE0E5]" data-component="client-logo-strip">
      <div className="container-site">
        <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#7B7B8B] text-center mb-6">
          Trusted by Global Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((l) => (
            <div key={l.country} className="flex flex-col items-center gap-2" title={l.country}>
              <div className="w-12 h-12 rounded-full bg-[#F5E6C8] flex items-center justify-center text-[#C8962E] font-bold text-sm border-2 border-[#C8962E]/20">
                {l.initials}
              </div>
              <span className="text-[10px] text-[#7B7B8B] font-medium">{l.country}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#7B7B8B] text-center mt-4">
          Confidential OEM partnerships across 30+ countries
        </p>
      </div>
    </section>
  );
}
