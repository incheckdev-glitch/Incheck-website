'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Icon } from './icon';

type FormState = {
  name: string;
  email: string;
  company: string;
  locations: string;
  interest: string;
  message: string;
};

const initial: FormState = {
  name: '',
  email: '',
  company: '',
  locations: '',
  interest: 'Food safety & operations',
  message: '',
};

export function DemoForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);

  const ready = useMemo(
    () => Boolean(form.name.trim() && form.email.trim() && form.company.trim()),
    [form],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`InCheck 360 demo request — ${form.company}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Locations: ${form.locations || 'Not specified'}`,
        `Primary interest: ${form.interest}`,
        '',
        form.message || 'Please contact me to arrange an InCheck 360 demo.',
      ].join('\n'),
    );
    window.location.href = `mailto:info@incheck360.nl?subject=${subject}&body=${body}`;
  }

  return (
    <div className="demo-form-shell">
      <div className="demo-progress" aria-label="Demo request progress">
        <span className={step >= 1 ? 'active' : ''}>1</span>
        <i />
        <span className={step >= 2 ? 'active' : ''}>2</span>
      </div>

      <form className="demo-form" onSubmit={submit}>
        {step === 1 ? (
          <div className="demo-step">
            <span className="eyebrow">ABOUT YOU</span>
            <h2>Start with your operation.</h2>
            <div className="contact-form">
              <label className="full">Name
                <input value={form.name} onChange={(e) => update('name', e.target.value)} required />
              </label>
              <label>Work email
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
              </label>
              <label>Company
                <input value={form.company} onChange={(e) => update('company', e.target.value)} required />
              </label>
              <label className="full">Number of locations
                <input value={form.locations} onChange={(e) => update('locations', e.target.value)} placeholder="e.g. 12" />
              </label>
            </div>
            <button className="button primary large" type="button" disabled={!ready} onClick={() => setStep(2)}>
              Continue <Icon name="arrow" size={18} />
            </button>
          </div>
        ) : (
          <div className="demo-step">
            <span className="eyebrow">WHAT MATTERS MOST</span>
            <h2>Show us where to focus the demo.</h2>
            <div className="contact-form">
              <label className="full">Primary interest
                <select value={form.interest} onChange={(e) => update('interest', e.target.value)}>
                  <option>Food safety & operations</option>
                  <option>Digital checklists & audits</option>
                  <option>Corrective actions & verification</option>
                  <option>Smart detectors & temperature monitoring</option>
                  <option>Multi-location dashboards & reporting</option>
                  <option>Integrations</option>
                </select>
              </label>
              <label className="full">Anything we should know?
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your current process, pain points or what you want to improve."
                />
              </label>
            </div>
            <div className="demo-actions">
              <button className="button ghost" type="button" onClick={() => setStep(1)}>Back</button>
              <button className="button primary large" type="submit">Prepare demo request <Icon name="arrow" size={18} /></button>
            </div>
            <p className="demo-note">Submitting opens your email application with the request pre-filled so you can review it before sending.</p>
          </div>
        )}
      </form>
    </div>
  );
}
