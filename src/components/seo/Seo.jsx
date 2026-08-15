import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ORIGIN = 'https://yilinghijab.com';
export const BRAND = 'Yiling Hijab';
const DEFAULT_OG = `${ORIGIN}/assets/images/hero-duo-models.webp`;

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
  jsonLd,
  noindex = false,
}) {
  const url = `${ORIGIN}${path}`;
  const ogImage = image.startsWith('http') ? image : `${ORIGIN}${image}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yiwu Yiling Clothing Co., Ltd.',
    alternateName: BRAND,
    url: ORIGIN,
    logo: `${ORIGIN}/assets/images/hero-duo-models.webp`,
    description:
      'Hijab manufacturer and wholesale supplier based in Yiwu, China. OEM and private-label production, MOQ from 100 pieces, shipping to 50+ countries.',
    foundingDate: '2008',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yiwu',
      addressRegion: 'Zhejiang',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'peri@wennuanfactory.com',
      telephone: '+8615088248404',
      availableLanguage: ['en', 'zh'],
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${ORIGIN}${it.path}`,
    })),
  };
}

export function productSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${p.name} - ${p.color}`,
    description: p.description,
    image: p.gallery.map(g => `${ORIGIN}${g}`),
    sku: p.slug,
    brand: { '@type': 'Brand', name: BRAND },
    manufacturer: { '@type': 'Organization', name: 'Yiwu Yiling Clothing Co., Ltd.' },
    material: p.material,
    offers: {
      '@type': 'Offer',
      url: `${ORIGIN}/products/${p.slug}`,
      priceCurrency: 'USD',
      price: p.price.replace('$', ''),
      availability: 'https://schema.org/InStock',
      eligibleQuantity: {
        '@type': 'QuantitativeValue',
        minValue: 100,
        unitCode: 'C62',
      },
      seller: { '@type': 'Organization', name: 'Yiwu Yiling Clothing Co., Ltd.' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.stars,
      reviewCount: p.reviews,
      bestRating: 5,
    },
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${ORIGIN}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: BRAND, url: ORIGIN },
    publisher: {
      '@type': 'Organization',
      name: BRAND,
      logo: { '@type': 'ImageObject', url: `${ORIGIN}/assets/images/hero-duo-models.webp` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}/blog/${post.slug}` },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
