import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { industries } from '@/lib/site-data';
import { solutionDetails } from '@/lib/solution-details';

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

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  const detail = solutionDetails[slug];
  if (!industry || !detail) notFound();

  const heroImages: Record<string, string> = {
    restaurants: '/images/solutions/restaurants-qsr-hero.webp',
    hospitality: '/images/solutions/hotels-hospitality-hero.png.webp',
    'central-kitchens': '/images/solutions/central-kitchens-hero.webp',
    'food-manufacturing': '/images/solutions/food-manufacturing-hero.webp',
    retail: '/images/solutions/retail-hero.webp',
    'multi-site': '/images/solutions/multi-units-hero.webp',
  };
  const heroImage = heroImages[slug] ?? null;

  return <>
    <PageHero
      eyebrow="INDUSTRY SOLUTION"
      title={industry.title}
      text={industry.description}
      primary="Book a Demo"
      primaryHref="/book-demo"
      secondary="Explore the Platform"
      secondaryHref="/platform"
    >
      {heroImage ? (
        <div className="solution-hero-image-card">
          <img
            src={heroImage}
            alt={`${industry.title} operations powered by InCheck 360`}
            width="1536"
            height="1152"
            loading="eager"
            decoding="async"
          />
        </div>
      ) : (
        <div className="mini-console">
          <div className="mini-console-head"><strong>{industry.title}</strong><span>Operational view</span></div>
          <div className="mini-console-grid">
            <div className="mini-console-card"><span>Standards</span><strong>Central</strong></div>
            <div className="mini-console-card"><span>Execution</span><strong>Local</strong></div>
            <div className="mini-console-card"><span>Exceptions</span><strong>Visible</strong></div>
            <div className="mini-console-card"><span>Closure</span><strong>Traceable</strong></div>
          </div>
        </div>
      )}
    </PageHero>

    <section className="content-section">
      <div className="shell content-grid">
        <Reveal>
          <div>
            <span className="eyebrow">DESIGNED AROUND THE OPERATION</span>
            <h2>{industry.subtitle}</h2>
            <p>{detail.intro}</p>
            <div className="bullet-grid">
              {detail.teams.map((item) => <div className="bullet-item" key={item}><span>✓</span>{item}</div>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="content-panel dark operating-model-panel">
            <span className="eyebrow light">ONE OPERATING MODEL</span>
            <div className="operating-model-list">
              {[
                ['01','Standardize','Define the routine, checklist, timing and owner.','Defined'],
                ['02','Execute','Teams complete checks at site level with guided workflows.','Completed'],
                ['03','Capture','Photos, notes, readings and exceptions are recorded.','Flagged'],
                ['04','Act','Failed standards become assigned corrective actions.','Assigned'],
                ['05','Verify','Managers review evidence before closure.','Verified'],
              ].map(([no,title,text,status]) => <div className="operating-step" key={no}>
                <div className="operating-step-icon"><Icon name={no==='01'?'book':no==='03'?'alert':no==='05'?'shield':'check'} /></div>
                <div className="operating-step-copy"><small>STEP {no}</small><b>{title}</b><p>{text}</p></div>
                <em className="operating-step-badge">{status}</em>
              </div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="content-section industry-workflows-section">
      <div className="shell">
        <span className="eyebrow">OPERATIONAL WORKFLOWS</span>
        <h2 className="platform-rich-heading">Go beyond a generic checklist template.</h2>
        <p className="platform-rich-copy">The platform can be configured around the actual operating areas that matter in this environment.</p>
        <div className="industry-workflow-grid">
          {detail.workflows.map((group, i) => <Reveal key={group.title} delay={i*60}>
            <div className="industry-workflow-card">
              <span className="product-detail-index">{String(i+1).padStart(2,'0')}</span>
              <h3>{group.title}</h3>
              <div className="deep-list compact">
                {group.items.map((item) => <div key={item}><span>✓</span>{item}</div>)}
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="content-section" style={{background:'#f5f9fd'}}>
      <div className="shell product-two-column">
        <div>
          <span className="eyebrow">WHAT TEAMS CAN CONTROL</span>
          <h2 className="product-section-title">Execution at site level.</h2>
          <div className="deep-list">{detail.controls.map((item)=><div key={item}><span>✓</span>{item}</div>)}</div>
        </div>
        <div>
          <span className="eyebrow">WHAT MANAGEMENT CAN SEE</span>
          <h2 className="product-section-title">Visibility across the operation.</h2>
          <div className="deep-list">{detail.management.map((item)=><div key={item}><span>✓</span>{item}</div>)}</div>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="shell">
        <span className="eyebrow">RECOMMENDED PLATFORM AREAS</span>
        <h2 className="platform-rich-heading">Explore the capabilities most relevant to this operation.</h2>
        <div className="recommended-grid">
          {detail.recommended.map((item)=><Link className="simple-card recommended-card" href={item.href} key={item.title}><h3>{item.title}</h3><p>{item.text}</p><span className="text-link">Explore <Icon name="arrow" size={16}/></span></Link>)}
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
