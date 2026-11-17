import { PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata = getPageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        current="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        image="/images/pensacola-bay.png"
      />
      <article className="section">
        <div className="container legal-content">
          <p className="draft-note">Placeholder — replace with the firm&apos;s full privacy policy.</p>
          <p>
            Information submitted through the contact form or the case evaluation portal is used
            only to respond to your inquiry and, where a matter is opened, to provide legal
            services. It is not sold, and it is not shared for marketing purposes.
          </p>
          <p>
            Please do not send sensitive documents or detailed case information through this
            website. Once an attorney-client relationship is established, the office will provide a
            secure way to exchange documents.
          </p>
          <p>
            Questions about how your information is handled can be directed to{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> or {SITE_PHONE}.
          </p>
        </div>
      </article>
    </main>
  );
}
