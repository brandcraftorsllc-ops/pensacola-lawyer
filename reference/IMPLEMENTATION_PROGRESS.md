# Implementation progress

## Reference extraction — complete

- [x] Crawled navigation, footer, practice-area, contact, resource and blog
  links; identified 18 direct routes.
- [x] Recaptured full-page screenshots at 1440x1000 and 390x844 for the
  reference and local implementations after scrolling to activate reveals.
- [x] Saved rendered HTML per route in `html/`, route metadata/links in
  `metadata/routes.json`, and representative computed styles at both viewport
  widths in `styles/computed-styles.json`.
- [x] Saved route copy in `pages/`, the compiled reference stylesheet, the
  original hero/portrait images and the original font files.
- [x] Tested mobile navigation, FAQ interactions, resource categories, blog
  category/search controls and case-evaluation validation without submitting
  any reference form.
- [x] Logged observed FAQ content and interaction notes in `interactions/`.

## Next.js implementation — in progress

- [x] Create App Router application, shared navigation/footer and responsive
  styling foundation.
- [x] Implement all 18 discovered routes with archived page copy and local
  assets; the separately added contempt route is tracked below.
- [x] Implement navigation, FAQ, resource filters, blog search, testimonial
  controls, case-evaluation flow and contact form.
- [x] Add server-side form validation, honeypot, process-local rate limiting
  and SMTP-backed contact API.
- [x] Add page metadata, canonical URL handling, robots and sitemap routes.
- [x] TypeScript checks, ESLint and optimized production build pass.
- [x] Ran Playwright route/interaction/API tests and inspected local desktop
  and mobile screenshots.
- [x] Latest production build, typecheck, lint and 9-test Playwright suite pass
  after the header navigation update.
- [x] Matched the homepage attorney section to the Base44 reference layout:
  widened 1280px desktop grid, aligned portrait and copy proportions, converted
  credentials to label/value rows, and restored gold/outline action buttons.
- [x] Recreated the homepage approach section's scroll-linked vertical progress
  line, step markers, and heading divider; verified scroll progress in desktop
  and mobile renders.
- [x] Audited all 18 local routes against the archived desktop and mobile
  reference captures. Corrected the largest confirmed structural mismatches:
  compact legal-page layout, integrated attorney profile, in-column military
  table of contents, and two-column related-article cards.
- [ ] Continue the route-by-route visual pass for contact, resources, blog,
  homepage and practice-area sections; compare updated desktop and mobile
  captures before calling the visual audit complete.

## Source content migration — in progress

- [x] Reviewed the source homepage, About page, divorce and family-law pages,
  military-divorce page, criminal-defense and DUI pages, injunction and
  contempt pages, blog index/articles, and terms of use.
- [x] Updated verified office information: (850) 456-5779, 4502 Twin Oaks
  Drive, Pensacola, weekday office hours, and the listed service communities.
- [x] Replaced homepage, practice-area, contact, attorney-profile, blog and
  SEO copy with concise paraphrases while keeping the existing routes and
  component structure.
- [x] Removed legacy legal deadlines, penalties and benefit guarantees from
  migrated copy where current accuracy was not verified. The source itself
  marks some pages as carried forward from the former Law Offices of Steven
  W. Bowden; his experience is not attributed to James M. Burns.
- [x] Marked reference-site FAQs for attorney review because equivalent
  answers were not available in the source materials.
- [x] Added `/motions-for-contempt` from the source site's listed service,
  linked it in the header and sitemap, and used cautious copy that avoids
  unsupported legal outcomes or former-attorney credentials.
- [x] Updated header order to Home, About Us, Practice Areas, Motions for
  Contempt and Contact Us. Desktop hover opens the practice dropdown; native
  click/keyboard and mobile behavior remain available.
- [x] Verified the navigation order, hover interaction and route in a 9-test
  desktop/mobile Playwright run.
- [ ] Obtain attorney-approved biography, bar admission, education, experience,
  portrait and testimonial/results content; these were not verified in the
  source materials reviewed.
- [ ] Obtain an approved privacy policy. The source website did not publish one
  in the materials reviewed.
- [ ] Confirm the existing email address before relying on it; it remains from
  the prior site and was not confirmed by the source.
- [ ] Re-run the visual review after copy changes, especially at mobile width.

## Known limitations

- SMTP credentials were not provided. Email delivery can be wired and its
  missing-configuration path validated, but successful delivery cannot be
  verified without an authorized SMTP account.
- The process-local contact rate limit is not shared across serverless
  instances; production deployment should also configure Vercel Firewall/WAF
  throttling for the endpoint.
- The production build reports that `metadataBase` is unset when no production
  site URL is configured; set `NEXT_PUBLIC_SITE_URL` for production social URLs.
- The base reference includes placeholder attorney biography, case results and
  testimonials. Do not replace these with unverified claims.
- Several pages on the content source explicitly carry forward legacy material
  from the former Law Offices of Steven W. Bowden. Those pages may contain
  dated legal information and require attorney review before publication.
