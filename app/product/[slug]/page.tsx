import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/cta';
import { Icon, type IconName } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { features } from '@/lib/site-data';

const iconMap: Record<string, IconName> = {
  checklists: 'check',
  audits: 'search',
  'corrective-actions': 'alert',
  sops: 'book',
  analytics: 'chart',
  'ai-intelligence': 'spark',
  reports: 'report',
};

export function generateStaticParams() {
  return features.filter((f) => f.slug !== 'smart-detectors').map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  if (!feature) return {};
  return {
    title: feature.title,
    description: feature.description,
    alternates: { canonical: `/product/${feature.slug}` },
    openGraph: {
      title: `${feature.title} | InCheck 360`,
      description: feature.description,
      url: `/product/${feature.slug}`,
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug && f.slug !== 'smart-detectors');
  if (!feature) notFound();

  return <>
    <PageHero
      eyebrow={feature.eyebrow.toUpperCase()}
      title={feature.title}
      text={feature.description}
    >
      <div className="mini-console">
        <div className="mini-console-head"><strong>{feature.title}</strong><span>InCheck 360</span></div>
        <div className="mini-console-grid">
          <div className="mini-console-card"><span>Operational status</span><strong>Visible</strong></div>
          <div className="mini-console-card"><span>Ownership</span><strong>Assigned</strong></div>
          <div className="mini-console-card"><span>Evidence</span><strong>Linked</strong></div>
          <div className="mini-console-card"><span>Management view</span><strong>Ready</strong></div>
        </div>
      </div>
    </PageHero>

    <section className="content-section">
      <div className="shell content-grid">
        <Reveal>
          <div>
            <span className="eyebrow">BUILT FOR EXECUTION</span>
            <h2>{feature.short}</h2>
            <p>{feature.description}</p>
            <div className="bullet-grid">
              {feature.bullets.map((item) => <div className="bullet-item" key={item}><span>✓</span>{item}</div>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="content-panel dark">
            <span className="eyebrow light">CONNECTED WORKFLOW</span>
            {['Define the standard','Execute at site level','Surface exceptions','Assign follow-up','Verify closure'].map((item, i) =>
              <div className="detector-row" key={item}>
                <div><Icon name={i === 0 ? 'book' : i === 1 ? iconMap[slug] ?? 'check' : i === 2 ? 'alert' : i === 4 ? 'shield' : 'report'} /><span><small>STEP 0{i+1}</small><b style={{fontSize:16}}>{item}</b></span></div>
                <em>{i === 4 ? 'Verified' : 'Recorded'}</em>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell">
        <span className="eyebrow">WHY IT MATTERS</span>
        <h2 style={{fontFamily:'var(--font-manrope)',fontSize:48,letterSpacing:'-.04em',maxWidth:780}}>
          Operational software should help teams act—not just collect answers.
        </h2>
        <div className="simple-card-grid" style={{marginTop:35}}>
          {[
            ['Less fragmented follow-up','Keep the original check, finding, owner and evidence connected.'],
            ['Clearer management visibility','See where execution is on track and where attention is required.'],
            ['Stronger evidence','Preserve a structured record of what happened, when and by whom.'],
          ].map(([title,text]) => <div className="simple-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
