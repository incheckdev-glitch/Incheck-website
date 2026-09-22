import type { MetadataRoute } from 'next';
import { features, industries } from '@/lib/site-data';
import { resourceArticles } from '@/lib/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://incheck360.com';
  const staticRoutes = [
    '',
    '/platform',
    '/food-safety',
    '/smart-detectors',
    '/industries',
    '/resources',
    '/about',
    '/contact',
    '/book-demo',
    '/privacy',
    '/terms',
    '/cookies',
    '/legal',
  ];
  const productRoutes = features.filter((f) => f.slug !== 'smart-detectors').map((f) => `/product/${f.slug}`);
  const solutionRoutes = industries.map((i) => `/solutions/${i.slug}`);
  const resourceRoutes = resourceArticles.map((article) => `/resources/${article.slug}`);

  return [...staticRoutes, ...productRoutes, ...solutionRoutes, ...resourceRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/book-demo' ? 0.9 : route.startsWith('/resources/') ? 0.7 : 0.8,
  }));
}
