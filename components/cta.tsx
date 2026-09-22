import Link from 'next/link';
import { Icon } from './icon';

export function CTA() {
  return <section className="cta-section"><div className="cta-grid-bg"/><div className="shell cta-inner"><div><span className="eyebrow light">READY WHEN YOU ARE</span><h2>See what is actually happening across your operation.</h2><p>Connect daily execution, food-safety controls, evidence and continuous monitoring in one platform.</p></div><div className="cta-actions"><Link className="button white" href="/book-demo">Book a Demo <Icon name="arrow" size={18}/></Link><Link className="button dark-outline" href="/platform">Explore the Platform</Link></div></div></section>
}
