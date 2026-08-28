import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const mainNav = [
  { label: 'NEW', to: '/products' },
  { label: 'BEST SELLERS', to: '/products' },
  {
    label: 'COLLECTIONS', to: '/products',
    sub: [
      { label: 'Custom Printed Modal', to: '/products' },
      { label: 'Jersey Modal', to: '/products' },
      { label: 'Custom Pantone Modal', to: '/products' },
      { label: 'Custom Hemming', to: '/products' },
      { label: 'Shop all', to: '/products' },
    ],
  },
  { label: 'CUSTOM / OEM', to: '/custom-oem' },
  { label: 'BLOG', to: '/blog' },
  {
    label: 'MORE',
    sub: [
      { label: 'About', to: '/about' },
      { label: 'Styling Guide', to: '/styling-guide' },
      { label: 'Reviews', to: '/reviews' },
      { label: 'Shipping', to: '/shipping' },
      { label: 'Returns', to: '/returns' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setOpenSub(null); }, [location]);

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar">
        FREE SAMPLES AVAILABLE · FACTORY-DIRECT PRICING · MOQ 100 PCS · SHIPS WORLDWIDE FROM YIWU
      </div>

      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(248,244,239,0.96)' : 'var(--cream)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Main header row */}
        <div className="container-site">
          <div className="flex items-center h-16 md:h-20 gap-6">
            {/* Logo — centered on desktop */}
            <Link to="/" className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '1.7rem', color: 'var(--espresso)', letterSpacing: '0.16em' }}>
                YILING<span style={{ color: 'var(--gold)' }}>®</span>
              </span>
            </Link>

            {/* Desktop nav — left + right of logo */}
            <nav className="hidden md:flex flex-1 items-center gap-6">
              {mainNav.slice(0, 3).map((item, i) => (
                <div key={i} className="relative group">
                  <Link to={item.to} className="eyebrow flex items-center gap-1"
                    style={{ color: 'var(--espresso-light)', fontSize: '11px' }}
                    onMouseEnter={() => item.sub && setOpenSub(item.label)}
                    onMouseLeave={() => setOpenSub(null)}>
                    {item.label} {item.sub && <ChevronDown size={10} />}
                  </Link>
                  {item.sub && openSub === item.label && (
                    <div
                      className="absolute top-full left-0 z-50 py-3 min-w-40"
                      style={{ background: 'var(--cream)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(43,37,34,0.08)' }}
                      onMouseEnter={() => setOpenSub(item.label)}
                      onMouseLeave={() => setOpenSub(null)}>
                      {item.sub.map((s, j) => (
                        <Link key={j} to={s.to} className="block px-5 py-2 eyebrow hover:bg-[var(--cream-2)]"
                          style={{ fontSize: '10px', color: 'var(--espresso-light)', textDecoration: 'none' }}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex flex-1 items-center justify-end gap-6">
              {mainNav.slice(3).map((item, i) => (
                <div key={i} className="relative group">
                  <Link to={item.to || '#'} className="eyebrow flex items-center gap-1"
                    style={{ color: 'var(--espresso-light)', fontSize: '11px' }}
                    onMouseEnter={() => item.sub && setOpenSub(item.label)}
                    onMouseLeave={() => setOpenSub(null)}>
                    {item.label} {item.sub && <ChevronDown size={10} />}
                  </Link>
                  {item.sub && openSub === item.label && (
                    <div
                      className="absolute top-full right-0 z-50 py-3 min-w-40"
                      style={{ background: 'var(--cream)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(43,37,34,0.08)' }}
                      onMouseEnter={() => setOpenSub(item.label)}
                      onMouseLeave={() => setOpenSub(null)}>
                      {item.sub.map((s, j) => (
                        <Link key={j} to={s.to} className="block px-5 py-2 eyebrow hover:bg-[var(--cream-2)]"
                          style={{ fontSize: '10px', color: 'var(--espresso-light)', textDecoration: 'none' }}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn-espresso py-2 px-4" style={{ fontSize: '10px' }}>Get Quote</Link>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden ml-auto" onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? <X size={22} color="var(--espresso)" /> : <Menu size={22} color="var(--espresso)" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
            <div className="container-site py-6 flex flex-col gap-4">
              {mainNav.map((item, i) => (
                <div key={i}>
                  <Link to={item.to || '#'} className="eyebrow" style={{ fontSize: '13px', color: 'var(--espresso)' }}>
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {item.sub.map((s, j) => (
                        <Link key={j} to={s.to} className="eyebrow" style={{ fontSize: '11px', color: 'var(--muted)' }}>{s.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn-espresso text-center mt-2">Get a Quote</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
