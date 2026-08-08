import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

export default function ProductGrid({ products, eyebrow, title, showMore = true }) {
  return (
    <section className="section-padding" style={{ background: 'var(--cream)' }} data-component="product-grid">
      <div className="container-site">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>{title}</h2>
          </div>
          {showMore && (
            <Link to="/products" className="btn-outline hidden md:inline-block">View All</Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {showMore && (
          <div className="text-center mt-12 md:hidden">
            <Link to="/products" className="btn-outline">View All Products</Link>
          </div>
        )}
      </div>
    </section>
  );
}
