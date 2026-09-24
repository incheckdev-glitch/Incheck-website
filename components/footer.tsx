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

      <div className="footer-column footer-product-column">
        <strong>Product</strong>
        <div className="footer-link-grid footer-product-links">
          <Link href="/platform">Platform</Link>
          <Link href="/product/checklists">Checklists &amp; Tasks</Link>
          <Link href="/product/journal">Journal</Link>
          <Link href="/product/sops">Reference Materials</Link>
          <Link href="/smart-detectors">Smart Detectors</Link>
          <Link href="/product/reports">Reports &amp; Audit Trail</Link>
          <Link href="/food-safety">Food Safety</Link>
          <Link href="/download-app">Download App</Link>
          <Link href="/plans">Plans</Link>
        </div>
      </div>

      <div className="footer-column">
        <strong>Industries</strong>
        <div className="footer-link-grid">
          <Link href="/solutions/restaurants">Restaurants &amp; QSR</Link>
          <Link href="/solutions/hospitality">Hotels &amp; Hospitality</Link>
          <Link href="/solutions/central-kitchens">Central Kitchens</Link>
          <Link href="/solutions/food-manufacturing">Food Manufacturing</Link>
          <Link href="/solutions/retail">Retail</Link>
          <Link href="/solutions/multi-site">Multi-Site Operations</Link>
          <Link href="/industries">All Industries</Link>
        </div>
      </div>

      <div className="footer-column">
        <strong>Company</strong>
        <div className="footer-link-grid">
          <Link href="/about">About</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book-demo">Book a Demo</Link>
          <a href="https://www.linkedin.com/company/incheck360" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://app.incheck360.com/" target="_blank" rel="noreferrer">Platform Login</a>
        </div>
      </div>

      <div className="footer-column">
        <strong>Legal</strong>
        <div className="footer-link-grid">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <Link href="/legal">Company Information</Link>
        </div>
      </div>
    </div>

    <div className="shell footer-bottom">
      <span>© {new Date().getFullYear()} {companyInfo.name}</span>
      <span>{companyInfo.city}, {companyInfo.country}</span>
    </div>
  </footer>
}
