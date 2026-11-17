import Image from "next/image";
import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { attorneyPage } from "@/data/site-content";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";
import Link from "next/link";

export const metadata = getPageMetadata("/attorney");

export default function AttorneyPage() {
  return (
    <main id="main">
      <PageHero
        current="Attorney"
        eyebrow={attorneyPage.eyebrow}
        title={attorneyPage.title}
        description={attorneyPage.description}
        image="/images/attorney-contact-header.png"
      />
      <section className="section section-alt attorney-profile-section">
        <div className="container attorney-content-grid">
          <div className="attorney-profile">
            <div className="attorney-image">
              <Image
                src="/images/headshot-placeholder.png"
                alt="Placeholder portrait for the Law Office of James M. Burns"
                width={1024}
                height={1365}
                sizes="(max-width: 700px) 90vw, 38vw"
              />
              <p className="draft-note">Headshot placeholder — replace with a professional portrait</p>
            </div>
            <div className="attorney-facts">
              {attorneyPage.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="eyebrow">{fact.label}</span>
                  <p>{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="prose-content attorney-prose">
            {attorneyPage.sections.map((section) => (
              <section className="content-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <div className="attorney-profile-actions">
              <Link className="button button-gold" href="/case-evaluation">
                Free Consultation
              </Link>
              <a href={SITE_PHONE_LINK}>Or Call {SITE_PHONE}</a>
            </div>
          </div>
        </div>
      </section>
      <CallToAction
        title="Contact the Pensacola office."
        description="Call to arrange a free consultation and discuss your legal matter."
      />
    </main>
  );
}
