'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Icon } from './icon';

type FormState = {
  name: string;
  email: string;
  company: string;
  locations: string;
};

type SubmitState = 'idle' | 'submitting' | 'sent' | 'email' | 'error';

const initial: FormState = { name: '', email: '', company: '', locations: '' };

export function DemoForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<SubmitState>('idle');
  const endpoint = process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT;
  const calendarUrl = process.env.NEXT_PUBLIC_DEMO_CALENDAR_URL;

  const ready = useMemo(
    () => Boolean(form.name.trim() && form.email.trim() && form.company.trim() && form.locations.trim()),
    [form],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || status === 'submitting') return;

    if (!endpoint) {
      const subject = encodeURIComponent(`InCheck 360 demo request — ${form.company}`);
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Work email: ${form.email}`,
          `Company: ${form.company}`,
          `Number of locations: ${form.locations}`,
          '',
          'Please contact me to arrange an InCheck 360 demo.',
        ].join('\n'),
      );
      window.location.href = `mailto:info@incheck360.nl?subject=${subject}&body=${body}`;
      setStatus('email');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="demo-form-shell demo-success" role="status">
        <span className="demo-success-icon"><Icon name="check" size={26}/></span>
        <span className="eyebrow">REQUEST RECEIVED</span>
        <h2>Thank you. Your request has been received.</h2>
        <p>Our team will review the information and contact you to arrange a suitable meeting time.</p>
        {calendarUrl && (
          <a className="button primary" href={calendarUrl} target="_blank" rel="noreferrer">
            Choose a meeting time <Icon name="arrow" size={16}/>
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="demo-form-shell">
      <form className="demo-form" onSubmit={submit}>
        <div className="demo-step">
          <span className="eyebrow">REQUEST A DEMO</span>
          <h2>Tell us about your operation.</h2>
          <p className="demo-form-intro">Four details are enough to start. We will use them to focus the conversation on the workflows that matter to you.</p>
          <div className="contact-form">
            <label className="full">Name
              <input autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
            </label>
            <label>Work email
              <input autoComplete="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
            </label>
            <label>Company
              <input autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} required />
            </label>
            <label className="full">Number of locations
              <input inputMode="numeric" value={form.locations} onChange={(e) => update('locations', e.target.value)} placeholder="e.g. 12" required />
            </label>
          </div>
          <button className="button primary large" type="submit" disabled={!ready || status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request Demo'} {status !== 'submitting' && <Icon name="arrow" size={18}/>}
          </button>
          {status === 'email' && <p className="demo-note" role="status">Your email application has opened with the request prepared. Send the email to complete your request.</p>}
          {status === 'error' && <p className="demo-note error" role="alert">We could not send the request. Please email info@incheck360.nl and we will arrange the demo directly.</p>}
          {!endpoint && status === 'idle' && <p className="demo-note">Submitting prepares an email to info@incheck360.nl. A direct form endpoint can be enabled later without changing this page.</p>}
        </div>
      </form>
    </div>
  );
}
