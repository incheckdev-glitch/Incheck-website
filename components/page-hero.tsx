import Link from 'next/link';
import { Icon } from './icon';

export function PageHero({ eyebrow, title, text, primary='Book a Demo', primaryHref='/book-demo', secondary='Explore the Platform', secondaryHref='/platform', children }: { eyebrow: string; title: string; text: string; primary?: string; primaryHref?: string; secondary?: string; secondaryHref?: string; children?: React.ReactNode }) {
  return <section className="subhero"><div className="subhero-grid"/><div className="shell subhero-inner"><div className="subhero-copy"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="hero-actions"><Link className="button primary" href={primaryHref}>{primary} <Icon name="arrow" size={17}/></Link><Link className="button dark-outline" href={secondaryHref}>{secondary}</Link></div></div>{children && <div className="subhero-visual">{children}</div>}</div></section>
}
