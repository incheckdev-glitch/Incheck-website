import { DemoForm } from '@/components/demo-form';
import { PageHero } from '@/components/page-hero';

export const metadata = { title: 'Book a Demo' };

export default function BookDemoPage() {
  return <>
    <PageHero
      eyebrow="BOOK A DEMO"
      title="See InCheck 360 around your real operation."
      text="Tell us how your locations, food-safety controls and daily workflows work today. We’ll focus the conversation on the operational gaps that matter to you."
      primary="Contact our team"
      primaryHref="mailto:info@incheck360.nl"
      secondary="Explore the Platform"
      secondaryHref="/platform"
    />
    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell demo-layout">
        <div>
          <span className="eyebrow">A FOCUSED CONVERSATION</span>
          <h2 className="demo-heading">No generic product tour.</h2>
          <p className="demo-copy">We’ll shape the demo around your number of locations, current checklist and audit process, food-safety controls, corrective-action workflow and monitoring needs.</p>
          <div className="simple-card-grid demo-benefits">
            {[
              ['01','Your operation first','Start with your current workflow and control points.'],
              ['02','Relevant modules','Focus only on the capabilities that solve the real problem.'],
              ['03','Clear next step','Leave with a concrete picture of fit, setup and rollout.'],
            ].map(([no,title,text]) => <div className="simple-card" key={no}><small>{no}</small><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  </>;
}
