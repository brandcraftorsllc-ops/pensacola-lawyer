import { CaseEvaluationWizard } from "@/components/forms/CaseEvaluationWizard";
import { PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";

export const metadata = getPageMetadata("/case-evaluation");

export default function CaseEvaluationPage() {
  return (
    <main id="main">
      <PageHero
        current="Case Evaluation"
        eyebrow="Free Consultation"
        title="Contact the office to discuss your matter"
        description="Use this form to request a consultation. Share only information you are comfortable submitting online."
        image="/images/evaluation-header.png"
      />
      <section className="section section-alt">
        <div className="container">
          <p className="evaluation-notice">
            Please do not include confidential details until an attorney-client relationship has been
            established.
          </p>
          <CaseEvaluationWizard />
        </div>
      </section>
    </main>
  );
}
