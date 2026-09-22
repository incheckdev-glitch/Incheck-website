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
  title: { default: 'InCheck 360 | Operational Control Platform', template: '%s | InCheck 360' },
  description: 'InCheck 360 connects human checks, corrective actions, verification, evidence, analytics and IoT monitoring across multi-location operations.',
  openGraph: {
    type: 'website',
    siteName: 'InCheck 360',
    title: 'InCheck 360 | Operational Control Platform',
    description: 'Operational control across people, processes and equipment—from checks and exceptions to corrective action and verification.',
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'InCheck 360 | Operational Control Platform',
    description: 'Operational control across people, processes and equipment.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
