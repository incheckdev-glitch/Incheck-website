import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon, type IconName } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { features } from '@/lib/site-data';
import { proofStats } from '@/lib/public-proof';

export const metadata = { title: 'Platform' };

const architecture = [
  { icon:'check', layer:'Execution', title:'Checklists & tasks', text:'Recurring, shift-based and location-based execution with due times, expiry and structured inputs.' },
  { icon:'search', layer:'Assurance', title:'Audits & inspections', text:'Structured inspections, scoring, evidence, findings and review across locations.' },
  { icon:'alert', layer:'Follow-through', title:'Corrective actions', text:'Turn failed checks and audit findings into owned actions with deadlines and evidence.' },
  { icon:'book', layer:'Standards', title:'SOPs & references', text:'Keep operational procedures and brand standards accessible where the work happens.' },
  { icon:'thermo', layer:'Monitoring', title:'Smart detectors', text:'Bring continuous environmental readings, thresholds and trends into the same operational context.' },
  { icon:'chart', layer:'Visibility', title:'Dashboards & analytics', text:'Track completion, exceptions, trends and cross-location performance from one management view.' },
  { icon:'report', layer:'Evidence', title:'Reports & audit trails', text:'Preserve time-stamped records, history and exportable operational evidence.' },
  { icon:'spark', layer:'Intelligence', title:'AI intelligence', text:'A growing intelligence layer for surfacing patterns, risk signals and operational insights.' },
] as const;

const inputControls = [
  ['Numeric ranges','Validate temperatures, quantities and other measured values against expected limits.'],
  ['Photo evidence','Require visual evidence where a simple yes/no answer is not enough.'],
  ['Signatures','Capture acknowledgment or verification where accountability matters.'],
  ['QR inputs','Connect users, locations or checkpoints to the right workflow.'],
  ['Conditional logic','Show the right questions and actions based on previous responses.'],
  ['Role & location rules','Deliver the right workflow to the right team, site, role or shift.'],
];

export default function PlatformPage(){return <>
  <PageHero eyebrow="THE INCHECK 360 PLATFORM" title="One operational layer from daily checks to verified closure." text="Bring checklists, audits, SOPs, corrective actions, continuous monitoring, evidence and reporting into one connected operational record.">
    <div className="mini-console"><div className="mini-console-head"><strong>Operations overview</strong><span>All locations</span></div><div className="mini-console-grid"><div className="mini-console-card"><span>Checklist completion</span><strong>92%</strong></div><div className="mini-console-card"><span>Open actions</span><strong>12</strong></div><div className="mini-console-card"><span>Detector status</span><strong>Normal</strong></div><div className="mini-console-card"><span>Audit trail</span><strong>Ready</strong></div></div></div>
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
      <h2 className="platform-rich-heading">Eight connected layers. One operating picture.</h2>
      <p className="platform-rich-copy">Use only the modules you need, or connect them into a broader execution and compliance system across your locations.</p>
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
    </div>
  </section>

  <section className="content-section">
    <div className="shell content-grid">
      <Reveal>
        <div>
          <span className="eyebrow">HOW IT CONNECTS</span>
          <h2>Standards become workflows. Workflows become evidence.</h2>
          <p>Management defines the operating standard. Teams execute it at site level. Exceptions become actions. Connected devices add continuous context. Reporting brings the record back together.</p>
          <div className="bullet-grid">{['Central standards','Local execution','Exception handling','Ownership & deadlines','Evidence capture','Management visibility'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="content-panel dark">
          <div className="mini-console-head"><strong>Operational record</strong><span>Connected</span></div>
          {['Checklist completed','Exception identified','Corrective action assigned','Evidence uploaded','Manager verified'].map((x,i)=><div className="detector-row" key={x}><div><Icon name={i===0?'check':i===1?'alert':i===4?'shield':'report'}/><span><small>STEP 0{i+1}</small><b style={{fontSize:16}}>{x}</b></span></div><em>{i===4?'Closed':'Recorded'}</em></div>)}
        </div>
      </Reveal>
    </div>
  </section>

  <section className="content-section platform-input-section">
    <div className="shell content-grid">
      <Reveal>
        <div className="content-panel dark">
          <span className="eyebrow light">STRUCTURED INPUTS</span>
          <div className="input-preview">
            <div className="input-preview-row"><span>Chiller temperature</span><strong>3.1°C</strong><em>Within range</em></div>
            <div className="input-preview-row"><span>Photo evidence</span><strong>Attached</strong><em>Verified</em></div>
            <div className="input-preview-row"><span>Cleaning sign-off</span><strong>Signed</strong><em>10:42</em></div>
            <div className="input-preview-row danger"><span>Prep room temperature</span><strong>8.7°C</strong><em>Action required</em></div>
          </div>
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
      <span className="eyebrow">EXPLORE THE MODULES</span>
      <div className="simple-card-grid" style={{marginTop:15}}>{features.map(f=><Link className="simple-card" href={f.slug==='smart-detectors'?'/smart-detectors':`/product/${f.slug}`} key={f.slug}><span className="eyebrow">{f.eyebrow}</span><h3>{f.title}</h3><p>{f.description}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link>)}</div>
    </div>
  </section>
  <CTA/>
</>};
