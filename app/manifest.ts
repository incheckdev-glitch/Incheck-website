import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InCheck 360',
    short_name: 'InCheck 360',
    description: 'Operational control, food safety, audits, corrective actions and smart monitoring in one connected platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06182e',
    theme_color: '#0877e6',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
