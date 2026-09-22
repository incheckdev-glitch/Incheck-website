import Link from 'next/link';
import { CTA } from '@/components/cta';
import { Icon } from '@/components/icon';
import { PageHero } from '@/components/page-hero';

export const metadata = { title: 'Resources' };

const resources=[
  ['Guide','From checklist completion to verified corrective action','Why operational control improves when findings, ownership, evidence and closure live in one workflow.'],
  ['Food Safety','Digital execution around HACCP controls','How multi-site teams can structure checks and evidence without turning food safety into extra admin.'],
  ['Smart Monitoring','Human checks + continuous detector data','Where manual checks are essential, where connected monitoring helps, and why the two work better together.'],
  ['Operations','Standardizing execution across multiple locations','A practical model for central standards, local execution and management visibility.'],
  ['Audit Readiness','Building a stronger evidence trail','What to capture so audit records are easier to review and follow through.'],
  ['Product','Designing checklists people actually complete','Structure, evidence and usability principles for frontline operational workflows.']
];
export default function Resources(){return <><PageHero eyebrow="RESOURCES" title="Practical ideas for stronger operational control." text="Guides and perspectives on food safety, execution, monitoring, audits and multi-location operations."/><section className="content-section"><div className="shell simple-card-grid">{resources.map(([tag,t,p],i)=><article className="resource-card" key={t}><div className="resource-top"><span className="eyebrow light">{tag}</span></div><div><h3>{t}</h3><p>{p}</p><Link className="text-link" href="/contact">Ask our team <Icon name="arrow" size={15}/></Link></div></article>)}</div></section><CTA/></>}
