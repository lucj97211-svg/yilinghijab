import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    category: 'Ordering',
    items: [
      { q: 'What is the minimum order quantity (MOQ)?', a: 'Our standard MOQ is 100 pieces per style. For custom/OEM orders, the MOQ may vary depending on the design complexity and fabric.' },
      { q: 'How do I place a wholesale order?', a: 'Simply contact us through the inquiry form, WhatsApp, or email. Our sales team will guide you through the process and provide a quotation within 24 hours.' },
      { q: 'Can I get samples before placing a bulk order?', a: 'Yes, we offer pre-production samples. Sample production typically takes 5–7 days, and we ship them via DHL/FedEx so you can evaluate quality firsthand.' },
    ],
  },
  {
    category: 'Products',
    items: [
      { q: 'What materials do you use for hijabs?', a: 'We work with chiffon, cotton, linen, jersey knit, crinkle chiffon, and custom blends. All fabrics are sourced from certified mills and tested for quality.' },
      { q: 'Can you customize colors and prints?', a: 'Absolutely. We offer custom dyeing, digital printing, screen printing, and embroidery. Send us your Pantone codes or design files, and we will match them precisely.' },
      { q: 'Do you offer private labeling?', a: 'Yes, we provide private label and OEM services. Your brand logo can be added via woven labels, hang tags, or printed packaging.' },
    ],
  },
  {
    category: 'Shipping',
    items: [
      { q: 'What shipping methods do you use?', a: 'We ship via sea freight (FCL/LCL), air freight, and express courier (DHL, FedEx, UPS). The method depends on your order size and urgency.' },
      { q: 'How long does shipping take?', a: 'Express courier: 3–7 days. Air freight: 7–14 days. Sea freight: 20–35 days, depending on the destination port.' },
    ],
  },
  {
    category: 'Payment',
    items: [
      { q: 'What payment methods do you accept?', a: 'We accept T/T bank transfer, L/C (Letter of Credit), and Alibaba Trade Assurance for secure online transactions.' },
      { q: 'What are your payment terms?', a: 'Standard terms are 30% deposit to start production, 70% balance before shipment. For long-term partners, we offer flexible terms.' },
    ],
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  let globalIdx = 0;
  return (
    <section className="section-padding" data-component="faq-accordion">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">Frequently Asked Questions</h2>
        </div>
        {faqData.map((group) => (
          <div key={group.category} className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">{group.category}</h3>
            {group.items.map((item) => {
              const idx = globalIdx++;
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border border-[#DDE0E5] rounded-lg mb-3 overflow-hidden">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-[#1A1A2E] hover:bg-[#F7F8FA] transition-colors"
                  >
                    <span className="pr-4">{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#C8962E] flex-shrink-0 transition-transform duration-[240ms] ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-[240ms] ease-[cubic-bezier(0.2,0,0,1)] ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <p className="px-4 pb-4 text-sm text-[#4A4A5E] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
