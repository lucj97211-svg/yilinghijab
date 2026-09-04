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
      { q: 'How long does production take?', a: 'For in-stock styles: 3–7 business days. For custom/OEM orders: samples in 7 days, bulk production in 10–15 days after sample approval.' },
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
      { q: 'Can I request a pre-production sample?', a: 'Yes. We strongly recommend approving a sample before bulk production. Sample lead time is about 7 days. Sample fees are credited back against your first bulk order.' },
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
      { q: 'What is the MOQ for OEM orders?', a: 'The MOQ for OEM and private label production is 100 pieces per colourway — the same as our standard catalogue. Woven label production alone has a 500-piece minimum, so most brands order labels once and draw them down across several production runs.' },
      { q: 'Can I use my own fabric?', a: 'We prefer to source fabric ourselves to ensure quality control, but we can work with buyer-supplied fabric for orders over 1,000 pieces. Additional inspection fees may apply.' },
      { q: 'Do you sign NDAs or exclusivity agreements?', a: 'Yes. We regularly sign NDAs for design protection and can offer regional or market exclusivity for large-volume OEM partners. Contact us to discuss terms.' },
      { q: 'What artwork file formats do you accept for custom prints?', a: 'We accept AI, EPS, PDF, PSD, and TIFF files. For print reproduction we need at least 300 DPI at final print size, with Pantone references for any brand-critical colours. If you only have a low-resolution reference, our design team can redraw the artwork to production standard.' },
      { q: 'Do you charge a setup or tooling fee for custom prints?', a: 'No setup or tooling fee. Custom artwork printing, woven labels, hang tags, and retail packaging are quoted into the unit price rather than charged as a separate mould or plate fee.' },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Payment',
    intro: 'What things cost, how tiers work, and how payment is handled.',
    items: [
      { q: 'How much does a custom hijab cost per piece?', a: 'Factory-direct pricing starts at $3.20 per piece for jersey undercaps, $4.80 for jersey modal hijabs, and $5.80 for custom printed modal hijabs, all at the 100-piece MOQ. Unit price drops at each volume tier, down to $2.40, $3.72, and $4.50 respectively at 5,000+ pieces.' },
      { q: 'How do the volume price tiers work?', a: 'Every style has four tiers: 100–499 pieces, 500–1,999, 2,000–4,999, and 5,000+. The tier is calculated per colourway, not per total order, so ordering 500 pieces of one colour reaches a better price than 100 pieces across five colours.' },
      { q: 'What payment terms do you offer?', a: 'Standard terms are 30% deposit to start production and 70% balance before shipment. We accept bank transfer (T/T), and established partners can discuss L/C terms for large orders. Sample fees are payable upfront and credited against your first bulk order.' },
      { q: 'Are there hidden costs beyond the unit price?', a: 'The quoted unit price covers fabric, production, standard finishing, and polybag packing. Shipping, import duties, and any specialty packaging are quoted separately so you can see exactly what you are paying for.' },
    ],
  },
  {
    id: 'factory',
    label: 'About the Factory',
    intro: 'Who we are, where we produce, and how to verify us.',
    items: [
      { q: 'Are you a factory or a trading company?', a: 'We are a manufacturer. Yiwu Yiling Clothing Co., Ltd. has operated its own production facility in Yiwu, Zhejiang Province since 2008. Cutting, sewing, printing coordination, and QC all happen under our own management rather than being brokered out.' },
      { q: 'Can I visit the factory or arrange a video inspection?', a: 'Yes. Buyers are welcome to visit our Yiwu facility by appointment. If travel is not practical, we run live video walkthroughs of the production line and can film first-piece approval before bulk runs.' },
      { q: 'How long have you been manufacturing hijabs?', a: 'Since 2008. We hold a 4.9 out of 5 rating across 283 verified buyer reviews, largely from repeat wholesale and private-label customers.' },
      { q: 'Which markets do you already ship to?', a: 'We regularly ship to the USA, UK, Canada, Australia, Indonesia, Malaysia, the UAE, Saudi Arabia, Germany, France, and the Netherlands, so we are familiar with the documentation and labelling expectations in those markets.' },
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
      {/* Rendered even when collapsed so crawlers and AI engines can read
          the answer text — visibility is handled with CSS, not unmounting. */}
      <div
        hidden={!open}
        style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, paddingBottom: '20px', maxWidth: '640px' }}
      >
        {a}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeTopic, setActiveTopic] = useState('ordering');

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Wholesale Hijab FAQ — MOQ, Pricing, Lead Times"
        description="25 answers for hijab wholesale buyers: 100 pc MOQ, volume pricing from $3.20, 7-day samples, 10-15 day bulk lead time, OEM and private label terms."
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

            {/* Content — every topic is rendered so the full Q&A set is in
                the HTML; inactive topics are hidden rather than unmounted. */}
            <div className="md:col-span-3">
              {topics.map(t => (
                <div key={t.id} hidden={t.id !== activeTopic}>
                  <h2 className="serif mb-2" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>{t.label}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px' }}>{t.intro}</p>
                  <div>
                    {t.items.map((item, i) => (
                      <AccordionItem key={i} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
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
