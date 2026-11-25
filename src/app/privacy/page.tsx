import { getPageMetadata } from "@/data/route-metadata";
import { SITE_PHONE } from "@/lib/site";

export const metadata = getPageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <main id="main">
      <article className="section legal-page">
        <div className="container legal-content">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            When you contact the Law Office of James M. Burns through this website, we collect the
            information you choose to provide, such as your name, phone number, email address and a
            brief description of your matter. We use it only to respond to your inquiry and to
            follow up about a possible consultation.
          </p>
          <p>
            We do not sell your information. We share it only as needed to respond to you or when
            required by law.
          </p>
          <p>
            Contacting the office through this website does not create an attorney-client
            relationship. Please do not send confidential or sensitive details until an
            attorney-client relationship has been established.
          </p>
          <p>
            Questions about this policy? Call the office at {SITE_PHONE}.
          </p>
        </div>
      </article>
    </main>
  );
}
