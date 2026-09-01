import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ORIGIN = 'https://yilinghijab.com';
export const BRAND = 'Yiling Hijab';
const DEFAULT_OG = `${ORIGIN}/assets/images/hero-duo-models.webp`;

// Gallery entries may be site-relative ("/assets/...") or already absolute
// ("https://sc04.alicdn.com/..."). Never double-prefix an absolute URL.
export const absUrl = u => (/^https?:\/\//i.test(u) ? u : `${ORIGIN}${u}`);

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
  const ogImage = absUrl(image);
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 283,
      bestRating: 5,
      worstRating: 1,
    },
    knowsAbout: [
      'custom printed modal hijab manufacturing',
      'jersey modal hijab wholesale',
      'private label hijab production',
      'OEM hijab manufacturing',
      'Pantone colour matching for modest fashion',
      'jersey hijab undercap manufacturing',
    ],
    areaServed: ['US', 'GB', 'CA', 'AU', 'ID', 'MY', 'AE', 'SA', 'DE', 'FR', 'NL'],
  };
}

export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND,
    url: ORIGIN,
    publisher: { '@type': 'Organization', name: 'Yiwu Yiling Clothing Co., Ltd.' },
    inLanguage: 'en',
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
    image: p.gallery.map(absUrl),
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
    image: absUrl(post.cover),
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

// Purchasing FAQ injected on every product page so AI engines have a
// structured answer for the questions B2B buyers actually ask.
export function productFaqSchema(p) {
  const lowest = p.tiers && p.tiers.length ? p.tiers[p.tiers.length - 1].price : p.price;
  return faqSchema([
    {
      q: `What is the minimum order quantity for the ${p.name} in ${p.color}?`,
      a: `The MOQ is ${p.moq} per colourway. Pricing starts at ${p.price} per piece and drops to ${lowest} at the highest volume tier.`,
    },
    {
      q: `Can I order the ${p.name} with my own private label?`,
      a: 'Yes. We are an OEM and private-label manufacturer. Custom woven labels, hang tags, care labels, and retail packaging are all produced in-house at no tooling fee.',
    },
    {
      q: `Can I get a sample of the ${p.name} before placing a bulk order?`,
      a: 'Yes. Pre-production samples are produced for every new style, typically within 7 days, so you can assess fabric hand feel, colour accuracy, and stitch quality before committing to bulk.',
    },
    {
      q: 'What is the production lead time for a bulk order?',
      a: 'Samples ship in about 7 days. Bulk production runs 25 to 35 days depending on order volume and finishing requirements, from our factory in Yiwu, Zhejiang, China.',
    },
    {
      q: `What fabric and weight is the ${p.name}?`,
      a: `This style is produced in ${p.material} at ${p.weight}, finished at ${p.size}. Custom fabric weight and cut size are available on request for bulk orders.`,
    },
  ]);
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
