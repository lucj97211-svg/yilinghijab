# Yiling Hijab — B2B Factory Website Design Contract

## Design Direction

**Yiling Hijab — The Factory Behind the Fabric**

A B2B wholesale factory site that radiates trust, scale, and craftsmanship. Deep navy (`#0A1F3F`) dominates structural surfaces (header, footer, hero backplate, CTA bands), while amber gold (`#C8962E`) signals action, quality marks, and accent hierarchy. The visual thesis is "enterprise-grade factory, not a dropshipper."

**First-viewport hook:** A full-bleed dark navy hero with a single dominant headline in gold-tinted white, a subhead that names the factory's manufacturing credentials, a two-CTA pair (primary: "Request Quotation" in gold, secondary: "Watch Factory Tour" in outlined white), and a subtle diagonal texture hinting at textile. Below the fold, an OEM client logo strip anchors social proof before any product grid appears.

**Hierarchy strategy:** The page rhythm alternates between dense trust sections (certifications, numbers, logos) and breathing space (wide product grids, single-column "Why Choose Us" testimonials).

## Reference Sources

### Vendor Grounding
- `vendor/open-design/adapter/STATIC_POLICY.md` — static-use boundaries
- `vendor/open-design/upstream/design-systems/professional/DESIGN.md` — closest baseline design system
- `vendor/open-design/upstream/design-systems/professional/tokens.css` — spacing, type, radii, elevation tokens
- `vendor/open-design/upstream/design-systems/professional/components.html` — component fixture patterns
- `vendor/open-design/upstream/craft/anti-ai-slop.md` — P0 must-fix rules
- `vendor/open-design/upstream/craft/typography.md` — type scale and leading rules
- `vendor/open-design/upstream/craft/typography-hierarchy.md` — three-level hierarchy model
- `vendor/open-design/upstream/craft/color.md` — palette structure and accent discipline

### Competitor Analysis
- **headdecor.com**: OEM client logos, certifications (SGS/Intertek/TUV), factory video, WhatsApp float, multi-language, "Why Choose Us" trust factors
- **runmei-scarves.com**: Clean product listing, "Request a Quote" per product, simple navigation

## Design Tokens

### Color Tokens
```css
:root {
  --brand-navy: #0A1F3F;
  --brand-navy-light: #132D56;
  --brand-gold: #C8962E;
  --brand-gold-hover: #B0841F;
  --brand-gold-light: #F5E6C8;
  --bg: #F7F8FA;
  --surface: #FFFFFF;
  --fg: #1A1A2E;
  --fg-2: #4A4A5E;
  --muted: #7B7B8B;
  --border: #DDE0E5;
  --border-soft: #EEF0F4;
  --success: #16A34A;
  --warn: #D97706;
  --danger: #DC2626;
  --accent-on-navy: #FFFFFF;
  --fg-on-navy: #E2E5EB;
  --muted-on-navy: #8B95A8;
}
```

### Typography
```css
--font-display: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif;
--font-body: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif;
--text-xs: 12px; --text-sm: 14px; --text-base: 16px;
--text-lg: 18px; --text-xl: 24px; --text-2xl: 36px;
--text-3xl: 48px; --text-4xl: 64px;
--leading-tight: 1.1; --leading-body: 1.55;
```

### Spacing
```css
--space-1: 4px; --space-2: 8px; --space-3: 12px;
--space-4: 16px; --space-5: 20px; --space-6: 24px;
--space-8: 32px; --space-12: 48px; --space-16: 64px;
--section-y: 80px; --section-y-tablet: 56px; --section-y-phone: 40px;
--container-max: 1200px;
```

### Radii & Elevation
```css
--radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px; --radius-pill: 9999px;
--elev-raised: 0 4px 24px rgba(10, 31, 63, 0.10);
--focus-ring: 0 0 0 3px rgba(200, 150, 46, 0.30);
```

### Motion
```css
--motion-fast: 150ms; --motion-base: 240ms;
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
```

## Page Structure

### 1. Home (`/`)
1. **Header / Nav** — Sticky dark navy bar. Logo left: "YILING" + "Hijab Factory" tag. Nav center: Home, Products, About, Custom/OEM, FAQ, Contact. Right: EN indicator, WhatsApp icon, "Get Quote" gold CTA pill.
2. **Hero** — Full-bleed dark navy with subtle pattern. Two-column: text left (eyebrow, H1, lead, dual CTA), image right (factory photo).
3. **Trust Bar** — Gold-tinted strip with 4 metric badges: 16+ Years, 200+ Workers, 600+ Designs/Year, 50+ Countries.
4. **OEM Client Logo Strip** — "Trusted by Global Brands" heading. 5-6 logo placeholder slots with country flags.
5. **Product Categories** — 3-column grid: Chiffon, Cotton, Linen, Printed, Crinkle, Jersey hijab cards with MOQ and "Inquire Now".
6. **Why Choose Us** — 3 alternating image+text rows: Manufacturing Excellence, Quality Certifications, OEM/ODM Service.
7. **Certifications Showcase** — Centered. 4 badges: SGS, Intertek, TUV, ISO.
8. **Factory Video** — Dark navy section. Video placeholder with play button overlay.
9. **Testimonials** — 3-column quote cards from buyer personas.
10. **Footer CTA** — "Ready to Start Your Order?" → Contact.
11. **Footer** — 4-column: Company, Products, Support, Contact.

