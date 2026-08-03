import React from 'react';
import Hero from '../components/hero/Hero';
import TrustBar from '../components/trust-bar/TrustBar';
import ClientLogoStrip from '../components/client-logos/ClientLogoStrip';
import ProductGrid from '../components/product-grid/ProductGrid';
import WhyChooseRow from '../components/why-choose/WhyChooseRow';
import CertificationBadge from '../components/certifications/CertificationBadge';
import VideoSection from '../components/video/VideoSection';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import FooterCTA from '../components/cta/FooterCTA';
import products from '../data/products';

export default function HomePage() {
  return (
    <div data-component="home-page">
      <Hero />
      <TrustBar />
      <ClientLogoStrip />
      <ProductGrid products={products} title="Our Product Range" eyebrow="Featured Categories" />
      <WhyChooseRow />
      <CertificationBadge />
      <VideoSection />
      <TestimonialCard />
      <FooterCTA />
    </div>
  );
}
