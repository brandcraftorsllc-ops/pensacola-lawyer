import { PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata = getPageMetadata("/terms");

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        current="Terms of Use"
        eyebrow="Legal"
        title="Terms of Use"
        image="/images/pensacola-bay.png"
      />
      <article className="section">
        <div className="container legal-content">
          <p className="draft-note">Placeholder — replace with the firm&apos;s full terms of use.</p>
          <p>
            The information published on this website is general and is not legal advice. Reading
            the site, calling the office or submitting a form does not create an attorney-client
            relationship. A relationship is formed only by a signed written engagement.
          </p>
          <p>
            The information on this website is for general informational purposes only and does not
            constitute legal advice. Contacting this firm does not create an attorney-client
            relationship. Past results do not guarantee future outcomes. Attorney advertising.
          </p>
          <p>
            For questions about this website, contact{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> or {SITE_PHONE}.
          </p>
        </div>
      </article>
    </main>
  );
}
