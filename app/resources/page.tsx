import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { resourceArticles } from '@/lib/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Practical InCheck 360 resources on operational control, food safety, HACCP execution, corrective actions, audit readiness and temperature monitoring.',
  alternates: { canonical: '/resources' },
};

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Practical guidance for stronger operational control."
        text="Focused articles on food safety, execution, monitoring, audits and multi-location operations—written for the teams doing the work."
      />
      <section className="content-section resource-library">
        <div className="shell">
          <div className="resource-library-head">
            <div>
              <span className="eyebrow">RESOURCE LIBRARY</span>
              <h2>Useful operating ideas, not SEO filler.</h2>
            </div>
            <p>Each resource is built around a real operational question: what to check, what evidence matters, what happens when something fails and how management keeps visibility.</p>
          </div>
          <div className="resource-grid">
            {resourceArticles.map((article) => (
              <article className="resource-card" key={article.slug}>
                <div className="resource-top">
                  <span>{article.category}</span>
                  <small>{article.readingTime}</small>
                </div>
                <div className="resource-body">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <Link className="text-link" href={`/resources/${article.slug}`}>
                    Read article <Icon name="arrow" size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
