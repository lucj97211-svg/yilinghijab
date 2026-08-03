import React from 'react';
import PageHeader from '../components/page-header/PageHeader';
import FAQAccordion from '../components/faq/FAQAccordion';
import FooterCTA from '../components/cta/FooterCTA';

export default function FAQPage() {
  return (
    <div data-component="faq-page">
      <PageHeader title="Frequently Asked Questions" breadcrumbs={[{ label: 'FAQ' }]} />
      <FAQAccordion />
      <FooterCTA />
    </div>
  );
}
