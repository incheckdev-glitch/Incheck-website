import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie information for the InCheck 360 website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiePage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Cookie Policy</h1>
        <p className="legal-updated">Last updated: September 2026</p>
        <h2>Current website use</h2>
        <p>This website may use strictly necessary browser storage or cookies required for hosting, security and core technical operation. At the time of this update, the public website does not intentionally enable optional advertising cookies through its application code.</p>
        <h2>Future analytics or optional cookies</h2>
        <p>If optional analytics or other non-essential cookies are introduced, this policy and the relevant consent controls will be updated where notice or consent is required.</p>
        <h2>Browser controls</h2>
        <p>You can control or remove cookies through your browser settings. Blocking necessary storage can affect website functionality.</p>
        <h2>Contact</h2>
        <p>For questions about website privacy or cookies, contact <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
