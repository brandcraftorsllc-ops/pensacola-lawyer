import { getPageMetadata } from "@/data/route-metadata";

export const metadata = getPageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <main id="main">
      <article className="section legal-page">
        <div className="container legal-content">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            <strong>Review required:</strong> The source website did not publish a privacy policy
            in the materials reviewed for this update. This page does not describe the firm&apos;s
            data collection, retention, security or disclosure practices.
          </p>
          <p>
            The firm should approve a complete privacy policy before this website collects
            information through its forms. Do not submit sensitive or confidential details through
            this website.
          </p>
        </div>
      </article>
    </main>
  );
}
