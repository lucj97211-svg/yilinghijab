import React from 'react';
import { CheckCircle } from 'lucide-react';

const rows = [
  {
    heading: '16 Years of Manufacturing Excellence',
    body: 'Since 2008, we have specialized exclusively in hijab and headscarf production. Our dedicated focus means deep expertise in fabric behavior, print techniques, and finishing quality.',
    bullets: ['200+ skilled workers on two production lines', 'Monthly capacity: 500,000+ pieces', 'Three-stage QC: incoming fabric → in-line → final inspection'],
    image: '/assets/images/certification-documents.png',
    imageAlt: 'Quality certification documents',
    imageLeft: false,
  },
  {
    heading: 'International Quality Certifications',
    body: 'Our factory meets global quality benchmarks with certifications recognized worldwide.',
    bullets: ['SGS certified for material safety and quality', 'Intertek approved for export compliance', 'TUV Rheinland audited production process'],
    image: '/assets/images/placeholder.svg',
    imageAlt: 'Quality standards illustration',
    imageLeft: true,
  },
  {
    heading: 'Dedicated OEM/ODM Service',
    body: 'Your brand, our production line. We treat every OEM order with the same care as our own products.',
    bullets: ['Dedicated account manager for each client', '7-day sample turnaround with express shipping', 'Custom packaging, labeling, and hang tag design'],
    image: '/assets/images/placeholder.svg',
    imageAlt: 'OEM service illustration',
    imageLeft: false,
  },
];

export default function WhyChooseRow() {
  return (
    <section className="section-padding" data-component="why-choose-us">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">Why Choose Yiling</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">The Factory Behind the Fabric</h2>
        </div>
        <div className="flex flex-col gap-16">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${row.imageLeft ? '' : ''}`}
              data-component="why-choose-row"
            >
              <div className={row.imageLeft ? 'md:order-2' : ''}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A2E] mb-4">{row.heading}</h3>
                <p className="text-[#4A4A5E] leading-relaxed mb-4">{row.body}</p>
                <ul className="flex flex-col gap-2">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#4A4A5E]">
                      <CheckCircle size={16} className="text-[#C8962E] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={row.imageLeft ? 'md:order-1' : ''}>
                <div className="rounded-xl overflow-hidden border border-[#DDE0E5] shadow-sm">
                  <img src={row.image} alt={row.imageAlt} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
