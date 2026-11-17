import { PracticeAreaIllustration } from "@/components/sections/PracticeAreaIllustration";
import type { PracticeAreaVisual } from "@/components/sections/PracticeAreaIllustration";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export interface PracticeAreaSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  visual: PracticeAreaVisual;
}

export function PracticeAreaGuide({ sections }: { sections: readonly PracticeAreaSection[] }) {
  return (
    <section className="section section-alt military-reading-section practice-area-reading">
      <div className="container military-content practice-area-layout">
        <nav className="military-toc practice-area-toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="military-sections practice-area-sections">
          {sections.map((section, index) => (
            <RevealOnScroll className="practice-area-reveal" key={section.id}>
              <section
                className="detail-article content-section practice-area-topic"
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
              >
                <div className="practice-area-copy">
                  <h2>
                    <span className="detail-number">{String(index + 1).padStart(2, "0")}</span>
                    <span id={`${section.id}-heading`}>{section.title}</span>
                  </h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets?.length ? (
                    <ul className="content-list">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                </div>
                <PracticeAreaIllustration visual={section.visual} />
              </section>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
