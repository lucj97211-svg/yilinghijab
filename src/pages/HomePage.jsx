import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/cta/FooterCTA';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import products from '../data/products';
import Seo, { orgSchema } from '../components/seo/Seo';

const TABS = ['All', 'Bestsellers', 'New In', 'Chiffon', 'Jersey'];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = products.filter(p => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Bestsellers') return p.badge === 'BESTSELLER';
    if (activeTab === 'New In') return p.badge === 'NEW IN';
    if (activeTab === 'Chiffon') return p.category === 'chiffon' || p.category === 'crinkle';
    if (activeTab === 'Jersey') return p.category === 'jersey' || p.category === 'modal';
    return true;
  });

  return (
    <main style={{ background: 'var(--cream)' }}>
      <Seo
        title="Hijab Manufacturer & Wholesale Supplier | Yiling Hijab Factory China"
        description="Factory-direct hijab wholesale from Yiwu, China. 18 styles in jersey, chiffon, satin, modal and cotton. MOQ 100 pcs, OEM and private label welcome, ships to 50+ countries."
        path="/"
        jsonLd={orgSchema()}
      />

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[90vh] py-16 md:py-0">
            {/* Text */}
            <div className="order-2 md:order-1 flex flex-col justify-center md:pr-12">
              <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>THE EVERYDAY DRAPE</p>
              <h1 style={{ fontSize: 'clamp(3rem,6.5vw,5.2rem)', fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, lineHeight: 1.05, color: 'var(--espresso)', marginBottom: '28px' }}>
                Softness<br /><em>that stays put.</em>
              </h1>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--espresso-light)', maxWidth: '420px', marginBottom: '36px' }}>
                Our Premium Jersey — a fine cotton-rich knit with a gentle four-way stretch. It grips without pins, never slips, and stays fully opaque from morning to night.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-espresso">Shop Wholesale</Link>
                <Link to="/custom-oem" className="btn-outline">Custom / OEM</Link>
              </div>
              <p className="eyebrow mt-6" style={{ fontSize: '11px', color: 'var(--muted)' }}>Premium Jersey · Light Yellow</p>
            </div>
            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <img loading="lazy" decoding="async"
                src="/assets/images/hero-duo-models.webp"
                alt="Models wearing premium wholesale hijabs in cream and mocha colourways"
                className="w-full object-cover object-top"
                style={{ maxHeight: '90vh' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site py-5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              '800+ orders shipped globally',
              '★★★★★  4.9 / 5 · 283 verified reviews',
              'Over $100K monthly order volume',
              'Factory-direct · 3 years in wholesale',
            ].map((t, i) => (
              <span key={i} className="eyebrow" style={{ color: 'var(--espresso-light)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="section-padding">
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>FIND YOUR EVERYDAY</p>
          <h2 className="serif mb-10" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Shop by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'All Hijabs', count: '18 styles', img: '/assets/images/material-jersey.webp', link: '/products' },
              { label: 'Custom / OEM', count: 'Any design', img: '/assets/images/factory-swatches.webp', link: '/custom-oem' },
              { label: 'Chiffon', count: '3 colourways', img: '/assets/images/material-chiffon.webp', link: '/products' },
              { label: 'Bamboo Modal', count: '3 colourways', img: '/assets/images/material-modal.webp', link: '/products' },
              { label: 'Lustre Satin', count: '3 colourways', img: '/assets/images/material-satin.webp', link: '/products' },
              { label: 'Combed Cotton', count: '3 colourways', img: '/assets/images/product-cotton-hijab.webp', link: '/products' },
            ].map((cat, i) => (
              <Link to={cat.link} key={i} className="group relative overflow-hidden block" style={{ textDecoration: 'none' }}>
                <div style={{ height: '220px', overflow: 'hidden', background: 'var(--cream-2)' }}>
                  <img loading="lazy" decoding="async" src={cat.img} alt={cat.label} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="pt-3">
                  <p className="serif text-lg" style={{ color: 'var(--espresso)' }}>{cat.label}</p>
                  <p className="eyebrow mt-1" style={{ color: 'var(--muted)', fontSize: '10px' }}>{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STARTER SET BANNER ── */}
      <section style={{ background: 'var(--cream-2)' }}>
        <div className="container-site py-0">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="py-14 md:py-20 md:pr-16 order-2 md:order-1">
              <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>NEW TO WHOLESALE? START HERE</p>
              <h2 className="serif mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>The Yiling Starter Bundle</h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '28px' }}>
                Three core fabrics — jersey, chiffon, and satin — in a mixed sample pack. Assess quality before placing a bulk order. From 30 pcs per fabric.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="serif text-3xl" style={{ color: 'var(--espresso)' }}>From $89</span>
                <span className="eyebrow" style={{ color: 'var(--muted)', textDecoration: 'line-through' }}>$120</span>
                <span style={{ background: 'var(--espresso)', color: 'var(--cream)', fontSize: '11px', fontWeight: 600, padding: '3px 10px', letterSpacing: '0.1em' }}>SAVE 26%</span>
              </div>
              <Link to="/contact" className="btn-espresso">Request Starter Bundle</Link>
            </div>
            <div className="order-1 md:order-2">
              <img loading="lazy" decoding="async" src="/assets/images/starter-flatlay.webp" alt="Wholesale hijab starter sample pack for B2B buyers, MOQ 100 pcs" className="w-full object-cover" style={{ maxHeight: '480px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>BELOVED BY BUYERS</p>
          <div className="flex items-end justify-between mb-8">
            <h2 className="serif" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>This season's favourites</h2>
            <Link to="/products" className="btn-outline hidden md:inline-block">View all</Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="eyebrow px-5 py-2 transition-all"
                style={{
                  background: activeTab === tab ? 'var(--espresso)' : 'transparent',
                  color: activeTab === tab ? 'var(--cream)' : 'var(--muted)',
                  border: `1px solid ${activeTab === tab ? 'var(--espresso)' : 'var(--border)'}`,
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {filtered.map(p => (
              <div key={p.id} className="group">
                <div className="relative overflow-hidden mb-4" style={{ background: 'var(--cream-2)' }}>
                  {p.badge && (
                    <span className="absolute top-3 left-3 z-10 eyebrow px-3 py-1"
                      style={{ background: 'var(--espresso)', color: 'var(--cream)', fontSize: '10px' }}>
                      {p.badge}
                    </span>
                  )}
                  <img loading="lazy" decoding="async"
                    src={p.image}
                    alt={`${p.name} ${p.color}`}
                    className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: '3/4' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4"
                    style={{ background: 'var(--espresso)' }}>
                    <Link to="/contact" className="eyebrow block text-center w-full" style={{ color: 'var(--cream)', fontSize: '11px' }}>
                      REQUEST QUOTE
                    </Link>
                  </div>
                </div>
                <p className="eyebrow mb-1" style={{ color: 'var(--muted)', fontSize: '10px' }}>{p.material} · {p.color}</p>
                <p className="serif text-lg mb-1" style={{ color: 'var(--espresso)' }}>{p.name}</p>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{'★'.repeat(p.stars)} {p.reviews.toLocaleString()}</span>
                  <span className="eyebrow" style={{ color: 'var(--espresso)', fontSize: '12px' }}>MOQ {p.moq}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link to="/products" className="btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── LAST CALL BANNER ── */}
      <section style={{ background: 'var(--cream-2)' }}>
        <div className="container-site py-0">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="order-1 md:order-1">
              <img loading="lazy" decoding="async" src="/assets/images/banner-lastcall.webp" alt="OEM custom hijab manufacturing with private label fabric selection" className="w-full object-cover object-top" style={{ maxHeight: '520px' }} />
            </div>
            <div className="py-14 md:py-20 md:pl-16 order-2 md:order-2">
              <p className="eyebrow mb-4" style={{ color: 'var(--gold)' }}>OEM PRODUCTION</p>
              <h2 className="serif mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Your label.<br /><em>Our factory.</em></h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '32px' }}>
                Custom colours, woven labels, hang tags, and packaging — all handled in-house. Sample in 7 days, bulk in 25–35 days.
              </p>
              <Link to="/custom-oem" className="btn-espresso">Learn About OEM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY MATERIAL ── */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>BY THE HAND OF THE FABRIC</p>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '40px', maxWidth: '500px' }}>
            Each weave chosen for how it drapes, breathes, and sits with you all day.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Premium Jersey', count: '2 styles', img: '/assets/images/material-jersey.webp' },
              { label: 'Lustre Satin', count: '1 style', img: '/assets/images/material-satin.webp' },
              { label: 'Modal', count: '1 style', img: '/assets/images/material-modal.webp' },
              { label: 'Chiffon', count: '2 styles', img: '/assets/images/material-chiffon.webp' },
            ].map((mat, i) => (
              <Link to="/products" key={i} className="group block" style={{ textDecoration: 'none' }}>
                <div className="overflow-hidden mb-3" style={{ height: '280px', background: 'var(--cream-2)' }}>
                  <img loading="lazy" decoding="async" src={mat.img} alt={mat.label} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="serif text-lg" style={{ color: 'var(--espresso)' }}>{mat.label}</p>
                <p className="eyebrow mt-1" style={{ color: 'var(--muted)', fontSize: '10px' }}>{mat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <TestimonialCard />

      {/* ── OUR STORY ── */}
      <section style={{ background: 'var(--cream-2)' }}>
        <div className="container-site py-0">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="py-16 md:py-24 md:pr-16 order-2 md:order-1">
              <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>OUR STORY</p>
              <h2 className="serif mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Made for the trade,<br /><em>built on craft.</em></h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, marginBottom: '20px' }}>
                We began in 2008 with a simple belief — that quality hijabs should be accessible to every retailer and distributor worldwide. Every fabric is chosen for how it drapes, how it breathes, and how it stays with your customers through a long, ordinary, beautiful day.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85, marginBottom: '36px' }}>
                A factory built on precision — and we're so glad you're here.
              </p>
              <Link to="/about" className="btn-espresso">Read Our Story</Link>
            </div>
            <div className="order-1 md:order-2">
              <img loading="lazy" decoding="async" src="/assets/images/story-model.webp" alt="Yiwu Yiling Clothing hijab manufacturer since 2008" className="w-full object-cover object-top" style={{ maxHeight: '600px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site py-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'FREE SAMPLES', desc: 'Pre-production samples for every new style. Assess quality before bulk.' },
              { title: 'THE YILING GUARANTEE', desc: 'Defect rate below 0.3%. We replace or refund any quality issues.' },
              { title: 'CONSIDERED MATERIALS', desc: 'Modal, satin, chiffon, jersey, and cotton — finished with care in Yiwu.' },
            ].map((item, i) => (
              <div key={i} className="px-4">
                <p className="eyebrow mb-3" style={{ color: 'var(--espresso)' }}>{item.title}</p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: 'var(--cream-3)' }}>
        <div className="container-site py-16 text-center" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>FROM OUR FACTORY TO YOURS</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)' }}>Stay ahead of the season.</h2>
          <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '28px' }}>
            New fabric drops, trend reports, and wholesale pricing updates — delivered to your inbox.
          </p>
          <form className="flex gap-0 max-w-sm mx-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 text-sm"
              style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRight: 'none', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }}
            />
            <button type="submit" className="btn-espresso px-6 py-3" style={{ fontSize: '11px' }}>JOIN</button>
          </form>
          <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '12px' }}>Unsubscribe anytime. We'll only ever send the good stuff.</p>
        </div>
      </section>

      <FooterCTA />
    </main>
  );
}
