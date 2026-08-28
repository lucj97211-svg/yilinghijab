import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Seo from '../components/seo/Seo';

const filters = ['ALL', 'EVERYDAY DRAPE', 'OCCASION', 'QUICK & EASY', 'LAYERING'];

const videos = [
  { platform: 'YOUTUBE', title: 'How to style a custom printed modal hijab — everyday drape', creator: 'Yiling Hijab · Everyday Drape', url: 'https://www.youtube.com/@culturehijab', category: 'EVERYDAY DRAPE' },
  { platform: 'YOUTUBE', title: 'Three go-to jersey hijab wraps', creator: 'Yiling Hijab · Everyday Drape', url: 'https://www.youtube.com/@culturehijab', category: 'EVERYDAY DRAPE' },
  { platform: 'TIKTOK', title: 'Satin hijab for Eid — step by step', creator: 'Yiling Hijab · Occasion', url: 'https://www.tiktok.com', category: 'OCCASION' },
  { platform: 'YOUTUBE', title: 'Occasion & formal hijab styling guide', creator: 'Yiling Hijab · Occasion', url: 'https://www.youtube.com/@culturehijab', category: 'OCCASION' },
  { platform: 'TIKTOK', title: 'Quick hijab in under 2 minutes — jersey mini', creator: 'Yiling Hijab · Quick & Easy', url: 'https://www.tiktok.com', category: 'QUICK & EASY' },
  { platform: 'INSTAGRAM', title: 'The no-pin wrap tutorial', creator: 'Yiling Hijab · Quick & Easy', url: 'https://www.instagram.com', category: 'QUICK & EASY' },
  { platform: 'YOUTUBE', title: 'How to layer a modal hijab for maximum coverage', creator: 'Yiling Hijab · Layering', url: 'https://www.youtube.com/@culturehijab', category: 'LAYERING' },
  { platform: 'INSTAGRAM', title: 'Full coverage layering with modal', creator: 'Yiling Hijab · Layering', url: 'https://www.instagram.com', category: 'LAYERING' },
];

const stylingFAQ = [
  { q: 'Which hijab fabric is best for beginners?', a: 'Jersey modal is the easiest fabric to start with. Its gentle four-way stretch grips naturally, so wraps hold their place without constant adjusting, and the modal blend adds a soft hand feel from the first wear.' },
  { q: 'How do I keep my hijab from slipping?', a: 'Start with a foundation: a seamless or full-coverage under scarf gives the fabric something to grip. jersey modal naturally stays put longer than smooth woven fabrics.' },
  { q: 'Which hijab should I recommend for occasions?', a: 'Custom Pantone modal in a deeper colourway is ideal for occasions. The soft sheen of a quality modal dye photographs beautifully and pairs well with a full-coverage under scarf.' },
  { q: 'How should customers care for hijabs?', a: 'Hand wash cold, or machine wash on a gentle cycle inside a mesh bag. Lay flat or hang to dry. Jersey relaxes back to a soft, even drape; satin and chiffon should be kept off high heat.' },
];

const platformColors = { YOUTUBE: '#FF0000', TIKTOK: '#000000', INSTAGRAM: '#E4405F' };

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
  const [activeFilter, setActiveFilter] = useState('ALL');
  const shown = videos.filter(v => activeFilter === 'ALL' || v.category === activeFilter);

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Hijab Styling Guide — Wrap Tutorials by Fabric | Yiling Hijab"
        description="How to wrap chiffon, jersey, satin and modal hijabs. Everyday drape, occasion styling, quick wraps and layering techniques for retailers and end customers."
        path="/styling-guide"
      />
      {/* HERO */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '640px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>THE STYLING GUIDE</p>
          <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Hijab tutorials, by style.</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '32px' }}>
            Watch how to wrap, drape and style our hijabs — real tutorials gathered in one place. Filter by the style you want, then share with your customers.
          </p>
          {/* Filter chips */}
          <div className="flex gap-2 flex-wrap justify-center">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className="eyebrow px-5 py-2"
                style={{
                  background: activeFilter === f ? 'var(--espresso)' : 'transparent',
                  color: activeFilter === f ? 'var(--cream)' : 'var(--muted)',
                  border: `1px solid ${activeFilter === f ? 'var(--espresso)' : 'var(--border)'}`,
                  cursor: 'pointer', fontSize: '11px',
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            {shown.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="group block" style={{ textDecoration: 'none' }}>
                <div className="relative overflow-hidden mb-4" style={{ background: 'var(--cream-2)', height: '240px' }}>
                  <img loading="lazy" decoding="async" src="/assets/images/factory-video-thumbnail.webp" alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div style={{ width: '56px', height: '56px', background: 'rgba(43,37,34,0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid var(--cream)', marginLeft: '4px' }} />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 eyebrow px-3 py-1" style={{ background: platformColors[v.platform] || 'var(--espresso)', color: '#fff', fontSize: '10px' }}>
                    {v.platform}
                  </span>
                </div>
                <p className="serif text-xl mb-1 group-hover:opacity-70 transition-opacity" style={{ color: 'var(--espresso)' }}>{v.title}</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{v.creator}</p>
              </a>
            ))}
          </div>
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
