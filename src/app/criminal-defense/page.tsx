import Link from "next/link";
import { CallToAction, PageHero, SectionHeading } from "@/components/sections/CommonSections";
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
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow={criminalDefensePage.servicesIntro.eyebrow}
            title={criminalDefensePage.servicesIntro.title}
            description={criminalDefensePage.servicesIntro.description}
          />
          <div className="criminal-grid">
            {criminalDefensePage.services.map((service) => (
              <article className="criminal-card" key={service.title}>
                <h2>{service.title}</h2>
                {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <Link className="text-link" href="/case-evaluation">
                  Discuss Your Case <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
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
