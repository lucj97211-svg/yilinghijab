import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const CATEGORY_ORDER = ['printed-modal', 'jersey-modal', 'pantone-modal', 'hemming', 'jersey-cap'];

const LABELS = {
  'printed-modal': 'Custom Printed Modal',
  'jersey-modal': 'Jersey Modal',
  'pantone-modal': 'Custom Pantone Modal',
  hemming: 'Custom Hemming',
  'jersey-cap': 'Custom Jersey Cap',
};

// Editorial guidance — who each line is actually for. Kept alongside the
// derived numbers so the table answers "which should I order?" not just "what".
const POSITIONING = {
  'printed-modal': {
    bestFor: 'Brands launching a signature print or seasonal capsule',
    notFor: 'Buyers who only need plain solid basics',
    finish: 'Reactive dye print, custom artwork accepted',
  },
  'jersey-modal': {
    bestFor: 'Everyday core stock and high-repeat basics programmes',
    notFor: 'Formal or occasion-wear collections needing drape and sheen',
    finish: 'Four-way stretch, opaque, no underscarf needed',
  },
  'pantone-modal': {
    bestFor: 'Brands matching an existing palette or corporate colour',
    notFor: 'Buyers wanting patterned or printed designs',
    finish: 'Pantone-referenced solid dye, repeat-order consistent',
  },
  hemming: {
    bestFor: 'Premium positioning where edge finish is the selling point',
    notFor: 'Entry-price programmes competing purely on cost',
    finish: 'Rolled edge, overlocked, or flat-lock finishing',
  },
  'jersey-cap': {
    bestFor: 'Add-on basket builders and undercap accessory lines',
    notFor: 'Standalone hero products carrying a collection',
    finish: 'Pull-on or tie-back cap, one size fits all',
  },
};

const money = s => Number(String(s).replace(/[^0-9.]/g, ''));

/** Derives every displayed figure from products.js — never hard-coded. */
function buildRows() {
  return CATEGORY_ORDER.map(cat => {
    const items = products.filter(p => p.category === cat);
    if (!items.length) return null;

    const entry = items.map(p => money(p.price)).filter(Boolean);
    const floor = items
      .flatMap(p => (p.tiers || []).map(t => money(t.price)))
      .filter(Boolean);
    const gsm = [...new Set(items.map(p => p.weight))].sort();
    const sizes = [...new Set(items.map(p => p.size))];

    return {
      cat,
      label: LABELS[cat],
      styles: items.length,
      gsm: gsm.join(' / '),
      size: sizes.length > 1 ? `${sizes.length} cut sizes` : sizes[0],
      entry: Math.min(...entry).toFixed(2),
      floor: floor.length ? Math.min(...floor).toFixed(2) : null,
      moq: items[0].moq,
      ...POSITIONING[cat],
    };
  }).filter(Boolean);
}

export default function MaterialComparison() {
  const rows = buildRows();

  return (
    <section
      className="section-padding"
      style={{ background: 'var(--cream-2)' }}
      data-component="material-comparison"
    >
      <div className="container-site">
        <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>WHICH LINE IS RIGHT FOR YOU</p>
        <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
          Compare our hijab collections
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8, maxWidth: '640px', marginBottom: '36px' }}>
          All five lines are produced in our own Yiwu facility with a 100-piece MOQ per colourway.
          Pricing below is factory-direct and drops at each volume tier.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--espresso)' }}>
                {['Collection', 'Styles', 'Weight', 'Cut size', 'Price / pc', 'MOQ', 'Best for'].map(h => (
                  <th
                    key={h}
                    className="eyebrow"
                    style={{ textAlign: 'left', padding: '12px 14px 12px 0', color: 'var(--espresso)', fontSize: '11px' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.cat} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 14px 16px 0' }}>
                    <Link
                      to={`/products?category=${r.cat}`}
                      className="serif"
                      style={{ color: 'var(--espresso)', fontSize: '16px', textDecoration: 'none' }}
                    >
                      {r.label}
                    </Link>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>{r.finish}</p>
                  </td>
                  <td style={{ padding: '16px 14px 16px 0', color: 'var(--espresso-light)' }}>{r.styles}</td>
                  <td style={{ padding: '16px 14px 16px 0', color: 'var(--espresso-light)' }}>{r.gsm}</td>
                  <td style={{ padding: '16px 14px 16px 0', color: 'var(--espresso-light)' }}>{r.size}</td>
                  <td style={{ padding: '16px 14px 16px 0', color: 'var(--espresso-light)' }}>
                    <span className="serif" style={{ fontSize: '16px', color: 'var(--espresso)' }}>${r.entry}</span>
                    {r.floor && <span style={{ fontSize: '12px', color: 'var(--muted)' }}> → ${r.floor} at volume</span>}
                  </td>
                  <td style={{ padding: '16px 14px 16px 0', color: 'var(--espresso-light)' }}>{r.moq}</td>
                  <td style={{ padding: '16px 0', color: 'var(--espresso-light)', maxWidth: '230px', lineHeight: 1.6 }}>
                    {r.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid gap-4">
          {rows.map(r => (
            <div key={r.cat} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '18px' }}>
              <Link
                to={`/products?category=${r.cat}`}
                className="serif"
                style={{ color: 'var(--espresso)', fontSize: '18px', textDecoration: 'none' }}
              >
                {r.label}
              </Link>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px', marginBottom: '12px' }}>{r.finish}</p>
              <dl style={{ fontSize: '13px', color: 'var(--espresso-light)', lineHeight: 1.9 }}>
                <div className="flex justify-between"><dt>Styles</dt><dd>{r.styles}</dd></div>
                <div className="flex justify-between"><dt>Weight</dt><dd>{r.gsm}</dd></div>
                <div className="flex justify-between"><dt>Cut size</dt><dd>{r.size}</dd></div>
                <div className="flex justify-between">
                  <dt>Price / pc</dt>
                  <dd>${r.entry}{r.floor && ` → $${r.floor}`}</dd>
                </div>
                <div className="flex justify-between"><dt>MOQ</dt><dd>{r.moq}</dd></div>
              </dl>
              <p style={{ fontSize: '13px', color: 'var(--espresso)', marginTop: '12px', lineHeight: 1.6 }}>
                <strong>Best for:</strong> {r.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Machine-readable mirror of the table for AI answer engines. */
export function materialComparisonSchema() {
  const rows = buildRows();
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Yiling Hijab collection comparison',
    description:
      'Comparison of Yiling Hijab wholesale collections by fabric weight, cut size, price per piece, minimum order quantity, and best-fit buyer.',
    numberOfItems: rows.length,
    itemListElement: rows.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ProductCollection',
        name: r.label,
        url: `https://yilinghijab.com/products?category=${r.cat}`,
        description: `${r.styles} styles at ${r.gsm}, ${r.size}. From $${r.entry} per piece at MOQ ${r.moq}${
          r.floor ? `, down to $${r.floor} at the highest volume tier` : ''
        }. Best for: ${r.bestFor}. ${r.finish}.`,
      },
    })),
  };
}
