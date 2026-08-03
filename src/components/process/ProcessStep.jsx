import React from 'react';
import { Send, Package, Factory, ClipboardCheck } from 'lucide-react';

const steps = [
  { icon: Send, title: 'Send Your Design', desc: 'Share your design files, sketches, or reference samples with our team.' },
  { icon: Package, title: 'Sample Production', desc: 'We produce pre-production samples for your approval within 7 days.' },
  { icon: Factory, title: 'Bulk Manufacturing', desc: 'Once approved, your order moves to our production line with full QC.' },
  { icon: ClipboardCheck, title: 'Quality Check & Ship', desc: 'Every piece passes inspection before packing and shipping to your warehouse.' },
];

export default function ProcessStep() {
  return (
    <section className="section-padding" data-component="oem-process">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">How It Works</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">From Design to Delivery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center relative" data-component="process-step">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5E6C8] flex items-center justify-center relative z-10">
                <s.icon size={28} className="text-[#C8962E]" />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-[#DDE0E5] z-0" />
              )}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#C8962E] text-white text-xs font-bold flex items-center justify-center z-20">
                {i + 1}
              </div>
              <h4 className="font-semibold text-[#1A1A2E] mb-2">{s.title}</h4>
              <p className="text-sm text-[#7B7B8B] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
