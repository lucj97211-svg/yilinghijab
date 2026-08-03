import React from 'react';
import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react';

const certs = [
  { name: 'SGS Certified', icon: Shield },
  { name: 'Intertek', icon: Award },
  { name: 'TUV Rheinland', icon: CheckCircle },
  { name: 'ISO 9001', icon: FileCheck },
];

export default function CertificationBadge() {
  return (
    <section className="section-padding bg-[#F7F8FA]" data-component="certifications-showcase">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">Quality Standards</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E] mb-2">
            Quality You Can Trust
          </h2>
          <p className="text-[#7B7B8B]">Every product meets international quality and safety standards.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl p-6 text-center border border-[#DDE0E5] shadow-sm hover:shadow-md transition-shadow"
              data-component="certification-badge"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F5E6C8] flex items-center justify-center">
                <c.icon size={28} className="text-[#C8962E]" />
              </div>
              <h4 className="font-semibold text-[#1A1A2E] text-sm">{c.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
