import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Seo, { faqSchema } from '../components/seo/Seo';

const topics = [
  {
    id: 'ordering',
    label: 'Orders & Shipping',
    intro: 'When your order leaves us, what it costs, and how long it takes.',
    items: [
      { q: 'What is the minimum order quantity (MOQ)?', a: 'Our standard MOQ is 100 pieces per style per color. For mixed-style orders, the total must reach 100 pieces. For OEM/custom orders, MOQ may vary depending on design complexity — contact us to discuss.' },
      { q: 'How do I place a wholesale order?', a: 'Fill out the inquiry form on our Contact page, or reach us directly on WhatsApp (+86 150-8824-8404). Our team will respond within 24 hours with a quotation and order sheet.' },
      { q: 'How long does production take?', a: 'For in-stock styles: 3–7 business days. For custom/OEM orders: samples in 7 days, bulk production in 25–35 days after sample approval.' },
      { q: 'Do you ship internationally?', a: 'Yes. We ship worldwide from Yiwu, China via DHL, FedEx, or sea freight depending on your order size and timeline. We can quote both door-to-door and FOB Yiwu.' },
      { q: 'Can I change or cancel my order?', a: 'For in-stock orders, please contact us within 24 hours of placing your order. For OEM/production orders, changes can be made before the cutting stage begins.' },
    ],
  },
  {
    id: 'returns',
    label: 'Returns & Quality',
    intro: 'Our quality guarantee, how issues are handled, and what to expect.',
    items: [
      { q: 'What is your quality guarantee?', a: 'We maintain a defect rate below 0.3%. Every order goes through three-stage quality control: incoming fabric inspection, in-line production checks, and final pre-shipment audit.' },
      { q: 'What if I receive defective items?', a: 'Contact us within 7 days of receiving your shipment with photos of the defects. We will replace defective items or issue a credit note — at no additional shipping cost to you.' },
      { q: 'Can I request a pre-production sample?', a: 'Yes. We strongly recommend samples before bulk orders. Sample lead time is 5–7 business days. Sample fees are credited back against your first bulk order.' },
      { q: 'What condition should returns be in?', a: 'Returns are accepted for manufacturing defects only. Items must be unworn, unwashed, and in original packaging. Please do not return items that have been used or altered.' },
    ],
  },
  {
    id: 'products',
    label: 'Products & Care',
    intro: 'Fabrics, sizing, care instructions, and customisation options.',
    items: [
      { q: 'What fabrics do you offer?', a: 'We produce hijabs in premium jersey, modal, chiffon, lustre satin, cotton, and crinkle chiffon. All fabrics are available in standard and custom colorways. Browse our Products page for current styles.' },
      { q: 'What are the standard hijab dimensions?', a: 'Standard sizes: Chiffon/Cotton: 180×90cm. Jersey/Modal: 180×70cm (standard) or 160×55cm (mini). Satin: 180×75cm. Custom sizes available on request with no minimum for OEM orders over 500 pieces.' },
      { q: 'How should buyers advise customers to care for the hijabs?', a: 'Hand wash cold or machine wash on a gentle cycle in a mesh bag. Lay flat or hang to dry. Cool iron if needed. Avoid high heat on satin and chiffon.' },
      { q: 'Can you match a specific color?', a: 'Yes — for OEM orders we can color-match to Pantone references or physical fabric swatches. Color matching is included for orders above 500 pieces per color.' },
    ],
  },
  {
    id: 'oem',
    label: 'OEM & Private Label',
    intro: 'Custom production, branding, and private label services.',
    items: [
      { q: 'Do you offer private label / OEM services?', a: 'Yes. We handle everything from fabric selection and pattern development to woven labels, hang tags, polybag packaging, and carton labelling. Your brand, our factory.' },
      { q: 'What is the MOQ for OEM orders?', a: 'The standard OEM MOQ is 300 pieces per design. For woven label production alone, minimum is 500 pieces. We can discuss lower MOQs for established partners.' },
      { q: 'Can I use my own fabric?', a: 'We prefer to source fabric ourselves to ensure quality control, but we can work with buyer-supplied fabric for orders over 1,000 pieces. Additional inspection fees may apply.' },
      { q: 'Do you sign NDAs or exclusivity agreements?', a: 'Yes. We regularly sign NDAs for design protection and can offer regional or market exclusivity for large-volume OEM partners. Contact us to discuss terms.' },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--espresso)', fontFamily: "'Jost', sans-serif", paddingRight: '24px' }}>{q}</span>
        <ChevronDown size={18} color="var(--muted)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, paddingBottom: '20px', maxWidth: '640px' }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeTopic, setActiveTopic] = useState('ordering');
  const current = topics.find(t => t.id === activeTopic);

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Wholesale Hijab FAQ — MOQ, Shipping, Samples | Yiling Hijab"
        description="Answers on hijab wholesale MOQ, pricing tiers, sample policy, lead times, shipping options, certifications and OEM requirements for B2B buyers."
        path="/faq"
        jsonLd={faqSchema(topics.flatMap(t => t.items))}
      />
      {/* HERO */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)', paddingBottom: '48px' }}>
        <div className="container-site" style={{ maxWidth: '600px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>HELP CENTER</p>
          <h1 className="serif mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Questions, answered.</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '32px' }}>
            Everything about orders, shipping, quality, and OEM. Browse by topic.
          </p>
          {/* Search bar */}
          <div className="flex max-w-sm mx-auto" style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}>
            <input
              type="text"
              placeholder="Search the help center..."
              className="flex-1 px-4 py-3 text-sm"
              style={{ background: 'transparent', border: 'none', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }}
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>TOPICS</p>
              <nav className="flex flex-col gap-0">
                {topics.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTopic(t.id)}
                    className="text-left py-3"
                    style={{
                      background: 'none',
                      border: 'none',
                      borderLeft: activeTopic === t.id ? '2px solid var(--espresso)' : '2px solid transparent',
                      paddingLeft: '16px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: activeTopic === t.id ? 'var(--espresso)' : 'var(--muted)',
                      fontFamily: "'Jost',sans-serif",
                      fontWeight: activeTopic === t.id ? 500 : 400,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <h2 className="serif mb-2" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>{current.label}</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px' }}>{current.intro}</p>
              <div>
                {current.items.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STILL HERE TO HELP */}
      <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-site py-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>STILL HERE TO HELP</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Didn't find what you were looking for?</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '32px' }}>
            Send us a note — we're friendly, and we read every message.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {[
              { label: 'GENERAL', val: 'peri@wennuanfactory.com', href: 'mailto:peri@wennuanfactory.com' },
              { label: 'WHATSAPP', val: '+86 150-8824-8404', href: 'https://wa.me/8615088248404' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="eyebrow mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
                <a href={item.href} style={{ fontSize: '15px', color: 'var(--espresso)' }}>{item.val}</a>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-espresso">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
