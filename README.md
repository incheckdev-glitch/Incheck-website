# InCheck 360 Website

Production marketing website for InCheck 360.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Custom responsive CSS
- Next.js server route for demo requests
- Cloudflare Turnstile for CAPTCHA
- Mailtrap Transactional Email API for demo-request delivery

## Main routes

- /
- /platform
- /food-safety
- /smart-detectors
- /industries
- /solutions/[slug]
- /product/[slug]
- /plans
- /partners
- /download-app
- /blogs
- /blogs/[slug]
- /about
- /contact
- /book-demo
- /privacy
- /terms
- /cookies
- /legal

Legacy /resources routes redirect to /blogs.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm install
npm run build
npm start
```

The current main branch has been successfully built on Vercel.

## Required environment variables

Copy `.env.example` to `.env.local` for local development and configure the same variables in the deployment environment.

Required for the Book a Demo form:

```text
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
MAILTRAP_API_TOKEN=
DEMO_FROM_EMAIL=noreply@incheck360.nl
DEMO_FROM_NAME=InCheck 360 Website
```

Optional:

```text
NEXT_PUBLIC_DEMO_CALENDAR_URL=
```

### Cloudflare Turnstile

Create a Turnstile widget for the production hostname(s). Add the resulting public site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and keep the secret key only in the server environment as `TURNSTILE_SECRET_KEY`.

### Mailtrap

The demo endpoint sends transactional email to `info@incheck360.nl` through Mailtrap. The sending domain must remain verified in Mailtrap. Store the Mailtrap API token only in the deployment environment.

## Demo-request flow

`/book-demo` submits to `/api/demo`.

The server route:
1. validates required fields;
2. checks the honeypot;
3. verifies the Cloudflare Turnstile token;
4. sends the request through Mailtrap to `info@incheck360.nl`;
5. sets the visitor's work email as the reply-to address.

## Vercel deployment

1. Import the GitHub repository into Vercel.
2. Use the default Next.js framework settings.
3. Add all required environment variables for Production.
4. Add them to Preview as well if preview deployments will test the demo form.
5. Redeploy after environment-variable changes.
6. Confirm the production domain is included in the Cloudflare Turnstile widget hostnames.
7. Submit one real test demo request and confirm delivery to `info@incheck360.nl`.

## Domain / SEO

Canonical metadata, robots.txt and sitemap use:

`https://incheck360.com`

If the production hostname changes, update:
- `metadataBase` in `app/layout.tsx`
- the base URL in `app/sitemap.ts`
- the sitemap URL in `app/robots.ts`

## Deployment note

A `netlify.toml` file remains in the repository for the current Netlify preview deployment. It is not required by Vercel and can be removed once the Netlify preview is retired.

## Handoff checks

Before production launch:

- run `npm run build`;
- confirm all production environment variables are present;
- verify Turnstile on the production hostname;
- test Mailtrap delivery and Reply-To behavior;
- test navigation and the Book a Demo flow on desktop and mobile;
- confirm the final production domain resolves correctly;
- submit `https://incheck360.com/sitemap.xml` to Google Search Console after launch.
