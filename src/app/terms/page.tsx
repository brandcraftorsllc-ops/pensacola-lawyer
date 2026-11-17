import { getPageMetadata } from "@/data/route-metadata";
import { SITE_PHONE } from "@/lib/site";

export const metadata = getPageMetadata("/terms");

export default function TermsPage() {
  return (
    <main id="main">
      <article className="section legal-page">
        <div className="container legal-content">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Use</h1>
          <p className="draft-note">
            Plain-language summary of the source terms; have the firm review and approve before
            publication.
          </p>
          <p>
            By using this website, you agree to follow its terms and applicable laws. The materials
            are provided for personal, non-commercial viewing. Do not copy, modify, distribute or
            republish them without permission.
          </p>
          <p>
            Website materials are provided as-is. The firm does not promise that information is
            accurate, complete or current, and may update or remove materials without notice.
            Information on this site is general and is not legal advice.
          </p>
          <p>
            External links are provided for convenience; their inclusion does not mean the firm
            endorses the linked site. Visitors use external sites at their own risk.
          </p>
          <p>
            The source terms state that website-related claims are governed by Florida law. The
            firm may revise its website terms; check this page for the current version.
          </p>
          <p>
            Contact the office at {SITE_PHONE} with questions about this website. These terms are a
            summary and should not replace the firm&apos;s approved legal terms.
          </p>
        </div>
      </article>
    </main>
  );
}
