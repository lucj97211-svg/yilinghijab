import React from 'react';
import PageHeader from '../components/page-header/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div data-component="contact-page">
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact' }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
