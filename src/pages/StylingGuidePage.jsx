import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Seo from '../components/seo/Seo';

const stylingFAQ = [
  { q: 'Which hijab fabric is best for beginners?', a: 'Jersey modal is the easiest fabric to start with. Its gentle four-way stretch grips naturally, so wraps hold their place without constant adjusting, and the modal blend adds a soft hand feel from the first wear.' },
  { q: 'How do I keep my hijab from slipping?', a: 'Start with a foundation: a seamless or full-coverage under scarf gives the fabric something to grip. jersey modal naturally stays put longer than smooth woven fabrics.' },
  { q: 'Which hijab should I recommend for occasions?', a: 'Custom Pantone modal in a deeper colourway is ideal for occasions. The soft sheen of a quality modal dye photographs beautifully and pairs well with a full-coverage under scarf.' },
  { q: 'How should customers care for hijabs?', a: 'Hand wash cold, or machine wash on a gentle cycle inside a mesh bag. Lay flat or hang to dry. Jersey relaxes back to a soft, even drape; modal should be kept off high heat.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--espresso)', fontFamily: "'Jost',sans-serif" }}>{q}</span>
        <ChevronDown size={18} color="var(--muted)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
      </button>
      {open && <div style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, paddingBottom: '20px' }}>{a}</div>}
    </div>
  );
}

export default function StylingGuidePage() {
  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Hijab Styling Guide — Wrap Techniques by Fabric | Yiling Hijab"
        description="How to wrap and style custom printed modal and jersey hijabs. Everyday drape, occasion styling, quick wraps and layering techniques for retailers and end customers."
        path="/styling-guide"
      />
      {/* HERO */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '640px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>THE STYLING GUIDE</p>
          <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Hijab styling, by fabric.</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '32px' }}>
            Practical guidance on how to wrap, drape and style our custom printed modal and jersey hijabs — organised by fabric and occasion. Share with your customers as part of your brand's styling resource.
          </p>
        </div>
      </section>

      {/* NEW TO HIJAB */}
      <section style={{ background: 'var(--espresso)' }}>
        <div className="container-site py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4" style={{ color: 'rgba(248,244,239,0.5)' }}>NEW TO WHOLESALE? START HERE</p>
              <h2 className="serif mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--cream)' }}>Begin with the Yiling Starter Bundle</h2>
              <p style={{ fontSize: '15px', color: 'rgba(248,244,239,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                Three core fabrics — jersey, chiffon, and satin — in a mixed sample pack. Test quality before placing a bulk order. From 30 pcs per fabric.
              </p>
              <Link to="/contact" style={{ background: 'var(--cream)', color: 'var(--espresso)', fontFamily: "'Jost',sans-serif", fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.20em', padding: '14px 32px', textDecoration: 'none', display: 'inline-block' }}>
                Request Starter Bundle →
              </Link>
            </div>
            <div>
              <img loading="lazy" decoding="async" src="/assets/images/starter-flatlay.webp" alt="Wholesale hijab starter sample pack for B2B buyers, MOQ 100 pcs" className="w-full object-cover" style={{ maxHeight: '360px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PICK YOUR FABRIC */}
      <section className="section-padding">
        <div className="container-site">
          <p className="eyebrow mb-6" style={{ color: 'var(--muted)' }}>PICK YOUR FABRIC</p>
          <div className="flex gap-3 flex-wrap mb-10">
            {[
              { label: 'CUSTOM PRINTED MODAL', to: '/products' },
              { label: 'MODAL', to: '/products' },
              { label: 'JERSEY MODAL', to: '/products' },
              { label: 'PANTONE MODAL', to: '/products' },
              { label: 'CUSTOM HEMMING', to: '/products' },
            ].map((f, i) => (
              <Link key={i} to={f.to} className="eyebrow px-6 py-3"
                style={{ border: '1px solid var(--border)', color: 'var(--espresso)', textDecoration: 'none', fontSize: '11px' }}>
                {f.label}
              </Link>
            ))}
          </div>

          {/* GOOD TO KNOW */}
          <p className="eyebrow mb-3 mt-16" style={{ color: 'var(--muted)' }}>GOOD TO KNOW</p>
          <h2 className="serif mb-10" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Styling questions</h2>
          <div style={{ maxWidth: '640px' }}>
            {stylingFAQ.map((item, i) => <FAQItem key={i} {...item} />)}
          </div>
        </div>
      </section>

      {/* THE JOURNAL */}
      <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>THE JOURNAL</p>
          <div className="flex items-end justify-between mb-10">
            <h2 className="serif" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Styling notes & fabric guides</h2>
            <Link to="/blog" style={{ fontSize: '11px', fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px' }}>
              Visit the Journal
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: 'JULY 20, 2026', title: 'How to Choose a Wholesale Hijab Supplier', excerpt: 'Key factors every importer should evaluate before placing a bulk hijab order — from MOQ to certifications.', to: '/blog' },
              { date: 'JULY 10, 2026', title: 'Custom Printed vs Pantone Modal: Which Suits Your Brand?', excerpt: 'A practical comparison of the two most popular hijab fabrics for B2B buyers.', to: '/blog' },
              { date: 'JUNE 28, 2026', title: 'OEM Hijab Manufacturing: A Step-by-Step Guide', excerpt: 'Everything you need to know about launching a private-label hijab line.', to: '/blog' },
            ].map((post, i) => (
              <div key={i}>
                <p style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '8px' }}>{post.date}</p>
                <h3 className="serif text-xl mb-3" style={{ lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--espresso-light)', lineHeight: 1.75, marginBottom: '16px' }}>{post.excerpt}</p>
                <Link to={post.to} style={{ fontSize: '11px', fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px' }}>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
