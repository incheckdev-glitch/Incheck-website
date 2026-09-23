export type Feature = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  tone: 'blue' | 'cyan' | 'orange' | 'violet' | 'green';
  status: 'live' | 'coming-soon';
};

export const features: Feature[] = [
  {
    slug: 'checklists',
    eyebrow: 'Daily execution',
    title: 'Checklists & Tasks',
    short: 'Turn standards into consistent daily execution.',
    description: 'Build structured operational and food-safety checklists by location, role, user and shift, with scheduling, validation, evidence and exception follow-through.',
    bullets: ['Recurring and scheduled checks', 'Structured inputs and evidence', 'Role- and location-based assignment', 'Due time, expiry and completion tracking', 'Configured reminders, alerts and shared-device workflows'],
    tone: 'blue',
    status: 'live',
  },
  {
    slug: 'journal',
    eyebrow: 'Operational context',
    title: 'Journal',
    short: 'Keep the operating story between recurring checks.',
    description: 'Record shift notes, observations, incidents, recurring concerns and location updates in one structured operational history.',
    bullets: ['Shift and location updates', 'Operational observations', 'Incident records', 'Management history'],
    tone: 'cyan',
    status: 'live',
  },
  {
    slug: 'corrective-actions',
    eyebrow: 'Verified closure',
    title: 'Corrective Actions',
    short: 'Finding the issue is only the beginning.',
    description: 'Turn failed controls and findings into assigned action, clear accountability, corrective evidence and verified closure.',
    bullets: ['Assignment and ownership', 'Priorities and due dates', 'Evidence of correction', 'Verification before closure'],
    tone: 'orange',
    status: 'live',
  },
  {
    slug: 'sops',
    eyebrow: 'Knowledge',
    title: 'Reference Materials',
    short: 'Put the right standard where the work happens.',
    description: 'Centralize SOPs, procedures, manuals, training documents and operational references so teams work from current information.',
    bullets: ['Central reference library', 'Role and location relevance', 'Operational procedures and guides', 'Support for training and execution'],
    tone: 'blue',
    status: 'live',
  },
  {
    slug: 'smart-detectors',
    eyebrow: 'Always-on monitoring',
    title: 'Smart Detectors',
    short: 'Monitor critical conditions even between manual checks.',
    description: 'Connect temperature and environmental detectors to centralize continuous readings, device status, alerts, trends and multi-location visibility.',
    bullets: ['Temperature and humidity monitoring', 'Device and no-reading status visibility', 'Threshold alerts', 'Historical trends and evidence'],
    tone: 'green',
    status: 'live',
  },
  {
    slug: 'analytics',
    eyebrow: 'Visibility',
    title: 'Dashboards & Analytics',
    short: 'See where standards hold—and where attention is needed.',
    description: 'Bring checklist, action, journal and monitoring data together into a management view for completion, exceptions, trends and cross-location performance.',
    bullets: ['Cross-location dashboards', 'Completion and trend analysis', 'Open action visibility', 'Filterable operational reporting'],
    tone: 'violet',
    status: 'live',
  },
  {
    slug: 'reports',
    eyebrow: 'Evidence',
    title: 'Reports & Audit Trail',
    short: 'Keep the operational record ready when you need it.',
    description: 'Maintain structured histories and exportable evidence for management review, internal audits and operational documentation.',
    bullets: ['Time-stamped history', 'Location and user traceability', 'Exportable records', 'Evidence-linked follow-up'],
    tone: 'cyan',
    status: 'live',
  },
  {
    slug: 'audits',
    eyebrow: 'Coming soon',
    title: 'Audit Management',
    short: 'A dedicated assurance layer from finding to verified closure.',
    description: 'A purpose-built audit module for structured audits, findings, evidence, corrective action, verification and audit reporting. Inspection-style checklists can be used today while the dedicated module is completed.',
    bullets: ['Structured audit programs', 'Findings and evidence', 'Corrective-action linkage', 'Verification and reporting'],
    tone: 'cyan',
    status: 'coming-soon',
  },
  {
    slug: 'ai-intelligence',
    eyebrow: 'Coming soon',
    title: 'AI Data Analytics',
    short: 'Turn structured operational data into more useful signals.',
    description: 'An upcoming intelligence layer designed to surface recurring issues, trends, risk signals and management summaries from InCheck 360 operational data.',
    bullets: ['Recurring issue detection', 'Operational summaries', 'Risk signals', 'Performance patterns'],
    tone: 'violet',
    status: 'coming-soon',
  },
];

