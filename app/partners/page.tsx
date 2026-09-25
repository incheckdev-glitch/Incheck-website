import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Channel Partner Program',
  description: 'Partner with InCheck 360 to introduce, position and support a practical operational control platform for hospitality, food service and multi-location operations.',
  alternates: { canonical: '/partners' },
};

const partnerModels = [
  {
    icon: 'users',
    title: 'Referral Partner',
    text: 'Introduce qualified organizations to InCheck 360 while our team manages the product demonstration, commercial discussion and implementation process.',
  },
  {
    icon: 'arrow',
    title: 'Channel / Reseller Partner',
    text: 'Represent InCheck 360 in an agreed market or customer segment with a defined commercial structure, sales process and support model.',
  },
  {
    icon: 'shield',
    title: 'Consulting Partner',
    text: 'Complement advisory, food-safety, quality or operational consulting services with a digital execution layer for recurring controls, evidence and visibility.',
  },
];

const fit = [
  'Hospitality and F&B consultants',
  'Food-safety and quality professionals',
  'Operational advisory firms',
  'Technology and digital-transformation providers',
  'Hospitality solution resellers',
  'Regional business-development partners',
];

const process = [
  ['01', 'Explore the fit', 'We review your market, customer base, expertise and the type of partnership you want to build.'],
  ['02', 'Define the model', 'We agree how opportunities are introduced, qualified, demonstrated and commercially managed.'],
  ['03', 'Enable the partner', 'We provide product positioning, sales material and the platform context needed to represent InCheck 360 accurately.'],
  ['04', 'Develop opportunities', 'Partner and InCheck 360 teams coordinate on qualified opportunities, demonstrations, proposals and customer onboarding.'],
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="CHANNEL PARTNER PROGRAM"
        title="Bring stronger operational control to the customers you already understand."
        text="The InCheck 360 Channel Partner Program is designed for consultants, resellers and industry professionals who work with hospitality, food-service and multi-location operations and want to introduce a practical digital execution platform."
        primary="Become a Partner"
        primaryHref="/contact"
        secondary="Explore the Platform"
        secondaryHref="/platform"
      >
        <div className="partner-hero-visual" aria-hidden="true">
          <img
            src="/images/partners/incheck360-partner-handshake-transparent.webp"
            alt=""
          />
        </div>
      </PageHero>

      <section className="content-section">
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">WHY PARTNER WITH INCHECK 360</span>
              <h2>Add a digital execution layer to the operational problems your customers already face.</h2>
              <p>Many operators already know what their standards should be. The harder problem is making those standards happen consistently across locations, shifts and teams. InCheck 360 helps connect recurring checks, operational records, reference material, environmental monitoring and reporting in one operating environment.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel">
              <div className="simple-card"><Icon name="check"/><h3>Practical positioning</h3><p>Lead with real operational problems instead of generic software features.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="users"/><h3>Joint opportunity support</h3><p>Work with the InCheck 360 team on qualification, demonstrations and customer discussions.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="report"/><h3>Expandable customer value</h3><p>Start with digital execution and expand into monitoring, reporting and broader operational visibility where relevant.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{background:'#f5f9fd'}}>
        <div className="shell">
          <span className="eyebrow">PARTNER MODELS</span>
          <h2 className="platform-rich-heading">A partnership structure that matches how you work with customers.</h2>
          <p className="platform-rich-copy">The exact commercial and operating model is agreed directly with each partner based on market, role, customer ownership and level of involvement.</p>
          <div className="simple-card-grid" style={{marginTop:32}}>
            {partnerModels.map((model) => (
              <Reveal key={model.title}>
                <div className="simple-card">
                  <Icon name={model.icon as 'users'|'arrow'|'shield'} />
                  <h3>{model.title}</h3>
                  <p>{model.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">WHO IT IS FOR</span>
              <h2>Built for partners who already understand the operating environment.</h2>
              <p>The strongest partners are not simply looking for another software product to list. They understand the customer problem, have trusted relationships in the market and can help identify where InCheck 360 creates a practical operational benefit.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel">
              <div className="bullet-grid">
                {fit.map((item) => <div className="bullet-item" key={item}><span>✓</span>{item}</div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{background:'#f5f9fd'}}>
        <div className="shell">
          <span className="eyebrow">HOW THE PROGRAM WORKS</span>
          <h2 className="platform-rich-heading">Clear ownership from first introduction to customer onboarding.</h2>
          <p className="platform-rich-copy">Every partnership starts with alignment on the market, opportunity process and responsibilities. Commercial terms and any territory arrangements are documented separately where applicable.</p>
          <div className="platform-architecture">
            {process.map(([no,title,text]) => (
              <div className="architecture-card" key={no}>
                <span className="architecture-index">{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">WHAT PARTNERS CAN POSITION</span>
              <h2>A broader operational story than a standalone checklist tool.</h2>
              <p>InCheck 360 can be positioned around daily execution, food-safety routines, reference material, environmental monitoring, reporting and multi-location management. The right starting point depends on the customer’s operation and current pain points.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel">
              {[
                ['Checklists & Tasks','Structured recurring operational execution.'],
                ['Journal','Operational context, observations and shift-to-shift visibility.'],
                ['Reference Materials','SOPs, procedures and guidance available at the point of work.'],
                ['Smart Detectors','Continuous temperature and environmental monitoring.'],
                ['Reports & Audit Trail','Traceable operational records and evidence for management review.'],
              ].map(([title,text]) => (
                <div className="simple-card" style={{marginTop:12}} key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
