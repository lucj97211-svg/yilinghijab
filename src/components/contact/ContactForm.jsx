import React, { useState } from 'react';

const productOptions = ['Custom Printed Modal', 'Jersey Modal', 'Custom Pantone Modal', 'Custom Hemming', 'Jersey Hijab', 'Custom / OEM'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 border border-[#DDE0E5] shadow-sm text-center" data-component="contact-form">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5E6C8] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8962E" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">Thank You!</h3>
        <p className="text-[#4A4A5E]">We will respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[#DDE0E5] shadow-sm" data-component="contact-form">
      <h3 className="text-xl font-semibold text-[#1A1A2E] mb-6">Send an Inquiry</h3>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Name *</label>
            <input type="text" required className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Email *</label>
            <input type="email" required className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)]" placeholder="you@company.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Company</label>
            <input type="text" className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)]" placeholder="Your company" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Phone / WhatsApp</label>
            <input type="text" className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)]" placeholder="+1 234 567 890" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Product Interest</label>
          <select className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)] bg-white">
            {productOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Message *</label>
          <textarea required rows={4} className="w-full px-4 py-2.5 border border-[#DDE0E5] rounded-lg text-sm focus:outline-none focus:border-[#C8962E] focus:ring-2 focus:ring-[rgba(200,150,46,0.2)] resize-none" placeholder="Tell us about your requirements..." />
        </div>
        <button type="submit" className="btn-gold !w-full !py-3">
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
