import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'IoT Temperature Monitoring & Smart Detectors',
  description: 'Continuous temperature and environmental monitoring for multi-location operations, connected with checks, alerts and operational follow-up.',
  alternates: { canonical: '/smart-detectors' },
};

export default function SmartDetectors(){return <>
<PageHero eyebrow="SMART DETECTORS" title="Continuous monitoring between every manual check." text="Bring connected temperature and environmental readings into the same operational view as your checklists, actions and reports.">
  <div className="mini-console"><div className="mini-console-head"><strong>Live temperatures</strong><span>● Monitoring</span></div>{[['Walk-in Freezer','-18.4°C','Normal'],['Chiller','3.1°C','Normal'],['Prep Room','8.7°C','Alert']].map((x,i)=><div className={`detector-row ${i===2?'danger':''}`} key={x[0]}><div><Icon name="thermo"/><span><small>{x[0]}</small><b>{x[1]}</b></span></div><em>{x[2]}</em></div>)}</div>
</PageHero>
<section className="content-section"><div className="shell content-grid"><Reveal><div><span className="eyebrow">ALWAYS ON</span><h2>See conditions changing before they become a bigger operational problem.</h2><p>Continuous readings complement your team's manual checks. They can surface out-of-range conditions, preserve trends and reduce blind spots between scheduled inspections.</p><div className="bullet-grid">{['Temperature monitoring','Humidity monitoring','Threshold alerts','Historical trends','Multi-location visibility','Operational evidence'].map(x=><div className="bullet-item" key={x}><span>✓</span>{x}</div>)}</div></div></Reveal><Reveal><div className="content-panel dark"><div style={{textAlign:'center',padding:'20px'}}><div className="sensor-device" style={{position:'relative',right:'auto',bottom:'auto',margin:'0 auto 28px',width:140,height:165}}><div className="sensor-logo">InCheck<br/><strong>360</strong></div><span className="sensor-light"/></div><h3 style={{fontSize:26}}>Connected monitoring</h3><p style={{color:'#a9bfd5'}}>Detector data becomes part of the same operational picture used by your teams and managers.</p></div></div></Reveal></div></section>
<section className="content-section" style={{background:'#f5f9fd'}}><div className="shell"><div className="stat-strip"><div className="stat-box"><strong>24/7</strong><span>Continuous environmental visibility</span></div><div className="stat-box"><strong>One view</strong><span>Across monitored locations and equipment</span></div><div className="stat-box"><strong>Context</strong><span>Readings connected to operations and evidence</span></div></div></div></section><CTA/></>}
