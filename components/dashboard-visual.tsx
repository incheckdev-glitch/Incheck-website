import { Icon } from './icon';

const metricCards = [
  ['Checklists completed','268 / 276','97.1%','ok'],
  ['Open actions','12','In progress','blue'],
  ['Active alerts','5','3 locations','alert'],
];

const phoneStats = [
  ['My checklists','5 / 6','ok'],
  ['Alerts','2','alert'],
  ['My actions','3','blue'],
  ['Compliance','92%','ok'],
];

export function DashboardVisual() {
  return (
    <div className="dashboard-scene product-device-scene" aria-label="InCheck 360 platform across desktop, tablet and mobile">
      <div className="hero-laptop">
        <div className="device-shell laptop-shell">
          <div className="device-camera" />
          <div className="laptop-screen">
            <div className="platform-topbar">
              <strong>InCheck <span>360°</span></strong>
              <div className="platform-search">Search locations, checklists or reports…</div>
              <div className="platform-location">All locations⌄</div>
            </div>
            <div className="platform-body">
              <aside className="platform-sidebar">
                <b>Dashboard</b>
                <span>Checklists</span>
                <span>Corrective Actions</span>
                <span>Detectors</span>
                <span>Reports</span>
                <span>Reference Materials</span>
                <span>Journal</span>
                <span>Locations</span>
              </aside>
              <main className="platform-main">
                <div className="platform-title-row">
                  <div><h3>Operational overview</h3><small>Today · All locations</small></div>
                  <span className="platform-live">● Live</span>
                </div>
                <div className="platform-metrics">
                  {metricCards.map(([label,value,meta,tone]) => (
                    <div className={`platform-metric ${tone}`} key={label}>
                      <small>{label}</small><strong>{value}</strong><em>{meta}</em>
                    </div>
                  ))}
                  <div className="platform-metric green">
                    <small>Detectors online</small><strong>24</strong><em>1 no reading</em>
                  </div>
                </div>
                <div className="platform-dashboard-grid">
                  <div className="platform-chart-card">
                    <div className="platform-card-head"><strong>Checklist completion</strong><span>7 days⌄</span></div>
                    <div className="platform-chart">
                      {[78,91,85,88,80,94,87].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}
                      <svg viewBox="0 0 420 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,36 L65,20 L130,28 L195,25 L260,35 L325,17 L420,27" fill="none" stroke="#1787ff" strokeWidth="3"/>
                      </svg>
                    </div>
                    <div className="platform-chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                  </div>
                  <div className="platform-detector-card">
                    <div className="platform-card-head"><strong>Detector status</strong><span>Live</span></div>
                    <div className="detector-donut"><span>24<small>Devices</small></span></div>
                    <div className="detector-legend"><span><i className="ok"/>Online 20</span><span><i className="warn"/>Warning 2</span><span><i className="bad"/>Offline 1</span><span><i className="idle"/>No reading 1</span></div>
                  </div>
                </div>
                <div className="platform-activity">
                  <div className="platform-card-head"><strong>Recent activity</strong><span>View all</span></div>
                  <div><span className="activity-icon ok">✓</span><b>Food preparation checklist</b><small>Completed · Main Kitchen</small><em>2 min</em></div>
                  <div><span className="activity-icon alert">!</span><b>Freezer temperature alert</b><small>Walk-in Freezer #1</small><em>32 min</em></div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <div className="hero-tablet">
        <div className="device-shell tablet-shell">
          <div className="device-camera" />
          <div className="tablet-screen">
            <div className="tablet-topbar"><strong>InCheck <span>360°</span></strong><span>☰</span></div>
            <div className="tablet-head">
              <div><small>DETECTORS</small><h3>Walk-in Freezer #1</h3><em>● Online</em></div>
              <span className="tablet-range">Last 24 Hours⌄</span>
            </div>
            <div className="temp-kpis">
              <div className="temp-primary"><small>Current temperature</small><strong>-18.4°C</strong><em>Normal</em></div>
              <div><small>Min</small><strong>-21.2°C</strong></div>
              <div><small>Max</small><strong>-15.6°C</strong></div>
              <div><small>Alerts</small><strong>0</strong></div>
            </div>
            <div className="temperature-chart-card">
              <div className="platform-card-head"><strong>Temperature</strong><span>24 hours</span></div>
              <div className="temperature-chart">
                <div className="temp-zone hot"/><div className="temp-zone warn"/><div className="temp-zone safe"/>
                <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,105 C35,100 48,115 78,107 S126,122 155,99 205,108 235,104 278,96 310,112 350,100 388,108 430,96 470,109 520,101" fill="none" stroke="#1687ff" strokeWidth="4"/>
                </svg>
                <div className="temp-axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
              </div>
            </div>
            <div className="tablet-status-row">
              <div><Icon name="thermo" size={16}/><small>Temperature</small><b>-18.4°C</b></div>
              <div><span>💧</span><small>Humidity</small><b>42%</b></div>
              <div><span>▮▮▮</span><small>Signal</small><b>Good</b></div>
              <div><span>▰</span><small>Battery</small><b>87%</b></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-phone">
        <div className="device-shell phone-shell">
          <div className="phone-notch" />
          <div className="mobile-screen">
            <div className="mobile-topbar"><strong>InCheck <span>360°</span></strong><span>☰</span></div>
            <div className="mobile-greeting"><small>Good morning,</small><h3>Khaled</h3></div>
            <div className="mobile-stats">
              {phoneStats.map(([label,value,tone]) => <div className={`mobile-stat ${tone}`} key={label}><small>{label}</small><strong>{value}</strong></div>)}
            </div>
            <div className="mobile-temp">
              <div><strong>Temperature overview</strong><small>All locations</small></div>
              <svg viewBox="0 0 180 55" preserveAspectRatio="none" aria-hidden="true"><path d="M0,38 C28,30 35,40 58,31 S95,24 115,29 145,12 180,18" fill="none" stroke="#1687ff" strokeWidth="3"/></svg>
              <b>-18.4°C</b>
            </div>
            <div className="mobile-nav"><span>⌂<small>Home</small></span><span>✓<small>Checklists</small></span><span>◉<small>Detectors</small></span><span>•••<small>More</small></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
