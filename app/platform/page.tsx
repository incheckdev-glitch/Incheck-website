import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { features } from '@/lib/site-data';

export const metadata = { title: 'Platform' };

export default function PlatformPage(){return <>
  <PageHero eyebrow="THE INCheck 360 PLATFORM" title="One operational layer from daily checks to verified closure." text="Bring checklists, audits, SOPs, corrective actions, continuous monitoring and reporting into one connected operational record.">
    <div className="mini-console"><div className="mini-console-head"><strong>Operations overview</strong><span>All locations</span></div><div className="mini-console-grid"><div className="mini-console-card"><span>Checklist completion</span><strong>92%</strong></div><div className="mini-console-card"><span>Open actions</span><strong>12</strong></div><div className="mini-console-card"><span>Detector status</span><strong>Normal</strong></div><div className="mini-console-card"><span>Audit trail</span><strong>Ready</strong></div></div></div>
  </PageHero>
  <section className="content-section"><div className="shell"><div className="page-lead"><span className="eyebrow">CONNECTED BY DESIGN</span><h2>Stop treating operational data as separate islands.</h2><p>Each part of InCheck 360 contributes to the same operational context: what was checked, what failed, who owns the action, what evidence was submitted, what the equipment was reading and whether the issue was verified.</p></div><div className="simple-card-grid" style={{marginTop:40}}>{features.map(f=><Link className="simple-card" href={f.slug==='smart-detectors'?'/smart-detectors':`/product/${f.slug}`} key={f.slug}><span className="eyebrow">{f.eyebrow}</span><h3>{f.title}</h3><p>{f.description}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link>)}</div></div></section>
  <section className="content-section" style={{background:'#f5f9fd'}}><div className="shell content-grid"><Reveal><div><span className="eyebrow">HOW IT CONNECTS</span><h2>Standards become workflows. Workflows become evidence.</h2><p>Management defines the operating standard. Teams execute it at site level. Exceptions become actions. Connected devices add continuous context. Reporting brings the record back together.</p><div className="bullet-grid">{['Central standards','Local execution','Exception handling','Ownership & deadlines','Evidence capture','Management visibility'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div></div></Reveal><Reveal delay={100}><div className="content-panel dark"><div className="mini-console-head"><strong>Operational record</strong><span>Connected</span></div>{['Checklist completed','Exception identified','Corrective action assigned','Evidence uploaded','Manager verified'].map((x,i)=><div className="detector-row" key={x}><div><Icon name={i===0?'check':i===1?'alert':i===4?'shield':'report'}/><span><small>STEP 0{i+1}</small><b style={{fontSize:16}}>{x}</b></span></div><em>{i===4?'Closed':'Recorded'}</em></div>)}</div></Reveal></div></section>
  <CTA/>
</>}
