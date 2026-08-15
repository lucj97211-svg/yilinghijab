import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6" data-component="contact-info">
      <div className="bg-white rounded-xl p-6 border border-[#DDE0E5] shadow-sm" data-component="contact-info-card">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-[#C8962E] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#1A1A2E] text-sm mb-1">Factory Address</h4>
            <p className="text-sm text-[#4A4A5E]">
              Yiwu, Zhejiang Province<br />China
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 border border-[#DDE0E5] shadow-sm" data-component="contact-info-card">
        <div className="flex items-start gap-3">
          <Phone size={20} className="text-[#C8962E] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#1A1A2E] text-sm mb-1">WhatsApp</h4>
            <p className="text-sm text-[#4A4A5E]">+86 150-8824-8404</p>
            <a href="https://wa.me/8615088248404" target="_blank" rel="noopener noreferrer" className="text-xs text-[#C8962E] hover:text-[#B0841F]">Chat on WhatsApp →</a>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 border border-[#DDE0E5] shadow-sm" data-component="contact-info-card">
        <div className="flex items-start gap-3">
          <Mail size={20} className="text-[#C8962E] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#1A1A2E] text-sm mb-1">Email</h4>
            <p className="text-sm text-[#4A4A5E]">peri@wennuanfactory.com</p>
            <p className="text-xs text-[#7B7B8B]">We respond within 24 hours</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden border border-[#DDE0E5] shadow-sm">
        <img loading="lazy" decoding="async"
          src="/assets/images/yiwu-map-placeholder.webp"
          alt="Yiling hijab factory location in Yiwu, Zhejiang Province, China"
          className="w-full h-auto"
        />
        <div className="p-4 text-center">
          <p className="text-xs text-[#7B7B8B]">Yiwu, Zhejiang — Global Trade Hub</p>
        </div>
      </div>
    </div>
  );
}
