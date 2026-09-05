import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterCTA() {
  return (
    <section style={{ background: 'var(--espresso)' }} data-component="footer-cta">
      <div className="container-site py-20 md:py-28 text-center">
        <p className="eyebrow mb-6" style={{ color: 'rgba(248,244,239,0.55)' }}>Ready to source?</p>
        <h2
          className="serif mb-8"
          style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', color: 'var(--cream)', maxWidth: '680px', margin: '0 auto 32px' }}
        >
          Get factory-direct pricing<br /><em>within 24 hours.</em>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" style={{
            background: 'var(--cream)', color: 'var(--espresso)',
            fontFamily: "'Jost', sans-serif", fontSize: '12px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.20em',
            padding: '14px 36px', textDecoration: 'none', display: 'inline-block',
            transition: 'opacity 0.2s'
          }}>
            Request a Quote
          </Link>
          <a href="https://wa.me/8615088248404?text=Hi%2C%20I%27m%20interested%20in%20your%20custom%20hijab%20manufacturing.%20Could%20you%20share%20your%20catalog%20and%20MOQ%3F" target="_blank" rel="noopener noreferrer" style={{
            background: '#25D366', color: '#fff',
            fontFamily: "'Jost', sans-serif", fontSize: '12px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.20em',
            padding: '14px 36px', textDecoration: 'none', display: 'inline-block',
          }}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
