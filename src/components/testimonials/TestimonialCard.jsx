import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { quote: 'Yiling has been our primary hijab supplier for 3 years. Consistent quality and on-time delivery every order.', role: 'Wholesale Buyer', country: 'United Kingdom', stars: 5 },
  { quote: 'Their OEM service is exceptional. They matched our custom print exactly and delivered samples in just 5 days.', role: 'Retail Chain Owner', country: 'United States', stars: 5 },
  { quote: 'As a distributor in Indonesia, I need reliable partners. Yiling\'s factory scale gives me confidence they can handle any order size.', role: 'Distributor', country: 'Indonesia', stars: 5 },
];

export default function TestimonialCard() {
  return (
    <section className="section-padding bg-[#F7F8FA]" data-component="testimonials">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">Client Feedback</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">What Our Buyers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#DDE0E5] shadow-sm" data-component="testimonial-card">
              <div className="flex gap-1 mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={16} fill="#C8962E" color="#C8962E" />
                ))}
              </div>
              <p className="text-[#4A4A5E] text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5E6C8] flex items-center justify-center text-[#C8962E] font-bold text-sm">
                  {t.country.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">— {t.role}</p>
                  <p className="text-xs text-[#7B7B8B]">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
