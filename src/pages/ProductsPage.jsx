import React, { useState } from 'react';
import PageHeader from '../components/page-header/PageHeader';
import ProductCard from '../components/products/ProductCard';
import FooterCTA from '../components/cta/FooterCTA';
import products from '../data/products';
import Seo from '../components/seo/Seo';

const categories = ['all', 'printed-modal', 'jersey-modal', 'pantone-modal', 'hemming'];
const categoryLabels = {
  all: 'All Products',
  'printed-modal': 'Custom Printed Modal',
  'jersey-modal': 'Jersey Modal',
  'pantone-modal': 'Custom Pantone Modal',
  hemming: 'Custom Hemming',
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div data-component="products-page">
      <Seo
        title="Custom Printed Modal Hijab Manufacturer — OEM & Private Label | Yiling Hijab"
        description="Browse our custom hijab collections: Custom Printed Modal, Jersey Modal, Custom Pantone Modal, and Custom Hemming finishing. MOQ from 100 pcs. Factory-direct from Yiwu."
        path="/products"
      />
      <PageHeader title="Our Products" breadcrumbs={[{ label: 'Products' }]} />

      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--espresso-light)', maxWidth: '620px', marginBottom: '36px' }}>
            Custom printed modal, jersey modal, Pantone-matched solid colours, and bespoke hemming — all produced in our own Yiwu facility.
            MOQ starts at 100 pieces per style. Free samples available on every line.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10" data-component="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 transition-all duration-200"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: activeCategory === cat ? 'var(--espresso)' : 'transparent',
                  color: activeCategory === cat ? 'var(--cream)' : 'var(--espresso-light)',
                  border: `1px solid ${activeCategory === cat ? 'var(--espresso)' : 'var(--border)'}`,
                }}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '28px' }}>
            Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
