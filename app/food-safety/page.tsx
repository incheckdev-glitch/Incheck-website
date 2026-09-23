import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { foodSafetyControls } from '@/lib/public-proof';

export const metadata: Metadata = {
  title: 'Food Safety Management & HACCP Execution',
  description: 'Support HACCP-related execution, food-safety checks, corrective actions, temperature monitoring and audit readiness with InCheck 360.',
  alternates: { canonical: '/food-safety' },
};

export default function FoodSafety(){return <>
<PageHero eyebrow="FOOD SAFETY" title="Make food-safety controls part of the work—not a separate paperwork exercise." text="Digitize recurring checks, temperature controls, receiving inspections, sanitation, corrective actions, SOP access and audit evidence across every location.">
  <div className="food-safety-product-hero">
    <img src="/images/food-safety/incheck360-food-safety-hero.webp" alt="Kitchen team completing digital food-safety checks and temperature verification during daily operations." />
  </div>
</PageHero>

<section className="content-section">
  <div className="shell content-grid">
    <Reveal>
      <div>
        <span className="eyebrow">DAILY EXECUTION</span>
        <h2>From HACCP-related controls to everyday hygiene routines.</h2>
        <p>InCheck 360 helps teams execute and document operational controls such as receiving, storage, cooking, cooling, cleaning, personal hygiene and temperature verification. The platform supports the execution and evidence around a food-safety management system; it does not replace certification or regulatory requirements.</p>
        <div className="bullet-grid">{['Receiving inspections','Temperature checks','Cleaning & sanitation','Personal hygiene','Storage controls','Corrective actions','Evidence capture','Audit trails'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div>
      </div>
    </Reveal>
    <Reveal>
      <div className="content-panel">
        <span className="eyebrow">FOOD SAFETY WORKFLOW</span>
        {[
          ['01','Check','Complete the right control at the right time.'],
          ['02','Flag','Capture failures, out-of-range values or evidence.'],
          ['03','Correct','Assign the corrective action and owner.'],
          ['04','Verify','Confirm closure and preserve the record.'],
        ].map(x=><div className="simple-card" style={{marginTop:10}} key={x[0]}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
      </div>
    </Reveal>
  </div>
</section>

<section className="content-section food-control-section">
  <div className="shell">
    <span className="eyebrow">CONTROL MATRIX</span>
    <h2 className="platform-rich-heading">A practical food-safety record from receiving to management review.</h2>
    <p className="platform-rich-copy">Each control can combine the question, expected range, evidence type, exception logic and follow-up action instead of storing disconnected forms.</p>
    <Reveal delay={80}>
      <div className="comparison-wrap food-control-wrap">
        <table className="comparison-table food-control-table">
          <thead>
            <tr><th>Stage</th><th>Typical controls</th><th>Evidence / validation</th><th>When something fails</th></tr>
          </thead>
          <tbody>
            {foodSafetyControls.map(row => <tr key={row.stage}><th>{row.stage}</th><td>{row.controls}</td><td>{row.evidence}</td><td><span className="incheck-cell">→</span>{row.action}</td></tr>)}
          </tbody>
        </table>
      </div>
    </Reveal>
  </div>
</section>

<section className="content-section" style={{background:'#f5f9fd'}}>
  <div className="shell">
    <span className="eyebrow">HUMAN CHECKS + CONTINUOUS MONITORING</span>
    <h2 className="platform-rich-heading">A manual temperature log tells you one moment. A detector shows what happened between moments.</h2>
    <div className="food-monitor-grid">
      <Reveal>
        <div className="food-monitor-card">
          <span className="feature-icon"><Icon name="users"/></span>
          <small>Frontline checks</small>
          <h3>Human context</h3>
          <p>Teams confirm the process: product condition, hygiene, cleaning, handling, receiving and the reasons behind an exception.</p>
          <div className="usecase-list"><span><i>✓</i>Photos & notes</span><span><i>✓</i>Sign-off</span><span><i>✓</i>Corrective action</span></div>
        </div>
      </Reveal>
      <Reveal delay={70}>
        <div className="food-monitor-plus">+</div>
      </Reveal>
      <Reveal delay={110}>
        <div className="food-monitor-card dark">
          <span className="feature-icon"><Icon name="thermo"/></span>
          <small>Smart detectors</small>
          <h3>Continuous context</h3>
          <p>Connected detectors add ongoing temperature and environmental readings, configurable thresholds, alerts and historical trends.</p>
          <div className="usecase-list"><span><i>✓</i>24/7 readings</span><span><i>✓</i>Threshold alerts</span><span><i>✓</i>Trend history</span></div>
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="food-monitor-equals">=</div>
      </Reveal>
      <Reveal delay={210}>
        <div className="food-monitor-card result">
          <span className="feature-icon"><Icon name="shield"/></span>
          <small>One operational record</small>
          <h3>Stronger evidence</h3>
          <p>Managers see checks, readings, exceptions, ownership and verification in one operational context instead of switching between separate systems.</p>
        </div>
      </Reveal>
    </div>
  </div>
</section>

<section className="content-section">
  <div className="shell content-grid">
    <Reveal>
      <div>
        <span className="eyebrow">HACCP & INTERNATIONAL STANDARDS SUPPORT</span>
        <h2>Digital evidence around the controls your food-safety system already requires.</h2>
        <p>InCheck 360 can support the execution, monitoring, documentation and evidence layers around HACCP-based controls and international standards-aligned food-safety and operational management processes. Certification, legal compliance and final control design remain the responsibility of the organization and its qualified professionals.</p>
      </div>
    </Reveal>
    <Reveal delay={90}>
      <div className="simple-card-grid food-assurance-grid">
        {[
          ['Structured controls','Turn recurring operational controls into scheduled digital workflows.','check'],
          ['Traceable evidence','Keep responses, photos, timestamps and action history connected to the record.','camera'],
          ['Management visibility','Review trends, open findings and location performance centrally.','chart'],
          ['Verified follow-through','Link exceptions to corrective action and confirmation before closure.','shield'],
        ].map(([t,p,icon])=><div className="simple-card" key={t}><Icon name={icon as 'check'|'camera'|'chart'|'shield'}/><h3>{t}</h3><p>{p}</p></div>)}
      </div>
    </Reveal>
  </div>
</section>

<section className="customer-proof-mini">
  <div className="shell customer-proof-mini-inner">
    <div>
      <span className="eyebrow light">REAL-WORLD FOOD SAFETY</span>
      <h2>Bosporus Restaurant team — third place, 2025 Dubai Municipality Elite Food Safety Awards.</h2>
    </div>
    <p>InCheck 360 has publicly highlighted its support of the Bosporus team. The result is a useful example of how consistent execution, evidence and operational follow-through can support a strong food-safety culture.</p>
  </div>
</section>

<CTA/>
</>};
