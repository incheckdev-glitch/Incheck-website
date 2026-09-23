import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Articles and updates from InCheck 360 on food safety, operational execution, monitoring and multi-location management.',
  alternates: { canonical: '/blogs' },
};

export default function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="BLOGS"
        title="Practical thinking for stronger daily operations."
        text="Articles and updates on food safety, operational execution, monitoring and multi-location management."
      />
      <section className="content-section">
        <div className="shell">
          <div className="content-panel" style={{maxWidth: 820, margin: '0 auto', textAlign: 'center'}}>
            <span className="eyebrow">NEW BLOGS COMING SOON</span>
            <h2>We’re preparing a new set of articles.</h2>
            <p>Previous articles have been removed while the blog is refreshed with clearer, more useful operational content.</p>
          </div>
        </div>
      </section>
    </>
  );
}
