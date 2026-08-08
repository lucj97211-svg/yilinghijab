import React from 'react';
import Hero from '../components/hero/Hero';
import TrustBar from '../components/trust-bar/TrustBar';
import ProductGrid from '../components/product-grid/ProductGrid';
import WhyChooseRow from '../components/why-choose/WhyChooseRow';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import FooterCTA from '../components/cta/FooterCTA';
import products from '../data/products';

// Model photos overlay on 3 featured products
const featuredProducts = products.slice(0, 3).map((p, i) => ({
  ...p,
  image: [
    '/assets/images/model-chiffon.png',
    '/assets/images/model-jersey-navy.png',
    '/assets/images/model-linen-sage.png',
  ][i],
}));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />

      {/* Category editorial strip */}
      <section style={{ background: 'var(--cream-2)' }}>
        <div className="container-site py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Chiffon', count: '12 styles' },
              { label: 'Cotton', count: '8 styles' },
              { label: 'Jersey', count: '10 styles' },
              { label: 'Custom OEM', count: 'Any style' },
            ].map((cat, i) => (
              <div key={i} className="p-6 text-center" style={{ background: 'var(--cream)', cursor: 'pointer' }}>
                <p className="eyebrow mb-1" style={{ color: 'var(--muted)' }}>{cat.count}</p>
                <p className="serif text-2xl">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model-photo featured products */}
      <ProductGrid
        products={featuredProducts}
        eyebrow="Bestsellers"
        title="Wholesale favourites."
        showMore={true}
      />

      {/* Factory story + 3-col */}
      <WhyChooseRow />

      {/* Editorial 2-col model showcase */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow mb-4">OEM & Private Label</p>
              <h2 className="serif mb-6" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
                Your brand.<br /><em>Our factory.</em>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '32px' }}>
                We handle everything from fabric sourcing and pattern development to labelling and packaging.
                Your logo, your colour story — produced at scale with factory precision.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {['Sample in 7 days', 'Woven labels & hang tags included', 'Min. 100 pcs per design', 'Export packaging ready'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span style={{ color: 'var(--gold)', fontSize: '18px' }}>—</span>
                    <span style={{ fontSize: '14px', color: 'var(--espresso-light)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/custom-oem" className="btn-espresso">Learn About OEM</a>
            </div>
            <div>
              <img
                src="/assets/images/model-printed-gold.png"
                alt="OEM custom printed hijab"
                className="w-full object-cover"
                style={{ maxHeight: '560px', objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialCard />
      <FooterCTA />
    </main>
  );
}
