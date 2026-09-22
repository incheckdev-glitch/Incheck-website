export type Feature = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  tone: 'blue' | 'cyan' | 'orange' | 'violet' | 'green';
};

export const features: Feature[] = [
  {
    slug: 'checklists',
    eyebrow: 'Daily execution',
    title: 'Checklists & Tasks',
    short: 'Turn standards into consistent daily execution.',
    description: 'Build structured operational and food-safety checklists by location, role and shift. Capture the evidence you need without slowing teams down.',
    bullets: ['Recurring and scheduled checks', 'Photos, signatures, numeric ranges and QR inputs', 'Role- and location-based assignment', 'Expiry, reminders and completion tracking'],
    tone: 'blue',
  },
  {
    slug: 'audits',
    eyebrow: 'Inspections',
    title: 'Audits & Inspections',
    short: 'Inspect deeper. Follow through.',
    description: 'Run structured audits, score performance and preserve a clear evidence trail from finding through correction.',
    bullets: ['Custom audit structures', 'Scoring and weighted sections', 'Photo and note evidence', 'Exportable audit records'],
    tone: 'cyan',
  },
  {
    slug: 'corrective-actions',
    eyebrow: 'Verified closure',
    title: 'Corrective Actions',
    short: 'Finding the issue is only the beginning.',
    description: 'Turn failed checks and audit findings into assigned action, accountability and verified closure.',
    bullets: ['Assignment and ownership', 'Priorities and due dates', 'Evidence of correction', 'Verification before closure'],
    tone: 'orange',
  },
  {
    slug: 'smart-detectors',
    eyebrow: 'Always-on monitoring',
    title: 'Smart Detectors',
    short: 'Monitor critical conditions even when teams are offline.',
    description: 'Connect temperature and environmental detectors to centralize continuous readings, alerts and operational context.',
    bullets: ['Temperature and humidity monitoring', 'Multi-location visibility', 'Threshold alerts', 'Historical trends and evidence'],
    tone: 'green',
  },
  {
    slug: 'sops',
    eyebrow: 'Knowledge',
    title: 'SOPs & Reference Materials',
    short: 'Put the right standard where the work happens.',
    description: 'Centralize SOPs, guides and operational references so teams work from current information at every location.',
    bullets: ['Central document library', 'Location and role targeting', 'In-workflow reference access', 'Controlled operational standards'],
    tone: 'blue',
  },
  {
    slug: 'analytics',
    eyebrow: 'Visibility',
    title: 'Dashboards & Analytics',
    short: 'See where standards hold—and where attention is needed.',
    description: 'Bring checklist, audit, action and monitoring data together into one operational picture.',
    bullets: ['Cross-location dashboards', 'Trend and completion analysis', 'Open action visibility', 'Filterable operational reporting'],
    tone: 'violet',
  },
  {
    slug: 'ai-intelligence',
    eyebrow: 'Coming soon',
    title: 'AI Intelligence',
    short: 'Turn operational data into more useful signals.',
    description: 'A growing intelligence layer designed to surface patterns, exceptions and insights from structured operational data.',
    bullets: ['Pattern detection', 'Operational summaries', 'Risk signals', 'Photo and evidence intelligence roadmap'],
    tone: 'violet',
  },
  {
    slug: 'reports',
    eyebrow: 'Evidence',
    title: 'Reports & Compliance',
    short: 'Keep the record ready when you need it.',
    description: 'Maintain structured histories and exportable records for management reviews, audits and compliance workflows.',
    bullets: ['Audit trails', 'Location histories', 'Exportable reports', 'Evidence-linked records'],
    tone: 'cyan',
  },
];

export const industries = [
  {
    slug: 'restaurants',
    title: 'Restaurants & QSR',
    subtitle: 'Consistency across every shift and location.',
    description: 'Standardize opening, closing, hygiene, food safety and daily operating routines while giving management real-time visibility.',
  },
  {
    slug: 'hospitality',
    title: 'Hotels & Hospitality',
    subtitle: 'Standards that move with the guest journey.',
    description: 'Coordinate recurring operational checks, food-safety controls, SOPs and issue follow-up across departments and properties.',
  },
  {
    slug: 'central-kitchens',
    title: 'Central Kitchens',
    subtitle: 'Control critical processes at scale.',
    description: 'Digitize receiving, production, sanitation, storage and temperature workflows with traceable evidence and corrective actions.',
  },
  {
    slug: 'food-manufacturing',
    title: 'Food Manufacturing',
    subtitle: 'Structured execution around critical controls.',
    description: 'Support recurring checks, inspections, environmental monitoring and documentation across production and storage environments.',
  },
  {
    slug: 'retail',
    title: 'Retail',
    subtitle: 'Operational visibility beyond the back office.',
    description: 'Give multi-site teams a consistent way to execute checks, maintain standards and surface exceptions quickly.',
  },
  {
    slug: 'multi-site',
    title: 'Multi-Site Operations',
    subtitle: 'Central control. Local execution.',
    description: 'Set standards centrally while allowing each site to execute the right workflows, with clear performance visibility across the network.',
  },
];

export const faqs = [
  ['What is InCheck 360?', 'InCheck 360 is an operations and compliance platform that connects digital checklists, audits, corrective actions, SOPs, smart detectors and reporting across multi-location teams.'],
  ['Is InCheck 360 only for restaurants?', 'No. The platform is particularly strong in food service and hospitality, but the same structured execution model can support retail, food manufacturing and other multi-site operations.'],
  ['Can workflows differ by location or role?', 'Yes. Checklists, tasks and operational references can be configured around locations, roles and operational needs.'],
  ['How do smart detectors fit with manual checks?', 'They complement each other. Human checks capture process and context, while connected detectors provide continuous environmental readings between those checks.'],
  ['Does InCheck 360 support integrations?', 'Integration scope depends on your environment. InCheck 360 can support tailored integrations with other business systems and connected devices.'],
];
