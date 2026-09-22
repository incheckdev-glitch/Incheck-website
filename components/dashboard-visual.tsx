'use client';

import { useEffect, useState } from 'react';
import { Icon } from './icon';

const readings = [
  { name: 'Walk-in Freezer', value: '-18.4°C', state: 'Within range', tone: 'ok' },
  { name: 'Chiller', value: '3.1°C', state: 'Within range', tone: 'ok' },
  { name: 'Prep Room', value: '8.7°C', state: 'Above range', tone: 'alert' },
];

export function DashboardVisual() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive(v => (v + 1) % readings.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return <div className="dashboard-scene" aria-label="Interactive InCheck 360 product preview">
    <div className="orb orb-one"/><div className="orb orb-two"/>
    <div className="laptop">
      <div className="laptop-top"><span/><strong>InCheck 360</strong><small>All locations</small></div>
      <div className="laptop-body">
        <aside><b>Overview</b><span>Checklists</span><span>Audits</span><span>Actions</span><span>Detectors</span><span>Reports</span></aside>
        <main>
          <div className="dash-heading"><div><small>OPERATIONAL CONTROL</small><h3>Good morning.</h3></div><span className="live-pill">● Live</span></div>
          <div className="metric-row"><div><small>Completion</small><b>92%</b><em>↑ 6%</em></div><div><small>Open actions</small><b>12</b><em className="warn">3 priority</em></div><div><small>Detectors</small><b>28</b><em>25 normal</em></div></div>
          <div className="chart-card"><div className="chart-head"><span>Compliance trend</span><strong>95%</strong></div><svg viewBox="0 0 420 120" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1986ff" stopOpacity=".3"/><stop offset="1" stopColor="#1986ff" stopOpacity="0"/></linearGradient></defs><path d="M0,95 C55,90 70,70 120,76 S190,55 230,61 290,37 330,48 385,20 420,23 L420,120 L0,120Z" fill="url(#area)"/><path d="M0,95 C55,90 70,70 120,76 S190,55 230,61 290,37 330,48 385,20 420,23" fill="none" stroke="#1986ff" strokeWidth="4"/></svg></div>
        </main>
      </div>
    </div>
    <div className="phone">
      <div className="phone-top"><b>Daily Food Safety</b><span>•••</span></div>
      <small>Downtown Restaurant</small>
      <div className="progress"><span style={{width:'78%'}}/></div>
      {['Check fridge temperatures','Food storage clean','Handwashing stations','Sanitizer levels','Pest control signs'].map((x,i)=><div className="phone-task" key={x}><span className={i<4?'done':''}>{i<4?'✓':''}</span>{x}</div>)}
      <button>Complete checklist</button>
    </div>
    <div className="reading-stack">
      {readings.map((r, i) => <button key={r.name} onClick={()=>setActive(i)} className={`reading-card ${r.tone} ${active===i?'active':''}`}>
        <span className="reading-icon"><Icon name="thermo" size={18}/></span><span><small>{r.name}</small><b>{r.value}</b><em>{r.state}</em></span><span>›</span>
      </button>)}
    </div>
    <div className="sensor-device"><div className="sensor-logo">InCheck<br/><strong>360</strong></div><span className="sensor-light"/></div>
  </div>
}
