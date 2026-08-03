import React from 'react';
import ProductCard from '../products/ProductCard';

export default function ProductGrid({ products, title, eyebrow, columns = 3 }) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <section className="section-padding bg-[#F7F8FA]" data-component="product-grid">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">{eyebrow || 'Our Collection'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E] mb-2">{title || 'Our Product Range'}</h2>
          <div className="h-[3px] w-12 bg-[#C8962E] mx-auto mt-4" />
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-6`}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
