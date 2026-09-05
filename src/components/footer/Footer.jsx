import React from 'react';
import { Link } from 'react-router-dom';

const cols = [
  {
    title: 'SHOP',
    links: [
      { label: 'All Products', to: '/products' },
      { label: 'Custom Printed Modal', to: '/products' },
      { label: 'Jersey Modal', to: '/products' },
      { label: 'Custom Pantone Modal', to: '/products' },
      { label: 'Custom Hemming', to: '/products' },
      { label: 'Custom / OEM', to: '/custom-oem' },
    ],
  },
  {
    title: 'EXPLORE',
    links: [
      { label: 'New to Wholesale', to: '/contact' },
      { label: 'Styling Guide', to: '/styling-guide' },
      { label: 'Blog & Journal', to: '/blog' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  {
    title: 'THE HOUSE',
    links: [
      { label: 'About Yiling', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  {
    title: 'CARE',
    links: [
      { label: 'Shipping', to: '/shipping' },
      { label: 'Returns', to: '/returns' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact us', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--espresso)' }}>
      {/* Newsletter */}
      <div style={{ borderBottom: '1px solid rgba(248,244,239,0.1)' }}>
        <div className="container-site py-14 text-center" style={{ maxWidth: '520px' }}>
          <p className="eyebrow mb-3" style={{ color: 'rgba(248,244,239,0.45)', fontSize: '10px' }}>FROM OUR FACTORY TO YOURS</p>
          <h3 className="serif mb-3" style={{ color: 'var(--cream)', fontSize: '1.6rem' }}>Stay ahead of the season.</h3>
          <p style={{ fontSize: '13px', color: 'rgba(248,244,239,0.55)', lineHeight: 1.75, marginBottom: '24px' }}>
            New fabric drops, trend reports, and wholesale pricing — delivered to your inbox.
          </p>
          <form className="flex max-w-xs mx-auto" onSubmit={async e => {
            e.preventDefault();
            const email = e.target.email.value;
            await fetch('https://formspree.io/f/xqabkgqb', {
              method: 'POST',
              body: JSON.stringify({ email, _subject: 'Newsletter signup' }),
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });
            e.target.reset();
          }}>
            <input type="email" name="email" required placeholder="Email address"
              className="flex-1 px-4 py-3 text-sm"
              style={{ background: 'rgba(248,244,239,0.08)', border: '1px solid rgba(248,244,239,0.2)', borderRight: 'none', outline: 'none', color: 'var(--cream)', fontFamily: "'Jost',sans-serif" }} />
            <button type="submit" className="eyebrow px-5 py-3"
              style={{ background: 'var(--cream)', color: 'var(--espresso)', border: 'none', cursor: 'pointer', fontSize: '11px' }}>
              JOIN
            </button>
          </form>
          <p style={{ fontSize: '11px', color: 'rgba(248,244,239,0.3)', marginTop: '10px' }}>Unsubscribe anytime. We'll only ever send the good stuff.</p>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site pt-14 pb-10">
        <div className="grid md:grid-cols-5 gap-10 mb-14 pb-14" style={{ borderBottom: '1px solid rgba(248,244,239,0.1)' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="serif mb-4" style={{ color: 'var(--cream)', fontSize: '1.6rem', letterSpacing: '0.14em' }}>
              YILING<span style={{ color: 'var(--gold)' }}>®</span>
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(248,244,239,0.45)', lineHeight: 1.75, marginBottom: '20px' }}>
              Custom printed modal hijab manufacturer — OEM and private label for brands worldwide. Factory-direct from Yiwu since 2021.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/yilinghijab/', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                )},
                { label: 'TikTok', href: 'https://www.tiktok.com/@yilinghijab', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                  </svg>
                )},
                { label: 'Facebook', href: 'https://www.facebook.com/yilinghijab', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                )},
                { label: 'YouTube', href: 'https://www.youtube.com/@yilinghijab', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--espresso)"/>
                  </svg>
                )},
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px', border: '1px solid rgba(248,244,239,0.2)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(248,244,239,0.6)', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(248,244,239,0.7)'; e.currentTarget.style.color = 'var(--cream)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,244,239,0.2)'; e.currentTarget.style.color = 'rgba(248,244,239,0.6)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Cols */}
          {cols.map(col => (
            <div key={col.title}>
              <p className="eyebrow mb-5" style={{ color: 'rgba(248,244,239,0.35)', fontSize: '10px' }}>{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} style={{ fontSize: '13px', color: 'rgba(248,244,239,0.6)', textDecoration: 'none' }}
                      className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: '11px', color: 'rgba(248,244,239,0.25)' }}>
            © {new Date().getFullYear()} Yiling Hijab — Yiwu Yiling Clothing Co., Ltd. All rights reserved.
          </p>
          <a href="mailto:peri@wennuanfactory.com" style={{ fontSize: '11px', color: 'rgba(248,244,239,0.45)', textDecoration: 'none', letterSpacing: '0.04em' }}>
            peri@wennuanfactory.com
          </a>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map(label => (
              <span key={label} style={{ fontSize: '11px', color: 'rgba(248,244,239,0.25)', cursor: 'pointer' }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