### 2. Products (`/products`)
- Page header + breadcrumb. Filter bar (All, Chiffon, Cotton, etc.). 3-column product grid. Pagination.

### 3. About Factory (`/about`)
- Factory exterior hero. Company story. Factory stats grid. Timeline. Facility photos. Certifications.

### 4. Custom / OEM (`/custom-oem`)
- Hero. 4-step process flow. Customization options grid. MOQ table. CTA.

### 5. FAQ (`/faq`)
- Accordion list: Ordering, Products, Shipping, Payment categories.

### 6. Contact (`/contact`)
- Two-column: form (Name, Email, Company, Phone, Product Interest, Message) + contact info cards. Map placeholder.

### Global: WhatsApp Floating Button
- Fixed bottom-right. Green circle. Links to `https://wa.me/<number>`.

## Component Plan

| Component | Responsibility |
|---|---|
| SiteHeader | Sticky nav, logo, nav links, WhatsApp btn, CTA pill |
| HeroSection | Full-bleed hero with headline, subhead, dual CTA |
| TrustBar | Metric badges in gold-tinted strip |
| ClientLogoStrip | Horizontal logo scroll |
| ProductCard | Product image, name, material, MOQ, inquiry link |
| ProductGrid | Responsive grid of ProductCards |
| WhyChooseRow | Alternating image+text row |
| CertificationBadge | Certification logo + name badge |
| VideoSection | Dark bg video embed / placeholder |
| TestimonialCard | Quote card with role/location |
| FooterCTA | Dark band with CTA heading + button |
| SiteFooter | 4-col footer |
| PageHeader | Inner page title + breadcrumb |
| FilterBar | Category filter tabs |
| ProcessStep | Numbered step in OEM flow |
| FAQAccordion | Expandable FAQ items |
| ContactForm | Inquiry form with fields |
| ContactInfoCard | Info card with icon + text |
| WhatsAppFloat | Fixed bottom-right WhatsApp button |
| SectionHeading | Reusable section title + gold accent |

## Copy Tone

**Voice:** Confident manufacturer, direct, factual, warm but professional.
- Use "manufacturing" not "making"; "OEM/ODM" not "customization".
- Avoid: "cutting-edge", "revolutionary", "world-class".
- Domain terms: MOQ, lead time, sample development, bulk order, fabric composition, GSM.
- CTA labels: "Request Quotation", "Watch Factory Tour", "Inquire Now", "Chat on WhatsApp", "Send Inquiry".

## Responsive Rules

- **Mobile (< 640px):** Single column, stacked, hamburger nav, 2x2 trust grid, WhatsApp 48px icon only
- **Tablet (640px–1023px):** 2-column grids, condensed nav
- **Desktop (≥ 1024px):** Full layout, H1 at 64px, 3-column grids, 4-column footer

## Image Manifest

### Stock Images
| Filename | Usage |
|---|---|
| `factory-exterior.jpg` | About hero, Home hero |
| `factory-production-line.jpg` | Why Choose Us — Manufacturing |
| `fabric-textile-closeup.jpg` | Decorative texture |
| `warehouse-shelves.jpg` | Facility photos |
| `quality-inspection.jpg` | QC row |
| `design-studio.jpg` | Design studio photo |

### AI-Generated Images (pending user approval)
| Filename | Usage |
|---|---|
| `hero-factory-banner.jpg` | Home hero bg |
| `product-chiffon-hijab.jpg` | Product card |
| `product-cotton-hijab.jpg` | Product card |
| `product-linen-hijab.jpg` | Product card |
| `product-printed-hijab.jpg` | Product card |
| `product-crinkle-hijab.jpg` | Product card |
| `product-jersey-hijab.jpg` | Product card |
| `certification-documents.jpg` | Certifications row |
| `factory-video-thumbnail.jpg` | Video thumbnail |
| `yiwu-map-placeholder.jpg` | Contact map |

## Risks / Open Questions

1. **WhatsApp number** — needs user to supply actual business number
2. **Factory metrics** — numbers should be verified against store data
3. **Certifications** — actual certs may differ from competitor models
4. **Factory video URL** — check if store has video via connector
5. **Contact form backend** — mailto: MVP, Formspree/Web3Forms upgrade path
6. **Multi-language** — EN indicator only, full i18n out of scope but design supports it
7. **Product detail pages** — not in current scope; links go to contact form
8. **Factory address** — needs real Yiwu address from user
