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
            eyebrow="Our Commitment"
            title="What you can expect from the office"
            description="Direct guidance, careful preparation and a plan built around your circumstances."
          />
          <TestimonialCarousel items={homeContent.testimonials} />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Matters We Handle"
            title="Experience across family law and criminal defense"
            description="Every case is reviewed on its own facts. Call the office to discuss yours."
          />
          <div className="outcome-grid">
            {resultsPage.categories.map((category) => (
              <article className="outcome-card" key={category.title}>
                <p className="eyebrow">{category.title}</p>
                <p>{category.description}</p>
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
