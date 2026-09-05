import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import FooterCTA from '../components/cta/FooterCTA';
import Seo, { productSchema, breadcrumbSchema, productFaqSchema } from '../components/seo/Seo';
import products from '../data/products';
import { postsForProduct } from '../data/internal-links';

// Buying guidance per product line. Deliberately states who should NOT
// order it — honest scoping converts better and gives AI engines a clear
// answer when buyers ask "which hijab line should I choose".
const FIT_BY_CATEGORY = {
  'printed-modal': {
    bestFor: [
      'Brands launching a signature print or seasonal capsule',
      'Boutiques that need a visual hero product for campaigns',
      'Private-label buyers supplying their own artwork files',
    ],
    notFor: [
      'You only need plain solid colours — order Custom Pantone Modal instead',
      'You need four-way stretch for everyday wear — see Jersey Modal',
    ],
  },
  'jersey-modal': {
    bestFor: [
      'Everyday core stock and high-repeat basics programmes',
      'Retailers whose customers want no-pin, no-underscarf wear',
      'Buyers building a wide colourway range at a stable price',
    ],
    notFor: [
      'You want printed patterns — see Custom Printed Modal',
      'You need a lightweight formal drape — Pantone Modal is finer at 160 GSM',
    ],
  },
  'pantone-modal': {
    bestFor: [
      'Brands matching an existing palette or corporate colour',
      'Repeat orders where colour must stay identical batch to batch',
      'Collections built around a tightly curated solid range',
    ],
    notFor: [
      'You want prints or patterns — see Custom Printed Modal',
      'You need stretch and opacity for active wear — see Jersey Modal',
    ],
  },
  hemming: {
    bestFor: [
      'Premium positioning where edge finish is the selling point',
      'Brands differentiating on craft detail rather than price',
      'Buyers who need a specific hem spec across a whole range',
    ],
    notFor: [
      'Entry-price programmes competing purely on cost',
      'You have no hem preference — the standard finish is included on all lines',
    ],
  },
  'jersey-cap': {
    bestFor: [
      'Add-on basket builders and undercap accessory lines',
      'Retailers bundling caps with hijab sets to lift order value',
      'Brands needing a low-price entry SKU under $3.50',
    ],
    notFor: [
      'You need a full-size hijab — see Jersey Modal or Printed Modal',
      'You want this as a standalone hero product carrying a collection',
    ],
  },
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const related = products
    .filter(p => p.category === product.category && p.slug !== slug)
    .slice(0, 3);

  const alsoLike = related.length < 3
    ? [...related, ...products.filter(p => p.category !== product.category).slice(0, 3 - related.length)]
    : related;

  const relatedPosts = postsForProduct(product, 3);
  const fit = FIT_BY_CATEGORY[product.category] || FIT_BY_CATEGORY['printed-modal'];

  // Keep the SERP title under 60 chars: drop the qualifier, then the brand,
  // rather than letting Google truncate the product name itself.
  const metaTitle = (() => {
    const base = `${product.name} ${product.color}`;
    const full = `${base} — Wholesale & OEM | Yiling`;
    if (full.length <= 60) return full;
    const short = `${base} — Wholesale | Yiling`;
    if (short.length <= 60) return short;
    return `${base} | Yiling`.slice(0, 60);
  })();

  // Hemming is a finishing service, not a fabric — leading with the material
  // field there reads as if the product were a printed modal scarf.
  const metaDescription =
    product.category === 'hemming'
      ? `${product.color} hem finishing on ${product.weight} modal hijabs. Factory-direct from ${product.price}/pc, MOQ ${product.moq}. OEM and private label, samples in 7 days.`
      : product.category === 'bamboo-jersey'
      ? `Custom Bamboo Jersey Hijab Set — matching hijab & underscarf, wholesale & OEM. Custom colour, logo, packaging. MOQ ${product.moq}. Factory-direct supplier since 2008.`
      : `${product.color} ${product.material.toLowerCase()} hijab, ${product.weight}. Factory-direct from ${product.price}/pc, MOQ ${product.moq}. OEM and private label, samples in 7 days.`;

  return (
    <div data-component="product-detail-page">
      <Seo
        title={metaTitle}
        description={metaDescription}
        path={`/products/${product.slug}`}
        image={product.image}
        type="product"
        jsonLd={[
          productSchema(product),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: `${product.name} ${product.color}`, path: `/products/${product.slug}` },
          ]),
          productFaqSchema(product),
        ]}
      />

      {/* Breadcrumb */}
      <div className="py-6" style={{ background: 'var(--cream-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site">
          <nav className="flex items-center gap-2" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'var(--muted)' }}>HOME</Link>
            <span style={{ color: 'var(--muted)' }}>/</span>
            <Link to="/products" style={{ color: 'var(--muted)' }}>PRODUCTS</Link>
            <span style={{ color: 'var(--muted)' }}>/</span>
            <span style={{ color: 'var(--espresso)' }}>{product.name.toUpperCase()}</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

            {/* Gallery */}
            <div>
              <div className="mb-4 overflow-hidden" style={{ background: 'var(--cream-2)' }}>
                <img loading="lazy" decoding="async"
                  src={product.gallery[activeImg]}
                  alt={product.galleryAlt?.[activeImg] || `${product.name} ${product.color}`}
                  className="w-full object-cover"
                  style={{ height: '520px' }}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="overflow-hidden transition-all"
                    style={{
                      background: 'var(--cream-2)',
                      border: activeImg === i ? '2px solid var(--espresso)' : '2px solid transparent',
                      opacity: activeImg === i ? 1 : 0.65,
                    }}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img loading="lazy" decoding="async" src={img} alt={product.galleryAlt?.[i] || `${product.name} ${product.color} view ${i + 1}`} className="w-full object-cover" style={{ height: '90px' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {product.badge && (
                <span
                  className="inline-block mb-4 px-3 py-1"
                  style={{ background: 'var(--gold)', color: '#fff', fontSize: '11px', letterSpacing: '0.1em' }}
                >
                  {product.badge}
                </span>
              )}

              <h1 className="serif mb-2" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.15 }}>
                {product.name}
              </h1>
              <p className="mb-5" style={{ fontSize: '15px', color: 'var(--muted)' }}>{product.color}</p>

              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < product.stars ? 'var(--gold)' : 'none'}
                    color="var(--gold)"
                  />
                ))}
                <span style={{ fontSize: '13px', color: 'var(--muted)', marginLeft: '6px' }}>
                  {product.reviews.toLocaleString()} reviews
                </span>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--espresso-light)', marginBottom: '32px' }}>
                {product.description}
              </p>

              {/* Spec table */}
              <div style={{ border: '1px solid var(--border)', marginBottom: '28px' }}>
                {[
                  ['Material', product.material],
                  ['Weight', product.weight],
                  ['Size', product.size],
                  ['MOQ', product.moq],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className="flex justify-between px-5 py-3"
                    style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.05em' }}>{k}</span>
                    <span style={{ fontSize: '14px', color: 'var(--espresso)', fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Tier pricing */}
              <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>WHOLESALE PRICING</p>
              <div style={{ border: '1px solid var(--border)', marginBottom: '32px' }}>
                {product.tiers.map((t, i) => (
                  <div
                    key={t.qty}
                    className="flex justify-between px-5 py-3"
                    style={{
                      borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                      background: i === 0 ? 'var(--cream-2)' : 'transparent',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--espresso-light)' }}>{t.qty}</span>
                    <span className="serif" style={{ fontSize: '17px', color: 'var(--espresso)' }}>{t.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-espresso">Request a Quote</Link>
                <a
                  href="https://wa.me/8615088248404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--gold)' }}>PRODUCT DETAIL</p>
          <h2 className="serif mb-10" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)' }}>
            Why buyers choose this fabric
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--espresso-light)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this style is for — plain-language buying guidance */}
      <section className="section-padding" style={{ background: 'var(--cream)' }} data-component="best-for">
        <div className="container-site">
          <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>IS THIS THE RIGHT STYLE?</p>
          <h2 className="serif mb-8" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
            Who orders this line
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div style={{ background: 'var(--cream-2)', padding: '26px', border: '1px solid var(--border)' }}>
              <p className="eyebrow mb-4" style={{ color: 'var(--espresso)' }}>BEST FOR</p>
              <ul style={{ fontSize: '15px', lineHeight: 2, color: 'var(--espresso-light)' }}>
                {fit.bestFor.map((t, i) => <li key={i}>· {t}</li>)}
              </ul>
            </div>
            <div style={{ background: 'var(--cream-2)', padding: '26px', border: '1px solid var(--border)' }}>
              <p className="eyebrow mb-4" style={{ color: 'var(--muted)' }}>CONSIDER ANOTHER LINE IF</p>
              <ul style={{ fontSize: '15px', lineHeight: 2, color: 'var(--espresso-light)' }}>
                {fit.notFor.map((t, i) => <li key={i}>· {t}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-8" style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.9 }}>
            Not sure which fabric suits your programme?{' '}
            <Link to="/products" style={{ color: 'var(--espresso)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Compare all five collections side by side
            </Link>{' '}
            or{' '}
            <Link to="/contact" style={{ color: 'var(--espresso)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              request a sample pack
            </Link>.
          </p>
        </div>
      </section>

      {/* Bulk packaging */}
      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img loading="lazy" decoding="async"
              src="/assets/images/packaging-bulk.webp"
              alt="Bulk hijab export packaging - poly bagged and carton packed for wholesale"
              className="w-full object-cover"
              style={{ height: '360px' }}
            />
            <div>
              <p className="eyebrow mb-3" style={{ color: 'var(--gold)' }}>EXPORT READY</p>
              <h2 className="serif mb-5" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
                Packed for wholesale
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--espresso-light)', marginBottom: '20px' }}>
                Every order ships individually poly-bagged and carton-packed to export standard.
                Private-label woven labels, hang tags and custom retail boxes are available on request.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: 2, color: 'var(--espresso-light)' }}>
                <li>Individual poly bag per piece</li>
                <li>50 pcs per inner carton, 500 pcs per master carton</li>
                <li>Custom labelling and packaging available</li>
                <li>Full export documentation provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {alsoLike.length > 0 && (
        <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
          <div className="container-site">
            <p className="eyebrow mb-8" style={{ color: 'var(--muted)' }}>YOU MAY ALSO LIKE</p>
            <div className="grid md:grid-cols-3 gap-8">
              {alsoLike.map(p => (
                <Link key={p.id} to={`/products/${p.slug}`} className="group block">
                  <div className="overflow-hidden mb-4" style={{ background: 'var(--cream)' }}>
                    <img loading="lazy" decoding="async"
                      src={p.image}
                      alt={p.name}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ height: '260px' }}
                    />
                  </div>
                  <h3 className="serif" style={{ fontSize: '1.15rem' }}>{p.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>{p.color}</p>
                  <p className="serif" style={{ fontSize: '1rem', marginTop: '6px' }}>from {p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related reading — passes link equity between guides and products */}
      {relatedPosts.length > 0 && (
        <section className="section-padding" style={{ background: 'var(--cream)' }}>
          <div className="container-site">
            <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>SOURCING GUIDES</p>
            <h2 className="serif mb-8" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
              Before you order {product.material.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="overflow-hidden mb-4" style={{ background: 'var(--cream-2)' }}>
                    <img loading="lazy" decoding="async"
                      src={post.cover}
                      alt={post.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ height: '200px' }}
                    />
                  </div>
                  <p className="eyebrow" style={{ color: 'var(--muted)', fontSize: '10px' }}>
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="serif mt-2" style={{ fontSize: '1.1rem', lineHeight: 1.4, color: 'var(--espresso)' }}>
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCTA />
    </div>
  );
}
