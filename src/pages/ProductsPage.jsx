import React, { useState } from 'react';
import PageHeader from '../components/page-header/PageHeader';
import ProductCard from '../components/products/ProductCard';
import FooterCTA from '../components/cta/FooterCTA';
import products from '../data/products';
import Seo from '../components/seo/Seo';

const categories = ['all', 'jersey', 'satin', 'chiffon', 'modal', 'cotton', 'crinkle'];
const categoryLabels = {
  all: 'All Products',
  jersey: 'Premium Jersey',
  satin: 'Lustre Satin',
  chiffon: 'Chiffon',
  modal: 'Bamboo Modal',
  cotton: 'Combed Cotton',
  crinkle: 'Crinkle Georgette',
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div data-component="products-page">
      <Seo
        title="Wholesale Hijabs — 18 Styles, MOQ 100 pcs | Yiling Hijab"
        description="Browse 18 wholesale hijab styles across six fabric families. Premium jersey, lustre satin, chiffon, bamboo modal, combed cotton and crinkle georgette. Free samples available."
        path="/products"
      />
      <PageHeader title="Our Products" breadcrumbs={[{ label: 'Products' }]} />

      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--espresso-light)', maxWidth: '620px', marginBottom: '36px' }}>
            Six fabric families, eighteen colourways, all produced in our own Yiwu facility.
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
