import type { Metadata } from 'next';
import { DemoForm } from '@/components/demo-form';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Request a focused InCheck 360 demo around your locations, operational workflows, food-safety controls and monitoring needs.',
  alternates: { canonical: '/book-demo' },
};

const nextSteps = [
  ['01', 'Tell us about your operation', 'Share your company and number of locations.'],
  ['02', 'We review your requirements', 'We look at the operating context before the meeting.'],
  ['03', 'We show the relevant workflow', 'The demo focuses on the capabilities that match your use case.'],
  ['04', 'Discuss implementation if there is a fit', 'If the platform matches the requirement, we outline practical next steps.'],
];

export default function BookDemoPage() {
  return <>
    <PageHero
      eyebrow="BOOK A DEMO"
      title="See InCheck 360 around your real operation."
      text="A focused conversation around your locations, current controls, operational gaps and the workflows you want to improve."
      primary="Email our team"
      primaryHref="mailto:info@incheck360.nl"
      secondary="Explore the Platform"
      secondaryHref="/platform"
    />
    <section className="content-section demo-section">
      <div className="shell demo-layout">
        <div className="demo-context">
          <span className="eyebrow">WHAT HAPPENS NEXT</span>
          <h2 className="demo-heading">A clear process. No generic product tour.</h2>
          <p className="demo-copy">We use the information you provide to prepare a relevant walkthrough rather than showing every module.</p>
          <div className="demo-next-steps">
            {nextSteps.map(([no,title,text]) => (
              <div className="demo-next-step" key={no}>
                <span>{no}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
          <div className="demo-scheduling-note">
            <strong>Scheduling</strong>
            <p>After your request is reviewed, our team will contact you to arrange a suitable meeting time. Meetings can be held online, including through Microsoft Teams.</p>
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  </>;
}
