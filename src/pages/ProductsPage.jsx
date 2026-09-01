import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/page-header/PageHeader';
import ProductCard from '../components/products/ProductCard';
import FooterCTA from '../components/cta/FooterCTA';
import products from '../data/products';
import Seo from '../components/seo/Seo';
import MaterialComparison, { materialComparisonSchema } from '../components/products/MaterialComparison';

const categories = ['all', 'printed-modal', 'jersey-modal', 'pantone-modal', 'hemming', 'jersey-cap'];
const categoryLabels = {
  all: 'All Products',
  'printed-modal': 'Custom Printed Modal',
  'jersey-modal': 'Jersey Modal',
  'pantone-modal': 'Custom Pantone Modal',
  hemming: 'Custom Hemming',
  'jersey-cap': 'Custom Jersey Cap',
};

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('category');
  const activeCategory = categories.includes(requested) ? requested : 'all';

  const setActiveCategory = (cat) => {
    if (cat === 'all') setSearchParams({}, { replace: true });
    else setSearchParams({ category: cat }, { replace: true });
  };

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const isFiltered = activeCategory !== 'all';
  const label = categoryLabels[activeCategory];

  return (
    <div data-component="products-page">
      <Seo
        title={
          isFiltered
            ? `${label} Hijab Wholesale — OEM & Private Label | Yiling`
            : 'Custom Printed Modal Hijab — OEM & Private Label Manufacturer | Yiling'
        }
        description={
          isFiltered
            ? `${label} hijab collection — ${filtered.length} styles, factory-direct from Yiwu, China. MOQ 100 pcs, OEM and private label welcome. Samples in 7 days.`
            : `Browse ${products.length} custom hijab styles: Printed Modal, Jersey Modal, Pantone Modal, Custom Hemming, and Jersey Caps. MOQ from 100 pcs, factory-direct from Yiwu since 2008.`
        }
        // Filtered views are a client-side lens on the same collection —
        // canonical always points at /products to avoid duplicate content.
        path="/products"
        jsonLd={materialComparisonSchema()}
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

      <MaterialComparison />

      <FooterCTA />
    </div>
  );
}
