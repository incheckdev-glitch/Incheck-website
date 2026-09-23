import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the public InCheck 360 website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: September 2026</p>
        <h2>Website purpose</h2>
        <p>This public website provides general information about InCheck 360, its platform, capabilities and services. It is not a substitute for a signed commercial agreement, implementation scope or professional food-safety advice.</p>
        <h2>Product information</h2>
        <p>Product capabilities may evolve. Specific functionality, integrations, service levels, pricing and implementation commitments are governed by the applicable proposal, agreement or other written commercial documentation.</p>
        <h2>Food safety and compliance</h2>
        <p>InCheck 360 can support operational execution, monitoring, documentation and audit readiness. The software does not certify an organization, guarantee legal or regulatory compliance, or replace qualified professional responsibility for HACCP plans, international standards-aligned systems or other compliance programs.</p>
        <h2>Intellectual property</h2>
        <p>Website content, InCheck 360 branding and product materials are owned by or licensed to {companyInfo.name}, except for third-party trademarks and customer logos displayed with their respective ownership.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
