import React from 'react';

const testimonials = [
  { quote: 'Yiling has been our primary hijab supplier for 3 years. Consistent quality and on-time delivery every single order.', name: 'Wholesale Buyer', country: 'United Kingdom' },
  { quote: 'Their OEM service is exceptional. Custom print matched exactly — samples delivered in just 5 days. Highly recommended.', name: 'Retail Chain Owner', country: 'United States' },
  { quote: 'As a distributor in Indonesia, the quality-to-price ratio from Yiling is unmatched. Our clients keep reordering.', name: 'Distributor', country: 'Indonesia' },
];

export default function TestimonialCard() {
  return (
    <section className="section-padding" style={{ background: 'var(--cream)' }} data-component="testimonials">
      <div className="container-site">
        {/* Score */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What buyers say</p>
          <div className="flex items-baseline justify-center gap-4">
            <span className="serif" style={{ fontSize: '6rem', lineHeight: 1, color: 'var(--espresso)' }}>4.9</span>
            <div className="text-left">
              <p style={{ color: 'var(--gold)', fontSize: '20px', letterSpacing: '2px' }}>★★★★★</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>from 200+ verified buyers</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8" style={{ background: 'var(--cream-2)' }}>
              <p style={{ color: 'var(--gold)', letterSpacing: '2px', marginBottom: '16px' }}>★★★★★</p>
              <p className="serif text-xl mb-6" style={{ lineHeight: 1.5, fontStyle: 'italic' }}>"{t.quote}"</p>
              <div>
                <p className="eyebrow">{t.name}</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
