import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://incheck360.com'),
  applicationName: 'InCheck 360',
  title: { default: 'InCheck 360', template: '%s | InCheck 360' },
  description: 'InCheck 360 connects human checks, operational follow-up, verification, evidence, reporting and IoT monitoring across multi-location operations.',
  icons: {
    icon: [{ url: '/favicon.svg?v=4', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg?v=4'],
    apple: [{ url: '/brand/incheck360-logo.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'InCheck 360',
    title: 'InCheck 360',
    description: 'Operational control across people, processes and equipment—from checks and exceptions to documented follow-up and verification.',
    url: '/',
    images: [{ url: '/brand/incheck360-logo.png', width: 610, height: 200, alt: 'InCheck 360' }],
  },
  twitter: {
    card: 'summary',
    title: 'InCheck 360',
    description: 'Operational control across people, processes and equipment.',
    images: ['/brand/incheck360-logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
