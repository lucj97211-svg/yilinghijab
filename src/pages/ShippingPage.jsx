import React from 'react';
import Seo from '../components/seo/Seo';

export default function ShippingPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Hijab Wholesale Shipping & Lead Times | Yiling Hijab"
        description="Express, air and ocean freight options from Yiwu. Lead times, incoterms, export documentation and landed-cost guidance for wholesale hijab orders."
        path="/shipping"
      />
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>HELP & CARE</p>
          <h1 className="serif mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Shipping</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>
            We're so glad to have you sourcing with us — here's exactly how your order finds its way to you, wherever in the world you are.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>ON THIS PAGE</p>
              <nav className="flex flex-col gap-3">
                {['Within China (FOB)', 'International freight', 'Processing & timing', 'Duties & customs'].map((item, i) => (
                  <span key={i} style={{ fontSize: '14px', color: 'var(--espresso-light)', cursor: 'pointer' }}>{item}</span>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3 flex flex-col gap-16">
              {/* FOB */}
              <div>
                <h2 className="serif mb-4" style={{ fontSize: '1.8rem' }}>FOB Yiwu & International</h2>
                <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '28px' }}>
                  We quote FOB Yiwu as standard. Door-to-door shipping is available via DHL, FedEx, or sea freight — quoted based on volume and destination.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: 'EXPRESS (DHL/FedEx)', price: 'Quoted by weight', time: '3–7 business days' },
                    { label: 'SEA FREIGHT (LCL)', price: 'From $80 CBM', time: '15–35 days' },
                    { label: 'SEA FREIGHT (FCL)', price: 'By quotation', time: '20–40 days' },
                  ].map((card, i) => (
                    <div key={i} className="p-6" style={{ background: 'var(--cream-2)', border: '1px solid var(--border)' }}>
                      <p className="eyebrow mb-3" style={{ fontSize: '10px' }}>{card.label}</p>
                      <p className="serif text-2xl mb-1">{card.price}</p>
                      <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{card.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing */}
              <div>
                <h2 className="serif mb-4" style={{ fontSize: '1.8rem' }}>Processing & timing</h2>
                <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>
                  In-stock orders are packed and handed to the freight forwarder within 3–5 business days. OEM/production orders ship after quality sign-off — typically 25–35 days from sample approval. Delivery estimates begin once your order leaves our warehouse in Yiwu.
                </p>
              </div>

              {/* Duties */}
              <div>
                <h2 className="serif mb-4" style={{ fontSize: '1.8rem' }}>Duties & customs</h2>
                <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>
                  Import duties and taxes are the buyer's responsibility and vary by country. We provide full commercial invoices, packing lists, and CO (Certificate of Origin) for customs clearance. For DDP (Delivered Duty Paid) shipping, please ask for a quote — available for select destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STILL HAVE A QUESTION */}
      <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-site py-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>STILL HAVE A QUESTION?</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>We're here, and happy to help.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '24px' }}>
            Reach our team any time and we'll get back to you within 24 hours.
          </p>
          <a href="mailto:peri@wennuanfactory.com" className="eyebrow" style={{ color: 'var(--espresso)', fontSize: '13px', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px' }}>
            PERI@WENNUANFACTORY.COM
          </a>
        </div>
      </section>
    </div>
  );
}
