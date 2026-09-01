import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import FooterCTA from '../components/cta/FooterCTA';
import Seo, { productSchema, breadcrumbSchema, productFaqSchema } from '../components/seo/Seo';
import products from '../data/products';

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

  return (
    <div data-component="product-detail-page">
      <Seo
        title={`${product.name} ${product.color} — Wholesale & OEM Manufacturer | Yiling`}
        description={`${product.material} hijab in ${product.color}, ${product.weight}, ${product.size}. Factory-direct from ${product.price}/pc, MOQ ${product.moq}. OEM and private label welcome — samples in 7 days, bulk in 25–35 days from Yiwu, China.`}
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
                  alt={`${product.name} ${product.color}`}
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
                    <img loading="lazy" decoding="async" src={img} alt="Wholesale hijab product thumbnail" className="w-full object-cover" style={{ height: '90px' }} />
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

      <FooterCTA />
    </div>
  );
}
