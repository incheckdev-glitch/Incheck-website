import type { Metadata } from 'next';
import { CaseStudyTemplate } from '@/components/case-study-template';

export const metadata: Metadata = {
  title: 'Checklist Violation Reduction — Case Study',
  description: 'Case study framework for the published InCheck 360 headline result of up to 72% fewer checklist violations.',
  robots: { index: false, follow: true },
};

export default function ChecklistViolationCaseStudyPage() {
  return (
    <CaseStudyTemplate
      status="Publication in preparation"
      title="From recurring checklist violations to structured follow-through"
      result="Up to 72% fewer checklist violations"
      fields={[
        { label: 'Customer / sector' },
        { label: 'Challenge' },
        { label: 'InCheck 360 implementation' },
        { label: 'Modules used' },
        { label: 'Before' },
        { label: 'After' },
        { label: 'Measured result', value: 'Up to 72% fewer checklist violations, based on the previously published InCheck 360 headline result.' },
        { label: 'Timeline' },
        { label: 'Customer quote' },
      ]}
    />
  );
}
