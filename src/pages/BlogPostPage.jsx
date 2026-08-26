import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import FooterCTA from '../components/cta/FooterCTA';
import Seo, { articleSchema, breadcrumbSchema, faqSchema } from '../components/seo/Seo';
import posts from '../data/posts';

function Block({ block }) {
  if (block.type === 'h2') {
    return (
      <h2
        className="serif"
        style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', marginTop: '44px', marginBottom: '14px', lineHeight: 1.3 }}
      >
        {block.text}
      </h2>
    );
  }
  return (
    <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.9, marginBottom: '18px' }}>
      {block.text}
    </p>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div data-component="blog-post-page">
      <Seo
        title={post.metaTitle ? `${post.metaTitle} | Yiling` : `${post.title} | Yiling Hijab`}
        description={post.metaDescription || post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        jsonLd={[
          articleSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faq ? [faqSchema(post.faq)] : []),
        ]}
      />

      {/* Header */}
      <div className="py-14 md:py-20" style={{ background: 'var(--cream-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <nav className="flex items-center gap-2 mb-5">
            <Link to="/" className="eyebrow" style={{ color: 'var(--muted)' }}>Home</Link>
            <span style={{ color: 'var(--muted)' }}>/</span>
            <Link to="/blog" className="eyebrow" style={{ color: 'var(--muted)' }}>Blog</Link>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>{post.category}</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{post.date}</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{post.readTime}</span>
          </div>

          <h1 className="serif" style={{ fontSize: 'clamp(1.9rem,4.5vw,3rem)', lineHeight: 1.2 }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Cover */}
      <div className="container-site" style={{ maxWidth: '760px', marginTop: '48px' }}>
        <img loading="lazy" decoding="async"
          src={post.cover}
          alt={post.title}
          className="w-full object-cover"
          style={{ height: '400px', background: 'var(--cream-2)' }}
        />
      </div>

      {/* Body */}
      <article className="container-site" style={{ maxWidth: '760px', paddingTop: '48px', paddingBottom: '64px' }}>

        {/* Summary Box */}
        {post.summary && (
          <div className="mb-10 p-6" style={{ background: 'var(--cream-2)', borderLeft: '3px solid var(--gold)' }}>
            <p className="eyebrow mb-3" style={{ color: 'var(--gold)' }}>Quick Summary</p>
            <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.85 }}>{post.summary}</p>
          </div>
        )}

        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        {/* Comparison Table */}
        {post.comparisonTable && (
          <div className="mt-12 mb-4" style={{ overflowX: 'auto' }}>
            <h2 className="serif mb-6" style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', lineHeight: 1.3 }}>
              {post.comparisonTable.headers[1]} vs {post.comparisonTable.headers[2]}: At a Glance
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'var(--espresso)', color: 'var(--cream)' }}>
                  {post.comparisonTable.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {post.comparisonTable.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--cream)' : 'var(--cream-2)', borderBottom: '1px solid var(--border)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '11px 16px', color: j === 0 ? 'var(--espresso)' : 'var(--espresso-light)', fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FAQ block */}
        {post.faq && post.faq.length > 0 && (
          <div className="mt-14">
            <h2 className="serif" style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', marginBottom: '24px', lineHeight: 1.3 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {post.faq.map((item, i) => (
                <details key={i} style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
                  <summary style={{ fontSize: '15px', fontWeight: 500, color: 'var(--espresso)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {item.q}
                    <span style={{ fontSize: '20px', color: 'var(--muted)', fontWeight: 300, marginLeft: '16px', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.8, marginTop: '12px', paddingRight: '32px' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA inside article */}
        <div className="mt-14 p-8 text-center" style={{ background: 'var(--cream-2)', border: '1px solid var(--border)' }}>
          <h3 className="serif text-2xl mb-3">Need a quote for your next order?</h3>
          <p style={{ fontSize: '14px', color: 'var(--espresso-light)', marginBottom: '22px' }}>
            Free samples available. MOQ from 100 pieces. Ships to 50+ countries.
          </p>
          <Link to="/contact" className="btn-espresso">Request a Quote</Link>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding" style={{ background: 'var(--cream-2)' }}>
          <div className="container-site" style={{ maxWidth: '900px' }}>
            <p className="eyebrow mb-8" style={{ color: 'var(--muted)' }}>Continue reading</p>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group block">
                  <div className="overflow-hidden mb-4" style={{ background: 'var(--cream)' }}>
                    <img loading="lazy" decoding="async"
                      src={r.cover}
                      alt={r.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ height: '180px' }}
                    />
                  </div>
                  <span className="eyebrow" style={{ color: 'var(--gold)' }}>{r.category}</span>
                  <h3 className="serif mt-2" style={{ fontSize: '1.25rem', lineHeight: 1.3 }}>{r.title}</h3>
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
