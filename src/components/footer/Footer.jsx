import React from 'react';
import { Link } from 'react-router-dom';

const cols = [
  {
    title: 'Shop',
    links: [
      { label: 'Chiffon Hijab', to: '/products' },
      { label: 'Cotton Hijab', to: '/products' },
      { label: 'Jersey Hijab', to: '/products' },
      { label: 'Custom / OEM', to: '/custom-oem' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Factory Tour', to: '/about' },
      { label: 'Certifications', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Get a Quote', to: '/contact' },
      { label: 'WhatsApp', href: 'https://wa.me/8615088248404' },
      { label: 'peri@wennuanfactory.com', href: 'mailto:peri@wennuanfactory.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--espresso)', color: 'var(--cream)' }}>
      <div className="container-site pt-16 pb-10">
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16" style={{ borderBottom: '1px solid rgba(248,244,239,0.12)' }}>
          {/* Brand */}
          <div>
            <p className="serif text-3xl mb-4" style={{ color: 'var(--cream)', letterSpacing: '0.14em' }}>YILING<span style={{ color: 'var(--gold)' }}>®</span></p>
            <p style={{ fontSize: '13px', color: 'rgba(248,244,239,0.55)', lineHeight: 1.75 }}>
              Premium hijab manufacturer.<br />Yiwu, Zhejiang, China.<br />Est. 2008.
            </p>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <p className="eyebrow mb-5" style={{ color: 'rgba(248,244,239,0.45)' }}>{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: 'rgba(248,244,239,0.7)', textDecoration: 'none' }}
                        className="hover:text-white transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to}
                        style={{ fontSize: '13px', color: 'rgba(248,244,239,0.7)', textDecoration: 'none' }}
                        className="hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <p style={{ fontSize: '12px', color: 'rgba(248,244,239,0.35)' }}>
            © {new Date().getFullYear()} Yiling Hijab — Yiwu Yiling Clothing Co., Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(248,244,239,0.35)' }}>
            Yiwu City, Zhejiang Province, China
          </p>
        </div>
      </div>
    </footer>
  );
}
