import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon, type IconName } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { features } from '@/lib/site-data';
import { proofStats } from '@/lib/public-proof';

export const metadata: Metadata = {
  title: 'Operational Control Platform',
  description: 'Explore the InCheck 360 operational control platform for checklists, Journal records, Reference Materials, smart detectors, reports, evidence and integrations.',
  alternates: { canonical: '/platform' },
};

const architecture = [
  { icon:'check', layer:'Execution', title:'Checklists & tasks', text:'Recurring, shift-based and location-based execution with due times, expiry, structured inputs and evidence.' },
  { icon:'report', layer:'Operational context', title:'Journal', text:'Capture shift notes, incidents, observations and location context that sits between recurring checks.' },
  { icon:'book', layer:'Standards', title:'Reference Materials', text:'Keep SOPs, procedures, manuals and training references accessible where the work happens.' },
  { icon:'thermo', layer:'Monitoring', title:'Smart detectors', text:'Bring continuous environmental readings, device status, thresholds and trends into the same operational context.' },
  { icon:'report', layer:'Evidence', title:'Reports & audit trail', text:'Preserve time-stamped records, user and location history, linked evidence and exportable operational records.' },
] as const;

const roadmap = [
  { icon:'search', title:'Audit Management', text:'A dedicated audit layer for structured audits, findings, follow-up, verification and reporting.' },
  { icon:'spark', title:'AI Data Analytics', text:'An upcoming intelligence layer for recurring issues, trends, risk signals and management summaries.' },
] as const;

const inputControls = [
  ['Numeric ranges','Validate temperatures, quantities and other measured values against expected limits.'],
  ['Photo evidence','Require visual evidence where a simple yes/no answer is not enough.'],
  ['Signatures','Capture acknowledgment or verification where accountability matters.'],
  ['QR inputs','Connect users, locations or checkpoints to the right workflow.'],
  ['Conditional logic','Show the right questions and actions based on previous responses.'],
  ['Role & location rules','Deliver the right workflow to the right team, site, role or shift.'],
];

const executionControls = [
  ['Reminders & alerts','Surface due, incomplete and exception-based work through configured operational notifications.'],
  ['Personal + shared devices','Support different frontline device models, including QR-based shared-device access where configured.'],
  ['User traceability','Keep user, role, location and timestamp context connected to the operational record.'],
  ['Exception handling','Move failed controls into visible follow-up instead of leaving them buried in completed forms.'],
  ['Evidence requirements','Require photos, signatures, values or comments where the operating control needs stronger proof.'],
  ['Central standards, local execution','Define common controls centrally while adapting assignment and schedules to each location.'],
];

