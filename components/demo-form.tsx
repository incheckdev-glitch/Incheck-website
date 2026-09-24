'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from './icon';

type FormState = {
  name: string;
  email: string;
  company: string;
  locations: string;
  website: string;
};

type SubmitState = 'idle' | 'submitting' | 'sent' | 'error';

declare global {
  interface Window {
    turnstile?: {
      render: (
        target: HTMLElement,
        options: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const initial: FormState = { name: '', email: '', company: '', locations: '', website: '' };

export function DemoForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<SubmitState>('idle');
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const calendarUrl = process.env.NEXT_PUBLIC_DEMO_CALENDAR_URL;

  useEffect(() => {
    if (!siteKey || !captchaRef.current) return;

    const renderCaptcha = () => {
      if (!window.turnstile || !captchaRef.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(captchaRef.current, {
        sitekey: siteKey,
        theme: 'light',
        callback: (token) => setCaptchaToken(token),
        'expired-callback': () => setCaptchaToken(''),
        'error-callback': () => setCaptchaToken(''),
      });
    };

    if (window.turnstile) {
      renderCaptcha();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-incheck-turnstile]');
    if (existing) {
      existing.addEventListener('load', renderCaptcha, { once: true });
      return () => existing.removeEventListener('load', renderCaptcha);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.dataset.incheckTurnstile = 'true';
    script.addEventListener('load', renderCaptcha, { once: true });
    document.head.appendChild(script);

    return () => script.removeEventListener('load', renderCaptcha);
  }, [siteKey]);

  const ready = useMemo(
    () => Boolean(
      form.name.trim() &&
      form.email.trim() &&
      form.company.trim() &&
      form.locations.trim() &&
      captchaToken &&
      siteKey
    ),
    [form, captchaToken, siteKey],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || status === 'submitting') return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('sent');
      setForm(initial);
      setCaptchaToken('');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
    } catch {
      setStatus('error');
      setCaptchaToken('');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
    }
  }

  if (status === 'sent') {
    return (
      <div className="demo-form-shell demo-success" role="status">
        <span className="demo-success-icon"><Icon name="check" size={26}/></span>
        <span className="eyebrow">REQUEST RECEIVED</span>
        <h2>Thank you. Your request has been received.</h2>
        <p>Your demo request was sent directly to our team at info@incheck360.nl. We will contact you to arrange a suitable meeting time.</p>
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
              <input autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} maxLength={120} required />
            </label>
            <label>Work email
              <input autoComplete="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} maxLength={180} required />
            </label>
            <label>Company
              <input autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} maxLength={160} required />
            </label>
            <label className="full">Number of locations
              <input inputMode="numeric" value={form.locations} onChange={(e) => update('locations', e.target.value)} placeholder="e.g. 12" maxLength={20} required />
            </label>

            <label className="demo-honeypot" aria-hidden="true">
              Website
              <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
            </label>
          </div>

          <div className="demo-captcha">
            {siteKey ? (
              <div ref={captchaRef} />
            ) : (
              <p className="demo-note error">Demo verification is being configured. Please email info@incheck360.nl in the meantime.</p>
            )}
          </div>

          <button className="button primary large" type="submit" disabled={!ready || status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request Demo'} {status !== 'submitting' && <Icon name="arrow" size={18}/>}
          </button>

          <p className="demo-note">Protected by CAPTCHA. Your request is sent directly to info@incheck360.nl.</p>
          {status === 'error' && <p className="demo-note error" role="alert">We could not send the request. Please try again or email info@incheck360.nl directly.</p>}
        </div>
      </form>
    </div>
  );
}
