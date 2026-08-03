import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="factory-video" className="relative py-20 md:py-28" style={{ backgroundColor: 'var(--brand-navy)' }} data-component="video-section">
      <div className="container-site text-center relative z-10">
        <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-4">Virtual Tour</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white mb-6">See Our Factory</h2>
        <div className="max-w-2xl mx-auto relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
          <img
            src="/assets/images/factory-video-thumbnail.png"
            alt="Factory production floor"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1F3F]/40 group-hover:bg-[#0A1F3F]/50 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#C8962E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play size={36} fill="#fff" color="#fff" className="ml-1" />
            </div>
          </div>
        </div>
        <p className="text-[#8B95A8] text-sm mt-6">
          Take a look inside our manufacturing facility in Yiwu, Zhejiang
        </p>
      </div>
    </section>
  );
}
