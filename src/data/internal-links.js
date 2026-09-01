// Internal linking map: connects product categories to the blog articles
// that are topically relevant, and back again. Keeps link equity flowing
// between the 28 guides and the 25 product pages.
import products from './products';
import posts from './posts';

// Product category -> ordered list of the most relevant blog slugs.
const CATEGORY_TO_POSTS = {
  'printed-modal': [
    'modal-hijab-vs-jersey-hijab-custom-printing-guide',
    'modal-hijab-supplier-sourcing-guide-2026',
    'how-to-build-a-hijab-brand-printed-hijab-supplier-guide',
    'jersey-vs-chiffon-vs-modal-hijab-fabric',
  ],
  'jersey-modal': [
    'how-to-choose-jersey-hijab-fabric',
    'jersey-hijab-factory-custom-printed-guide-2026',
    'jersey-vs-chiffon-vs-modal-hijab-fabric',
    'chiffon-vs-jersey-hijab-wholesale',
  ],
  'pantone-modal': [
    'modal-hijab-supplier-sourcing-guide-2026',
    'private-label-hijab-manufacturer-complete-guide',
    'modest-fashion-trends-2026',
    'how-to-start-private-label-hijab-brand',
  ],
  hemming: [
    'oem-odm-hijab-manufacturing-process',
    'inside-yiling-hijab-factory-custom-manufacturer-story',
    'private-label-hijab-manufacturer-complete-guide',
    'how-to-find-reliable-hijab-manufacturer',
  ],
  'jersey-cap': [
    'childrens-hijab-instant-hijab-modest-activewear-product-lines',
    'how-to-choose-jersey-hijab-fabric',
    'hijab-wholesale-moq-guide',
    'modest-fashion-trends-2026',
  ],
};

// Blog category -> product categories worth surfacing on that article.
const POST_CATEGORY_TO_PRODUCTS = {
  'Product Guide': ['printed-modal', 'jersey-modal'],
  'Sourcing Guide': ['printed-modal', 'jersey-modal', 'pantone-modal'],
  'OEM Guide': ['pantone-modal', 'hemming', 'printed-modal'],
  'Factory Story': ['printed-modal', 'hemming'],
  'Brand Guide': ['printed-modal', 'pantone-modal'],
};

// Per-slug overrides where the article is clearly about one product line.
const POST_SLUG_TO_CATEGORIES = {
  'how-to-choose-jersey-hijab-fabric': ['jersey-modal'],
  'jersey-hijab-factory-custom-printed-guide-2026': ['jersey-modal', 'printed-modal'],
  'chiffon-vs-jersey-hijab-wholesale': ['jersey-modal'],
  'modal-hijab-vs-jersey-hijab-custom-printing-guide': ['printed-modal', 'jersey-modal'],
  'childrens-hijab-instant-hijab-modest-activewear-product-lines': ['jersey-cap', 'jersey-modal'],
};

export const CATEGORY_LABELS = {
  'printed-modal': 'Custom Printed Modal',
  'jersey-modal': 'Jersey Modal',
  'pantone-modal': 'Custom Pantone Modal',
  hemming: 'Custom Hemming',
  'jersey-cap': 'Custom Jersey Cap',
};

/** Blog articles relevant to a given product. */
export function postsForProduct(product, limit = 3) {
  const slugs = CATEGORY_TO_POSTS[product.category] || [];
  const matched = slugs
    .map(s => posts.find(p => p.slug === s))
    .filter(Boolean)
    .slice(0, limit);

  if (matched.length >= limit) return matched;

  // Top up with any remaining guides so the module is never sparse.
  const extra = posts
    .filter(p => !matched.some(m => m.slug === p.slug))
    .slice(0, limit - matched.length);
  return [...matched, ...extra];
}

/** Products relevant to a given blog post. */
export function productsForPost(post, limit = 3) {
  const cats =
    POST_SLUG_TO_CATEGORIES[post.slug] ||
    POST_CATEGORY_TO_PRODUCTS[post.category] ||
    ['printed-modal', 'jersey-modal'];

  const picked = [];
  for (const cat of cats) {
    const hit = products.find(p => p.category === cat && !picked.some(x => x.id === p.id));
    if (hit) picked.push(hit);
    if (picked.length >= limit) break;
  }

  if (picked.length < limit) {
    for (const p of products) {
      if (picked.length >= limit) break;
      if (!picked.some(x => x.id === p.id)) picked.push(p);
    }
  }
  return picked.slice(0, limit);
}

/** Category landing links relevant to a blog post, for anchor-text variety. */
export function categoryLinksForPost(post, limit = 3) {
  const cats =
    POST_SLUG_TO_CATEGORIES[post.slug] ||
    POST_CATEGORY_TO_PRODUCTS[post.category] ||
    ['printed-modal', 'jersey-modal'];
  return cats.slice(0, limit).map(c => ({
    category: c,
    label: CATEGORY_LABELS[c],
    path: `/products?category=${c}`,
    count: products.filter(p => p.category === c).length,
  }));
}
