import type { MetadataRoute } from 'next';
import { features, industries } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://incheck360.com';
  const staticRoutes = ['', '/platform', '/food-safety', '/smart-detectors', '/industries', '/resources', '/about', '/contact', '/book-demo'];
  const productRoutes = features.filter((f) => f.slug !== 'smart-detectors').map((f) => `/product/${f.slug}`);
  const solutionRoutes = industries.map((i) => `/solutions/${i.slug}`);
  return [...staticRoutes, ...productRoutes, ...solutionRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/book-demo' ? 0.9 : 0.8,
  }));
}
