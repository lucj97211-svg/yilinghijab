import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{ background: 'var(--cream)' }} data-component="hero">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[88vh] py-16 md:py-0">
          {/* Left: text */}
          <div className="flex flex-col justify-center pr-0 md:pr-16 order-2 md:order-1 pt-10 md:pt-0">
            <p className="eyebrow mb-6">Direct from Factory · Yiwu, China</p>
            <h1
              className="mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em' }}
            >
              The fabric behind<br />
              <em style={{ fontStyle: 'italic' }}>a million scarves.</em>
            </h1>
            <p style={{ color: 'var(--espresso-light)', fontSize: '16px', lineHeight: 1.75, maxWidth: '420px' }} className="mb-10">
              16 years of manufacturing premium hijabs for wholesalers and boutiques across 50+ countries.
              MOQ 100 pcs. OEM welcome.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-espresso">Shop Wholesale</Link>
              <Link to="/custom-oem" className="btn-outline">Custom / OEM</Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { val: '16+', label: 'Years' },
                { val: '500K+', label: 'Pcs / Month' },
                { val: '50+', label: 'Countries' },
                { val: '200+', label: 'Workers' },
              ].map(m => (
                <div key={m.val}>
                  <p className="serif" style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--espresso)', lineHeight: 1 }}>{m.val}</p>
                  <p className="eyebrow mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: editorial image stack */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-none">
              <img
                src="/assets/images/model-chiffon.png"
                alt="Premium chiffon hijab model"
                className="w-full object-cover"
                style={{ maxHeight: '85vh', objectPosition: 'top' }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-8 left-0 md:-left-12 p-5"
                style={{ background: 'var(--espresso)', color: 'var(--cream)', minWidth: '190px' }}
              >
                <p className="eyebrow mb-1" style={{ color: 'var(--gold)' }}>Factory Direct</p>
                <p className="serif text-2xl" style={{ color: 'var(--cream)' }}>From $1.20/pc</p>
                <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>MOQ 100 pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
