import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div className="py-14 md:py-20" style={{ background: 'var(--cream-2)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-site">
        <nav className="flex items-center gap-2 mb-4">
          <Link to="/" className="eyebrow hover:text-espresso transition-colors" style={{ color: 'var(--muted)' }}>Home</Link>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={i}>
              <ChevronRight size={12} color="var(--muted)" />
              <span className="eyebrow" style={{ color: 'var(--espresso)' }}>{b.label}</span>
            </React.Fragment>
          ))}
        </nav>
        <h1 className="serif" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>{title}</h1>
      </div>
    </div>
  );
}
