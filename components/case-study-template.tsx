import Link from 'next/link';

type CaseStudyField = {
  label: string;
  value?: string | string[];
};

export function CaseStudyTemplate({
  status,
  title,
  result,
  fields,
}: {
  status: string;
  title: string;
  result?: string;
  fields: CaseStudyField[];
}) {
  return (
    <section className="content-section case-study-section">
      <div className="shell">
        <div className="case-study-status">{status}</div>
        <div className="case-study-head">
          <div>
            <span className="eyebrow">CASE STUDY</span>
            <h1>{title}</h1>
          </div>
          {result && <div className="case-study-result"><strong>{result}</strong><span>Published headline result</span></div>}
        </div>
        <div className="case-study-grid">
          {fields.map((field) => (
            <div className="case-study-field" key={field.label}>
              <small>{field.label}</small>
              {Array.isArray(field.value) ? (
                <ul>{field.value.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>{field.value || 'To be published after customer approval.'}</p>
              )}
            </div>
          ))}
        </div>
        <div className="case-study-note">
          <strong>Publication note</strong>
          <p>This page is structured for an approved customer case study. Customer identity, baseline data, sample size, timeline and quotations are intentionally not invented or displayed until they are approved for publication.</p>
        </div>
        <Link className="button primary" href="/book-demo">Book a Demo</Link>
      </div>
    </section>
  );
}
