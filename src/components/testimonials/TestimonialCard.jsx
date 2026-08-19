import React, { useState } from 'react';

const testimonials = [
  {
    quote: 'Luxurious, comfortable, and effortlessly elegant. The rich black fabric with the elegant gold border creates a timeless, sophisticated look. The material is soft, lightweight, and completely non-slip — once you put it on, it stays securely in place, even without pins. It drapes beautifully and feels incredibly gentle on the head.',
    name: 'Verified Buyer',
    country: 'United States',
    flag: '🇺🇸',
    tag: 'Premium Hijab',
  },
  {
    quote: 'At first, I wasn\'t satisfied with the samples, so I provided feedback on what needed to be changed. You made those corrections, and when I received my bulk order, everything was exactly how I wanted it. I was very satisfied with the quality and really appreciated that you took my feedback into account.',
    name: 'Wholesale Buyer',
    country: 'Verified Purchase',
    flag: '★',
    tag: 'OEM Order',
  },
  {
    quote: 'Berly is such a wonderful person to work with. She was very patient with us and guided us through this process. The products were great and the packaging was great as well. The delivery was quick and on time!',
    name: 'Retail Brand Owner',
    country: 'Verified Purchase',
    flag: '★',
    tag: 'Private Label',
  },
  {
    quote: 'I love the color and my personalized logo is beautifully made — there are many colors to choose from. Excellent quality, soft, comfortable, and exactly as described.',
    name: 'Boutique Owner',
    country: 'Verified Purchase',
    flag: '★',
    tag: 'Custom Logo Order',
  },
  {
    quote: 'Everything was sent on time. My agent worked very fast. Excellent quality — soft, comfortable, and exactly as described. Beautiful fabric and great fit. Highly recommend.',
    name: 'Wholesale Distributor',
    country: 'Verified Purchase',
    flag: '★',
    tag: 'Bulk Order',
  },
];

export default function TestimonialCard() {
  const [active, setActive] = useState(0);

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
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>from 283 verified buyers</p>
            </div>
          </div>
        </div>

        {/* Featured review */}
        <div className="mb-8 p-10 md:p-14" style={{ background: 'var(--cream-2)', borderLeft: '3px solid var(--gold)' }}>
          <p style={{ color: 'var(--gold)', letterSpacing: '2px', marginBottom: '20px', fontSize: '18px' }}>★★★★★</p>
          <p className="serif" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.45rem)', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--espresso)', marginBottom: '24px' }}>
            "{testimonials[active].quote}"
          </p>
          <div className="flex items-center gap-3">
            <div>
              <p className="eyebrow" style={{ color: 'var(--espresso)' }}>{testimonials[active].name}</p>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                {testimonials[active].tag} · {testimonials[active].country}
              </p>
            </div>
          </div>
        </div>

        {/* Selector dots */}
        <div className="flex gap-3 justify-center mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? 'var(--espresso)' : 'var(--border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Grid of other 3 */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.filter((_, i) => i !== active).slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="p-7 cursor-pointer"
              style={{ background: 'var(--cream-2)', transition: 'opacity 0.2s' }}
              onClick={() => setActive(testimonials.indexOf(t))}
            >
              <p style={{ color: 'var(--gold)', letterSpacing: '2px', marginBottom: '12px', fontSize: '13px' }}>★★★★★</p>
              <p className="serif mb-5" style={{ fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--espresso)' }}>
                "{t.quote.length > 140 ? t.quote.slice(0, 140) + '…' : t.quote}"
              </p>
              <div>
                <p className="eyebrow" style={{ fontSize: '10px', color: 'var(--espresso)' }}>{t.name}</p>
                <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{t.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
