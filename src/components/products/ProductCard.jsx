import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(10,31,63,0.08)] transition-all duration-[240ms] ease-[cubic-bezier(0.2,0,0,1)] hover:shadow-[0_8px_32px_rgba(10,31,63,0.14)] hover:-translate-y-1 border border-[#DDE0E5] hover:border-[#C8962E]"
      data-component="product-card"
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#F7F8FA]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[240ms] group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-[#4A4A5E] mb-1">{product.material}</p>
        <p className="text-sm text-[#4A4A5E] mb-3">{product.size} · {product.weight}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#7B7B8B] bg-[#EEF0F4] px-2.5 py-1 rounded-full">
            MOQ: {product.moq}
          </span>
          <a href="/contact" className="text-sm font-semibold text-[#C8962E] hover:text-[#B0841F] transition-colors">
            Inquire Now →
          </a>
        </div>
      </div>
    </div>
  );
}
