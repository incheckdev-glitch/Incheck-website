import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/cta';
import { Icon, type IconName } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { features } from '@/lib/site-data';
import { productDetails } from '@/lib/product-details';

const iconMap: Record<string, IconName> = {
  checklists: 'check',
  journal: 'report',
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
  const detail = productDetails[slug];
  if (!feature || !detail) notFound();

  const comingSoon = feature.status === 'coming-soon';

  return <>
    <PageHero
      eyebrow={comingSoon ? `COMING SOON · ${feature.eyebrow.toUpperCase()}` : feature.eyebrow.toUpperCase()}
      title={feature.title}
      text={feature.description}
      primary={comingSoon ? 'Explore the Platform' : 'Book a Demo'}
      primaryHref={comingSoon ? '/platform' : '/book-demo'}
      secondary={comingSoon ? 'See Current Plans' : 'View Plans'}
      secondaryHref="/plans"
    >
      {slug === 'checklists' ? (
        <div className="checklist-product-hero">
          <img src="/images/checklists/incheck360-checklist-hero.webp" alt="Checklist builder and mobile checklist execution shown together." />
        </div>
      ) : (
        <div className="mini-console">
          <div className="mini-console-head"><strong>{feature.title}</strong><span>{comingSoon ? 'Roadmap' : 'InCheck 360'}</span></div>
          <div className="mini-console-grid">
            <div className="mini-console-card"><span>Status</span><strong>{comingSoon ? 'Soon' : 'Live'}</strong></div>
            <div className="mini-console-card"><span>Operational context</span><strong>Connected</strong></div>
            <div className="mini-console-card"><span>Evidence</span><strong>Linked</strong></div>
            <div className="mini-console-card"><span>Management view</span><strong>Clear</strong></div>
          </div>
        </div>
      )}
    </PageHero>

    <section className={`content-section product-overview-section ${slug === 'checklists' ? 'checklist-overview-section' : ''}`}>
      <div className={`shell content-grid ${slug === 'checklists' ? 'checklist-overview-grid' : ''}`}>
        <Reveal>
          <div className={slug === 'checklists' ? 'checklist-overview-copy' : undefined}>
            <span className="eyebrow">{comingSoon ? 'PRODUCT ROADMAP' : 'WHAT IT DOES'}</span>
            <h2>{feature.short}</h2>
            <p>{detail.overview}</p>
            <div className={`product-status-note ${comingSoon ? 'upcoming' : ''}`}>
              <strong>{comingSoon ? 'Availability' : 'Available now'}</strong>
              <p>{detail.availability}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          {slug === 'checklists' ? (
            <div className="checklist-workflow-panel">
              <div className="checklist-workflow-head">
                <span className="eyebrow light">CHECKLIST WORKFLOW</span>
                <strong>From standard to verified action</strong>
              </div>
              {detail.workflow.map((item, i) =>
                <div className="checklist-workflow-row" key={item.title}>
                  <span className="checklist-workflow-icon">
                    <Icon name={i === 0 ? 'book' : i === detail.workflow.length - 1 ? 'shield' : 'check'} />
                  </span>
                  <div className="checklist-workflow-copy">
                    <small>STEP {String(i + 1).padStart(2, '0')}</small>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                  <em>{['Configured','Assigned','Completed','Flagged','Verified'][i]}</em>
                </div>
              )}
            </div>
          ) : (
            <div className="content-panel dark">
              <span className="eyebrow light">CONNECTED WORKFLOW</span>
              {detail.workflow.map((item, i) =>
                <div className="detector-row" key={item.title}>
                  <div>
                    <Icon name={i === 0 ? 'book' : i === detail.workflow.length - 1 ? 'shield' : iconMap[slug] ?? 'check'} />
                    <span><small>STEP {String(i + 1).padStart(2, '0')}</small><b style={{fontSize:16}}>{item.title}</b></span>
                  </div>
                  <em>{i === detail.workflow.length - 1 ? 'Outcome' : 'Recorded'}</em>
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>

    <section className="content-section product-capabilities-section">
      <div className="shell">
        <span className="eyebrow">{comingSoon ? 'PLANNED CAPABILITIES' : 'CAPABILITIES'}</span>
        <h2 className="platform-rich-heading">{comingSoon ? 'What the dedicated module is being designed to cover.' : 'The operational detail behind the module.'}</h2>
        <p className="platform-rich-copy">{comingSoon ? 'These capabilities describe the intended direction of the module and are clearly separated from features available today.' : 'Each capability is designed to keep execution, evidence, ownership and management visibility connected.'}</p>
        <div className="product-detail-grid">
          {detail.capabilities.map((item, i) => <Reveal key={item.title} delay={(i % 4) * 40}>
            <div className="product-detail-card">
              <span className="product-detail-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell product-two-column">
        <div>
          <span className="eyebrow">TYPICAL USE CASES</span>
          <h2 className="product-section-title">Where teams use it.</h2>
          <div className="deep-list">
            {detail.useCases.map((item) => <div key={item}><span>✓</span>{item}</div>)}
          </div>
        </div>
        <div>
          <span className="eyebrow">MANAGEMENT VISIBILITY</span>
          <h2 className="product-section-title">What management can review.</h2>
          <div className="deep-list">
            {detail.management.map((item) => <div key={item}><span>✓</span>{item}</div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="shell">
        <span className="eyebrow">CONNECTED PLATFORM</span>
        <h2 className="platform-rich-heading">This module is more useful when it is not isolated.</h2>
        <p className="platform-rich-copy">InCheck 360 is designed so operational records can sit in the same wider context instead of being split across separate tools.</p>
        <div className="connection-grid">
          {detail.connections.map((item) => {
            const target = features.find((f) => f.title === item);
            const href = item === 'Smart Detectors' ? '/smart-detectors' : target ? `/product/${target.slug}` : '/platform';
            return <Link className="connection-card" href={href} key={item}><span>{item}</span><Icon name="arrow" size={16}/></Link>;
          })}
        </div>
      </div>
    </section>

    {comingSoon && <section className="roadmap-disclosure"><div className="shell">
      <strong>Roadmap disclosure</strong>
      <p>{feature.title} is shown so customers can understand the direction of the platform. It should not be treated as a generally available production module until it is officially released.</p>
    </div></section>}

    <CTA />
  </>;
}
