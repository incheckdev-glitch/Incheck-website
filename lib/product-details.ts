export type ProductDetail = {
  overview: string;
  capabilities: { title: string; text: string }[];
  workflow: { title: string; text: string }[];
  useCases: string[];
  management: string[];
  connections: string[];
  availability: string;
};

export const productDetails: Record<string, ProductDetail> = {
  checklists: {
    overview: 'Build checklists around locations, roles and shifts. Use structured questions, limits, due times and evidence requirements to guide frontline execution. Exceptions stay visible and can move into documented follow-up and verification.',
    capabilities: [
      { title: 'Flexible checklist design', text: 'Build operational, quality and food-safety routines with yes/no, numeric, text, photo, signature, evidence and other structured inputs.' },
      { title: 'Scheduling & recurrence', text: 'Run one-time or recurring checks around the location, shift, role and operating schedule.' },
      { title: 'Assignment rules', text: 'Direct work to the right location, department, role, user or shift instead of relying on generic forms.' },
      { title: 'Validation & limits', text: 'Use expected ranges and required evidence so abnormal answers can be identified at the point of execution.' },
      { title: 'Conditional workflows', text: 'Show relevant follow-up questions or requirements based on previous answers.' },
      { title: 'Due time & expiry', text: 'Track what is due, completed, missed or expired instead of reviewing forms after the fact.' },
      { title: 'Reminders & alerts', text: 'Surface due, incomplete or exception-based work through configured reminders and operational notifications.' },
      { title: 'Shared-device workflows', text: 'Support personal and shared-device execution, including QR-based access where configured for the operating model.' },
      { title: 'User traceability', text: 'Keep user, role, location and timestamp context connected to the submitted operational record.' },
      { title: 'Evidence at source', text: 'Keep photos, signatures, comments, measured values and timestamps connected to the original control.' },
      { title: 'Exception follow-through', text: 'Failed controls can remain visible for documented follow-up instead of disappearing inside a completed checklist.' }],
    workflow: [
      { title: 'Define the standard', text: 'Turn procedures and operating requirements into structured questions, limits and required evidence.' },
      { title: 'Schedule & assign', text: 'Deliver the right checklist to the right location, role, user or shift at the right time.' },
      { title: 'Execute', text: 'Frontline teams complete tasks in the app and capture the required values, photos, signatures or comments.' },
      { title: 'Identify exceptions', text: 'Failed, missed or out-of-range responses are surfaced instead of disappearing inside a completed form.' },
      { title: 'Act & verify', text: 'Assign follow-up, capture corrective evidence and verify closure with a clear operational record.' }],
    useCases: ['Opening & closing routines','Receiving inspections','Food-temperature checks','Cleaning & sanitation','Hygiene controls','Shift handover','Equipment readiness','Operational compliance checks'],
    management: ['Completion by location','Due, missed and expired activity','Failed answers and exceptions','Evidence history','User and location traceability','Documented follow-up','Repeated execution patterns'],
    connections: ['Reference Materials','Reports & Audit Trail','Smart Detectors'],
    availability: 'Included in InCheck Lite, Basic and Detect, subject to each plan’s limits.',
  },
  journal: {
    overview: 'Journal captures the operational context that sits between recurring checks. Teams can record shift notes, incidents, observations and location updates in one searchable history, keeping important context out of scattered messages and notebooks.',
    capabilities: [
      { title: 'Operational observations', text: 'Record events, observations and important context as they happen during daily operations.' },
      { title: 'Shift & location updates', text: 'Preserve handover information and location-specific notes in one structured history.' },
      { title: 'Incident records', text: 'Capture an issue or event with the context needed for later review and follow-up.' },
      { title: 'Recurring concerns', text: 'Keep repeated observations visible over time rather than losing them in isolated messages.' },
      { title: 'Narrative context', text: 'Use Journal when the operational record needs more context than a checklist answer alone.' },
      { title: 'Management history', text: 'Give managers a searchable operational history that complements checklist and other operational records.' }],
    workflow: [
      { title: 'Observe', text: 'A team member notices an event, issue, handover point or operational update that needs to be preserved.' },
      { title: 'Record', text: 'Capture the note, photo or message with the relevant user, location and time context.' },
      { title: 'Review', text: 'Managers review the entry and conversation alongside the wider operational record.' },
      { title: 'Follow up', text: 'Continue the conversation or move the issue into the appropriate operational follow-up when action is required.' }],
    useCases: ['Shift notes','Operational incidents','Location updates','Recurring observations','Manager handover','Unplanned events'],
    management: ['Chronological operating context','Location history','Recurring concerns','Shift-to-shift visibility','Supporting context for management review'],
    connections: ['Checklists & Tasks','Reports & Audit Trail'],
    availability: 'Included in InCheck Basic, InCheck Detect and relevant custom configurations. Available for Lite as an optional add-on.',
  },
  audits: {
    overview: 'Audit Management is being developed as a dedicated assurance workflow for planning audits, recording findings, capturing evidence, assigning follow-up and verifying closure. Inspection-style execution is already possible through Checklists today; this module will add a purpose-built audit layer with a clearer end-to-end record.'
    capabilities: [
      { title: 'Structured audit programs', text: 'Planned support for organized audit sections, questions and repeatable inspection structures.' },
      { title: 'Findings & evidence', text: 'Capture the finding together with notes, photos and supporting evidence.' },
      { title: 'Scoring & review', text: 'Present audit performance in a structured review format.' },
      { title: 'Follow-up linkage', text: 'Move findings into owned follow-up instead of leaving them as report observations.' },
      { title: 'Verification', text: 'Support confirmation of corrective evidence before a finding is considered closed.' },
      { title: 'Audit reporting', text: 'Create a clear audit record from inspection through final status.' }],
    workflow: [
      { title: 'Plan the audit', text: 'Define the audit template, location, scope, schedule and responsible auditor.' },
      { title: 'Inspect & capture', text: 'Complete the audit, record findings and attach notes, photos and supporting evidence at source.' },
      { title: 'Assign follow-up', text: 'Route each finding that requires action to an accountable owner with clear follow-up.' },
      { title: 'Verify closure', text: 'Review submitted evidence and confirm the response before the finding is closed.' },
      { title: 'Report & review', text: 'Preserve the completed audit, findings, evidence and closure history for management review.' }],
    useCases: ['Internal food-safety audits','Brand-standard audits','Operational inspections','Multi-location assurance reviews','Supplier / site inspections'],
    management: ['Audit status','Findings by location','Open follow-up','Evidence trail','Closure status','Audit reports'],
    connections: ['Checklists & Tasks','Reference Materials','Reports & Audit Trail'],
    availability: 'Coming soon. Inspection-style workflows can be executed with Checklists today; the dedicated Audit Management module is still in development.'
  },
  sops: {
    overview: 'Reference Materials centralizes SOPs, procedures, manuals, training content and operational guidance in one structured library. Organize material around the way teams work so current instructions are easier to find during execution instead of being scattered across shared drives, local copies and binders.',
    capabilities: [
      { title: 'Central reference library', text: 'Keep approved operational documents and guidance in one accessible location.' },
      { title: 'Role & location relevance', text: 'Organize material around the teams, departments and locations that need it.' },
      { title: 'SOP access at work', text: 'Make procedures and supporting references easier to consult during execution.' },
      { title: 'Training material', text: 'Store guides and training references alongside operational standards.' },
      { title: 'Operational consistency', text: 'Reduce dependence on outdated local copies and informal instructions.' },
      { title: 'Checklist support', text: 'Use reference material to support the standards teams are expected to execute in checklists.' }],
    workflow: [
      { title: 'Organize the library', text: 'Create folders around locations, departments, processes or topics so material stays easy to navigate.' },
      { title: 'Upload current material', text: 'Add SOPs, procedures, manuals, training documents and other operational references to the right folder.' },
      { title: 'Access at work', text: 'Teams open the relevant reference material while carrying out day-to-day operational work.' },
      { title: 'Keep guidance current', text: 'Update the centralized source as procedures, instructions or operating standards change.' }],
    useCases: ['Food-safety SOPs','Cleaning procedures','Equipment instructions','Brand standards','Training references','Emergency / operating guides'],
    management: ['Central document visibility','Consistent operating standards','Reduced local-document fragmentation','Support for onboarding and training'],
    connections: ['Checklists & Tasks','Journal','Audit Management'],
    availability: 'Included across the current plan structure.'
  },
  reports: {
    overview: 'Reports & Audit Trail turns day-to-day execution into a traceable operational record. Management can review what happened, who completed the work, when and where it occurred, what evidence was captured and how follow-up was documented—without rebuilding the story from separate files or messages.',
    capabilities: [
      { title: 'Time-stamped history', text: 'Retain the chronology of operational activity and follow-up.' },
      { title: 'Location records', text: 'Review the operating history for a specific site or group of sites.' },
      { title: 'Evidence-linked records', text: 'Keep photos, measured values, notes and relevant proof tied to the original record.' },
      { title: 'User traceability', text: 'Maintain visibility of who completed, reviewed or followed up on the work.' },
      { title: 'Exportable records', text: 'Prepare structured records for management review, audit support and internal documentation.' },
      { title: 'Closure history', text: 'Keep follow-up and verification history connected to the original exception.' }],
    workflow: [
      { title: 'Capture the record', text: 'Completed checklists, Journal entries, detector activity and documented follow-up create time-stamped operational records.' },
      { title: 'Link the evidence', text: 'Measured values, photos, notes, users, locations and timestamps stay connected to the original operating event.' },
      { title: 'Preserve the history', text: 'Records accumulate into a searchable history that keeps user, location and follow-up context traceable over time.' },
      { title: 'Review or export', text: 'Management can filter, review and export the record when operational, management or audit evidence is required.' }],
    useCases: ['Management reviews','Food-safety evidence','Internal audits','Customer / stakeholder reviews','Location history','Follow-up documentation'],
    management: ['Who / when / where traceability','Evidence history','Closed and open follow-up','Location records','Exportable operational evidence'],
    connections: ['Checklists & Tasks','Journal','Smart Detectors','Audit Management'],
    availability: 'Supports operational evidence and audit readiness across the platform. Certification and regulatory compliance remain the responsibility of the operating organization.'
  },
  'ai-intelligence': {
    overview: 'AI Data Analytics is being developed to turn InCheck 360 operational data into clearer management signals. It will help surface recurring issues, changing patterns and areas that deserve attention, while keeping the final operational decision with qualified teams.'
    capabilities: [
      { title: 'Recurring-issue detection', text: 'Identify repeated operational problems and non-conformities across records.' },
      { title: 'Trend summaries', text: 'Summarize meaningful changes and patterns across locations and periods.' },
      { title: 'Risk signals', text: 'Highlight areas that may deserve management attention based on available operational data.' },
      { title: 'Performance patterns', text: 'Help teams see where execution quality is improving or deteriorating.' },
      { title: 'Operational summaries', text: 'Turn larger volumes of structured data into easier management review.' },
      { title: 'Evidence intelligence roadmap', text: 'The roadmap includes deeper analysis of operational evidence where technically and operationally appropriate.' }],
    workflow: [
      { title: 'Build the data foundation', text: 'Checklists, Journal records, detector history and reports provide the structured operational data for analysis.' },
      { title: 'Analyze patterns', text: 'The intelligence layer reviews historical activity for recurring issues, shifts in performance and unusual patterns.' },
      { title: 'Surface insights', text: 'Management receives concise signals, summaries and priority areas that warrant closer review.' },
      { title: 'Support the decision', text: 'Qualified teams review the insight in context and decide what operational response is appropriate.' }],
    useCases: ['Recurring non-conformities','Multi-location trend review','Management summaries','Operational risk review','Performance-pattern detection'],
    management: ['Summarized patterns','Priority areas for review','Recurring issue visibility','Cross-location signals'],
    connections: ['Reports & Audit Trail','Checklists & Tasks','Smart Detectors'],
    availability: 'Coming soon. AI Data Analytics is in development and is not yet presented as a generally available production module.'
  },
};
