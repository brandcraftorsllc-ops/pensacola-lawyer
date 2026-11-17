import { CallToAction, FaqSection, PageHero } from "@/components/sections/CommonSections";
import { PracticeAreaGuide } from "@/components/sections/PracticeAreaGuide";
import { getPageMetadata } from "@/data/route-metadata";
import { divorcePracticeSections, familyLawPage } from "@/data/site-content";

export const metadata = getPageMetadata("/family-law");

export default function FamilyLawPage() {
  return (
    <main id="main">
      <PageHero
        current="Divorce"
        eyebrow={familyLawPage.eyebrow}
        title={familyLawPage.title}
        description={familyLawPage.description}
        image="/images/family-law-header.png"
      />
      <PracticeAreaGuide sections={divorcePracticeSections} />
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
