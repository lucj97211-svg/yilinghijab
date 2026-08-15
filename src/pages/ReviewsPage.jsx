import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';

const reviews = [
  { name: 'Amina', product: 'PREMIUM JERSEY HIJAB', text: 'The softest jersey I\'ve ever worn — it drapes beautifully and stays put all day. Will be ordering more colors.' },
  { name: 'Leila', product: 'LUSTRE SATIN HIJAB', text: 'Bought the satin for Eid and felt so put together. The shades are gorgeous in person. Packaging was beautiful too.' },
  { name: 'Sara', product: 'CHIFFON HIJAB', text: 'My everyday go-to. Lightweight, breathable, and the quality is a game changer. Ships fast and arrives perfectly.' },
  { name: 'Fatima', product: 'COTTON HIJAB', text: 'Incredible quality. I was nervous ordering wholesale but the samples convinced me immediately. Reordered 3 times.' },
  { name: 'Nija', product: 'PREMIUM JERSEY HIJAB', text: 'The premium cotton has become a mainstay in our store. Customers keep asking for more colors. Consistently excellent.' },
  { name: 'Jannah', product: 'MODAL HIJAB', text: 'Very soft, drapes nicely, and the mini size is perfect. I ordered 300 pieces and every single one was perfect.' },
  { name: 'Rabihah', product: 'CRINKLE HIJAB', text: 'So easy to wrap and the crinkle texture is beautiful. Our customers love the distinctiveness. Fast delivery from Yiwu.' },
  { name: 'Zaynab', product: 'LUSTRE SATIN HIJAB', text: 'Goes with so many outfits. I ordered a second time — the consistency between batches is impressive.' },
];

const distribution = [
  { stars: '5★', pct: 90 },
  { stars: '4★', pct: 5 },
  { stars: '3★', pct: 2 },
  { stars: '2★', pct: 2 },
  { stars: '1★', pct: 1 },
];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState('HIJABS');
  const cats = ['HIJABS', 'CHIFFON', 'JERSEY', 'SATIN', 'COTTON'];

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Buyer Reviews — Wholesale Hijab Supplier | Yiling Hijab"
        description="What wholesale buyers say about our hijab quality, delivery reliability and OEM service. Verified feedback from importers in the US, UK, Indonesia and Australia."
        path="/reviews"
      />
      {/* HERO */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '640px' }}>
          <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>CUSTOMER REVIEWS</p>
          <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Loved, worn, and reviewed.</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '40px' }}>
            Buyers across 50 countries have told us how it felt to source from Yiling. Here's what they said — in their own words.
          </p>

          {/* Aggregate */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-baseline gap-4">
              <span className="serif" style={{ fontSize: '6rem', lineHeight: 1, color: 'var(--espresso)' }}>4.9</span>
              <div className="text-left">
                <p style={{ color: 'var(--gold)', fontSize: '22px', letterSpacing: '3px' }}>★★★★★</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>200+ VERIFIED BUYERS</p>
              </div>
            </div>
            {/* Distribution */}
            <div className="flex flex-col gap-2 w-full max-w-xs mt-4">
              {distribution.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="eyebrow" style={{ width: '24px', fontSize: '10px', color: 'var(--muted)' }}>{d.stars}</span>
                  <div className="flex-1 h-1.5" style={{ background: 'var(--border)' }}>
                    <div style={{ width: `${d.pct}%`, height: '100%', background: 'var(--espresso)' }} />
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', width: '28px' }}>{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IN THEIR WORDS */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>IN THEIR WORDS</p>
          <h2 className="serif mb-12" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>The reviews we re-read.</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-8" style={{ background: 'var(--cream-2)' }}>
                <p style={{ color: 'var(--gold)', letterSpacing: '3px', marginBottom: '16px' }}>★★★★★</p>
                <p className="serif text-xl mb-6" style={{ fontStyle: 'italic', lineHeight: 1.5 }}>"{r.text}"</p>
                <div>
                  <p className="eyebrow" style={{ fontSize: '10px' }}>{r.name.toUpperCase()} · VERIFIED BUYER</p>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{r.product}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Category filter */}
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>BROWSE BY CATEGORY</p>
          <h2 className="serif mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Find reviews for what you love.</h2>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px' }}>Every review is from a verified wholesale buyer.</p>
          <div className="flex gap-2 flex-wrap mb-10">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="eyebrow px-5 py-2"
                style={{
                  background: activeCategory === cat ? 'var(--espresso)' : 'transparent',
                  color: activeCategory === cat ? 'var(--cream)' : 'var(--muted)',
                  border: `1px solid ${activeCategory === cat ? 'var(--espresso)' : 'var(--border)'}`,
                  cursor: 'pointer', fontSize: '11px',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Full review list */}
          <div className="flex flex-col gap-0">
            {reviews.map((r, i) => (
              <div key={i} className="py-8" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p style={{ color: 'var(--gold)', letterSpacing: '2px', fontSize: '14px' }}>★★★★★</p>
                  </div>
                  <span className="eyebrow" style={{ fontSize: '10px', color: 'var(--muted)' }}>VERIFIED BUYER</span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.75, marginBottom: '12px' }}>"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <p className="eyebrow" style={{ fontSize: '10px' }}>{r.name.toUpperCase()}</p>
                  <span style={{ width: '4px', height: '4px', background: 'var(--border)', borderRadius: '50%' }} />
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{r.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE LIST */}
      <section style={{ background: 'var(--espresso)' }}>
        <div className="container-site py-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'rgba(248,244,239,0.5)' }}>JOIN THE LIST</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', color: 'var(--cream)' }}>Be the first to wear what they're raving about.</h2>
          <p style={{ fontSize: '14px', color: 'rgba(248,244,239,0.6)', marginBottom: '28px' }}>Early access, new styles, and wholesale pricing updates.</p>
          <Link to="/contact" style={{ background: 'var(--cream)', color: 'var(--espresso)', fontFamily: "'Jost',sans-serif", fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.20em', padding: '14px 36px', textDecoration: 'none', display: 'inline-block' }}>
            Join
          </Link>
        </div>
      </section>
    </div>
  );
}
