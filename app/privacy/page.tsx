import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the InCheck 360 website, web platform and mobile applications.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: September 2026</p>

        <h2>Scope of this policy</h2>
        <p>This Privacy Policy explains how {companyInfo.name} handles personal information in connection with the InCheck 360 public website, web platform, mobile applications for supported devices, demo and contact requests, and related support or business communications.</p>

        <h2>Information we may process</h2>
        <p>Depending on how you use InCheck 360, information may include your name, work email, company, role, location or assigned site, account and access information, support communications, and information submitted through forms or demo requests.</p>
        <p>When authorized users use the InCheck 360 platform or mobile app, the service may also process operational records created through the customer account, such as checklist responses, task activity, Journal entries, comments, photos or other evidence, timestamps, signatures where configured, detector-related records, and user or location context needed to maintain the operational history.</p>

        <h2>Technical and device information</h2>
        <p>We may process technical information required to operate and secure the service, such as browser or app version, device type, IP address, session information, diagnostic information and similar technical data. Where mobile notifications are enabled, a device or push-notification token may be processed so notifications can be delivered.</p>

        <h2>How information is used</h2>
        <p>Information may be used to provide and secure the service, authenticate users, maintain operational records, deliver configured functionality and notifications, provide customer support, investigate technical issues, respond to enquiries, arrange demonstrations, improve service reliability and meet applicable legal or contractual obligations.</p>

        <h2>Customer-controlled accounts and operational data</h2>
        <p>Many platform and mobile-app users access InCheck 360 through an organization that has contracted for the service. In those cases, the organization may control user access, locations, roles, workflows and the operational information submitted through its account. Users should also follow the privacy and data-handling instructions provided by their organization.</p>

        <h2>Service providers and sharing</h2>
        <p>Information may be processed by service providers that support hosting, infrastructure, communications, security, technical operations or other functions needed to provide InCheck 360. Information is not shared for purposes unrelated to operating the service, supporting customers, meeting contractual obligations or complying with applicable law.</p>

        <h2>Retention and security</h2>
        <p>Information is retained for as long as reasonably required for the relevant service, customer relationship, operational record, legal obligation or legitimate business need. We use technical and organizational measures intended to protect information against unauthorized access, loss, misuse or alteration, while recognizing that no online service can guarantee absolute security.</p>

        <h2>Your choices and questions</h2>
        <p>Account users may need to contact their organization administrator for changes to account access or operational records. For privacy questions or requests relating to information handled directly by {companyInfo.name}, contact <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
