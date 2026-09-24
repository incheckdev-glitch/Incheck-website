import { NextResponse } from 'next/server';

const RECIPIENT = 'info@incheck360.nl';

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const company = clean(body.company, 160);
    const locations = clean(body.locations, 20);
    const website = clean(body.website, 200);
    const captchaToken = clean(body.captchaToken, 4096);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !company || !locations || !captchaToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.DEMO_FROM_EMAIL || 'InCheck 360 Website <noreply@incheck360.nl>';

    if (!turnstileSecret || !resendApiKey) {
      console.error('Demo form server configuration is incomplete.');
      return NextResponse.json({ error: 'Form service is not configured.' }, { status: 503 });
    }

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: captchaToken,
      }),
      cache: 'no-store',
    });

    const verification = await verifyResponse.json() as { success?: boolean };

    if (!verification.success) {
      return NextResponse.json({ error: 'CAPTCHA verification failed.' }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeLocations = escapeHtml(locations);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [RECIPIENT],
        reply_to: email,
        subject: `InCheck 360 demo request — ${company}`,
        html: `
          <div style="font-family:Arial,sans-serif;color:#102a43;line-height:1.6">
            <h2 style="margin:0 0 18px">New InCheck 360 demo request</h2>
            <table style="border-collapse:collapse;width:100%;max-width:640px">
              <tr><td style="padding:8px 0;font-weight:700">Name</td><td style="padding:8px 0">${safeName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Work email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Company</td><td style="padding:8px 0">${safeCompany}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Number of locations</td><td style="padding:8px 0">${safeLocations}</td></tr>
            </table>
            <p style="margin-top:22px;color:#60758a">Submitted through the InCheck 360 Book a Demo page.</p>
          </div>
        `,
        text: [
          'New InCheck 360 demo request',
          '',
          `Name: ${name}`,
          `Work email: ${email}`,
          `Company: ${company}`,
          `Number of locations: ${locations}`,
          '',
          'Submitted through the InCheck 360 Book a Demo page.',
        ].join('\n'),
      }),
      cache: 'no-store',
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend demo email failed:', errorText);
      return NextResponse.json({ error: 'Email delivery failed.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Demo form submission failed:', error);
    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}
