import Link from 'next/link';
import { Brand } from './brand';

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div className="footer-brand"><Brand /><p>Digital operations, food safety and continuous monitoring in one connected platform.</p><a href="mailto:info@incheck360.nl">info@incheck360.nl</a></div>
      <div><strong>Product</strong><Link href="/platform">Platform</Link><Link href="/product/checklists">Checklists</Link><Link href="/product/audits">Audits</Link><Link href="/smart-detectors">Smart Detectors</Link></div>
      <div><strong>Solutions</strong><Link href="/solutions/restaurants">Restaurants</Link><Link href="/solutions/hospitality">Hospitality</Link><Link href="/solutions/food-manufacturing">Food Manufacturing</Link><Link href="/industries">All industries</Link></div>
      <div><strong>Company</strong><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><a href="https://app.incheck360.com/" target="_blank" rel="noreferrer">Platform login</a></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} InCheck 360 Holding B.V.</span><span>Enschede, The Netherlands</span></div>
  </footer>
}