export const industries = [
  {
    slug: 'restaurants',
    title: 'Restaurants & QSR',
    subtitle: 'Consistency across every shift and location.',
    description: 'Standardize opening, closing, receiving, hygiene, food-safety and daily operating routines while giving management real-time visibility.',
  },
  {
    slug: 'hospitality',
    title: 'Hotels & Hospitality',
    subtitle: 'Standards across departments and properties.',
    description: 'Coordinate recurring department checks, food-safety controls, SOPs, operational observations and issue follow-up across properties.',
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
    subtitle: 'Structured execution around recurring controls.',
    description: 'Support production checks, food-safety routines, environmental monitoring, corrective action and documentation across production and storage environments.',
  },
  {
    slug: 'retail',
    title: 'Retail',
    subtitle: 'Operational visibility beyond the back office.',
    description: 'Give multi-site teams a consistent way to execute store checks, maintain standards, record operational context and surface exceptions quickly.',
  },
  {
    slug: 'multi-site',
    title: 'Multi-Site Operations',
    subtitle: 'Central control. Local execution.',
    description: 'Set standards centrally while allowing each site to execute the right workflows, with clear performance, exception and evidence visibility across the network.',
  },
];

export const faqs = [
  ['What is InCheck 360?', 'InCheck 360 is an operational control platform connecting digital checklists, Journal records, corrective actions, Reference Materials, smart detectors, dashboards and operational evidence across multi-location teams.'],
  ['Is InCheck 360 only for restaurants?', 'No. The platform is particularly strong in food service and hospitality, while the same structured execution model can support central kitchens, food manufacturing, retail and other multi-site operations.'],
  ['Can workflows differ by location, role or shift?', 'Yes. Checklists, tasks and references can be configured around locations, roles, users, shifts and operating requirements. Personal and shared-device execution, including QR-based access, can be supported where configured.'],
  ['How do reminders, alerts and corrective actions work?', 'Configured reminders and operational notifications can help surface due, incomplete or exception-based work. When an issue requires follow-up, it can move into an owned corrective action with evidence and verification.'],
  ['How do smart detectors fit with manual checks?', 'They complement each other. Human checks capture process and context, while connected detectors provide continuous environmental readings between scheduled checks.'],
  ['Does InCheck 360 support HACCP and ISO 22000?', 'InCheck 360 can support the digital execution, monitoring, documentation and verification around HACCP-based controls and ISO 22000-aligned food-safety management processes. It does not itself provide certification or guarantee legal compliance.'],
  ['What does onboarding look like?', 'Implementation depends on the selected plan and scope. It can include workflow configuration, account setup, training, onboarding and ongoing Customer Success support. InCheck Lite does not include account setup and onboarding by default.'],
  ['How is access controlled?', 'Users can be configured around roles, locations and operating responsibilities. Specific security, hosting and access requirements can be reviewed as part of implementation and commercial scope.'],
  ['Which modules are coming soon?', 'The dedicated Audit Management module and AI Data Analytics are currently positioned as coming soon.'],
  ['Can InCheck 360 integrate with other systems?', 'Integration scope depends on the customer environment. Selected master data and transaction data can be exchanged with ERP or other systems while operational evidence and follow-up remain in InCheck 360.'],
];
