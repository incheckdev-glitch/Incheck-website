export const publicClients = [
  'Advanced Food',
  'BAB',
  'Bachir Ice Cream',
  'Bosporus',
  'Boubess',
  'Bunny',
  'Butcheria',
  'Cafe Centreville',
  'Cozmo',
  'Entrecote',
  'Globals F&B',
  'Kcal',
  'Lebanese Roaster',
  'Maryool',
  'Meat the Fish',
  'MET',
  'Metropole',
  'MRKT',
  'Napoletana',
  'Sibon',
  'Skirt',
  'Soul Kitchen',
  'The Chain',
  'UNI',
  'Zahret',
];

export type ProofStat = {
  value: string;
  label: string;
  detail: string;
  href?: string;
  linkLabel?: string;
};

export const proofStats: ProofStat[] = [
  { value: '7+', label: 'countries', detail: 'Operational footprint published by InCheck 360' },
  { value: '3+', label: 'continents', detail: 'Supporting distributed hospitality and F&B teams' },
  { value: '25+', label: 'featured client brands', detail: 'Publicly showcased across the InCheck 360 customer roster' },
  {
    value: '72%',
    label: 'fewer checklist violations',
    detail: 'Observed in selected customer operations after implementing structured digital checks, corrective actions and follow-up.',
    href: '/case-studies/checklist-violations-reduction',
    linkLabel: 'View Case Study',
  },
];

export const operationalUseCases = [
  {
    area: 'Daily operations',
    title: 'Opening, closing and shift execution',
    items: ['Opening readiness', 'Closing checks', 'Cleaning routines', 'Shift handover', 'Role-based task ownership'],
  },
  {
    area: 'Food safety',
    title: 'Controls that live inside the work',
    items: ['Receiving inspections', 'Storage checks', 'Temperature logs', 'Hygiene routines', 'Corrective actions'],
  },
  {
    area: 'Assurance & follow-through',
    title: 'Evidence from exception to closure',
    items: ['Structured inspections', 'Photos & notes', 'Assigned follow-up', 'Corrective evidence', 'Verified closure'],
  },
  {
    area: 'Monitoring',
    title: 'Continuous environmental visibility',
    items: ['Chillers & freezers', 'Temperature thresholds', 'Humidity monitoring', 'Alerts', 'Historical trends'],
  },
];

export const comparisonRows = [
  ['Task execution', 'Manual tracking', 'Basic completion', 'Scheduled workflows, due time, expiry and ownership'],
  ['Data quality', 'Free text / paper', 'Limited validation', 'Photos, signatures, ranges, QR and structured inputs'],
  ['Visibility', 'After-the-fact', 'Limited dashboards', 'Cross-location status, exceptions and performance'],
  ['Corrective action', 'Email / chat follow-up', 'Separate task', 'Exception → owner → evidence → verified closure'],
  ['Food safety evidence', 'Folders and forms', 'Stored records', 'Connected checks, readings, actions and history'],
  ['SOP access', 'Binders / shared drives', 'Document library', 'Reference material inside the operational workflow'],
  ['Equipment monitoring', 'Manual readings only', 'Usually separate', 'Connected detector readings and threshold alerts'],
  ['Audit readiness', 'Manual compilation', 'Partial history', 'Exportable, time-stamped operational record'],
];

export const foodSafetyControls = [
  { stage: 'Receiving', controls: 'Delivery temperature, condition, supplier, quantity', evidence: 'Numeric range · photo · signature', action: 'Reject / flag / assign' },
  { stage: 'Storage', controls: 'Chiller, freezer and dry-store conditions', evidence: 'Manual check + detector trend', action: 'Alert · investigate · correct' },
  { stage: 'Preparation', controls: 'Hygiene, cross-contamination, preparation controls', evidence: 'Checklist · photo · timestamp', action: 'Immediate correction' },
  { stage: 'Cooking & holding', controls: 'Critical temperature and holding checks', evidence: 'Validated numeric entry', action: 'Out-of-range escalation' },
  { stage: 'Cleaning', controls: 'Sanitation routines and verification', evidence: 'Completion · evidence · sign-off', action: 'Re-clean · verify' },
  { stage: 'Management review', controls: 'Audit findings, trends and recurring exceptions', evidence: 'Dashboard · report · audit trail', action: 'CAPA / ownership / follow-up' },
];
