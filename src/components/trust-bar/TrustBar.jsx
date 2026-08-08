import React from 'react';

const items = [
  '★★★★★  500,000+ pcs produced monthly',
  'Free pre-production samples',
  'SGS · ISO 9001 certified',
  'Ships to 50+ countries',
];

export default function TrustBar() {
  return (
    <div style={{ background: 'var(--espresso)', color: 'var(--cream)' }} data-component="trust-bar">
      <div className="container-site py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <span key={i} className="eyebrow" style={{ color: 'var(--cream)', opacity: 0.9, letterSpacing: '0.16em' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
