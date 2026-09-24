import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the InCheck 360 website, web platform and mobile applications.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: September 2026</p>

        <h2>Scope</h2>
        <p>These Terms of Use apply to the InCheck 360 public website, web platform and mobile applications provided by {companyInfo.name}. Where an organization has a signed proposal, licence, service agreement, implementation scope or other written commercial agreement with us, that agreement governs the commercial service and prevails where it conflicts with these general terms.</p>

        <h2>Accounts and authorized use</h2>
        <p>Platform and mobile-app access is intended for authorized users of an InCheck 360 customer account. Users are responsible for protecting their login credentials and for using the service only within the permissions and responsibilities assigned by their organization. Access must not be shared, misused, used to interfere with the service, or used to attempt unauthorized access to another account, user, location or system.</p>

        <h2>Operational records and user-submitted content</h2>
        <p>Authorized users may submit checklist responses, Journal entries, values, comments, photos, signatures, evidence and other operational information through InCheck 360. Users and customer organizations are responsible for ensuring that information they submit is appropriate, lawful and accurate for their intended operational use.</p>

        <h2>Product information and service availability</h2>
        <p>Product capabilities may evolve. Specific modules, integrations, service levels, pricing, storage, implementation commitments and support arrangements are governed by the applicable commercial documentation. We may maintain, update or improve the website, platform and mobile applications over time.</p>

        <h2>Food safety, operational controls and compliance</h2>
        <p>InCheck 360 can support operational execution, monitoring, documentation, evidence and audit readiness. The software does not certify an organization, guarantee legal or regulatory compliance, replace professional judgment, or replace the responsibility of the customer and its qualified personnel to design, approve and operate appropriate HACCP plans, food-safety systems, operating procedures or other compliance programs.</p>

        <h2>Mobile applications and third-party platforms</h2>
        <p>When the InCheck 360 mobile application is downloaded through an app store, the store provider may apply its own terms and privacy practices to the download, account or device environment. Third-party services or integrations used with InCheck 360 may also be subject to the terms of their respective providers.</p>

        <h2>Intellectual property</h2>
        <p>The InCheck 360 software, website content, branding, interface elements and product materials are owned by or licensed to {companyInfo.name}, except for third-party trademarks, customer logos and other materials belonging to their respective owners. These terms do not transfer ownership of InCheck 360 intellectual property to users or customers.</p>

        <h2>Questions</h2>
        <p>Questions about these terms can be sent to <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
