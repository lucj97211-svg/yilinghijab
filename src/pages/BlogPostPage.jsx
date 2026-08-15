import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import FooterCTA from '../components/cta/FooterCTA';
import Seo, { articleSchema, breadcrumbSchema } from '../components/seo/Seo';
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
        title={`${post.title} | Yiling Hijab`}
        description={post.excerpt}
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
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

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
