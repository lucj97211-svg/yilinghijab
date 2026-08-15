import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';

const topics = ['General question', 'An order or shipping', 'Returns or quality issue', 'OEM / wholesale enquiry', 'Something else'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Seo
        title="Contact Our Hijab Factory — Request a Quote | Yiling Hijab"
        description="Get a wholesale hijab quote from our Yiwu factory. WhatsApp +86 150 8824 8404 or email peri@wennuanfactory.com. Free samples, MOQ from 100 pieces."
        path="/contact"
      />
      {/* HERO */}
      <section className="section-padding text-center" style={{ background: 'var(--cream-2)', paddingBottom: '48px' }}>
        <div className="container-site" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>CONTACT</p>
          <p className="eyebrow mb-3" style={{ color: 'var(--espresso)' }}>WE'RE LISTENING</p>
          <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>Get in touch.</h1>
          <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>
            Have a product brief, a styling question, or just want to say hello? We're friendly, we read every message, and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="serif mb-2" style={{ fontSize: '1.8rem' }}>Send us a note</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px' }}>
                Fill out the form and we'll reply by email — usually well within a day.
              </p>

              {submitted ? (
                <div className="text-center py-16">
                  <p className="serif text-3xl mb-4">Thank you.</p>
                  <p style={{ fontSize: '15px', color: 'var(--espresso-light)' }}>We've received your message and will reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
                  <div>
                    <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>YOUR NAME</label>
                    <input type="text" required placeholder="First & last"
                      className="w-full px-4 py-3 text-sm"
                      style={{ border: '1px solid var(--border)', background: 'var(--cream)', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }} />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>EMAIL</label>
                    <input type="email" required placeholder="you@email.com"
                      className="w-full px-4 py-3 text-sm"
                      style={{ border: '1px solid var(--border)', background: 'var(--cream)', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }} />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>PHONE (OPTIONAL)</label>
                    <input type="tel" placeholder="So we can reach you faster"
                      className="w-full px-4 py-3 text-sm"
                      style={{ border: '1px solid var(--border)', background: 'var(--cream)', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }} />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>WHAT'S THIS ABOUT?</label>
                    <select className="w-full px-4 py-3 text-sm"
                      style={{ border: '1px solid var(--border)', background: 'var(--cream)', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)', appearance: 'none' }}>
                      {topics.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>MESSAGE</label>
                    <textarea required rows={5} placeholder="Tell us how we can help…"
                      className="w-full px-4 py-3 text-sm resize-none"
                      style={{ border: '1px solid var(--border)', background: 'var(--cream)', outline: 'none', fontFamily: "'Jost',sans-serif", color: 'var(--espresso)' }} />
                  </div>
                  <button type="submit" className="btn-espresso w-full py-4">SEND MESSAGE</button>
                  <p style={{ fontSize: '11px', color: 'var(--muted)' }}>We'll only use your details to reply. No lists, no fuss.</p>
                </form>
              )}
            </div>

            {/* Other ways */}
            <div>
              <h2 className="serif mb-8" style={{ fontSize: '1.8rem' }}>Other ways to reach us</h2>
              <div className="flex flex-col gap-8">
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '28px' }}>
                  <p className="eyebrow mb-2" style={{ color: 'var(--muted)' }}>GENERAL & ORDERS</p>
                  <a href="mailto:peri@wennuanfactory.com" className="serif text-2xl block mb-2" style={{ color: 'var(--espresso)', textDecoration: 'none' }}>peri@wennuanfactory.com</a>
                  <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Questions, orders, OEM briefs, and everything in between.</p>
                </div>
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '28px' }}>
                  <p className="eyebrow mb-2" style={{ color: 'var(--muted)' }}>WHATSAPP</p>
                  <a href="https://wa.me/8615088248404" className="serif text-2xl block mb-2" style={{ color: 'var(--espresso)', textDecoration: 'none' }}>+86 150-8824-8404</a>
                  <p style={{ fontSize: '13px', color: 'var(--muted)' }}>For quick questions and sample requests.</p>
                </div>
                <div>
                  <p className="eyebrow mb-2" style={{ color: 'var(--muted)' }}>REPLY TIME</p>
                  <p className="serif text-2xl mb-2" style={{ color: 'var(--espresso)' }}>Within 24 hours</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Every day of the week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOU MIGHT FIND IT FASTER */}
      <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-site py-16">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>YOU MIGHT FIND IT FASTER</p>
          <h2 className="serif mb-2" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Answers, right away</h2>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '40px' }}>
            A lot of questions have a quick answer waiting — these cover the ones we hear most.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'SHIPPING', desc: 'Lead times, freight options, and FOB Yiwu pricing.', to: '/faq#ordering' },
              { label: 'RETURNS', desc: 'Our quality guarantee and how defect claims are handled.', to: '/faq#returns' },
              { label: 'OEM', desc: 'Custom labels, prints, and private label production.', to: '/custom-oem' },
            ].map((card, i) => (
              <div key={i} className="p-8" style={{ background: 'var(--cream)' }}>
                <p className="eyebrow mb-3" style={{ color: 'var(--espresso)' }}>{card.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--espresso-light)', lineHeight: 1.75, marginBottom: '20px' }}>{card.desc}</p>
                <Link to={card.to} style={{ fontSize: '11px', fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px' }}>
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
