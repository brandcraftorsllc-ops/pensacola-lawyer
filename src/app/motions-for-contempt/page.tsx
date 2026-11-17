import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { motionsForContemptPage } from "@/data/site-content";

export const metadata = getPageMetadata("/motions-for-contempt");

export default function MotionsForContemptPage() {
  return (
    <main id="main">
      <PageHero
        current="Motions for Contempt"
        eyebrow={motionsForContemptPage.eyebrow}
        title={motionsForContemptPage.title}
        description={motionsForContemptPage.description}
        image="/images/family-law-header.png"
      />
      <section className="section section-alt">
        <div className="container prose-content">
          {motionsForContemptPage.sections.map((section) => (
            <section className="content-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? (
                <ul className="content-list">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </section>
      <CallToAction {...motionsForContemptPage.cta} />
    </main>
  );
}
