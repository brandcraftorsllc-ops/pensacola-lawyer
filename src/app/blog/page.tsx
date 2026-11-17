import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { BlogBrowser } from "@/components/sections/BlogBrowser";
import { articleData } from "@/data/site-content";
import { getPageMetadata } from "@/data/route-metadata";

export const metadata = getPageMetadata("/blog");

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero
        current="Blog"
        eyebrow="Legal Insights"
        title="Notes on military divorce, family law and criminal defense"
        description="Short, practical articles on the questions clients ask most. Each is seed copy pending attorney review."
        image="/images/blog-header.png"
      />
      <section className="section section-alt">
        <div className="container">
          <p className="draft-note">Draft, replace with attorney-approved content</p>
          <BlogBrowser articles={[...articleData]} />
        </div>
      </section>
      <CallToAction
        title="Questions the articles do not answer?"
        description="General reading cannot replace advice about your own facts. Reach out for a confidential conversation."
      />
    </main>
  );
}
