import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { blogLinks } from '@/lib/blog-links';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Latest InCheck 360 news and articles on food safety, operational execution, environmental monitoring and restaurant operations.',
  alternates: { canonical: '/blogs' },
};

export default function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="BLOGS"
        title="Our latest news and articles."
        text="Updates and practical perspectives from InCheck 360 on food safety, operations, monitoring and hospitality technology."
      />
      <section className="content-section resource-library">
        <div className="shell">
          <div className="resource-library-head">
            <div>
              <span className="eyebrow">BLOGS</span>
              <h2>Latest from InCheck 360.</h2>
            </div>
            <p>Company updates, operational thinking and practical articles for hospitality and food-service teams.</p>
          </div>
          <div className="resource-grid">
            {blogLinks.map((article) => (
              <article className="resource-card" key={article.title}>
                <div className="resource-top">
                  <span>InCheck 360</span>
                  <small>{article.date}</small>
                </div>
                <div className="resource-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a className="text-link" href={article.href}>
                    Read article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
