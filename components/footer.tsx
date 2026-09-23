import Link from 'next/link';
import { Brand } from './brand';
import { companyInfo } from '@/lib/company-info';

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div className="footer-brand">
        <Brand />
        <p>Operational control across people, processes, equipment and evidence.</p>
        <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        <small>{companyInfo.city}, {companyInfo.country}</small>
      </div>
      <div><strong>Product</strong><Link href="/platform">Platform</Link><Link href="/product/checklists">Checklists</Link><Link href="/product/journal">Journal</Link><Link href="/product/corrective-actions">Corrective Actions</Link><Link href="/product/sops">Reference Materials</Link><Link href="/smart-detectors">Smart Detectors</Link><Link href="/integrations">Integrations</Link><Link href="/plans">Plans</Link></div>
      <div><strong>Industries</strong><Link href="/solutions/restaurants">Restaurants</Link><Link href="/solutions/hospitality">Hospitality</Link><Link href="/solutions/food-manufacturing">Food Manufacturing</Link><Link href="/industries">All industries</Link></div>
      <div><strong>Company</strong><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><a href="https://app.incheck360.com/" target="_blank" rel="noreferrer">Platform login</a></div>
      <div><strong>Legal</strong><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/cookies">Cookie Policy</Link><Link href="/legal">Company Information</Link></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {companyInfo.name}</span><span>{companyInfo.city}, {companyInfo.country}</span></div>
  </footer>
}
