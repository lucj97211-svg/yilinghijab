import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';

export default function NotFoundPage() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Seo title="Page Not Found | Yiling Hijab" description="The page you were looking for doesn't exist." path="/404" />
      <div className="container-site text-center" style={{ maxWidth: '560px', padding: '80px 24px' }}>
        <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>404</p>
        <h1 className="serif mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: 'var(--espresso)' }}>
          Page not found.
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, marginBottom: '40px' }}>
          The page you were looking for has moved or doesn't exist. Start from the homepage or browse our collections.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn-espresso" style={{ padding: '14px 32px', fontSize: '12px' }}>
            Back to Home
          </Link>
          <Link to="/products" style={{
            padding: '14px 32px', fontSize: '12px',
            fontFamily: "'Jost', sans-serif", fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.18em',
            border: '1px solid var(--espresso)', color: 'var(--espresso)',
            textDecoration: 'none', display: 'inline-block',
          }}>
            Browse Products
          </Link>
          <a
            href="https://wa.me/8615088248404?text=Hi%2C%20I%27m%20interested%20in%20your%20custom%20hijab%20manufacturing.%20Could%20you%20share%20your%20catalog%20and%20MOQ%3F"
            target="_blank" rel="noopener noreferrer"
            style={{
              padding: '14px 32px', fontSize: '12px',
              fontFamily: "'Jost', sans-serif", fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              background: '#25D366', color: '#fff',
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            WhatsApp Us
          </a>
        </div>
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
          <p className="eyebrow mb-5" style={{ color: 'var(--muted)' }}>QUICK LINKS</p>
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { label: 'Custom OEM', to: '/custom-oem' },
              { label: 'Contact', to: '/contact' },
              { label: 'Blog', to: '/blog' },
              { label: 'FAQ', to: '/faq' },
            ].map(l => (
              <Link key={l.label} to={l.to} style={{ fontSize: '13px', color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
