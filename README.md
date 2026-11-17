# Law Office of James M. Burns — website

Independent Next.js recreation of the reference website. It uses the App
Router, TypeScript, React, Tailwind CSS, locally hosted Manrope/Playfair Display
fonts, and the original downloaded image assets. No Base44 runtime, WordPress,
PHP, page builder, jQuery, Supabase or iframe is used.

## Local development

Requirements: Node.js 20.9 or later and npm.

```powershell
Copy-Item .env.example .env.local
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`. To verify the code:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run test:e2e
```

The Playwright suite starts the production build on port 3001. Run
`npm.cmd run build` before `npm.cmd run test:e2e`.

## Environment variables

Set these in `.env.local` for development and in the Vercel project settings for
production. Never commit `.env.local` or real credentials.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Public canonical origin, with no trailing slash (for example `https://www.example.com`). Used for canonical, Open Graph and sitemap URLs. `VERCEL_URL` is used when this is unset. |
| `SMTP_HOST` | Contact email | SMTP server hostname. |
| `SMTP_PORT` | Contact email | SMTP port; use 465 for implicit TLS, or a submission port such as 587 with STARTTLS. |
| `SMTP_SECURE` | Contact email | `true` for implicit TLS, `false` for STARTTLS. Defaults to implicit TLS only on port 465. |
| `SMTP_USER` | If SMTP auth is used | SMTP username. |
| `SMTP_PASS` | If SMTP auth is used | SMTP password. |
| `TO_EMAIL` | Contact email | Destination mailbox for contact and evaluation requests. |
| `FROM_EMAIL` | Contact email | Sender address authorized by the SMTP provider. |
| `FROM_NAME` | No | Display name for the sender. |
| `CONTACT_RATE_LIMIT_MAX` | No | In-process request limit; defaults to 5 submissions per window. |
| `CONTACT_RATE_LIMIT_WINDOW_MS` | No | In-process rate-limit window; defaults to 900000 ms. |

The contact API validates fields on the server, checks same-origin browser
requests, uses a honeypot, rate-limits per process, and sends plain-text email
through SMTP. It does not persist submissions. Successful delivery has not
been verified because SMTP credentials were not supplied. The in-memory rate
limit is best-effort and does not coordinate across Vercel serverless
instances; configure a Vercel Firewall/WAF rate limit for `/api/contact` before
production use.

## Routes

The implementation includes the home page, three practice areas, attorney,
results, resources, blog and six article routes, contact, case evaluation,
privacy policy and terms of use. `/robots.txt` and `/sitemap.xml` are generated
by Next.js. The sitemap and canonical metadata need a public site URL at
deployment time.

Some source content is explicitly marked as placeholder or draft, including
attorney biography facts, office hours/directions, client feedback, case results
and blog copy. Those indicators are preserved rather than replaced with
unverified claims.

## Vercel deployment

1. Push the repository to GitHub.
2. Import it in Vercel; keep the detected Next.js build and output settings.
3. Configure `NEXT_PUBLIC_SITE_URL` with the production domain.
4. Configure the SMTP variables with an authorized SMTP account and verify
   outbound mail with a test submission in a controlled environment.
5. Add the production domain in Vercel and configure its DNS as directed.
6. Configure Vercel Firewall/WAF throttling for `POST /api/contact`.

The deployment uses Next.js serverless routes and does not require persistent
local filesystem storage. The form endpoint is unavailable until valid SMTP
settings are supplied.

## Reference archive and limitations

The `/reference` folder contains extracted route copy, rendered HTML, metadata,
styles, images, fonts, interaction notes and screenshots. Some full-page
reference captures were produced through a browser screenshot wrapper that
rendered incorrectly; do not treat those files as a reliable visual-comparison
baseline until they are recaptured and checked. Hover/focus behavior that was
not observable in the reference remains unverified.
