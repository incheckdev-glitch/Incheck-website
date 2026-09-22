import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'IoT Temperature Monitoring & Smart Detectors',
  description: 'Continuous temperature and environmental monitoring for multi-location operations, connected with manual checks, alerts, trends and operational follow-up.',
  alternates: { canonical: '/smart-detectors' },
};

const capabilities = [
  ['Continuous readings','Monitor temperature and humidity where supported without waiting for the next scheduled manual check.'],
  ['Threshold monitoring','Highlight readings that move outside the configured operating range.'],
  ['Device status','Keep visibility of detector connectivity and no-reading conditions instead of assuming silence means normal.'],
  ['Historical trends','Review what happened over time, not only the latest reading.'],
  ['Multi-location view','Centralize monitored equipment and environments across different sites.'],
  ['Operational context','Use detector history alongside manual checks, corrective actions and reporting.'],
];

const useCases = ['Walk-in chillers','Walk-in freezers','Reach-in chillers and freezers','Cold-storage areas','Preparation / monitored rooms','Other temperature- or humidity-sensitive environments'];

export default function SmartDetectors(){return <>
<PageHero
  eyebrow="SMART DETECTORS"
  title="Continuous monitoring between every manual check."
  text="Bring connected temperature and environmental readings into the same operational view as your checklists, actions and reports."
  primary="Book a Demo"
  primaryHref="/book-demo"
  secondary="View Detect Plan"
  secondaryHref="/plans"
>
  <div className="mini-console"><div className="mini-console-head"><strong>Live temperatures</strong><span>● Monitoring</span></div>{[['Walk-in Freezer','-18.4°C','Normal'],['Chiller','3.1°C','Normal'],['Prep Room','8.7°C','Alert']].map((x,i)=><div className={`detector-row ${i===2?'danger':''}`} key={x[0]}><div><Icon name="thermo"/><span><small>{x[0]}</small><b>{x[1]}</b></span></div><em>{x[2]}</em></div>)}</div>
</PageHero>

<section className="content-section"><div className="shell content-grid">
  <Reveal><div><span className="eyebrow">WHY CONTINUOUS MONITORING</span><h2>A manual reading shows one moment. Monitoring shows what happened between moments.</h2><p>Manual checks remain important because people capture process and context. Detectors add the missing timeline: whether a critical environment stayed within the expected range between those checks.</p><div className="bullet-grid">{['24/7 environmental visibility','Temperature monitoring','Humidity monitoring where applicable','Threshold alerts','Historical trends','Multi-location monitoring'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div></div></Reveal>
  <Reveal delay={90}><div className="content-panel dark"><div style={{textAlign:'center',padding:'20px'}}><div className="sensor-device" style={{position:'relative',right:'auto',bottom:'auto',margin:'0 auto 28px',width:140,height:165}}><div className="sensor-logo">InCheck<br/><strong>360</strong></div><span className="sensor-light"/></div><h3 style={{fontSize:26}}>Human checks + detector data</h3><p style={{color:'#a9bfd5'}}>The strongest operational record combines what the team observed with what the environment was doing continuously.</p></div></div></Reveal>
</div></section>

<section className="content-section" style={{background:'#f5f9fd'}}><div className="shell">
  <span className="eyebrow">DETECTOR CAPABILITIES</span>
  <h2 className="platform-rich-heading">More than a temperature number on a dashboard.</h2>
  <div className="product-detail-grid">
    {capabilities.map(([title,text],i)=><Reveal key={title} delay={(i%3)*50}><div className="product-detail-card"><span className="product-detail-index">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}
  </div>
</div></section>

<section className="content-section"><div className="shell product-two-column">
  <div>
    <span className="eyebrow">WHERE IT FITS</span>
    <h2 className="product-section-title">Monitor critical environments across the operation.</h2>
    <div className="deep-list">{useCases.map(x=><div key={x}><span>✓</span>{x}</div>)}</div>
  </div>
  <div>
    <span className="eyebrow">STATUS & FOLLOW-UP</span>
    <h2 className="product-section-title">Make abnormal conditions visible.</h2>
    <div className="deep-list">
      {['Normal operating conditions','Warning / threshold conditions','Critical exceptions','No-reading / connectivity visibility','Current reading and history','Location and equipment context'].map(x=><div key={x}><span>✓</span>{x}</div>)}
    </div>
  </div>
</section>

<section className="content-section detector-deep-section"><div className="shell">
  <span className="eyebrow">HOW IT CONNECTS</span>
  <h2 className="platform-rich-heading">Continuous data belongs inside the wider operational story.</h2>
  <p className="platform-rich-copy">Detector data is most useful when management can review it alongside the human check, the exception, the response and the final evidence.</p>
  <div className="detector-deep-flow">
    {[
      ['01','Monitor','Detector records the environment continuously.'],
      ['02','Identify','Threshold or no-reading conditions become visible.'],
      ['03','Review','Teams compare the event with manual checks and operating context.'],
      ['04','Act','The operation responds according to its approved procedure.'],
      ['05','Evidence','History remains available for later management review.'],
    ].map(([no,title,text])=><div className="detector-deep-step" key={no}><span>{no}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}
  </div>
  <div className="section-inline-cta"><Link className="button primary" href="/food-safety">See Food Safety Workflows <Icon name="arrow" size={16}/></Link></div>
</div></section>

<section className="roadmap-disclosure neutral"><div className="shell">
  <strong>Monitoring scope</strong>
  <p>Detector type, quantity, placement, temperature range, humidity capability and installation approach depend on the monitored environment and project requirements.</p>
</div></section>
<CTA/></>}
