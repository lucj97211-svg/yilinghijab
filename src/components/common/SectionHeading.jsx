import React from 'react';

export default function SectionHeading({ eyebrow, heading, subtext, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const colorClass = light ? 'text-white' : '';
  const subColor = light ? 'text-[#8B95A8]' : 'text-[#7B7B8B]';
  return (
    <div className={`mb-12 ${alignClass}`} data-component="section-heading">
      {eyebrow && (
        <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">{eyebrow}</p>
      )}
      <h2 className={`text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4 ${colorClass}`}>
        {heading}
      </h2>
      {subtext && <p className={`text-base max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subColor}`}>{subtext}</p>}
      <div className={`h-[3px] w-12 bg-[#C8962E] mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
