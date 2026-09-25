import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About InCheck 360',
  description: 'Learn how InCheck 360 connects people, processes, operational data, environmental monitoring and evidence across multi-location operations.',
  alternates: { canonical: '/about' },
};

const operatingLayers = [
  ['01','check','Standardize execution','Turn recurring operating requirements into clear digital checks and tasks by role, shift and location.'],
  ['02','book','Keep guidance accessible','Give teams access to current SOPs, procedures and reference material at the point of work.'],
  ['03','thermo','Add continuous monitoring','Use Smart Detectors to add temperature and environmental visibility between scheduled manual checks.'],
  ['04','report','Preserve the record','Keep completion, evidence, follow-up, timestamps and location context connected for management review.'],
];

const resolutionSteps = [
  ['01','Identify','Capture the exception, observation or out-of-range result with the right context.'],
  ['02','Own','Make responsibility for the next action clear instead of leaving the issue in messages or spreadsheets.'],
  ['03','Document','Keep notes, photos, readings and supporting evidence connected to the original event.'],
  ['04','Verify','Confirm the response and preserve a traceable closure history when verification is required.'],
];

const comparisonRows = [
  ['Operational visibility','Information spread across paper, spreadsheets, email and chat.','A centralized operating view across locations, teams and recurring work.'],
  ['Accountability','Responsibilities and follow-up can be difficult to verify.','Clear ownership, evidence, timestamps and visible follow-through.'],
  ['Issue follow-up','Findings can be recorded without a structured next step.','Exceptions move into documented action and verification where required.'],
  ['Standardization','Execution varies between locations and shifts.','Common standards configured around location, role and operating context.'],
  ['Traceability','History must be reconstructed manually.','Current and historical operational records stay connected to the source event.'],
  ['Scalability','Manual follow-up becomes harder as the operation grows.','Central visibility supports multi-location and multi-brand operations.'],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT INCHECK 360"
        title="Connecting people, processes and operational data."
        text="InCheck 360 is a cloud-based operations management platform that helps multi-location businesses standardize execution, strengthen accountability and gain clearer visibility across daily operations."
        primary="Explore the Platform"
        primaryHref="/platform"
        secondary="Book a Demo"
        secondaryHref="/book-demo"
      />

      <section className="content-section">
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">WHY WE BUILT INCHECK 360</span>
              <h2>Growth makes operational consistency harder to maintain.</h2>
              <p>As businesses expand across locations, departments, brands and regions, important work can become fragmented. Tasks may be completed without enough evidence, issues can disappear into messages, and management may receive information too late to act confidently.</p>
              <p>InCheck 360 was created to close that gap: give frontline teams clear operating workflows while giving managers a reliable view of execution, exceptions and follow-through across every location.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel dark about-operating-panel">
              <div className="about-operating-head">
                <span className="eyebrow light">ONE OPERATING PICTURE</span>
                <p>Three connected layers keep daily execution clear from the frontline to management review.</p>
              </div>
              <div className="about-operating-list">
                <div className="about-operating-card">
                  <span className="about-operating-icon"><Icon name="users"/></span>
                  <div>
                    <span className="about-operating-index">01</span>
                    <h3>People</h3>
                    <p>Clear responsibilities by role, location and shift.</p>
                  </div>
                </div>
                <div className="about-operating-card">
                  <span className="about-operating-icon"><Icon name="check"/></span>
                  <div>
                    <span className="about-operating-index">02</span>
                    <h3>Processes</h3>
                    <p>Recurring controls translated into practical digital execution.</p>
                  </div>
                </div>
                <div className="about-operating-card">
                  <span className="about-operating-icon"><Icon name="report"/></span>
                  <div>
                    <span className="about-operating-index">03</span>
                    <h3>Operational data</h3>
                    <p>Evidence and history organized for review instead of scattered across tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{background:'#f5f9fd'}}>
        <div className="shell">
          <span className="eyebrow">WHAT INCHECK 360 ENABLES</span>
          <h2 className="platform-rich-heading">More than digitizing a form.</h2>
          <p className="platform-rich-copy">The platform connects the work teams perform, the information they need, the conditions being monitored and the evidence management needs to understand what happened next.</p>
          <div className="platform-architecture">
            {operatingLayers.map(([no,icon,title,text]) => (
              <Reveal key={no}>
                <div className="architecture-card">
                  <span className="architecture-index">{no}</span>
                  <span className="feature-icon"><Icon name={icon as 'check'|'book'|'thermo'|'report'} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">MULTI-LOCATION OPERATIONS</span>
              <h2>Central standards without removing local responsibility.</h2>
              <p>InCheck 360 helps organizations establish consistent operating standards while adapting execution to each brand, property, department, location or role.</p>
              <p>Frontline teams see the work and guidance relevant to them. Management gains a centralized view of completion, recurring issues, operational records and location performance without relying on continuous manual follow-up.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel">
              <div className="simple-card"><Icon name="check"/><h3>Configure centrally</h3><p>Define common controls, workflows and expectations.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="users"/><h3>Execute locally</h3><p>Assign the right work to the right people at the right location.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="chart"/><h3>Review across the operation</h3><p>Compare execution and identify where management attention is needed.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section about-resolution-section">
        <div className="shell">
          <span className="eyebrow">FROM ISSUE TO VERIFIED FOLLOW-THROUGH</span>
          <h2 className="platform-rich-heading">Recording a problem is only the beginning.</h2>
          <p className="platform-rich-copy">A stronger operating system keeps the issue, responsibility, evidence and final outcome connected instead of allowing the story to break across different channels.</p>
          <div className="platform-architecture">
            {resolutionSteps.map(([no,title,text]) => (
              <div className="architecture-card" key={no}>
                <span className="architecture-index">{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell about-dual-grid">
          <Reveal>
            <div className="about-focus-card">
              <span className="feature-icon"><Icon name="report"/></span>
              <span className="eyebrow">OPERATIONAL TRACEABILITY</span>
              <h2>Keep the history behind the work.</h2>
              <p>Authorized users can review what happened, where and when it occurred, who completed the work, what evidence was captured and how follow-up progressed. This creates a stronger operational record for management reviews, audit support and continuous improvement.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="about-focus-card about-focus-card-dark">
              <span className="feature-icon"><Icon name="thermo"/></span>
              <span className="eyebrow light">ENVIRONMENTAL MONITORING</span>
              <h2>See what happened between manual checks.</h2>
              <p>Smart Detectors add continuous temperature and, where applicable, humidity monitoring for critical environments. Configurable thresholds, alerts and historical trends give teams a clearer timeline when conditions move outside the expected range.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section compare-section">
        <div className="shell">
          <span className="eyebrow">WHY INCHECK 360</span>
          <h2 className="platform-rich-heading">Move beyond fragmented operational management.</h2>
          <p className="platform-rich-copy">The goal is not more software. It is a clearer operating system for execution, evidence, accountability and review.</p>
          <div className="comparison-wrap about-comparison-wrap" style={{marginTop:34}}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Operational need</th>
                  <th>Fragmented methods</th>
                  <th>With InCheck 360</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([need,fragmented,incheck]) => (
                  <tr key={need}>
                    <th>{need}</th>
                    <td>{fragmented}</td>
                    <td><span className="incheck-cell">✓</span>{incheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section" style={{background:'#f5f9fd'}}>
        <div className="shell content-grid">
          <Reveal>
            <div>
              <span className="eyebrow">OUR APPROACH</span>
              <h2>Configure around the operation—not a rigid one-size-fits-all process.</h2>
              <p>Every organization operates differently. We work with customers to understand locations, responsibilities, recurring controls, reporting needs and implementation priorities before translating those requirements into practical workflows.</p>
              <p>From configuration and onboarding to training and ongoing Customer Success, the objective is to make the platform reflect how the organization actually needs to operate.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="content-panel">
              <div className="simple-card"><Icon name="search"/><h3>Understand</h3><p>Start with the operation, standards and visibility gaps.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="check"/><h3>Configure</h3><p>Translate requirements into usable workflows and controls.</p></div>
              <div className="simple-card" style={{marginTop:12}}><Icon name="users"/><h3>Adopt</h3><p>Prepare users and managers to work with the system consistently.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <span className="eyebrow">MORE THAN DIGITAL CHECKLISTS</span>
          <h2 className="platform-rich-heading">A connected operations management platform.</h2>
          <p className="platform-rich-copy">InCheck 360 brings recurring execution, operational context, Reference Materials, Smart Detectors and traceable reporting together. That allows organizations to move beyond asking whether a task was completed and start understanding whether standards are being followed, issues are being addressed and operating performance is becoming more consistent.</p>

          <div className="about-mission-grid">
            <Reveal>
              <div className="about-mission-card">
                <span className="eyebrow">OUR MISSION</span>
                <h3>Safer, more consistent and more accountable operations.</h3>
                <p>Our mission is to help organizations strengthen daily execution through connected technology and reliable operational information—giving teams clear responsibilities and managers the visibility needed to continuously improve.</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="about-mission-card">
                <span className="eyebrow">OUR VISION</span>
                <h3>A trusted operational technology partner for multi-location businesses.</h3>
                <p>We believe connected information creates stronger teams, and stronger teams build better operations. Our vision is to make that operating clarity available across locations, brands and markets around the world.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="customer-proof-mini">
        <div className="shell customer-proof-mini-inner">
          <div>
            <span className="eyebrow light">INCHECK 360 HOLDING B.V.</span>
            <h2>Based in Enschede, The Netherlands. Designed for distributed operations.</h2>
          </div>
          <p>One platform. One reliable source of operational information. One clearer view across every location.</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
