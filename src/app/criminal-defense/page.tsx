import { CallToAction, PageHero, SectionHeading } from "@/components/sections/CommonSections";
import { PracticeAreaGuide } from "@/components/sections/PracticeAreaGuide";
import { getPageMetadata } from "@/data/route-metadata";
import { criminalDefensePage } from "@/data/site-content";

export const metadata = getPageMetadata("/criminal-defense");

export default function CriminalDefensePage() {
  return (
    <main id="main">
      <PageHero
        current="Criminal Defense"
        eyebrow={criminalDefensePage.eyebrow}
        title={criminalDefensePage.title}
        description={criminalDefensePage.description}
        image="/images/criminal-defense-header.png"
      />
      <PracticeAreaGuide sections={criminalDefensePage.sections} />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={criminalDefensePage.stepsIntro.eyebrow}
            title={criminalDefensePage.stepsIntro.title}
            description={criminalDefensePage.stepsIntro.description}
            align="left"
          />
          <div className="steps-grid criminal-steps">
            {criminalDefensePage.steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <p className="content-note">{criminalDefensePage.stepsNote}</p>
        </div>
      </section>
      <CallToAction {...criminalDefensePage.cta} />
    </main>
  );
}
