import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { blogArticles } from '@/lib/blogs';

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
            {blogArticles.map((article) => (
              <article className="resource-card" key={article.slug}>
                <div className="resource-top">
                  <span>{article.category}</span>
                  <small>{article.date}</small>
                </div>
                <div className="resource-body">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <Link className="text-link" href={`/blogs/${article.slug}`}>
                    Read article <Icon name="arrow" size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
