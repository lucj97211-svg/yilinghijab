import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/page-header/PageHeader';
import FooterCTA from '../components/cta/FooterCTA';
import posts from '../data/posts';
import Seo from '../components/seo/Seo';

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block" data-component="post-card">
      {/* Cover */}
      <div className="overflow-hidden mb-5" style={{ background: 'var(--cream-2)' }}>
        <img loading="lazy" decoding="async"
          src={post.cover}
          alt={post.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: '240px', objectPosition: 'center' }}
        />
      </div>
      {/* Meta */}
      <div className="flex items-center gap-4 mb-3">
        <span className="eyebrow" style={{ color: 'var(--gold)' }}>{post.category}</span>
        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{post.date}</span>
        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{post.readTime}</span>
      </div>
      {/* Title */}
      <h2
        className="serif mb-3 group-hover:opacity-70 transition-opacity"
        style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', lineHeight: 1.25 }}
      >
        {post.title}
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--espresso-light)', lineHeight: 1.75, marginBottom: '20px' }}>
        {post.excerpt}
      </p>
      <span className="eyebrow" style={{ color: 'var(--espresso)', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px', cursor: 'pointer' }}>
        Read More →
      </span>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div data-component="blog-page">
      <Seo
        title="Hijab Wholesale & Sourcing Guides | Yiling Hijab Blog"
        description="Practical sourcing guides for hijab importers and modest-fashion brands. MOQ strategy, fabric comparison, import duty, OEM process and market-specific buying advice."
        path="/blog"
      />
      <PageHeader title="Blog & Resources" breadcrumbs={[{ label: 'Blog' }]} />

      <section className="section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container-site">
          {/* Intro */}
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Industry Insights</p>
            <h2 className="serif mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              Guides for wholesale<br /><em>hijab buyers.</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--espresso-light)', lineHeight: 1.8 }}>
              Practical sourcing guides, fabric comparisons, and OEM tips — written from 16 years of factory experience to help you make smarter buying decisions.
            </p>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-20 p-10 text-center" style={{ background: 'var(--cream-2)', border: '1px solid var(--border)' }}>
            <p className="eyebrow mb-3" style={{ color: 'var(--muted)' }}>More coming soon</p>
            <h3 className="serif text-2xl mb-4">Have a topic in mind?</h3>
            <p style={{ fontSize: '14px', color: 'var(--espresso-light)', marginBottom: '24px' }}>
              We publish sourcing guides, trend reports, and factory insights regularly. Get in touch if you'd like us to cover a specific topic.
            </p>
            <Link to="/contact" className="btn-espresso">Suggest a Topic</Link>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
