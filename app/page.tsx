import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/cta';
import { DashboardVisual } from '@/components/dashboard-visual';
import { Icon, type IconName } from '@/components/icon';
import { ProofStats } from '@/components/proof-stats';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { faqs, industries } from '@/lib/site-data';
import { comparisonRows, operationalUseCases } from '@/lib/public-proof';
import { clientLogos } from '@/lib/client-logos';

export const metadata: Metadata = {
  title: 'Operational Control Platform',
  description: 'InCheck 360 connects human checks, corrective actions, verification, evidence, analytics and IoT monitoring across multi-location operations.',
  alternates: { canonical: '/' },
};

const useCaseIcons: IconName[] = ['check','shield','search','thermo'];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid-bg"/><div className="hero-glow"/>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow light">OPERATIONAL CONTROL PLATFORM</span>
            <h1>Operational control.<br/>Food safety. <span>Verified.</span></h1>
            <p>InCheck 360 connects people, processes and equipment so teams can execute standards, surface exceptions, act on them and verify closure across every location.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="hero-actions">
              <Link className="button primary large" href="/book-demo">Book a Demo <Icon name="arrow" size={18}/></Link>
              <Link className="button dark-outline large" href="/platform"><Icon name="play" size={19}/> Explore the Platform</Link>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-trust">
              <span><Icon name="check" size={17}/> Human checks</span>
              <span><Icon name="thermo" size={17}/> IoT monitoring</span>
              <span><Icon name="shield" size={17}/> Verified follow-through</span>
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

    <section className="section cycle-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="HOW IT WORKS" title="Check. Identify. Act. Verify." text="A simple operating cycle that keeps the issue connected to the work—from the first observation to confirmed closure."/></Reveal>
      <div className="cycle-grid">{[
        ['check','Check','Capture the right operational data at the right time.'],
        ['search','Identify','Surface failed standards, exceptions and abnormal readings.'],
        ['alert','Act','Assign ownership, priority and the required corrective action.'],
        ['shield','Verify','Confirm the response before the issue is closed.'],
      ].map(([icon,title,text],i)=><Reveal key={title} delay={i*80}><div className={`cycle-card ${i===3?'verify-card':''}`}><span className="step-no">0{i+1}</span><div className={`icon-box tone-${i}`}><Icon name={icon as IconName}/></div><h3>{title}</h3><p>{text}</p>{i<3 && <span className="cycle-arrow" aria-hidden="true">→</span>}</div></Reveal>)}</div>
    </div></section>

    <section className="section usecase-section">
      <div className="shell">
        <Reveal><SectionHeading eyebrow="WHAT IT CONTROLS" title="Daily execution, food safety, assurance and monitoring in one operating layer." text="Use the platform where recurring work, evidence, exceptions and follow-up need to stay visible across locations."/></Reveal>
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
        <div className="section-inline-cta"><Link className="button ghost" href="/platform">Explore the Platform <Icon name="arrow" size={16}/></Link></div>
      </div>
    </section>

    <section className="section intelligence-section"><div className="shell intelligence-layout">
      <Reveal><div><span className="eyebrow light">WHY IT IS DIFFERENT</span><h2>Human checks + IoT + follow-through.</h2><p>InCheck 360 combines frontline context with continuous detector data, corrective actions, verification and analytics instead of leaving each part in a separate system.</p><Link href="/platform" className="button white">Explore the Platform <Icon name="arrow" size={17}/></Link></div></Reveal>
      <Reveal delay={100}><div className="data-map">
        <div className="data-node people"><Icon name="users"/><b>Human checks</b><small>Checklists · Journal · Context</small></div>
        <div className="data-node equipment"><Icon name="thermo"/><b>IoT detectors</b><small>Readings · Thresholds · Trends</small></div>
        <div className="data-node standards"><Icon name="shield"/><b>Follow-through</b><small>Actions · Evidence · Verify</small></div>
        <div className="data-core"><span>InCheck</span><strong>360</strong><small>One operational view</small></div>
      </div></Reveal>
    </div></section>

    <section className="section detector-section"><div className="detector-grid-bg"/><div className="shell detector-layout">
      <Reveal><div><span className="eyebrow light">SMART DETECTORS</span><h2>A manual reading shows one moment. Monitoring shows what happened between moments.</h2><p>Connect temperature and environmental detectors for continuous visibility across chillers, freezers, storage areas and other critical environments.</p><Link className="button white" href="/smart-detectors">Explore Smart Detectors <Icon name="arrow" size={18}/></Link><div className="detector-points"><span>24/7 monitoring</span><span>Configurable thresholds</span><span>Historical trends</span><span>Multi-location view</span></div></div></Reveal>
      <Reveal delay={120}><div className="detector-console"><div className="detector-console-head"><span>Live environment</span><em>● Monitoring</em></div>{[['Walk-in Freezer','-18.4°C','Normal'],['Chiller','3.1°C','Normal'],['Prep Room','8.7°C','Alert']].map((x,i)=><div className={`detector-row ${i===2?'danger':''}`} key={x[0]}><div><Icon name="thermo"/><span><small>{x[0]}</small><b>{x[1]}</b></span></div><em>{x[2]}</em><svg viewBox="0 0 120 35" aria-hidden="true"><path d={i===2?'M0,28 L20,24 L35,26 L50,18 L65,20 L80,12 L95,14 L120,4':'M0,24 L18,22 L32,25 L48,15 L62,18 L78,10 L95,14 L120,7'} fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>)}</div></Reveal>
    </div></section>

    <section className="section compare-section">
      <div className="shell">
        <Reveal><SectionHeading eyebrow="MORE THAN DIGITAL CHECKLISTS" title="The difference is what happens after the box is checked." text="Basic tools can record completion. InCheck 360 connects the exception to ownership, monitoring, evidence and verification."/></Reveal>
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

    <section className="section food-section"><div className="shell split-layout">
      <Reveal><div className="food-visual"><div className="food-orbit one"/><div className="food-orbit two"/><div className="food-score"><span>FOOD SAFETY</span><strong>360°</strong><small>Checks + action + monitoring</small></div><div className="floating-chip chip-a"><Icon name="thermo"/> Temperature controls</div><div className="floating-chip chip-b"><Icon name="camera"/> Evidence capture</div><div className="floating-chip chip-c"><Icon name="shield"/> Verified closure</div></div></Reveal>
      <Reveal delay={80}><div><span className="eyebrow">FOOD SAFETY IN EXECUTION</span><h2>Put HACCP-related controls inside the daily operation.</h2><p>Support receiving, storage, hygiene, sanitation and temperature workflows while keeping failed checks and follow-up traceable.</p><ul className="check-list"><li>Receiving inspections</li><li>Storage & temperature controls</li><li>Cleaning & sanitation verification</li><li>Exceptions & corrective-action follow-up</li><li>Continuous detector monitoring</li><li>Audit-ready history</li></ul><Link className="button primary" href="/food-safety">Explore Food Safety <Icon name="arrow" size={17}/></Link></div></Reveal>
    </div></section>

    <section className="proof-section">
      <div className="shell">
        <Reveal><div className="proof-heading"><div><span className="eyebrow">PROOF & SCALE</span><h2>Used across real operating environments.</h2></div><p>Published footprint and customer proof, presented with the context available today. Customer-specific case studies are added only when approved for publication.</p></div></Reveal>
        <ProofStats />
      </div>
    </section>

    <section className="client-proof">
      <div className="shell client-proof-head">
        <div><span className="eyebrow">TRUSTED ACROSS REAL OPERATIONS</span><h2>Brands using InCheck 360.</h2></div>
        <p>Selected customer brands across restaurant, hospitality, retail and multi-site operations.</p>
      </div>
      <div className="client-logo-rail" aria-label="InCheck 360 client brands">
        <div className="client-logo-line">
          {clientLogos.map((client) => (
            <div className="client-logo-card" key={client.name} title={client.name}>
              <img className="client-logo-image" src={client.src} alt={client.name} loading="lazy" decoding="async" width="220" height="92"/>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section customer-story-section">
      <div className="shell customer-story">
        <Reveal><div className="customer-story-copy"><span className="eyebrow light">CUSTOMER SPOTLIGHT</span><div className="story-brand">BOSPORUS</div><h2>A team recognized for food-safety performance.</h2><p>InCheck 360 has publicly highlighted its support of the Bosporus Restaurant team, which earned third place at the 2025 Dubai Municipality Elite Food Safety Awards.</p><p className="story-note">This spotlight reflects the customer relationship and published recognition. It does not claim that software alone caused the award result.</p></div></Reveal>
        <Reveal delay={100}><div className="story-flow">{[
          ['01','Standardize','Translate recurring controls into usable routines.'],
          ['02','Capture','Record checks and exceptions at source.'],
          ['03','Act','Assign responsibility when a standard is missed.'],
          ['04','Verify','Confirm the response before closure.'],
        ].map(([no,title,text]) => <div className="story-step" key={no}><span>{no}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></Reveal>
      </div>
    </section>

    <section className="section industries-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="BUILT FOR THE REAL WORLD" title="One control model. Different operating realities." text="Configure the platform around the locations, teams, standards and workflows that matter to your business."/></Reveal>
      <div className="industry-grid">{industries.map((x,i)=><Reveal delay={i*50} key={x.slug}><Link href={`/solutions/${x.slug}`} className={`industry-card industry-${i}`}><span className="industry-index">0{i+1}</span><div><h3>{x.title}</h3><p>{x.subtitle}</p></div><span className="round-arrow"><Icon name="arrow" size={16}/></span></Link></Reveal>)}</div>
    </div></section>

    <section className="section faq-section"><div className="shell faq-layout"><Reveal><div><span className="eyebrow">QUESTIONS, ANSWERED</span><h2>What teams usually ask first.</h2><p>Need something more specific? We can walk through your operation and show how the platform fits.</p><Link className="text-link big" href="/book-demo">Book a Demo <Icon name="arrow" size={18}/></Link></div></Reveal><div className="faq-list">{faqs.map(([q,a],i)=><Reveal delay={i*40} key={q}><details><summary>{q}<span>+</span></summary><p>{a}</p></details></Reveal>)}</div></div></section>
    <CTA/>
  </>;
}
