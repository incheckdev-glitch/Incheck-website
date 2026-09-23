'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Brand } from './brand';
import { Icon } from './icon';

const productLinks = [
  ['Platform overview', '/platform'],
  ['Checklists & tasks', '/product/checklists'],
  ['Journal', '/product/journal'],
  ['Reference Materials', '/product/sops'],
  ['Smart detectors', '/smart-detectors'],
  ['Reports & audit trail', '/product/reports'],
  ['Audit Management · Coming soon', '/product/audits'],
  ['AI Data Analytics · Coming soon', '/product/ai-intelligence'],
];
const industryLinks = [
  ['Restaurants & QSR', '/solutions/restaurants'], ['Hotels & hospitality', '/solutions/hospitality'], ['Central kitchens', '/solutions/central-kitchens'], ['Food manufacturing', '/solutions/food-manufacturing'], ['Retail', '/solutions/retail'], ['Multi-site operations', '/solutions/multi-site'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="shell nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-group"><button>Product <span>⌄</span></button><div className="mega-menu">{productLinks.map(([t,h]) => <Link key={h} href={h}>{t}<small>Explore →</small></Link>)}</div></div>
          <div className="nav-group"><button>Industries <span>⌄</span></button><div className="mega-menu compact">{industryLinks.map(([t,h]) => <Link key={h} href={h}>{t}<small>View →</small></Link>)}</div></div>
          <Link href="/food-safety">Food Safety</Link>
          <Link href="/smart-detectors">Smart Detectors</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="nav-actions">
          <a className="button ghost small desktop-only" href="https://app.incheck360.com/" target="_blank" rel="noreferrer">Login</a>
          <Link className="button primary small" href="/book-demo">Book a Demo</Link>
          <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        </div>
      </div>
      {open && <div className="mobile-menu" id="mobile-navigation">
        <div className="shell">
          <strong>Product</strong>{productLinks.map(([t,h]) => <Link onClick={()=>setOpen(false)} key={h} href={h}>{t}</Link>)}
          <strong>Industries</strong>{industryLinks.slice(0,4).map(([t,h]) => <Link onClick={()=>setOpen(false)} key={h} href={h}>{t}</Link>)}
          <Link onClick={()=>setOpen(false)} href="/food-safety">Food Safety</Link><Link onClick={()=>setOpen(false)} href="/smart-detectors">Smart Detectors</Link><Link onClick={()=>setOpen(false)} href="/plans">Plans</Link><Link onClick={()=>setOpen(false)} href="/partners">Partners</Link><Link onClick={()=>setOpen(false)} href="/blogs">Blogs</Link><Link onClick={()=>setOpen(false)} href="/about">About</Link><Link onClick={()=>setOpen(false)} href="/contact">Contact</Link>
        </div>
      </div>}
    </header>
  );
}
