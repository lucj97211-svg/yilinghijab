import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div
      className="group cursor-pointer"
      data-component="product-card"
    >
      {/* Image */}
      <div className="relative overflow-hidden mb-4" style={{ background: 'var(--cream-2)' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: '3/4', objectPosition: 'top' }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          style={{ background: 'var(--espresso)', padding: '14px 20px' }}>
          <Link to="/contact" className="eyebrow text-center block w-full" style={{ color: 'var(--cream)', letterSpacing: '0.18em' }}>
            Request Quote →
          </Link>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="eyebrow mb-1" style={{ color: 'var(--muted)' }}>{product.material}</p>
        <h3 className="serif text-xl mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>MOQ: {product.moq}</p>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>{product.size}</p>
        </div>
      </div>
    </div>
  );
}
