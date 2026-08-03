import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div className="py-12 md:py-16" style={{ backgroundColor: 'var(--brand-navy)' }} data-component="page-header">
      <div className="container-site">
        <nav className="flex items-center gap-2 text-sm text-[#8B95A8] mb-3">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={i}>
              <ChevronRight size={14} />
              {b.to ? (
                <Link to={b.to} className="hover:text-white transition-colors">{b.label}</Link>
              ) : (
                <span className="text-[#C8962E]">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white">{title}</h1>
      </div>
    </div>
  );
}
