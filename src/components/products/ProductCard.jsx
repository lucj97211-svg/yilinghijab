import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const href = `/products/${product.slug}`;

  return (
    <div
      className="group cursor-pointer"
      data-component="product-card"
    >
      {/* Image */}
      <div className="relative overflow-hidden mb-4" style={{ background: 'var(--cream-2)' }}>
        <Link to={href} className="block">
          <img loading="lazy" decoding="async"
            src={product.image}
            alt={product.name}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: '3/4', objectPosition: 'top' }}
          />
        </Link>
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-2.5 py-1"
            style={{ background: 'var(--gold)', color: '#fff', fontSize: '10px', letterSpacing: '0.1em' }}
          >
            {product.badge}
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          style={{ background: 'var(--espresso)', padding: '14px 20px' }}>
          <Link to={href} className="eyebrow text-center block w-full" style={{ color: 'var(--cream)', letterSpacing: '0.18em' }}>
            View Details →
          </Link>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="eyebrow mb-1" style={{ color: 'var(--muted)' }}>{product.material}</p>
        <Link to={href}>
          <h3 className="serif text-xl mb-1">{product.name}</h3>
        </Link>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '6px' }}>{product.color}</p>
        <div className="flex items-center justify-between">
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>MOQ: {product.moq}</p>
          <p className="serif" style={{ fontSize: '15px', color: 'var(--espresso)' }}>from {product.price}</p>
        </div>
      </div>
    </div>
  );
}
