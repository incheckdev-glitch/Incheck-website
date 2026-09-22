import Link from 'next/link';
import { CTA } from '@/components/cta';
import { DashboardVisual } from '@/components/dashboard-visual';
import { Icon, IconName } from '@/components/icon';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { faqs, features, industries } from '@/lib/site-data';

const featureIcons: Record<string, IconName> = { checklists:'check', audits:'search', 'corrective-actions':'alert', 'smart-detectors':'thermo', sops:'book', analytics:'chart', 'ai-intelligence':'spark', reports:'report' };

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid-bg"/><div className="hero-glow"/>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <Reveal><span className="eyebrow light">PEOPLE. PROCESSES. EQUIPMENT. ONE PLATFORM.</span><h1>Operational control.<br/>Food safety. <span>Verified.</span></h1><p>Connect people, processes and equipment across every location with digital checklists, audits, corrective actions and continuous monitoring.</p></Reveal>
          <Reveal delay={100}><div className="hero-actions"><Link className="button primary large" href="/book-demo">Book a Demo <Icon name="arrow" size={18}/></Link><Link className="button dark-outline large" href="/platform"><Icon name="play" size={19}/> Explore the Platform</Link></div></Reveal>
          <Reveal delay={180}><div className="hero-trust"><span><Icon name="shield" size={17}/> Built for food safety</span><span><Icon name="layers" size={17}/> Multi-location ready</span><span><Icon name="clock" size={17}/> Real-time visibility</span></div></Reveal>
        </div>
        <Reveal className="hero-visual-wrap" delay={100}><DashboardVisual/></Reveal>
      </div>
    </section>

    <section className="signal-bar"><div className="shell signal-inner"><span>Restaurants & QSR</span><i/> <span>Hospitality</span><i/> <span>Central Kitchens</span><i/> <span>Food Manufacturing</span><i/> <span>Retail</span><i/> <span>Multi-Site Operations</span></div></section>

    <section className="section cycle-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="FROM CHECKS TO LASTING CHANGE" title="A complete operational cycle—not just ticked boxes." text="InCheck 360 connects the moment a check is performed to the moment an issue is genuinely resolved."/></Reveal>
      <div className="cycle-grid">{[
        ['check','Check','Capture data from people, processes and equipment.'], ['search','Identify','Surface exceptions, failed standards and abnormal readings.'], ['alert','Act','Assign the issue, owner and corrective action.'], ['shield','Verify','Confirm the problem was corrected before closure.']
      ].map(([icon,title,text],i)=><Reveal key={title} delay={i*80}><div className="cycle-card"><span className="step-no">0{i+1}</span><div className={`icon-box tone-${i}`}><Icon name={icon as IconName}/></div><h3>{title}</h3><p>{text}</p>{i<3 && <span className="cycle-arrow">→</span>}</div></Reveal>)}</div>
    </div></section>

    <section className="section detector-section"><div className="detector-grid-bg"/><div className="shell detector-layout">
      <Reveal><div><span className="eyebrow light">SMART DETECTORS</span><h2>Your equipment doesn’t stop monitoring when your team goes home.</h2><p>Connect temperature and environmental detectors to InCheck 360 for continuous visibility across chillers, freezers, storage areas and other critical environments.</p><Link className="button white" href="/smart-detectors">Explore Smart Detectors <Icon name="arrow" size={18}/></Link><div className="detector-points"><span>24/7 monitoring</span><span>Threshold alerts</span><span>Historical trends</span><span>Multi-location view</span></div></div></Reveal>
      <Reveal delay={120}><div className="detector-console"><div className="detector-console-head"><span>Live environment</span><em>● Monitoring</em></div>{[['Walk-in Freezer','-18.4°C','Normal'],['Chiller','3.1°C','Normal'],['Prep Room','8.7°C','Alert']].map((x,i)=><div className={`detector-row ${i===2?'danger':''}`} key={x[0]}><div><Icon name="thermo"/><span><small>{x[0]}</small><b>{x[1]}</b></span></div><em>{x[2]}</em><svg viewBox="0 0 120 35"><path d={i===2?'M0,28 L20,24 L35,26 L50,18 L65,20 L80,12 L95,14 L120,4':'M0,24 L18,22 L32,25 L48,15 L62,18 L78,10 L95,14 L120,7'} fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>)}</div></Reveal>
    </div></section>

    <section className="section platform-section"><div className="shell">
      <Reveal><SectionHeading eyebrow="THE PLATFORM" title="Everything you need for safer, more consistent operations." text="A connected operational layer for daily execution, food safety, evidence and visibility."/></Reveal>
      <div className="feature-grid">{features.map((f,i)=><Reveal delay={(i%4)*60} key={f.slug}><Link href={f.slug==='smart-detectors'?'/smart-detectors':`/product/${f.slug}`} className={`feature-card tone-${f.tone}`}><span className="feature-icon"><Icon name={featureIcons[f.slug]}/></span><span className="feature-eyebrow">{f.eyebrow}</span><h3>{f.title}</h3><p>{f.short}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link></Reveal>)}</div>
    </div></section>

    <section className="section food-section"><div className="shell split-layout">
      <Reveal><div className="food-visual"><div className="food-orbit one"/><div className="food-orbit two"/><div className="food-score"><span>FOOD SAFETY SCORE</span><strong>94</strong><small>Operational visibility</small></div><div className="floating-chip chip-a"><Icon name="thermo"/> Temperature controls</div><div className="floating-chip chip-b"><Icon name="camera"/> Evidence capture</div><div className="floating-chip chip-c"><Icon name="shield"/> Verified closure</div></div></Reveal>
      <Reveal delay={80}><div><span className="eyebrow">FOOD SAFETY IN EXECUTION</span><h2>Built for food-safety execution, not just documentation.</h2><p>Put HACCP-related checks, receiving inspections, sanitation routines, temperature monitoring, evidence and corrective action into the daily workflow.</p><ul className="check-list"><li>Structured food-safety checklists</li><li>Temperature and environmental monitoring</li><li>Evidence and audit trails</li><li>Corrective action with ownership</li><li>Centralized SOPs and standards</li></ul><Link className="button primary" href="/food-safety">Explore Food Safety <Icon name="arrow" size={17}/></Link></div></Reveal>
    </div></section>

    <section className="section industries-section"><div className="shell"><Reveal><SectionHeading eyebrow="BUILT FOR THE REAL WORLD" title="One platform. Different operational realities." text="Configure InCheck 360 around the standards, sites and workflows that matter to your business."/></Reveal><div className="industry-grid">{industries.map((x,i)=><Reveal delay={i*50} key={x.slug}><Link href={`/solutions/${x.slug}`} className={`industry-card industry-${i}`}><span className="industry-index">0{i+1}</span><div><h3>{x.title}</h3><p>{x.subtitle}</p></div><span className="round-arrow"><Icon name="arrow" size={16}/></span></Link></Reveal>)}</div></div></section>

    <section className="section intelligence-section"><div className="shell intelligence-layout"><Reveal><div><span className="eyebrow light">ONE OPERATIONAL PICTURE</span><h2>People + equipment + standards. Connected.</h2><p>Daily checks, detector readings, audit findings and corrective actions become far more useful when they live in the same operational context.</p><Link href="/platform" className="button white">See the Platform <Icon name="arrow" size={17}/></Link></div></Reveal><Reveal delay={100}><div className="data-map"><div className="data-node people"><Icon name="users"/><b>People</b><small>Checks · Tasks · Audits</small></div><div className="data-node equipment"><Icon name="thermo"/><b>Equipment</b><small>Readings · Alerts · Trends</small></div><div className="data-node standards"><Icon name="book"/><b>Standards</b><small>SOPs · Controls · Evidence</small></div><div className="data-core"><span>InCheck</span><strong>360</strong><small>One operational record</small></div></div></Reveal></div></section>

    <section className="section faq-section"><div className="shell faq-layout"><Reveal><div><span className="eyebrow">QUESTIONS, ANSWERED</span><h2>What teams usually ask first.</h2><p>Need something more specific? We can walk through your operation and show how the platform fits.</p><Link className="text-link big" href="/contact">Talk to us <Icon name="arrow" size={18}/></Link></div></Reveal><div className="faq-list">{faqs.map(([q,a],i)=><Reveal delay={i*40} key={q}><details><summary>{q}<span>+</span></summary><p>{a}</p></details></Reveal>)}</div></div></section>
    <CTA/>
  </>;
}
