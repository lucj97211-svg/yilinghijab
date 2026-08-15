import React from 'react';
import PageHeader from '../components/page-header/PageHeader';
import ProcessStep from '../components/process/ProcessStep';
import FooterCTA from '../components/cta/FooterCTA';
import { Link } from 'react-router-dom';
import { Palette, Scissors, Ruler, Package, Printer, Shirt } from 'lucide-react';
import Seo from '../components/seo/Seo';

const options = [
  { icon: Palette, title: 'Fabric Selection', desc: 'Choose from chiffon, cotton, linen, jersey, crinkle, or custom blends in any color.' },
  { icon: Printer, title: 'Printing & Pattern', desc: 'Digital printing, screen printing, or custom dyeing with Pantone color matching.' },
  { icon: Ruler, title: 'Size & Cut', desc: 'Standard or custom dimensions. We produce exactly to your specifications.' },
  { icon: Package, title: 'Packaging & Labeling', desc: 'Custom hang tags, woven labels, individual poly bags, and branded packaging.' },
  { icon: Palette, title: 'Color Matching', desc: 'Lab-dip approval process ensures exact color reproduction for every order.' },
  { icon: Shirt, title: 'Embroidery', desc: 'Logo embroidery, decorative stitching, and custom embellishments.' },
];

export default function CustomOEMPage() {
  return (
    <div data-component="custom-oem-page">
      <Seo
        title="OEM & Private Label Hijab Manufacturer | Custom Production"
        description="Custom hijab manufacturing from a Yiwu factory. Your fabric, colour, size, labels and packaging. Samples in 7 days, bulk in 15-25 days. Full OEM and ODM service."
        path="/custom-oem"
      />
      <PageHeader title="Custom / OEM Manufacturing" breadcrumbs={[{ label: 'Custom / OEM' }]} />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">White Label & Private Label</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E] mb-4">
              Your Brand, Our Production Line
            </h2>
            <p className="text-[#4A4A5E] leading-relaxed">
              Send us your design — whether it is a sketch, a reference photo, or a tech pack — and our team
              will bring it to life. From custom prints to private labeling, we handle every detail so you can
              focus on growing your brand.
            </p>
          </div>

          <ProcessStep />

          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.08em] uppercase font-medium text-[#C8962E] mb-3">What We Offer</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">Customization Options</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {options.map((o) => (
                <div key={o.title} className="bg-white rounded-xl p-6 border border-[#DDE0E5] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#F5E6C8] flex items-center justify-center mb-4">
                    <o.icon size={22} className="text-[#C8962E]" />
                  </div>
                  <h4 className="font-semibold text-[#1A1A2E] mb-2">{o.title}</h4>
                  <p className="text-sm text-[#4A4A5E] leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-white rounded-xl border border-[#DDE0E5] shadow-sm p-8 md:p-10">
            <h3 className="text-xl font-semibold text-[#1A1A2E] mb-6 text-center">MOQ & Lead Times</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#DDE0E5]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A2E]">Product Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A2E]">MOQ</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A2E]">Lead Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1A1A2E]">Sample Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Standard Solid Hijab', '100 pcs', '15–20 days', '5–7 days'],
                    ['Printed Hijab', '100 pcs', '20–25 days', '7–10 days'],
                    ['Custom Digital Print', '200 pcs', '25–30 days', '10–14 days'],
                    ['Embroidery / Embellished', '100 pcs', '20–25 days', '7–10 days'],
                    ['Private Label (existing design)', '100 pcs', '15–20 days', '5–7 days'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#EEF0F4]">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-3 px-4 ${j === 0 ? 'font-medium text-[#1A1A2E]' : 'text-[#4A4A5E]'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-gold !text-base !py-3.5 !px-10">
              Start Your Custom Order
            </Link>
          </div>
        </div>
      </section>
      <FooterCTA />
    </div>
  );
}
