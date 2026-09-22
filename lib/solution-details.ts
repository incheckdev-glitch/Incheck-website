export type SolutionDetail = {
  intro: string;
  workflows: { title: string; items: string[] }[];
  teams: string[];
  controls: string[];
  management: string[];
  recommended: { title: string; href: string; text: string }[];
};

export const solutionDetails: Record<string, SolutionDetail> = {
  restaurants: {
    intro: 'Restaurant operations move quickly across opening, receiving, preparation, service, cleaning and closing. InCheck 360 gives teams a repeatable way to execute those controls while management keeps visibility across shifts and locations.',
    workflows: [
      { title: 'Daily operations', items: ['Opening readiness','Closing routines','Shift handover','Cleaning routines','Equipment readiness'] },
      { title: 'Food safety', items: ['Receiving inspections','Storage conditions','Temperature checks','Hygiene controls','Sanitation verification'] },
      { title: 'Follow-through', items: ['Failed-control escalation','Corrective actions','Evidence capture','Manager verification','Location review'] },
    ],
    teams: ['Restaurant managers','Kitchen teams','Food-safety / QA teams','Operations managers','Multi-location management'],
    controls: ['Recurring checklists','Reference Materials','Journal records','Corrective actions','Temperature monitoring','Management dashboards'],
    management: ['Completion by location and shift','Missed or failed controls','Open corrective actions','Food-safety evidence','Temperature trends','Cross-location performance'],
    recommended: [
      { title: 'Checklists & Tasks', href: '/product/checklists', text: 'Run recurring operational and food-safety routines.' },
      { title: 'Food Safety', href: '/food-safety', text: 'See how receiving, storage, hygiene and temperature controls connect.' },
      { title: 'Smart Detectors', href: '/smart-detectors', text: 'Add continuous monitoring between manual checks.' },
    ],
  },
  hospitality: {
    intro: 'Hotels and hospitality operations involve multiple departments, different operating rhythms and a high expectation of consistency. InCheck 360 helps teams standardize recurring work while keeping issues, evidence and follow-up visible at property and portfolio level.',
    workflows: [
      { title: 'Guest & property readiness', items: ['Room-readiness checks','Public-area standards','Opening / shift routines','Department handover','Brand-standard execution'] },
      { title: 'F&B & food safety', items: ['Receiving','Storage temperatures','Kitchen hygiene','Cleaning verification','Corrective actions'] },
      { title: 'Engineering & operations', items: ['Equipment checks','Operational observations','Issue follow-up','Reference procedures','Management review'] },
    ],
    teams: ['Operations','Food & beverage','Housekeeping','Engineering','Quality / compliance','Property management'],
    controls: ['Department checklists','Journal records','SOP / Reference Materials','Corrective actions','Environmental monitoring','Portfolio reporting'],
    management: ['Department visibility','Open issues by property','Recurring failures','Evidence history','Cross-property comparison','Management follow-up'],
    recommended: [
      { title: 'Checklists & Tasks', href: '/product/checklists', text: 'Standardize recurring department execution.' },
      { title: 'Journal', href: '/product/journal', text: 'Capture shift notes, incidents and operating context.' },
      { title: 'Reference Materials', href: '/product/sops', text: 'Keep procedures and standards close to the work.' },
    ],
  },
  'central-kitchens': {
    intro: 'Central kitchens need disciplined execution across receiving, storage, preparation, production, sanitation and temperature control. InCheck 360 keeps those records structured and connects exceptions to follow-up.',
    workflows: [
      { title: 'Receiving & storage', items: ['Supplier / delivery checks','Receiving temperatures','Product condition','Chiller / freezer controls','Storage verification'] },
      { title: 'Production controls', items: ['Preparation checks','Cooking / holding controls','Cleaning & sanitation','Hygiene routines','Operational evidence'] },
      { title: 'Assurance', items: ['Corrective action','Reference procedures','Temperature monitoring','Management review','Audit-ready history'] },
    ],
    teams: ['Production teams','Food-safety / QA','Kitchen supervisors','Operations managers','Management'],
    controls: ['Structured food-safety checklists','Critical numeric limits','Photo / signature evidence','Corrective actions','Detectors','Reports and history'],
    management: ['Critical exceptions','Temperature trends','Completion and missed controls','Corrective-action status','Evidence by process','Location / production-area visibility'],
    recommended: [
      { title: 'Food Safety', href: '/food-safety', text: 'Explore the full food-safety execution model.' },
      { title: 'Corrective Actions', href: '/product/corrective-actions', text: 'Keep response and verification tied to the original exception.' },
      { title: 'Smart Detectors', href: '/smart-detectors', text: 'Monitor cold storage and other critical environments continuously.' },
    ],
  },
  'food-manufacturing': {
    intro: 'Food manufacturing environments need repeatable controls, evidence and clear follow-through across production and storage. InCheck 360 provides the execution and operational record around those recurring requirements.',
    workflows: [
      { title: 'Production execution', items: ['Recurring production checks','Process inspections','Measured values','Evidence capture','Shift records'] },
      { title: 'Food-safety assurance', items: ['Hygiene controls','Cleaning / sanitation','Storage conditions','Environmental monitoring','Non-conformity follow-up'] },
      { title: 'Management control', items: ['Open actions','Trend review','Location / area reporting','Operational history','Audit support'] },
    ],
    teams: ['Production','Quality / food safety','Supervisors','Operations','Management'],
    controls: ['Checklists','Measured limits','Reference Materials','Corrective actions','Journal records','Detectors and reporting'],
    management: ['Process exceptions','Evidence history','Open corrective actions','Environmental trends','Completion performance','Recurring issues'],
    recommended: [
      { title: 'Checklists & Tasks', href: '/product/checklists', text: 'Digitize recurring production and quality controls.' },
      { title: 'Reports & Audit Trail', href: '/product/reports', text: 'Preserve structured operational evidence.' },
      { title: 'Integrations', href: '/integrations', text: 'Scope selected data exchange with ERP or other systems.' },
    ],
  },
  retail: {
    intro: 'Retail operations need consistent local execution without losing central visibility. InCheck 360 helps stores complete recurring controls, keep standards accessible and surface exceptions quickly.',
    workflows: [
      { title: 'Store routines', items: ['Opening checks','Closing checks','Cleaning standards','Equipment readiness','Shift handover'] },
      { title: 'Quality & safety', items: ['Hygiene controls','Temperature checks where relevant','Operational incidents','Evidence capture','Corrective actions'] },
      { title: 'Network visibility', items: ['Completion by store','Open issues','Recurring concerns','Reference standards','Management reporting'] },
    ],
    teams: ['Store teams','Store managers','Operations','Quality / compliance','Regional management'],
    controls: ['Recurring checklists','Journal','Reference Materials','Corrective actions','Reporting','Environmental monitoring where needed'],
    management: ['Store-level completion','Exceptions by location','Open follow-up','Operational history','Network comparison'],
    recommended: [
      { title: 'Checklists & Tasks', href: '/product/checklists', text: 'Standardize recurring store execution.' },
      { title: 'Journal', href: '/product/journal', text: 'Keep operational events and shift context in one history.' },
      { title: 'Dashboards & Analytics', href: '/product/analytics', text: 'Review performance across the store network.' },
    ],
  },
  'multi-site': {
    intro: 'Multi-site operators need central standards without losing the reality of local execution. InCheck 360 lets management define the operating model, deploy it by site and keep exceptions, evidence and follow-up visible across the network.',
    workflows: [
      { title: 'Central governance', items: ['Shared standards','Reference Materials','Common checklist structures','Role / location configuration','Reporting framework'] },
      { title: 'Local execution', items: ['Site-level checklists','Journal updates','Evidence capture','Corrective actions','Detector monitoring'] },
      { title: 'Portfolio visibility', items: ['Cross-site dashboards','Open-action review','Recurring issue patterns','Location history','Management reporting'] },
    ],
    teams: ['Site teams','Location managers','Regional managers','Operations leadership','Quality / compliance','Senior management'],
    controls: ['Central standards','Local workflow assignment','Cross-location reporting','Corrective-action ownership','Evidence history','Continuous monitoring'],
    management: ['Network completion','Location comparison','Open / overdue actions','Recurring exceptions','Detector trends','Portfolio-wide evidence'],
    recommended: [
      { title: 'Platform', href: '/platform', text: 'See how all operating layers connect.' },
      { title: 'Dashboards & Analytics', href: '/product/analytics', text: 'Bring cross-location execution into one management view.' },
      { title: 'Plans', href: '/plans', text: 'Compare the current operating packages and custom configurations.' },
    ],
  },
};
