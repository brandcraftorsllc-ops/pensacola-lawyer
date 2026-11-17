import { Accordion } from "@/components/ui/Accordion";
import { CallToAction, FaqSection, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { familyLawPage, familyServiceAccordionItems } from "@/data/site-content";

export const metadata = getPageMetadata("/family-law");

export default function FamilyLawPage() {
  return (
    <main id="main">
      <PageHero
        current="Civilian Family Law & Child Custody"
        eyebrow={familyLawPage.eyebrow}
        title={familyLawPage.title}
        description={familyLawPage.description}
        image="/images/family-law-header.png"
      />
      <section className="section section-alt family-services">
        <div className="container">
          <Accordion
            className="service-accordion-grid"
            items={familyServiceAccordionItems}
            label="Family law services"
            multiple
          />
        </div>
      </section>
      <FaqSection
        eyebrow={familyLawPage.faqIntro.eyebrow}
        title={familyLawPage.faqIntro.title}
        description={familyLawPage.faqIntro.description}
        items={familyLawPage.faqs}
      />
      <CallToAction {...familyLawPage.cta} />
    </main>
  );
}
