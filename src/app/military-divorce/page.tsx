import { CallToAction, FaqSection, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { militaryDivorcePage } from "@/data/site-content";

export const metadata = getPageMetadata("/military-divorce");

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function MilitaryDivorcePage() {
  return (
    <main id="main">
      <PageHero
        current="Military Divorce & Family Law"
        eyebrow={militaryDivorcePage.eyebrow}
        title={militaryDivorcePage.title}
        description={militaryDivorcePage.description}
        image="/images/military-divorce-header.png"
      />
      <section className="military-note">
        <div className="container">
          <p>{militaryDivorcePage.note}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <nav className="military-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {militaryDivorcePage.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#${sectionId(section.title)}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
      <section className="section military-articles-section">
        <div className="container">
          <div className="military-articles">
            {militaryDivorcePage.sections.map((section, index) => (
              <section
                className="detail-article content-section"
                id={sectionId(section.title)}
                key={section.title}
              >
                <h2>
                  <span className="detail-number">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <ul className="content-list">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <FaqSection
        className="military-faq"
        eyebrow={militaryDivorcePage.faqIntro.eyebrow}
        title={militaryDivorcePage.faqIntro.title}
        description={militaryDivorcePage.faqIntro.description}
        items={militaryDivorcePage.faqs}
      />
      <CallToAction {...militaryDivorcePage.cta} />
    </main>
  );
}
