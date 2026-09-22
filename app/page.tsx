import Link from 'next/link';
import { CTA } from '@/components/cta';
import { DashboardVisual } from '@/components/dashboard-visual';
import { Icon, type IconName } from '@/components/icon';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { faqs, features, industries } from '@/lib/site-data';
import { comparisonRows, operationalUseCases, proofStats, publicClients } from '@/lib/public-proof';

const featureIcons: Record<string, IconName> = {
  checklists:'check',
  audits:'search',
  'corrective-actions':'alert',
  'smart-detectors':'thermo',
  sops:'book',
  analytics:'chart',
  'ai-intelligence':'spark',
  reports:'report',
};

const useCaseIcons: IconName[] = ['check','shield','search','thermo'];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid-bg"/><div className="hero-glow"/>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow light">PEOPLE. PROCESSES. EQUIPMENT. ONE PLATFORM.</span>
            <h1>Operational control.<br/>Food safety. <span>Verified.</span></h1>
            <p>InCheck 360 connects daily execution, food-safety controls, audits, corrective actions, SOPs, environmental monitoring and management visibility across every location.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="hero-actions">
              <Link className="button primary large" href="/book-demo">Book a Demo <Icon name="arrow" size={18}/></Link>
              <Link className="button dark-outline large" href="/platform"><Icon name="play" size={19}/> Explore the Platform</Link>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-trust">
              <span><Icon name="shield" size={17}/> Food safety + operations</span>
              <span><Icon name="layers" size={17}/> Multi-location control</span>
              <span><Icon name="thermo" size={17}/> Human checks + detectors</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual-wrap" delay={100}><DashboardVisual/></Reveal>
      </div>
    </section>

    <section className="signal-bar">
      <div className="shell signal-inner">
        <span>Restaurants & QSR</span><i/><span>Hospitality</span><i/><span>Central Kitchens</span><i/><span>Food Manufacturing</span><i/><span>Retail</span><i/><span>Multi-Site Operations</span>
      </div>
    </section>

    <section className="proof-section">
      <div className="shell">
        <Reveal>
          <div className="proof-heading">
            <div>
              <span className="eyebrow">PROVEN IN REAL OPERATIONS</span>
              <h2>Built from F&B reality. Used across brands, countries and operating models.</h2>
            </div>
            <p>InCheck 360 is not a generic form builder. It is an operations and compliance platform shaped around recurring frontline execution, food safety, follow-up and multi-location management.</p>
          </div>
        </Reveal>
        <div className="proof-stat-grid">
          {proofStats.map((stat, i) => <Reveal key={stat.label} delay={i*55}>
            <div className="proof-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.detail}</small>
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="client-proof">
      <div className="shell client-proof-head">
        <span className="eyebrow">TRUSTED BY LEADING BUSINESSES</span>
        <p>Selected brands publicly featured by InCheck 360.</p>
      </div>
      <div className="client-marquee" aria-label="Selected InCheck 360 customer brands">
        <div className="client-track">
          {[...publicClients, ...publicClients].map((client, i) => <span className="client-name" key={`${client}-${i}`}>{client}</span>)}
        </div>
      </div>
    </section>

    <section className="section cycle-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="FROM CHECKS TO LASTING CHANGE" title="A complete operational cycle—not just ticked boxes." text="InCheck 360 connects the moment a check is performed to the moment an issue is genuinely resolved."/></Reveal>
      <div className="cycle-grid">{[
        ['check','Check','Capture data from people, processes and equipment.'],
        ['search','Identify','Surface exceptions, failed standards and abnormal readings.'],
        ['alert','Act','Assign the issue, owner, priority and corrective action.'],
        ['shield','Verify','Confirm the correction with evidence before closure.'],
      ].map(([icon,title,text],i)=><Reveal key={title} delay={i*80}><div className="cycle-card"><span className="step-no">0{i+1}</span><div className={`icon-box tone-${i}`}><Icon name={icon as IconName}/></div><h3>{title}</h3><p>{text}</p>{i<3 && <span className="cycle-arrow">→</span>}</div></Reveal>)}</div>
    </div></section>

    <section className="section usecase-section">
      <div className="shell">
        <Reveal><SectionHeading eyebrow="WHAT TEAMS RUN ON INCHECK 360" title="One platform across the routines that make or break daily execution." text="Use the same operating layer for routine checks, food-safety controls, audits, corrective action and continuous monitoring."/></Reveal>
        <div className="usecase-grid">
          {operationalUseCases.map((useCase, i) => <Reveal key={useCase.area} delay={i*60}>
            <div className="usecase-card">
              <div className="usecase-card-head">
                <span className={`usecase-icon usecase-tone-${i}`}><Icon name={useCaseIcons[i]}/></span>
                <small>{useCase.area}</small>
              </div>
              <h3>{useCase.title}</h3>
              <div className="usecase-list">
                {useCase.items.map(item => <span key={item}><i>✓</i>{item}</span>)}
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="section detector-section"><div className="detector-grid-bg"/><div className="shell detector-layout">
      <Reveal><div><span className="eyebrow light">SMART DETECTORS</span><h2>Your equipment doesn’t stop monitoring when your team goes home.</h2><p>Connect temperature and environmental detectors to InCheck 360 for continuous visibility across chillers, freezers, storage areas and other critical environments.</p><Link className="button white" href="/smart-detectors">Explore Smart Detectors <Icon name="arrow" size={18}/></Link><div className="detector-points"><span>24/7 monitoring</span><span>Configurable thresholds</span><span>Historical trends</span><span>Multi-location view</span></div></div></Reveal>
      <Reveal delay={120}><div className="detector-console"><div className="detector-console-head"><span>Live environment</span><em>● Monitoring</em></div>{[['Walk-in Freezer','-18.4°C','Normal'],['Chiller','3.1°C','Normal'],['Prep Room','8.7°C','Alert']].map((x,i)=><div className={`detector-row ${i===2?'danger':''}`} key={x[0]}><div><Icon name="thermo"/><span><small>{x[0]}</small><b>{x[1]}</b></span></div><em>{x[2]}</em><svg viewBox="0 0 120 35"><path d={i===2?'M0,28 L20,24 L35,26 L50,18 L65,20 L80,12 L95,14 L120,4':'M0,24 L18,22 L32,25 L48,15 L62,18 L78,10 L95,14 L120,7'} fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>)}</div></Reveal>
    </div></section>

    <section className="section platform-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="THE PLATFORM" title="More than checklists. A connected operational control layer." text="Build daily execution, food safety, audit follow-up, SOP access, monitoring and reporting around the same locations, teams and standards."/></Reveal>
      <div className="feature-grid">{features.map((f,i)=><Reveal delay={(i%4)*60} key={f.slug}><Link href={f.slug==='smart-detectors'?'/smart-detectors':`/product/${f.slug}`} className={`feature-card tone-${f.tone}`}><span className="feature-icon"><Icon name={featureIcons[f.slug]}/></span><span className="feature-eyebrow">{f.eyebrow}</span><h3>{f.title}</h3><p>{f.short}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link></Reveal>)}</div>
    </div></section>

    <section className="section food-section"><div className="shell split-layout">
      <Reveal><div className="food-visual"><div className="food-orbit one"/><div className="food-orbit two"/><div className="food-score"><span>FOOD SAFETY</span><strong>360°</strong><small>Checks + evidence + action</small></div><div className="floating-chip chip-a"><Icon name="thermo"/> Temperature controls</div><div className="floating-chip chip-b"><Icon name="camera"/> Evidence capture</div><div className="floating-chip chip-c"><Icon name="shield"/> Verified closure</div></div></Reveal>
      <Reveal delay={80}><div><span className="eyebrow">FOOD SAFETY IN EXECUTION</span><h2>Put HACCP-related controls inside the daily operation.</h2><p>Digitize receiving, storage, hygiene, sanitation, temperature and audit routines while preserving evidence, thresholds, ownership and corrective-action history.</p><ul className="check-list"><li>Receiving inspections</li><li>Storage & temperature controls</li><li>Cleaning & sanitation verification</li><li>Audit findings & CAPA follow-up</li><li>Continuous detector monitoring</li><li>Audit-ready history</li></ul><Link className="button primary" href="/food-safety">Explore Food Safety <Icon name="arrow" size={17}/></Link></div></Reveal>
    </div></section>

    <section className="section customer-story-section">
      <div className="shell customer-story">
        <Reveal>
          <div className="customer-story-copy">
            <span className="eyebrow light">CUSTOMER SPOTLIGHT</span>
            <div className="story-brand">BOSPORUS</div>
            <h2>Operational technology supporting a team recognized for food-safety performance.</h2>
            <p>InCheck 360 has publicly highlighted its support of the Bosporus Restaurant team, which earned third place at the 2025 Dubai Municipality Elite Food Safety Awards.</p>
            <p className="story-note">The point is not the award alone—it is the operating discipline behind it: consistent checks, visible standards, evidence, follow-up and management oversight.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="story-flow">
            {[
              ['01','Standardize','Digitize repeatable controls and routines.'],
              ['02','Capture','Record evidence and exceptions at source.'],
              ['03','Act','Assign corrective action and ownership.'],
              ['04','Verify','Confirm closure and preserve the record.'],
            ].map(([no,title,text]) => <div className="story-step" key={no}><span>{no}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section compare-section">
      <div className="shell">
        <Reveal>
          <SectionHeading eyebrow="WHY INCHECK 360" title="The difference is what happens after the box is checked." text="Paper and basic checklist tools can record completion. InCheck 360 connects execution, validation, ownership, monitoring and verification."/>
        </Reveal>
        <Reveal delay={80}>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead><tr><th>Capability</th><th>Paper / manual</th><th>Basic digital tools</th><th>InCheck 360</th></tr></thead>
              <tbody>{comparisonRows.map(([capability,manual,basic,incheck]) => <tr key={capability}><th>{capability}</th><td>{manual}</td><td>{basic}</td><td><span className="incheck-cell">✓</span>{incheck}</td></tr>)}</tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section industries-section"><div className="shell"><Reveal><SectionHeading eyebrow="BUILT FOR THE REAL WORLD" title="One platform. Different operational realities." text="Configure InCheck 360 around the standards, sites, departments and workflows that matter to your business."/></Reveal><div className="industry-grid">{industries.map((x,i)=><Reveal delay={i*50} key={x.slug}><Link href={`/solutions/${x.slug}`} className={`industry-card industry-${i}`}><span className="industry-index">0{i+1}</span><div><h3>{x.title}</h3><p>{x.subtitle}</p></div><span className="round-arrow"><Icon name="arrow" size={16}/></span></Link></Reveal>)}</div></div></section>

    <section className="section intelligence-section"><div className="shell intelligence-layout"><Reveal><div><span className="eyebrow light">ONE OPERATIONAL PICTURE</span><h2>People + equipment + standards. Connected.</h2><p>Daily checks, detector readings, audit findings and corrective actions become far more useful when they live in the same operational context.</p><Link href="/platform" className="button white">See the Platform <Icon name="arrow" size={17}/></Link></div></Reveal><Reveal delay={100}><div className="data-map"><div className="data-node people"><Icon name="users"/><b>People</b><small>Checks · Tasks · Audits</small></div><div className="data-node equipment"><Icon name="thermo"/><b>Equipment</b><small>Readings · Alerts · Trends</small></div><div className="data-node standards"><Icon name="book"/><b>Standards</b><small>SOPs · Controls · Evidence</small></div><div className="data-core"><span>InCheck</span><strong>360</strong><small>One operational record</small></div></div></Reveal></div></section>

    <section className="section faq-section"><div className="shell faq-layout"><Reveal><div><span className="eyebrow">QUESTIONS, ANSWERED</span><h2>What teams usually ask first.</h2><p>Need something more specific? We can walk through your operation and show how the platform fits.</p><Link className="text-link big" href="/contact">Talk to us <Icon name="arrow" size={18}/></Link></div></Reveal><div className="faq-list">{faqs.map(([q,a],i)=><Reveal delay={i*40} key={q}><details><summary>{q}<span>+</span></summary><p>{a}</p></details></Reveal>)}</div></div></section>
    <CTA/>
  </>;
}
