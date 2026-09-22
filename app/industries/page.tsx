import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';
import { industries } from '@/lib/site-data';

export const metadata = { title: 'Industries' };

export default function Industries(){return <><PageHero eyebrow="INDUSTRIES" title="Built for operations where standards need to hold every day." text="Configure InCheck 360 around the workflows, controls and locations that matter to your operation."/><section className="content-section"><div className="shell"><div className="industry-grid">{industries.map((x,i)=><Link href={`/solutions/${x.slug}`} className={`industry-card industry-${i}`} key={x.slug}><span className="industry-index">0{i+1}</span><div><h3>{x.title}</h3><p>{x.description}</p></div><span className="round-arrow"><Icon name="arrow" size={16}/></span></Link>)}</div></div></section><CTA/></>}
