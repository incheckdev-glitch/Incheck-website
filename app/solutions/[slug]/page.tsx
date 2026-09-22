import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { industries } from '@/lib/site-data';

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/solutions/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | InCheck 360`,
      description: industry.description,
      url: `/solutions/${industry.slug}`,
    },
  };
}

const workflows: Record<string, string[]> = {
  restaurants: ['Opening & closing checks','Food storage & temperatures','Cleaning & hygiene','Corrective actions','Multi-location visibility'],
  hospitality: ['Department checks','Food & beverage controls','SOP access','Issue follow-up','Property-level visibility'],
  'central-kitchens': ['Receiving inspections','Production controls','Storage temperatures','Sanitation verification','Corrective actions'],
  'food-manufacturing': ['Production inspections','Environmental monitoring','Operational evidence','Corrective actions','Audit readiness'],
  retail: ['Store opening checks','Hygiene & safety','Equipment monitoring','Issue ownership','Network visibility'],
  'multi-site': ['Central standards','Location workflows','Cross-site dashboards','Open action tracking','Evidence & reporting'],
};

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const items = workflows[slug] ?? workflows['multi-site'];

  return <>
    <PageHero eyebrow="INDUSTRY SOLUTION" title={industry.title} text={industry.description}>
      <div className="mini-console">
        <div className="mini-console-head"><strong>{industry.title}</strong><span>Operational view</span></div>
        <div className="mini-console-grid">
          <div className="mini-console-card"><span>Standards</span><strong>Central</strong></div>
          <div className="mini-console-card"><span>Execution</span><strong>Local</strong></div>
          <div className="mini-console-card"><span>Exceptions</span><strong>Visible</strong></div>
          <div className="mini-console-card"><span>Closure</span><strong>Verified</strong></div>
        </div>
      </div>
    </PageHero>

    <section className="content-section">
      <div className="shell content-grid">
        <Reveal>
          <div>
            <span className="eyebrow">DESIGNED AROUND THE OPERATION</span>
            <h2>{industry.subtitle}</h2>
            <p>{industry.description}</p>
            <div className="bullet-grid">
              {items.map((item) => <div className="bullet-item" key={item}><span>✓</span>{item}</div>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="content-panel">
            <span className="eyebrow">ONE OPERATING MODEL</span>
            {[
              ['01','Set the standard','Define what should happen and when.'],
              ['02','Execute consistently','Guide site teams through repeatable workflows.'],
              ['03','Act on exceptions','Assign issues instead of leaving them inside reports.'],
              ['04','Verify the outcome','Keep evidence and closure tied to the original finding.'],
            ].map(([no,title,text]) => <div className="simple-card" style={{marginTop:10}} key={no}><small>{no}</small><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell">
        <span className="eyebrow">CONNECTED CAPABILITIES</span>
        <h2 style={{fontFamily:'var(--font-manrope)',fontSize:48,letterSpacing:'-.04em',maxWidth:780}}>People, process and equipment in the same operational picture.</h2>
        <div className="simple-card-grid" style={{marginTop:35}}>
          {[
            ['Checklists & audits','Digitize recurring work and deeper inspections.','check'],
            ['Corrective actions','Create accountability from finding to closure.','alert'],
            ['Smart detectors','Add continuous environmental visibility.','thermo'],
          ].map(([title,text,icon]) => <div className="simple-card" key={title}><Icon name={icon as 'check'|'alert'|'thermo'} /><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
