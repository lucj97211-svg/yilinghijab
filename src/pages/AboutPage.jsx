import React from 'react';
import PageHeader from '../components/page-header/PageHeader';
import TrustBar from '../components/trust-bar/TrustBar';
import CertificationBadge from '../components/certifications/CertificationBadge';
import FooterCTA from '../components/cta/FooterCTA';
import { MapPin, Users, Globe, Award } from 'lucide-react';

const milestones = [
  { year: '2008', event: 'Founded in Yiwu, Zhejiang — started as a small textile workshop.' },
  { year: '2012', event: 'First international export order shipped to the Middle East.' },
  { year: '2015', event: 'Achieved ISO 9001 certification; expanded to 100+ workers.' },
  { year: '2018', event: 'Launched dedicated OEM/ODM division; partnered with major European retailers.' },
  { year: '2022', event: 'Reached 600+ new designs per year; expanded factory to 5,000 sqm.' },
  { year: '2026', event: 'Serving wholesale clients in 50+ countries across 5 continents.' },
];

const stats = [
  { icon: MapPin, value: '5,000 m²', label: 'Factory Area' },
  { icon: Users, value: '200+', label: 'Skilled Workers' },
  { icon: Globe, value: '50+', label: 'Export Countries' },
  { icon: Award, value: '600+', label: 'Designs per Year' },
];

export default function AboutPage() {
  return (
    <div data-component="about-page">
      <PageHeader title="About Yiling Hijab" breadcrumbs={[{ label: 'About' }]} />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">Our Story</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E] mb-6">
                From Workshop to Global Manufacturer
              </h2>
              <p className="text-[#4A4A5E] leading-relaxed mb-4">
                Yiwu Yiling Clothing Co., Ltd. was founded in 2008 with a single mission: produce hijabs and headscarves of
                uncompromising quality at factory-direct prices. What began as a small workshop has grown into a
                5,000-square-meter manufacturing facility employing over 200 skilled workers.
              </p>
              <p className="text-[#4A4A5E] leading-relaxed">
                Today, we ship to wholesale buyers in more than 50 countries, from the United States and United Kingdom to
                Indonesia, Australia, and beyond. Our specialization in hijab manufacturing means every process — from
                fabric sourcing to final QC — is optimized for the specific requirements of headscarf production.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#DDE0E5] shadow-sm">
              <div className="bg-[#0A1F3F] h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-5xl font-bold tracking-[-0.02em] text-[#C8962E] mb-2">2008</p>
                  <p className="text-sm text-[#8B95A8]">Established in Yiwu, China</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#DDE0E5] shadow-sm p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F5E6C8] flex items-center justify-center">
                    <s.icon size={24} className="text-[#C8962E]" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#1A1A2E] tracking-[-0.02em] mb-1">{s.value}</p>
                  <p className="text-sm text-[#7B7B8B] font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">Our Journey</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">Company Milestones</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 pb-10 relative">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-[#DDE0E5]" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-[#C8962E] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#C8962E]">{m.year}</span>
                    <p className="text-[#4A4A5E] text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CertificationBadge />
        </div>
      </section>
      <FooterCTA />
    </div>
  );
}
