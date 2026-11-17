import { CallToAction, PageHero, SectionHeading } from "@/components/sections/CommonSections";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { getPageMetadata } from "@/data/route-metadata";
import { homeContent, resultsPage } from "@/data/site-content";

export const metadata = getPageMetadata("/results");

export default function ResultsPage() {
  return (
    <main id="main">
      <PageHero
        current="Results"
        eyebrow="Client Results"
        title={resultsPage.title}
        description={resultsPage.description}
        image="/images/military-divorce-header.png"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="In the words of clients"
            description="Placeholder, replace with verified client feedback and approved case results"
          />
          <TestimonialCarousel items={homeContent.testimonials} />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Case Outcomes"
            title="Approved results only"
            description="Placeholder, replace with verified client feedback and approved case results"
          />
          <div className="outcome-grid">
            {resultsPage.categories.map((category) => (
              <article className="outcome-card" key={category}>
                <p className="eyebrow">{category}</p>
                <p>Placeholder — outcome summary</p>
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
