import React from 'react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/cta/FooterCTA';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Seo, { orgSchema } from '../components/seo/Seo';

export default function HomePage() {

  return (
    <main style={{ background: 'var(--cream)' }}>
      <Seo
        title="Hijab Manufacturer & Wholesale Supplier | Yiling"
        description="Custom printed modal hijab manufacturer in Yiwu, China. OEM and private label for Instagram brands and boutiques. Custom Pantone, custom print, custom hemming. MOQ 100 pcs."
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
                Your print.<br /><em>Our modal.</em>
               </h1>
               <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--espresso-light)', maxWidth: '420px', marginBottom: '36px' }}>
                 Custom printed modal hijabs, Pantone-matched solid colours, jersey modal basics, and bespoke hemming — all from one factory in Yiwu. MOQ from 100 pcs.
               </p>
               <div className="flex flex-wrap gap-4">
                 <Link to="/products" className="btn-espresso">View Collections</Link>
                 <Link to="/custom-oem" className="btn-outline">Custom / OEM</Link>
               </div>
               <p className="eyebrow mt-6" style={{ fontSize: '11px', color: 'var(--muted)' }}>Custom Printed Modal · Factory Direct</p>
            </div>
            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <img loading="lazy" decoding="async"
                src="/assets/images/product-hero-01.webp"
                alt="Custom printed modal hijab manufacturer — factory direct from Yiwu China"
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
              'Buyers in USA · UK · Canada · Indonesia · Australia · Europe',
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
              { label: 'All Products', count: '12 styles', img: '/assets/images/product-hero-01.webp', link: '/products' },
              { label: 'Custom / OEM', count: 'Any design', img: '/assets/images/product-hero-05.webp', link: '/custom-oem' },
              { label: 'Custom Printed Modal', count: '3 styles', img: '/assets/images/modal-printed-01.webp', link: '/products' },
              { label: 'Jersey Modal', count: '3 colourways', img: '/assets/images/jersey-modal-01.webp', link: '/products' },
              { label: 'Custom Pantone Modal', count: '3 colourways', img: '/assets/images/pantone-modal-01.webp', link: '/products' },
              { label: 'Custom Hemming', count: '3 styles', img: '/assets/images/hemming-custom-01.webp', link: '/products' },
            ].map((cat, i) => (
              <Link to={cat.link} key={i} className="group relative overflow-hidden block" style={{ textDecoration: 'none' }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--cream-2)' }}>
                  <img loading="lazy" decoding="async" src={cat.img} alt={cat.label} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
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
               <h2 className="serif mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>The Yiling Sample Pack</h2>
              <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '28px' }}>
                 Three custom modal options — printed modal, Pantone solid, and jersey modal — in a sample pack to assess quality and colour accuracy before placing a bulk order. From 30 pcs per style.
               </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="serif text-3xl" style={{ color: 'var(--espresso)' }}>From $89</span>
                <span className="eyebrow" style={{ color: 'var(--muted)', textDecoration: 'line-through' }}>$120</span>
                <span style={{ background: 'var(--espresso)', color: 'var(--cream)', fontSize: '11px', fontWeight: 600, padding: '3px 10px', letterSpacing: '0.1em' }}>SAVE 26%</span>
              </div>
              <Link to="/contact" className="btn-espresso">Request Starter Bundle</Link>
            </div>
            <div className="order-1 md:order-2">
              <img loading="lazy" decoding="async" src="/assets/images/product-hero-06.webp" alt="Custom modal hijab sample pack — printed, Pantone, jersey modal" className="w-full object-cover" style={{ maxHeight: '480px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── LAST CALL BANNER ── */}
      <section style={{ background: 'var(--cream-2)' }}>
        <div className="container-site py-0">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="order-1 md:order-1">
              <img loading="lazy" decoding="async" src="/assets/images/product-hero-03.webp" alt="OEM custom printed modal hijab manufacturing — private label from Yiwu" className="w-full object-cover object-top" style={{ maxHeight: '520px' }} />
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
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>OUR CUSTOM COLLECTIONS</p>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '40px', maxWidth: '500px' }}>
            Every collection made to your specification — your print, your colour, your edge finish.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Custom Printed Modal', count: '3 styles', img: '/assets/images/modal-printed-01.webp' },
              { label: 'Jersey Modal', count: '3 colourways', img: '/assets/images/jersey-modal-01.webp' },
              { label: 'Custom Pantone Modal', count: '3 colourways', img: '/assets/images/pantone-modal-01.webp' },
              { label: 'Custom Hemming', count: '3 styles', img: '/assets/images/hemming-custom-01.webp' },
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
              { title: 'CUSTOM MODAL SPECIALIST', desc: 'Custom printed modal, jersey modal, Pantone-matched solid colours, and bespoke hemming — all from one factory in Yiwu.' },
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
