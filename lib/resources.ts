export type ResourceArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  takeaways: string[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'operational-control-beyond-checklists',
    category: 'Operational Control',
    title: 'Operational control beyond checklist completion',
    summary: 'A practical model for moving from completed checks to visible exceptions, ownership, action and verification.',
    readingTime: '5 min read',
    intro: 'A completed checklist is useful, but it is not the same as operational control. Control starts when the organization can see what happened, identify the exception, assign ownership and verify the response.',
    sections: [
      {
        title: 'Completion is only the first signal',
        paragraphs: ['A checklist confirms that a routine was performed. The more important question is what happens when the result falls outside the expected standard.'],
        bullets: ['Capture the result at source', 'Make exceptions visible', 'Assign the response', 'Keep the closure traceable'],
      },
      {
        title: 'Connect the operating loop',
        paragraphs: ['A stronger workflow follows a simple cycle: Check → Identify → Act → Verify. Each step should preserve context instead of moving the issue into disconnected chat messages or spreadsheets.'],
      },
      {
        title: 'Use management visibility for exceptions',
        paragraphs: ['Management does not need another screen full of completed tasks. It needs a clear view of overdue work, repeated exceptions, open actions and locations that need attention.'],
      },
    ],
    takeaways: ['Measure more than completion', 'Keep issue ownership explicit', 'Verify closure instead of assuming it', 'Use trends to focus management attention'],
  },
  {
    slug: 'haccp-digital-execution',
    category: 'HACCP',
    title: 'Digitizing the execution around HACCP controls',
    summary: 'How digital workflows can support recurring checks, evidence and follow-up without claiming to replace HACCP design or professional responsibility.',
    readingTime: '6 min read',
    intro: 'Digital tools can make HACCP-related execution easier to schedule, document and review. They do not design the HACCP plan for the organization, certify it, or guarantee compliance.',
    sections: [
      {
        title: 'Put the control inside the daily workflow',
        paragraphs: ['Receiving, storage, preparation, cooking, holding, cooling and sanitation controls are easier to manage when the expected action, evidence and escalation rule are clear at the point of work.'],
      },
      {
        title: 'Capture useful evidence',
        paragraphs: ['The evidence should match the control. A temperature check may require a numeric range. A cleaning verification may need a photo or sign-off. A failed check should create a visible response path.'],
      },
      {
        title: 'Keep responsibility with the food-safety system',
        paragraphs: ['The organization remains responsible for its HACCP plan, legal requirements, critical limits and professional review. Software supports execution and evidence around that system.'],
      },
    ],
    takeaways: ['Digitize recurring execution', 'Match evidence to the control', 'Escalate out-of-range results', 'Do not confuse software with certification'],
  },
  {
    slug: 'international-standards-operational-execution',
    category: 'International Standards Support',
    title: 'Supporting international standards-related operational execution',
    summary: 'Where an operational platform can help with recurring execution, evidence, follow-up and management visibility around international standards-aligned food-safety and operational programs.',
    readingTime: '5 min read',
    intro: 'An operational platform can support the execution, documentation and evidence layers around international standards-aligned food-safety and operational programs. Certification and conformity decisions remain outside the software.',
    sections: [
      {
        title: 'Translate requirements into recurring work',
        paragraphs: ['Operational requirements become more usable when they are translated into role-based checks, inspections, references and follow-up workflows that teams can execute consistently.'],
      },
      {
        title: 'Keep records connected to action',
        paragraphs: ['Records are more useful when findings, corrective actions, evidence and review history stay linked to the same operational event.'],
      },
      {
        title: 'Support review without overstating the tool',
        paragraphs: ['InCheck 360 can help organizations monitor and document activities. It does not certify organizations, guarantee compliance or replace qualified food-safety professionals.'],
      },
    ],
    takeaways: ['Support execution', 'Improve traceability', 'Link findings to action', 'Maintain responsible compliance wording'],
  },
  {
    slug: 'better-digital-checklists',
    category: 'Digital Checklists',
    title: 'Designing digital checklists people can actually execute',
    summary: 'A checklist design approach built around clarity, evidence, exceptions and frontline usability.',
    readingTime: '4 min read',
    intro: 'The quality of a digital checklist depends less on how many questions it contains and more on whether each question drives a clear operational decision.',
    sections: [
      {
        title: 'Ask only what changes a decision',
        paragraphs: ['Long forms create noise. Keep recurring questions focused on the standard, the observation and the action required when the answer is not acceptable.'],
      },
      {
        title: 'Use structured inputs where they add control',
        paragraphs: ['Numeric ranges, photos, signatures, QR inputs and conditional questions can improve data quality when they match the real workflow.'],
      },
      {
        title: 'Design the failed path first',
        paragraphs: ['Before publishing a checklist, define what happens when a check fails: who is notified, who owns the action, what evidence is required and who verifies closure.'],
      },
    ],
    takeaways: ['Reduce unnecessary questions', 'Use structured validation', 'Design exception handling deliberately', 'Keep the frontline flow fast'],
  },
  {
    slug: 'corrective-action-management',
    category: 'Corrective Actions',
    title: 'Corrective actions that do not disappear after the audit',
    summary: 'A simple operating model for ownership, deadlines, evidence and verified closure.',
    readingTime: '5 min read',
    intro: 'A finding has little value if it disappears into email or chat. Corrective-action management should make responsibility and closure visible from the moment the issue is identified.',
    sections: [
      {
        title: 'Convert the finding into owned work',
        paragraphs: ['The issue should carry enough context for the assignee to understand what happened, where it happened and what must be corrected.'],
      },
      {
        title: 'Separate correction from verification',
        paragraphs: ['Marking an action complete is not the same as confirming that the issue is resolved. Verification adds an independent closure step when the risk or process requires it.'],
      },
      {
        title: 'Watch recurring findings',
        paragraphs: ['Repeated issues across a location, process or equipment type can be more important than a single isolated failure. Trend visibility helps management identify where deeper action may be needed.'],
      },
    ],
    takeaways: ['Keep ownership explicit', 'Set due dates where useful', 'Require evidence when appropriate', 'Verify closure on significant findings'],
  },
  {
    slug: 'temperature-monitoring-human-checks-detectors',
    category: 'Temperature Monitoring',
    title: 'Human temperature checks and IoT detectors solve different problems',
    summary: 'Why periodic manual checks and continuous detector readings are stronger when they are used together.',
    readingTime: '5 min read',
    intro: 'A manual temperature log tells you one moment. A detector shows what happened between moments. The strongest operating model uses each for the context it captures best.',
    sections: [
      {
        title: 'Manual checks add operational context',
        paragraphs: ['A person can observe product condition, door position, handling, cleaning and other details that a temperature sensor cannot interpret on its own.'],
      },
      {
        title: 'Detectors add continuity',
        paragraphs: ['Continuous readings can show trends between scheduled checks and help teams investigate when conditions move outside configured thresholds.'],
      },
      {
        title: 'Connect the response',
        paragraphs: ['The value increases when a reading or manual observation can lead to an assigned action and a documented follow-up instead of remaining as an isolated data point.'],
      },
    ],
    takeaways: ['Keep human context', 'Use continuous readings for visibility between checks', 'Define threshold response rules', 'Connect monitoring to follow-up'],
  },
  {
    slug: 'audit-readiness-evidence',
    category: 'Audit Readiness',
    title: 'Building an audit-ready operational evidence trail',
    summary: 'What to preserve so reviews are faster and operational history is easier to understand.',
    readingTime: '4 min read',
    intro: 'Audit readiness is easier when evidence is created during the work rather than assembled later from separate folders, messages and spreadsheets.',
    sections: [
      {
        title: 'Keep the record close to the event',
        paragraphs: ['Time, location, responsible user, response, attachment and follow-up history are most useful when they remain linked to the original check or finding.'],
      },
      {
        title: 'Make changes and closure understandable',
        paragraphs: ['A reviewer should be able to see what failed, what was done, when it was done and how closure was confirmed without reconstructing the story manually.'],
      },
      {
        title: 'Treat readiness as an operating habit',
        paragraphs: ['Audit-ready records are a by-product of consistent execution. The goal is not to create more paperwork; it is to preserve the evidence the operation already generates.'],
      },
    ],
    takeaways: ['Capture evidence at source', 'Keep action history linked', 'Use clear timestamps and ownership', 'Avoid last-minute record reconstruction'],
  },
  {
    slug: 'multi-location-operational-control',
    category: 'Multi-location Operations',
    title: 'Central standards without losing local execution',
    summary: 'How multi-site operators can standardize the control model while keeping responsibility at the location.',
    readingTime: '5 min read',
    intro: 'Multi-location control works when standards are defined centrally but execution remains practical for each site, role and shift.',
    sections: [
      {
        title: 'Standardize the control, not every detail',
        paragraphs: ['A group may need common standards while allowing location-specific schedules, responsibilities or operational references.'],
      },
      {
        title: 'Make exceptions comparable',
        paragraphs: ['Consistent data structures make it easier to compare completion, recurring findings and open actions across locations without forcing every site into identical day-to-day conditions.'],
      },
      {
        title: 'Give management an exception view',
        paragraphs: ['Central teams should be able to focus on overdue work, unresolved findings and repeated risks instead of manually collecting updates from every location.'],
      },
    ],
    takeaways: ['Set standards centrally', 'Assign locally', 'Compare structured outcomes', 'Manage by exception'],
  },
];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
