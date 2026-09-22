import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Plans',
  description: 'Explore InCheck 360 Lite, Basic, Detect and custom plans for digital operational control, reporting, customer support and continuous environmental monitoring.',
  alternates: { canonical: '/plans' },
};

const liteIncludes = [
  'Up to 12 active checklists',
  'Up to 4 Operational Users',
  'Unlimited Reporting & Management Users',
  'Reference Materials',
  'Initial Training',
  'Customer Support',
];

const liteAddons = [
  'Additional Operational Users',
  'Additional Checklists',
  'Journal Module',
  'Additional Customer Success Hours',
];

const basicIncludes = [
  'Unlimited Checklists',
  'Unlimited Operational Users',
  'Unlimited Reporting & Management Users',
  'Reference Materials',
  'Journal',
  'Account Setup & Onboarding',
  'Customer Support',
  'Dedicated Customer Success',
];

const detectIncludes = [
  'Everything in InCheck Basic',
  'Detectors Module',
  'Continuous Temperature Monitoring',
  'Humidity Monitoring where applicable',
  'Alerts & Exceptions',
  'Historical Monitoring Data',
  'Device Status Monitoring',
  'Multi-location Monitoring',
];

const customIncludes = [
  'Multiple locations',
  'Custom workflows',
  'Advanced permissions',
  'Custom implementation requirements',
  'Detector deployments',
  'Integrations',
  'Additional Customer Success requirements',
  'Enterprise support arrangements',
];

const upcoming = [
  {
    title: 'Audit Management',
    text: 'Structured audits, findings, evidence, corrective actions, assignment, follow-up, verification and audit reporting.',
  },
  {
    title: 'AI Data Analytics',
    text: 'AI-assisted operational analysis for recurring issues, operational trends, high-risk areas, repeated non-conformities and performance patterns.',
  },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="plan-feature-list">
      {items.map((item) => (
        <li key={item}><span>✓</span>{item}</li>
      ))}
    </ul>
  );
}

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="PLANS"
        title="Plans built around how your operation works."
        text="Choose the level of operational control that fits your team today, with the flexibility to expand as your requirements grow. Plans can be configured around locations, modules and implementation needs."
        primary="Book a Demo"
        primaryHref="/book-demo"
        secondary="Explore the Platform"
        secondaryHref="/platform"
      />

      <section className="content-section plans-section">
        <div className="shell">
          <div className="plans-intro">
            <div>
              <span className="eyebrow">CHOOSE YOUR LEVEL</span>
              <h2>Start with the control you need. Expand when the operation grows.</h2>
            </div>
            <p>InCheck Lite keeps smaller teams focused. Basic removes execution limits and adds onboarding and dedicated Customer Success. Detect adds continuous environmental monitoring. Larger or more complex requirements can be configured separately.</p>
          </div>

          <div className="plans-grid">
            <article className="plan-card">
              <div className="plan-card-head">
                <span className="plan-label">STARTER</span>
                <h3>InCheck Lite</h3>
                <p>For smaller teams moving from paper to structured digital execution.</p>
              </div>
              <FeatureList items={liteIncludes} />
              <div className="plan-addons">
                <strong>Optional add-ons</strong>
                <FeatureList items={liteAddons} />
              </div>
              <div className="plan-note">
                <strong>Not included by default</strong>
                <p>Account Setup & Onboarding, Dedicated Customer Success and Detector Monitoring.</p>
              </div>
              <Link className="button ghost plan-cta" href="/contact">Get a Quote <Icon name="arrow" size={16}/></Link>
            </article>

            <article className="plan-card plan-card-featured">
              <div className="plan-card-head">
                <span className="plan-label">FULL EXECUTION</span>
                <h3>InCheck Basic</h3>
                <p>For operations that need broader execution, visibility and ongoing support.</p>
              </div>
              <FeatureList items={basicIncludes} />
              <p className="plan-summary">A complete digital execution and follow-up setup for teams that need more than simply replacing paper checklists.</p>
              <Link className="button primary plan-cta" href="/contact">Get a Quote <Icon name="arrow" size={16}/></Link>
            </article>

            <article className="plan-card">
              <div className="plan-card-head">
                <span className="plan-label">CONTINUOUS MONITORING</span>
                <h3>InCheck Detect</h3>
                <p>For operations that need InCheck Basic plus continuous environmental monitoring.</p>
              </div>
              <FeatureList items={detectIncludes} />
              <p className="plan-summary">Hardware requirements and detector quantities are determined based on each location and operational setup.</p>
              <Link className="button ghost plan-cta" href="/contact">Talk to Our Team <Icon name="arrow" size={16}/></Link>
            </article>

            <article className="plan-card">
              <div className="plan-card-head">
                <span className="plan-label">TAILORED</span>
                <h3>Enterprise / Custom</h3>
                <p>For larger, multi-location or more complex operations with specific implementation requirements.</p>
              </div>
              <FeatureList items={customIncludes} />
              <p className="plan-summary">We configure the scope around the operating model rather than forcing a complex organization into a fixed package.</p>
              <Link className="button ghost plan-cta" href="/contact">Talk to Us <Icon name="arrow" size={16}/></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section upcoming-section">
        <div className="shell">
          <div className="upcoming-head">
            <div>
              <span className="eyebrow">UPCOMING MODULES</span>
              <h2>More control layers are on the way.</h2>
            </div>
            <p>These modules are in development and are not presented as currently available capabilities.</p>
          </div>
          <div className="upcoming-grid">
            {upcoming.map((item) => (
              <article className="upcoming-card" key={item.title}>
                <span>COMING SOON</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plans-bottom-cta">
        <div className="shell plans-bottom-inner">
          <div>
            <span className="eyebrow light">NOT SURE WHICH PLAN FITS?</span>
            <h2>Tell us how your operation works.</h2>
            <p>Share your number of locations and operational requirements. We’ll help identify the most suitable InCheck 360 configuration.</p>
          </div>
          <div className="plans-bottom-actions">
            <Link className="button white" href="/book-demo">Book a Demo <Icon name="arrow" size={17}/></Link>
            <Link className="button dark-outline" href="/contact">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
