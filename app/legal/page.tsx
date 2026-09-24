import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Legal & Company Information',
  description: 'Legal and company information for InCheck 360 Holding B.V.',
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">COMPANY INFORMATION</span>
        <h1>Legal & Company Information</h1>
        <div className="legal-company-card">
          <div><small>Company</small><strong>{companyInfo.name}</strong></div>
          <div><small>Location</small><strong>{companyInfo.city}, {companyInfo.country}</strong></div>
          <div><small>Contact</small><strong><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></strong></div>
          <div><small>Phone</small><strong><a href="tel:+3197010280855">{companyInfo.phone}</a></strong></div>
          {companyInfo.streetAddress && <div><small>Registered address</small><strong>{companyInfo.streetAddress}</strong></div>}
          {companyInfo.registrationNumber && <div><small>Registration number</small><strong>{companyInfo.registrationNumber}</strong></div>}
          {companyInfo.vatNumber && <div><small>VAT number</small><strong>{companyInfo.vatNumber}</strong></div>}
        </div>
        <p className="legal-disclosure">For formal contracting, registration or invoicing details not shown on this public page, contact <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
