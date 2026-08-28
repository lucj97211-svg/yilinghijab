import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';

const timeline = [
  { year: '2008', title: 'Yiling is founded', desc: 'Launched in Yiwu with a focused range of printed modal and jersey scarves — fabric and drape before anything else.' },
  { year: '2012', title: 'First export orders', desc: 'First wholesale shipments reach buyers in Southeast Asia and the Middle East.' },
  { year: '2016', title: 'Global wholesale expansion', desc: 'Began shipping to the US, UK, and Australia as demand for premium hijabs surged worldwide.' },
  { year: '2019', title: 'OEM & Private Label', desc: 'Launched dedicated OEM production line — custom labels, prints, and packaging for brand partners.' },
  { year: '2022', title: '500K pcs / month', desc: 'Expanded factory floor to 200+ workers with monthly capacity exceeding 500,000 pieces.' },
  { year: '2024', title: 'Certified & verified', desc: 'SGS and ISO 9001 certifications confirmed. Defect rate maintained below 0.3%.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="About Our Hijab Factory — 16 Years in Yiwu | Yiling Hijab"
        description="Yiwu Yiling Clothing Co., Ltd. has manufactured hijabs since 2008. 200+ workers, 500,000 pcs monthly capacity, OEKO-TEX and SGS certified."
        path="/about"
      />
      {/* OUR PHILOSOPHY */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '640px' }}>
          <p className="eyebrow mb-6" style={{ color: 'var(--muted)' }}>OUR PHILOSOPHY</p>
          <blockquote className="serif" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontStyle: 'italic', lineHeight: 1.2, marginBottom: '20px' }}>
            "Quality is the means to all trust."
          </blockquote>
          <p className="eyebrow mb-10" style={{ color: 'var(--muted)' }}>— YILING FACTORY</p>
          <p style={{ fontSize: '16px', color: 'var(--espresso-light)', lineHeight: 1.85 }}>
            It's the line we return to in everything we make. We believe factory-direct quality and modern retail ambition were never meant to be opposites — that a buyer can hold both, fully, and build a brand they're proud of.
          </p>
        </div>
      </section>

      {/* HOW IT BEGAN */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>HOW IT BEGAN</p>
              <h1 className="serif mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>It started with one factory, and a vision.</h1>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, marginBottom: '20px' }}>
                Yiling was founded in 2008 in Yiwu, Zhejiang — the heartland of China's textile trade. We saw a gap between what wholesalers needed and what factories could reliably deliver: consistent quality, honest lead times, and real craftsmanship at scale.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, marginBottom: '20px' }}>
                What began as a small workshop has grown into a 200-worker factory producing half a million hijabs every month — shipped to buyers across 50 countries.
              </p>
              <p style={{ fontSize: '15px', fontStyle: 'italic', color: 'var(--espresso)', fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>
                Made for the trade, built on craft.
              </p>
            </div>
            <div>
              <img loading="lazy" decoding="async" src="/assets/images/factory-floor.webp" alt="Hijab factory production line with industrial sewing machines in Yiwu" className="w-full object-cover" style={{ maxHeight: '480px' }} />
            </div>
          </div>

          {/* 3 image cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            {[
              { eyebrow: 'THE CRAFT', title: 'Production Floor', img: '/assets/images/factory-floor.webp' },
              { eyebrow: 'THE DETAIL', title: 'Quality Control', img: '/assets/images/factory-qc.webp' },
              { eyebrow: 'THE FABRIC', title: 'Material Selection', img: '/assets/images/factory-warehouse.webp' },
            ].map((card, i) => (
              <div key={i}>
                <img loading="lazy" decoding="async" src={card.img} alt={card.title} className="w-full object-cover mb-3" style={{ height: '260px' }} />
                <p className="eyebrow mb-1" style={{ color: 'var(--muted)', fontSize: '10px' }}>{card.eyebrow}</p>
                <p className="serif text-xl">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>WHAT WE STAND FOR</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>The things we won't compromise.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '48px' }}>
            A few quiet principles that shape every shade, every weave, and every order that leaves our hands.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { n: '01', title: 'For every buyer', body: 'Yiling is for wholesale buyers, boutique owners, and brand builders of all scales — from 100-piece test orders to 100,000-piece seasonal runs. You set the brief; we make it real.' },
              { n: '02', title: 'Considered materials', body: 'Custom printed modal, jersey modal, and Pantone-matched solid colours — each weave chosen for how it drapes, breathes, and holds up through years of daily wear.' },
              { n: '03', title: 'Built for reliability', body: 'We were built on repeat business. Our buyers come back because lead times are honest, defect rates are below 0.3%, and every shipment matches the sample.' },
              { n: '04', title: 'Modern, never rushed', body: 'High-volume production and individual attention to quality, held together. Quiet, intentional, consistent — craftsmanship as the means, not the shortcut.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="serif text-4xl" style={{ color: 'var(--border)', lineHeight: 1, flexShrink: 0 }}>{item.n}</span>
                <div>
                  <h3 className="serif text-xl mb-2">{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div style={{ background: 'var(--espresso)' }}>
        <div className="container-site py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { val: '2008', label: 'FOUNDED' },
              { val: '4.9', label: 'AVERAGE RATING' },
              { val: '200+', label: 'VERIFIED BUYERS' },
              { val: '100%', label: 'FACTORY-OWNED' },
            ].map((s, i) => (
              <div key={i}>
                <p className="serif text-3xl mb-1" style={{ color: 'var(--cream)' }}>{s.val}</p>
                <p className="eyebrow" style={{ color: 'rgba(248,244,239,0.5)', fontSize: '10px' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="section-padding">
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>Launches & milestones.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '48px' }}>
            Nearly two decades of steady growth — not seasonal noise, but a habit of quietly building capacity and trust.
          </p>
          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 pb-10" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-5px', top: '4px', width: '9px', height: '9px', background: 'var(--espresso)', borderRadius: '50%' }} />
                <div>
                  <p className="eyebrow mb-2" style={{ color: 'var(--gold)' }}>{item.year}</p>
                  <h3 className="serif text-xl mb-2">{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE HAND OF THE FABRIC */}
      <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>BY THE HAND OF THE FABRIC</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>We choose the cloth before anything else.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, maxWidth: '580px', marginBottom: '48px' }}>
            Before a shade, before a single drape — we start with how a fabric feels in the hand. A piece earns its place only if it's soft enough to forget you're wearing it, and considered enough to wear anywhere. That's why our weaves are chosen, not settled for.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'CUSTOM PRINTED MODAL', img: '/assets/images/modal-printed-01.webp' },
              { label: 'MODAL', img: '/assets/images/material-modal.webp' },
              { label: 'JERSEY MODAL', img: '/assets/images/jersey-modal-01.webp' },
              { label: 'PANTONE MODAL', img: '/assets/images/pantone-modal-01.webp' },
            ].map((fab, i) => (
              <Link to="/products" key={i} className="group block" style={{ textDecoration: 'none' }}>
                <div className="overflow-hidden mb-3" style={{ height: '200px', background: 'var(--cream)' }}>
                  <img loading="lazy" decoding="async" src={fab.img} alt={fab.label} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="eyebrow" style={{ color: 'var(--espresso)', fontSize: '11px' }}>{fab.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>A COMMUNITY, NOT JUST A CUSTOMER BASE</p>
              <h2 className="serif mb-6" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>A network of buyers<br /><em>building together.</em></h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, marginBottom: '20px' }}>
                Behind every order is a retailer or brand somewhere choosing to build on quality — and behind every shipment is a team that understands exactly what that means. We're so glad you're here.
              </p>
              <Link to="/contact" className="btn-espresso">Get in Touch</Link>
            </div>
            <div>
              <img loading="lazy" decoding="async" src="/assets/images/factory-swatches.webp" alt="Custom printed modal hijab factory — Yiling Yiwu" className="w-full object-cover" style={{ maxHeight: '500px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SAY HELLO */}
      <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-site py-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>SAY HELLO</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>We'd genuinely love to hear from you.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
            Have a question, a product brief, or just want to say hello? We're friendly, we read everything, and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <p className="eyebrow mb-1">GENERAL & ORDERS</p>
              <a href="mailto:peri@wennuanfactory.com" style={{ fontSize: '15px', color: 'var(--espresso)' }}>peri@wennuanfactory.com</a>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} className="hidden md:block" />
            <div>
              <p className="eyebrow mb-1">WHATSAPP</p>
              <a href="https://wa.me/8615088248404" style={{ fontSize: '15px', color: 'var(--espresso)' }}>+86 150-8824-8404</a>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} className="hidden md:block" />
            <div>
              <p className="eyebrow mb-1">REPLY TIME</p>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)' }}>Within 24 hours, every day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
