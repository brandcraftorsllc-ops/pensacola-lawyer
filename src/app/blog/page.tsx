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
        eyebrow="Our Blog"
        title="Legal insights from the Pensacola office"
        description="Articles on military family matters, divorce and criminal defense from the Law Office of James M. Burns."
        image="/images/blog-header.png"
      />
      <section className="section section-alt">
        <div className="container">
          <p className="draft-note">
            Some source articles contain legacy legal information. Review each article&apos;s notice
            and confirm current law before relying on it.
          </p>
          <BlogBrowser articles={[...articleData]} />
        </div>
      </section>
      <CallToAction
        title="Questions about a legal matter?"
        description="Call the office to arrange a free consultation."
      />
    </main>
  );
}
