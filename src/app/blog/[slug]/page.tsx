import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { articleData } from "@/data/site-content";
import { getPageMetadata } from "@/data/route-metadata";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articleData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleData.find((item) => item.slug === slug);
  if (!article) return getPageMetadata("/blog");
  return getPageMetadata(`/blog/${slug}`);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articleData.find((item) => item.slug === slug);
  if (!article) notFound();

  const relatedArticles = article.related
    .map((relatedSlug) => articleData.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <main id="main">
      <PageHero
        current={article.title}
        parent={{ href: "/blog", label: "Blog" }}
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        image="/images/pensacola-bay.png"
      />
      <article className="section article-page-section">
        <div className="container article-page-container">
          <div className="article-content">
            <div className="article-toolbar">
              <Link className="text-link article-list-link" href="/blog">
                All Articles <span aria-hidden="true">→</span>
              </Link>
              <p className="draft-note">
                {article.date === "Source not verified"
                  ? "Draft — source article not located"
                  : `Published ${article.date}; legal information may be outdated`}
              </p>
            </div>
            {article.sections.map((section) => (
              <section className="content-section" key={section.title}>
                <h2>{section.title}</h2>
                {"paragraphs" in section
                  ? section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : null}
                {"bullets" in section && section.bullets ? (
                  <ul className="content-list">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
            <p className="article-disclaimer">
              This article is general information, not legal advice. Reading it does not create an
              attorney-client relationship, and every case depends on its own facts.
            </p>
          </div>
        </div>
      </article>
      {relatedArticles.length > 0 ? (
        <section className="section section-alt related-reading-section">
          <div className="container article-page-container">
            <div className="related-articles" aria-label="Related reading">
              <p className="eyebrow">Related Reading</p>
              <div className="article-grid related-grid">
                {relatedArticles.map((related) => (
                  <article className="article-card" key={related.slug}>
                    <div className="article-meta">
                      <span>{related.category}</span>
                      <span>{related.date}</span>
                    </div>
                    <h2>
                      <Link href={`/blog/${related.slug}`}>{related.listingTitle}</Link>
                    </h2>
                    <p>{related.description}</p>
                    <span className="draft-label">
                      {related.date === "Source not verified" ? "Draft" : "Insights"}
                    </span>
                    <Link className="text-link" href={`/blog/${related.slug}`}>
                      Read Article <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <CallToAction
        title="Questions about a legal matter?"
        description="Call the office to arrange a free consultation."
      />
    </main>
  );
}
