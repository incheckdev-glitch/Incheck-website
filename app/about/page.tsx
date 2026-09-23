import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { proofStats } from '@/lib/public-proof';

export const metadata: Metadata = {
  title: 'About InCheck 360',
  description: 'Learn how InCheck 360 approaches operational control, food safety, execution, accountability and verification across multi-location operations.',
  alternates: { canonical: '/about' },
};

const adoption = [
  ['01','Understand the operation','Start with the locations, standards, recurring controls and problems that need better visibility.'],
  ['02','Configure the workflow','Translate requirements into checklists, references, assignments, evidence rules and monitoring where required.'],
  ['03','Train the team','Prepare operational users and management for the workflows relevant to their role.'],
  ['04','Operate and improve','Use the resulting data, exceptions and follow-up history to strengthen execution over time.'],
];

export default function About(){return <>
  <PageHero
    eyebrow="ABOUT INCHECK 360"
    title="We build for the gap between a standard and what actually happens on site."
    text="InCheck 360 helps multi-location teams translate operating standards into daily execution, evidence, visibility and verified follow-through."
    primary="Explore the Platform"
    primaryHref="/platform"
    secondary="Book a Demo"
    secondaryHref="/book-demo"
  />

  <section className="content-section"><div className="shell content-grid">
    <Reveal><div>
      <span className="eyebrow">WHY WE EXIST</span>
      <h2>Operations rarely fail because nobody wrote a procedure.</h2>
      <p>The hard part is consistent execution: making sure the right work happens at the right time, the exception is visible, someone owns the response and the outcome can be reviewed. InCheck 360 is built around that operating reality.</p>
    </div></Reveal>
    <Reveal delay={90}><div className="content-panel">
      <div className="simple-card"><Icon name="check"/><h3>Execution</h3><p>Turn standards into practical recurring work.</p></div>
      <div className="simple-card" style={{marginTop:12}}><Icon name="alert"/><h3>Accountability</h3><p>Make exceptions, ownership and deadlines visible.</p></div>
      <div className="simple-card" style={{marginTop:12}}><Icon name="shield"/><h3>Verification</h3><p>Keep corrective evidence and closure connected to the original issue.</p></div>
    </div></Reveal>
  </div></section>

  <section className="content-section" style={{background:'#f5f9fd'}}><div className="shell">
    <span className="eyebrow">WHAT WE CONNECT</span>
    <h2 className="platform-rich-heading">People, process, equipment and evidence in one operating picture.</h2>
    <div className="simple-card-grid" style={{marginTop:32}}>
      <div className="simple-card"><Icon name="users"/><h3>People</h3><p>Give teams the right recurring work, references and ownership for their role and location.</p></div>
      <div className="simple-card"><Icon name="check"/><h3>Process</h3><p>Structure recurring controls, exceptions and follow-up around the way the operation actually runs.</p></div>
      <div className="simple-card"><Icon name="thermo"/><h3>Equipment</h3><p>Add continuous environmental monitoring where detectors provide useful operational context.</p></div>
      <div className="simple-card"><Icon name="report"/><h3>Evidence</h3><p>Preserve the history behind the check, reading, action and management review.</p></div>
    </div>
  </div></section>

  <section className="content-section"><div className="shell">
    <span className="eyebrow">HOW CUSTOMERS ADOPT INCHECK 360</span>
    <h2 className="platform-rich-heading">Start with the operation—not a generic software rollout.</h2>
    <p className="platform-rich-copy">Implementation depth depends on the plan and project scope, but the operating logic stays the same: understand the work, configure the right controls, prepare the users and keep improving from real execution data.</p>
    <div className="platform-architecture">
      {adoption.map(([no,title,text]) => <div className="architecture-card" key={no}><span className="architecture-index">{no}</span><h3>{title}</h3><p>{text}</p></div>)}
    </div>
  </div></section>

  <section className="content-section" style={{background:'#f5f9fd'}}><div className="shell content-grid">
    <div>
      <span className="eyebrow">WHO WE SUPPORT</span>
      <h2>Built for operations where standards need to hold every day.</h2>
      <p>InCheck 360 is used and configured around restaurants and QSR, hospitality, central kitchens, food manufacturing, retail and other multi-site operating environments where management needs central visibility without removing local responsibility.</p>
    </div>
    <div className="proof-stat-grid">
      {proofStats.slice(0,3).map(stat => <div className="proof-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.detail}</small></div>)}
    </div>
  </div></section>

  <section className="content-section"><div className="shell">
    <span className="eyebrow">COMPANY</span>
    <h2 className="platform-rich-heading">Based in the Netherlands. Designed for distributed operations.</h2>
    <p className="platform-rich-copy">InCheck 360 Holding B.V. is based in Enschede, The Netherlands. The platform is developed around a simple principle: central standards only create value when teams can execute them consistently at site level and management can see what happened next.</p>
  </div></section>

  <CTA/>
</>};
