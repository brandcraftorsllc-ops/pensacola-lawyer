import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { ResourcesBrowser } from "@/components/sections/ResourcesBrowser";
import { resourceCategories, resourceFaqs } from "@/data/faq";
import { getPageMetadata } from "@/data/route-metadata";

export const metadata = getPageMetadata("/resources");

export default function ResourcesPage() {
  return (
    <main id="main">
      <PageHero
        current="Resources"
        eyebrow="Military Legal Resources"
        title="Answers for service members and spouses"
        description="Practical answers grouped by topic. This is general information, not legal advice about your case, and rules change."
        image="/images/pensacola-bay.png"
      />
      <section className="section section-alt">
        <div className="container">
          <p className="draft-note">
            These FAQs were retained from the existing reference site because equivalent answers
            were not available in the source materials. An attorney should review them before use.
          </p>
          <div className="resource-heading">
            <div>
              <p className="eyebrow">Questions &amp; Answers</p>
              <h2>16 questions, grouped by topic</h2>
              <p>Choose a category to narrow the list. The answers are general information only.</p>
            </div>
          </div>
          <ResourcesBrowser categories={resourceCategories} resources={resourceFaqs} />
        </div>
      </section>
      <CallToAction
        title="Questions about a legal matter?"
        description="Call the office to arrange a free consultation."
      />
    </main>
  );
}
