import { CallToAction, PageHero, SectionHeading } from "@/components/sections/CommonSections";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getPageMetadata } from "@/data/route-metadata";
import { homeContent, resultsPage } from "@/data/site-content";

export const metadata = getPageMetadata("/results");

export default function ResultsPage() {
  return (
    <main id="main">
      <PageHero
        current="Client Feedback"
        eyebrow="Client Feedback"
        title={resultsPage.title}
        description={resultsPage.description}
        image="/images/military-divorce-header.png"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Client Feedback"
            title="No verified testimonials available"
            description="The source website reviewed for this update did not publish client testimonials."
          />
          <TestimonialCarousel items={homeContent.testimonials} />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Case Outcomes"
            title="No approved case outcomes available"
            description="No specific case outcomes were available in the source materials reviewed."
          />
          <div className="outcome-grid">
            {resultsPage.categories.map((category) => (
              <article className="outcome-card" key={category}>
                <p className="eyebrow">{category}</p>
                <p>No verified outcome supplied for publication.</p>
              </article>
            ))}
          </div>
          <p className="content-note">{resultsPage.disclaimer}</p>
        </div>
      </section>
      <CallToAction {...resultsPage.cta} />
    </main>
  );
}
