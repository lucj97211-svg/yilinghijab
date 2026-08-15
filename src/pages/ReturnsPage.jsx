import React from 'react';
import Seo from '../components/seo/Seo';

export default function ReturnsPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Returns & Quality Guarantee | Yiling Hijab Wholesale"
        description="Our quality guarantee and return policy for wholesale hijab orders. Three-stage QC, defect handling, replacement terms and dispute resolution."
        path="/returns"
      />
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site" style={{ maxWidth: '600px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>HELP & CARE</p>
          <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Returns & exchanges</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '40px' }}>
            We stand behind everything we make. If an order arrives with manufacturing defects, we make it right — no questions asked.
          </p>

          {/* 3 steps */}
          <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
            {[
              { n: '01', title: 'REPORT WITHIN 7 DAYS', body: 'Email us with photos of the defect within 7 days of receiving your shipment.' },
              { n: '02', title: 'PACK AS IT ARRIVED', body: 'Defective items should be set aside in original packaging for inspection or return.' },
              { n: '03', title: 'WE MAKE IT RIGHT', body: 'We will replace the items or issue a credit note — at no additional cost to you.' },
            ].map((s, i) => (
              <div key={i} className="p-6" style={{ background: 'var(--cream)', border: '1px solid var(--border)' }}>
                <p className="serif text-3xl mb-2" style={{ color: 'var(--border)' }}>{s.n}</p>
                <p className="eyebrow mb-2" style={{ fontSize: '10px' }}>{s.title}</p>
                <p style={{ fontSize: '13px', color: 'var(--espresso-light)', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>ON THIS PAGE</p>
              <nav className="flex flex-col gap-3">
                {['The Guarantee', 'Before you return', 'International returns', 'Damaged or incorrect', 'Your refund'].map((item, i) => (
                  <span key={i} style={{ fontSize: '14px', color: 'var(--espresso-light)', cursor: 'pointer' }}>{item}</span>
                ))}
              </nav>
            </div>
            <div className="md:col-span-3 flex flex-col gap-12">
              {[
                {
                  title: 'The Yiling Quality Guarantee',
                  body: 'Every order is covered by our quality guarantee. We maintain a defect rate below 0.3% through three-stage quality control. If defective items arrive, we replace them or issue a full credit note — and we cover any return freight for verified manufacturing defects.',
                },
                {
                  title: 'Before you return',
                  body: 'Contact us within 7 days of receiving your shipment at peri@wennuanfactory.com. Include your order number and clear photos of the defects. We\'ll confirm the claim and arrange next steps. Please do not return items without prior confirmation from our team.',
                },
                {
                  title: 'International returns',
                  body: 'For confirmed defect claims, we will arrange collection via our freight partner or credit the return shipping cost against your next order. Return address and logistics will be confirmed by our team per case.',
                },
                {
                  title: 'Damaged, defective or incorrect',
                  body: 'If items arrive damaged in transit, defective due to manufacturing error, or do not match your approved sample — contact us at peri@wennuanfactory.com and we will make it right.',
                },
                {
                  title: 'Your refund or replacement',
                  body: 'Replacements ship within 7–14 business days of claim confirmation. Credit notes are issued within 5 business days and can be applied to your next order. We do not accept returns for buyer change-of-mind, color-screen variation, or non-defective goods.',
                },
              ].map((section, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '40px' }}>
                  <h2 className="serif mb-4" style={{ fontSize: '1.5rem' }}>{section.title}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.85 }}>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-site py-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>NEED A HAND?</p>
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>We'll always make it right.</h2>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', marginBottom: '24px' }}>
            If you're unsure about anything, just reach out — we reply within 24 hours.
          </p>
          <a href="mailto:peri@wennuanfactory.com" className="eyebrow" style={{ color: 'var(--espresso)', fontSize: '13px', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px' }}>
            PERI@WENNUANFACTORY.COM
          </a>
        </div>
      </section>
    </div>
  );
}
