import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'See how InCheck 360 can exchange selected master and transaction data with ERP and other systems while keeping operational evidence, food-safety records and corrective actions in one operational layer.',
  alternates: { canonical: '/integrations' },
};

const inbound = ['Suppliers / vendors','Items / SKUs','Units of measure','Warehouses / locations','Other approved master data'];
const incheckOwns = ['Checklist execution','Food-safety answers','Temperatures and measured values','Photos and comments','Non-conformities','Corrective actions','Evidence and audit trail'];
const outbound = ['Approved receiving fields','Selected transaction data','Mapped values required by the connected system'];

export default function IntegrationsPage(){
  return <>
    <PageHero
      eyebrow="INTEGRATIONS"
      title="Connect operational execution without turning InCheck 360 into your ERP."
      text="InCheck 360 can exchange selected data with business systems while remaining the operational system for checks, evidence, exceptions, corrective action and verification."
      primary="Discuss an Integration"
      primaryHref="/contact"
      secondary="Explore the Platform"
      secondaryHref="/platform"
    />

    <section className="content-section">
      <div className="shell">
        <div className="integration-principle">
          <div>
            <span className="eyebrow">CLEAR SYSTEM BOUNDARIES</span>
            <h2 className="platform-rich-heading">ERP manages the transaction. InCheck verifies the operation.</h2>
            <p className="platform-rich-copy">Finance, purchasing, inventory, HR and other enterprise records can stay in the system designed for them. InCheck 360 focuses on whether the required operational control was executed, what evidence exists, what failed and what happened next.</p>
          </div>
          <div className="integration-compare">
            <div><small>ERP / BUSINESS SYSTEM</small><strong>Business master & transaction data</strong><p>Purchasing, inventory, suppliers, items, warehouses and selected downstream transaction records.</p></div>
            <span>↔</span>
            <div><small>INCHECK 360</small><strong>Operational execution & assurance</strong><p>Checks, temperatures, evidence, non-conformities, actions, verification and operational history.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell">
        <span className="eyebrow">SELECTIVE DATA FLOW</span>
        <h2 className="platform-rich-heading">Exchange only the data that needs to move.</h2>
        <div className="integration-flow-grid">
          <Reveal><div className="integration-flow-card"><span>01</span><h3>Into InCheck 360</h3><p>Master data can be synchronized so frontline teams select valid business records instead of retyping them.</p><div className="deep-list compact">{inbound.map(x=><div key={x}><span>✓</span>{x}</div>)}</div></div></Reveal>
          <Reveal delay={70}><div className="integration-flow-card featured"><span>02</span><h3>Kept in InCheck 360</h3><p>The operational and food-safety record remains connected to the execution workflow.</p><div className="deep-list compact">{incheckOwns.map(x=><div key={x}><span>✓</span>{x}</div>)}</div></div></Reveal>
          <Reveal delay={140}><div className="integration-flow-card"><span>03</span><h3>Back to the business system</h3><p>Only approved mapped fields need to return when the downstream transaction requires them.</p><div className="deep-list compact">{outbound.map(x=><div key={x}><span>✓</span>{x}</div>)}</div></div></Reveal>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="shell content-grid">
        <Reveal>
          <div>
            <span className="eyebrow">EXAMPLE: MICROSOFT DYNAMICS</span>
            <h2>Receiving can stay operational in InCheck while selected business data synchronizes with Dynamics.</h2>
            <p>A Dynamics integration can provide approved supplier, item, unit and warehouse data to InCheck 360. Employees complete the receiving and food-safety workflow in InCheck. Only the agreed transaction fields are returned to Dynamics, while food-safety answers, temperatures, photos, non-conformities, corrective actions and the submission trail remain in InCheck 360.</p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="content-panel">
            <span className="eyebrow">INTEGRATION SCOPE</span>
            <div className="deep-list">
              {['Data mapping and ownership','One-way or two-way synchronization where appropriate','User / location mapping','Validation and error handling','Security and access rules','Testing and go-live support'].map(x=><div key={x}><span>✓</span>{x}</div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="roadmap-disclosure neutral"><div className="shell">
      <strong>Integration availability</strong>
      <p>Integrations are scoped around the customer environment and are not presented as universal plug-and-play connectors. Requirements, data ownership and supported fields are defined before implementation.</p>
      <Link className="text-link" href="/contact">Discuss your environment <Icon name="arrow" size={16}/></Link>
    </div></section>
    <CTA/>
  </>;
}
