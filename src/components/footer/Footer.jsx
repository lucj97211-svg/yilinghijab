import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Yiling', to: '/about' },
      { label: 'Factory Tour', to: '/about#factory-video' },
      { label: 'Custom / OEM', to: '/custom-oem' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Chiffon Hijab', to: '/products' },
      { label: 'Cotton Hijab', to: '/products' },
      { label: 'Printed Hijab', to: '/products' },
      { label: 'All Products', to: '/products' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Shipping Info', to: '/faq' },
      { label: 'Payment Terms', to: '/faq' },
      { label: 'Sample Policy', to: '/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Yiwu, Zhejiang, China', to: '/contact', isAddress: true },
      { label: 'WhatsApp: +86 (to be updated)', to: '/contact' },
      { label: 'Email: sales@yilinghijab.com', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--brand-navy)' }} className="border-t border-[#132D56]" data-component="site-footer">
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-[0.04em] uppercase">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className={`text-sm transition-colors hover:text-white ${
                        link.isAddress ? 'text-[#8B95A8] cursor-default hover:text-[#8B95A8]' : 'text-[#8B95A8]'
                      }`}
                      onClick={(e) => link.isAddress && e.preventDefault()}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#132D56] py-6">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8B95A8]">
            &copy; {new Date().getFullYear()} Yiling Hijab — Yiwu Qiuyan Clothing Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8B95A8]">EN</span>
            <span className="text-xs text-[#8B95A8]">|</span>
            <span className="text-xs text-[#8B95A8]">yilinghijab.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
