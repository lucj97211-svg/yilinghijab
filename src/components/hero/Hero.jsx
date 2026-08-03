import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--brand-navy)' }} data-component="hero-section">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(200,150,46,0.1) 2px, rgba(200,150,46,0.1) 4px)',
        }} />
      </div>
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[520px] md:min-h-[600px] py-16">
          <div className="text-white order-2 lg:order-1">
            <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-4">
              EST. 2008 — Yiwu, China
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.1] mb-6">
              Premium Hijab Manufacturing<br />
              <span className="text-[#C8962E]">for Global Wholesale</span>
            </h1>
            <p className="text-base md:text-lg text-[#E2E5EB] leading-relaxed mb-8 max-w-lg">
              16 years of expertise. 200+ skilled workers. 600+ new designs every year.
              Ship directly from our Yiwu factory to your warehouse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-gold !text-base !py-3.5 !px-8">
                Request Quotation
              </Link>
              <a href="#factory-video" className="btn-outline-white !text-base !py-3.5 !px-8">
                <Play size={18} /> Watch Factory Tour
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#132D56]">
              <img
                src="/assets/images/hero-factory-banner.png"
                alt="Modern textile factory floor in Yiwu"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3F]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-medium opacity-80">Our Manufacturing Facility — Yiwu, Zhejiang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