export default function PlatformPage(){return <>
  <PageHero eyebrow="THE INCHECK 360 PLATFORM" title="One operational layer from daily checks to verified closure." text="Bring checklists, Journal records, Reference Materials, continuous monitoring, evidence and reporting into one connected operational record.">
    <div className="solution-hero-image-card"><img src="/images/platform/incheck360-platform-hero.webp" alt="InCheck 360 platform shown across desktop, laptop and mobile screens with checklists, detectors, reports and multi-location visibility." /></div>
  </PageHero>

  <section className="content-section">
    <div className="shell">
      <div className="page-lead">
        <span className="eyebrow">CONNECTED BY DESIGN</span>
        <h2>Stop treating operational data as separate islands.</h2>
        <p>Each part of InCheck 360 contributes to the same operational context: what was checked, what failed, who owns the action, what evidence was submitted, what the equipment was reading and whether the issue was verified.</p>
      </div>
      <div className="proof-stat-grid platform-proof-grid">
        {proofStats.map(stat => <div className="proof-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.detail}</small></div>)}
      </div>
    </div>
  </section>

  <section className="content-section" style={{background:'#f5f9fd'}}>
    <div className="shell">
      <span className="eyebrow">PLATFORM ARCHITECTURE</span>
      <h2 className="platform-rich-heading">Five current operating layers. One connected picture.</h2>
      <p className="platform-rich-copy">Use only the modules you need, or connect them into a broader execution, food-safety and operational-control system across your locations.</p>
      <div className="platform-architecture">
        {architecture.map((item,i) => <Reveal key={item.title} delay={(i%4)*50}>
          <div className="architecture-card">
            <span className="architecture-index">0{i+1}</span>
            <span className="feature-icon"><Icon name={item.icon as IconName}/></span>
            <small>{item.layer}</small>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Reveal>)}
      </div>
      <div className="platform-roadmap">
        <div className="platform-roadmap-head">
          <div><span className="eyebrow">PRODUCT ROADMAP</span><h3>Dedicated Audit Management and AI Data Analytics are coming soon.</h3></div>
          <p>They are shown separately so customers can understand the direction of the platform without confusing roadmap capabilities with modules available today.</p>
        </div>
        <div className="upcoming-grid">
          {roadmap.map((item) => <div className="upcoming-card" key={item.title}><span>COMING SOON</span><Icon name={item.icon as IconName}/><h3>{item.title}</h3><p>{item.text}</p></div>)}
        </div>
      </div>
    </div>
  </section>

  <section className="content-section platform-connect-section">
    <div className="shell content-grid platform-connect-grid">
      <Reveal>
        <div className="platform-connect-copy">
          <span className="eyebrow">HOW IT CONNECTS</span>
          <h2>Standards become workflows. Workflows become evidence.</h2>
          <p>Management defines the operating standard. Teams execute it at site level. Exceptions become actions. Connected devices add continuous context. Reporting brings the record back together.</p>
          <div className="bullet-grid platform-connect-points">{['Central standards','Local execution','Exception handling','Ownership & deadlines','Evidence capture','Management visibility'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="operational-record-panel">
          <div className="operational-record-head"><strong>Operational record</strong><span>Connected</span></div>
          {[
            {title:'Checklist completed', icon:'check', status:'Recorded'},
            {title:'Exception identified', icon:'alert', status:'Recorded'},
            {title:'Follow-up documented', icon:'report', status:'Recorded'},
            {title:'Evidence uploaded', icon:'report', status:'Recorded'},
            {title:'Manager verified', icon:'shield', status:'Closed'},
          ].map((item,i)=><div className="operational-record-row" key={item.title}>
            <span className="operational-record-icon"><Icon name={item.icon as IconName}/></span>
            <div className="operational-record-copy"><small>STEP {String(i+1).padStart(2,'0')}</small><strong>{item.title}</strong></div>
            <em className={item.status==='Closed'?'is-closed':''}>{item.status}</em>
          </div>)}
        </div>
      </Reveal>
    </div>
  </section>

  <section className="content-section platform-input-section">
    <div className="shell content-grid">
      <Reveal>
        <div className="platform-mobile-checklist-visual platform-mobile-checklist-structured">
          <img src="/images/platform/incheck360-mobile-checklist.webp" alt="InCheck 360 mobile checklist showing structured receiving temperature and food item fields." />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div>
          <span className="eyebrow">DATA QUALITY BY DESIGN</span>
          <h2>Ask for better evidence than a simple checkbox.</h2>
          <p>Use structured inputs and workflow rules to improve data quality at source, reduce vague answers and make follow-up more actionable.</p>
          <div className="input-control-grid">
            {inputControls.map(([title,text]) => <div className="input-control" key={title}><strong>{title}</strong><p>{text}</p></div>)}
          </div>
        </div>
      </Reveal>
    </div>
  </section>

  <section className="content-section" style={{background:'#f5f9fd'}}>
    <div className="shell">
      <span className="eyebrow">EXECUTION CONTROLS</span>
      <h2 className="platform-rich-heading">The workflow around the checklist matters as much as the checklist itself.</h2>
      <p className="platform-rich-copy">InCheck 360 combines assignment, access, reminders, evidence and exception handling so recurring work stays connected to accountability.</p>
      <div className="product-detail-grid">
        {executionControls.map(([title,text],i) => <Reveal key={title} delay={(i%3)*45}><div className="product-detail-card"><span className="product-detail-index">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}
      </div>
    </div>
  </section>

  <section className="content-section platform-integration-section">
    <div className="shell content-grid">
      <Reveal><div><span className="eyebrow">INTEGRATIONS</span><h2>Keep business transactions in the ERP and operational evidence in InCheck 360.</h2><p>Selected master and transaction data can be exchanged with ERP or other business systems while InCheck remains the operational layer for checks, evidence, non-conformities, operational follow-up and verification.</p><Link className="button ghost" href="/integrations">Explore Integrations <Icon name="arrow" size={16}/></Link></div></Reveal>
      <Reveal delay={80}><div className="content-panel"><span className="eyebrow">EXAMPLE</span><h3>Microsoft Dynamics receiving workflow</h3><p>Supplier, item and warehouse data can flow into InCheck. Teams complete receiving and food-safety controls in InCheck, while only agreed mapped transaction fields return to Dynamics.</p></div></Reveal>
    </div>
  </section>

  <section className="content-section" style={{background:'#f5f9fd'}}>
    <div className="shell">
      <span className="eyebrow">EXPLORE THE MODULES</span>
      <div className="simple-card-grid" style={{marginTop:15}}>{features.map(f=><Link className="simple-card" href={f.slug==='smart-detectors'?'/smart-detectors':`/product/${f.slug}`} key={f.slug}><span className="eyebrow">{f.eyebrow}</span><h3>{f.title}</h3><p>{f.description}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link>)}</div>
    </div>
  </section>
  <CTA/>
</>};
