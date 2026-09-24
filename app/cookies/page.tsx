import type { Metadata } from 'next';
import { companyInfo } from '@/lib/company-info';

export const metadata: Metadata = {
  title: 'Cookie & Similar Technologies Policy',
  description: 'Information about cookies, browser storage and similar technologies used across the InCheck 360 website, web platform and mobile applications.',
  alternates: { canonical: '/cookies' },
};

export default function CookiePage() {
  return (
    <section className="legal-page">
      <div className="shell legal-layout">
        <span className="eyebrow">LEGAL</span>
        <h1>Cookie &amp; Similar Technologies Policy</h1>
        <p className="legal-updated">Last updated: September 2026</p>

        <h2>Scope</h2>
        <p>This policy covers cookies, browser storage and similar technical technologies that may be used when you access the InCheck 360 public website, web platform or mobile applications.</p>

        <h2>Website and web-platform technologies</h2>
        <p>The website and web platform may use strictly necessary cookies, local storage, session storage or similar browser technologies to support security, authentication, session management, preferences and core technical operation.</p>

        <h2>Mobile-app technologies</h2>
        <p>Mobile applications do not rely on browser cookies in the same way as websites, but may use app storage, authentication tokens, device identifiers, diagnostic information or push-notification tokens where required to keep users signed in, secure the service, remember relevant settings, troubleshoot issues or deliver enabled notifications.</p>

        <h2>Analytics and optional technologies</h2>
        <p>If optional analytics, measurement, advertising or other non-essential tracking technologies are introduced, this policy and any required consent controls will be updated where notice or consent is required.</p>

        <h2>Your controls</h2>
        <p>You can control browser cookies and site storage through your browser settings. Mobile operating systems may also provide controls for notifications, permissions, identifiers and app data. Blocking or clearing technologies that are necessary for authentication or security may affect service functionality.</p>

        <h2>Contact</h2>
        <p>For questions about cookies, app storage or similar technologies used with InCheck 360, contact <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.</p>
      </div>
    </section>
  );
}
