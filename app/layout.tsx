import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: { default: 'InCheck 360 | Operational Control. Food Safety. Verified.', template: '%s | InCheck 360' },
  description: 'InCheck 360 connects digital operations, food safety, audits, corrective actions, smart detectors and real-time visibility across multi-location teams.',
  metadataBase: new URL('https://incheck360.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
