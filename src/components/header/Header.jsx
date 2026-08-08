import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Custom / OEM', to: '/custom-oem' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar">
        Free samples available · MOQ 100 pcs · Ships worldwide from Yiwu, China
      </div>

      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(248,244,239,0.95)' : 'var(--cream)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: nav (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="eyebrow hover:text-espresso transition-colors"
                  style={{ color: location.pathname === l.to ? 'var(--espresso)' : undefined }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Center: logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
              <span
                className="text-2xl md:text-3xl tracking-widest"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: 'var(--espresso)', letterSpacing: '0.18em' }}
              >
                YILING<span style={{ color: 'var(--gold)' }}>®</span>
              </span>
            </Link>

            {/* Right: nav (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="eyebrow hover:text-espresso transition-colors"
                  style={{ color: location.pathname === l.to ? 'var(--espresso)' : undefined }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-espresso py-2 px-5 text-xs">Get Quote</Link>
            </nav>

            {/* Mobile hamburger */}
            <button className="md:hidden ml-auto" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen ? <X size={22} color="var(--espresso)" /> : <Menu size={22} color="var(--espresso)" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t" style={{ background: 'var(--cream)', borderColor: 'var(--border)' }}>
            <div className="container-site py-6 flex flex-col gap-5">
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} className="eyebrow text-sm">{l.label}</Link>
              ))}
              <Link to="/contact" className="btn-espresso text-center mt-2">Get a Quote</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
