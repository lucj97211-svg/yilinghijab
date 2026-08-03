import React, { useState } from 'react';
import PageHeader from '../components/page-header/PageHeader';
import ProductCard from '../components/products/ProductCard';
import products from '../data/products';

const categories = ['all', 'chiffon', 'cotton', 'linen', 'printed', 'crinkle', 'jersey'];
const categoryLabels = { all: 'All', chiffon: 'Chiffon', cotton: 'Cotton', linen: 'Linen', printed: 'Printed', crinkle: 'Crinkle', jersey: 'Jersey' };

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div data-component="products-page">
      <PageHeader title="Our Products" breadcrumbs={[{ label: 'Products' }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-2 mb-8" data-component="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-[#C8962E] text-white'
                    : 'bg-white text-[#4A4A5E] border border-[#DDE0E5] hover:border-[#C8962E] hover:text-[#C8962E]'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#7B7B8B] mb-6">Showing {filtered.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
