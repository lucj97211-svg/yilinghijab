import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterCTA() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }} data-component="footer-cta">
      <div className="container-site text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white mb-4">
          Ready to Start Your Order?
        </h2>
        <p className="text-[#E2E5EB] text-base md:text-lg mb-8 max-w-lg mx-auto">
          Contact our sales team for a customized quotation. We respond within 24 hours.
        </p>
        <Link to="/contact" className="btn-gold !text-base !py-3.5 !px-10 !text-lg">
          Send Inquiry
        </Link>
      </div>
    </section>
  );
}
