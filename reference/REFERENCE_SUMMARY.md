# Reference extraction summary

Source: <https://jmb-legal-shield.base44.app/>

## Discovered routes

18 routes were reached from the primary navigation, footer, practice-area cards,
resource links, and blog listing:

- `/`
- `/military-divorce`
- `/family-law`
- `/criminal-defense`
- `/attorney`
- `/results`
- `/resources`
- `/blog`
- `/blog/residency-in-a-florida-military-divorce`
- `/blog/custody-rights-for-deployed-parents`
- `/blog/military-retirement-benefits-20-20-20`
- `/blog/when-stalking-is-a-misdemeanor-or-felony`
- `/blog/what-to-do-after-a-dui-arrest-in-florida`
- `/blog/how-social-media-can-affect-a-divorce`
- `/contact`
- `/case-evaluation`
- `/privacy`
- `/terms`

The route-specific page copy is stored in `pages/`, rendered HTML in `html/`,
page title/metadata/link records in `metadata/routes.json`, and computed
desktop/mobile styles in `styles/computed-styles.json`.

## Visual system observed

- Fonts: Manrope (300–700) and Playfair Display (400–600, with italic 400).
- Primary background: `rgb(10, 22, 41)`; alternate section background:
  `rgb(18, 27, 43)`.
- Accent: `rgb(194, 158, 97)`; primary text: `rgb(244, 240, 230)`.
- The desktop header is fixed and approximately 81px high.
- At 1440px the homepage hero is 1000px tall; its headline is about 73.6px.
- At 390px the homepage hero is about 900px tall; the headline is about 41.6px.
- The mobile site has a fixed bottom Call Now / Consultation action bar.
- The hero background is the original dusk-over-Pensacola-Bay image in
  `images/pensacola-bay.png`. The original portrait asset is preserved in
  `images/headshot-placeholder.png`; the source alt text explicitly labels it
  as a placeholder.
- The extracted source stylesheet, Google Fonts CSS and downloaded font files
  are preserved in `styles/` and `fonts/`.

Full-page desktop and mobile JPEG captures for every discovered route are in
`screenshots/desktop/` and `screenshots/mobile/`.

## Content and data gaps found on the reference

The site itself contains explicit placeholder copy. In particular, attorney
biographical details, office hours, directions, verified testimonials and
case outcomes are marked as pending or placeholders. These are preserved
verbatim in the page records and should not be replaced with invented facts.
The blog listing labels its copy as draft pending attorney review.

No separate, linked detail routes were exposed for the three practice areas;
their visible nav/card routes are the corresponding pages above. The contact
page has a contact form. The case-evaluation route is a multi-step intake flow.

## Extraction limits

The browser exposed rendered HTML, metadata, computed styles for representative
elements, link destinations, and page states at 1440px and 390px. Pointer-only
hover and keyboard behavior were not exhaustively tested for every element;
focus/hover refinements not evident in the rendered source are recorded as
unverified rather than inferred.
