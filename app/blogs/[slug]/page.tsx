import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { blogArticles, getBlogArticle } from '@/lib/blogs';

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/blogs/${article.slug}` },
    openGraph: {
      title: `${article.title} | InCheck 360`,
      description: article.summary,
      type: 'article',
      url: `/blogs/${article.slug}`,
      publishedTime: new Date(article.date).toISOString(),
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  return (
    <>
      <article className="resource-article">
        <header className="resource-article-hero">
          <div className="shell resource-article-hero-inner">
            <Link className="resource-back" href="/blogs">← Blogs</Link>
            <span className="eyebrow light">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.summary}</p>
            <div className="resource-meta">{article.date} · {article.readingTime}</div>
          </div>
        </header>

        <div className="shell resource-article-layout">
          <div className="resource-article-main">
            <p className="resource-intro">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
          </div>

          <aside className="resource-takeaways">
            <span className="eyebrow">KEY TAKEAWAYS</span>
            {article.takeaways.map((item) => <div key={item}><span>✓</span>{item}</div>)}
            <Link className="button primary" href="/book-demo">Book a Demo <Icon name="arrow" size={16} /></Link>
          </aside>
        </div>
      </article>
      <CTA />
    </>
  );
}
