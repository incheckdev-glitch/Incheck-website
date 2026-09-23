import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the InCheck 360 website.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: September 2026</p>
        <h2>About this notice</h2>
        <p>This notice explains how {companyInfo.name} handles personal information submitted through this website or sent to us directly.</p>
        <h2>Information you may provide</h2>
        <p>You may choose to provide contact and business information such as your name, work email, company name, number of locations and the content of a message or demo request.</p>
        <h2>Why we use this information</h2>
        <p>We use information you provide to respond to enquiries, arrange demonstrations, understand business requirements, maintain business correspondence and protect the website from misuse.</p>
        <h2>Sharing and service providers</h2>
        <p>Information may be processed by service providers that support website hosting, email delivery, security or business operations. Information submitted through this website is used for the business and service-related purposes described in this notice.</p>
        <h2>Retention</h2>
        <p>We keep business enquiries and related correspondence only as long as reasonably needed for the purpose for which they were collected, legal obligations or legitimate business recordkeeping.</p>
        <h2>Your questions</h2>
        <p>For privacy questions or requests relating to information you provided, contact <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
