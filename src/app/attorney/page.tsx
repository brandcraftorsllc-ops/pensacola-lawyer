import Image from "next/image";
import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { attorneyPage } from "@/data/site-content";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_LINK, SITE_EMAIL_LINK } from "@/lib/site";

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
      <section className="section section-alt">
        <div className="container attorney-profile">
          <div className="attorney-image">
            <Image
              src="/images/headshot-placeholder.png"
              alt="Placeholder portrait, to be replaced with a professional portrait of James Martinez Burns"
              width={1024}
              height={1365}
              sizes="(max-width: 700px) 90vw, 42vw"
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
      </section>
      <section className="section">
        <div className="container prose-content">
          {attorneyPage.sections.map((section) => (
            <section className="content-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </section>
      <section className="attorney-contact section-alt">
        <div className="container attorney-contact-inner">
          <div>
            <p className="eyebrow">Speak with the attorney directly.</p>
            <h2>Consultations are confidential.</h2>
            <p>The office will explain what to bring and how the process works.</p>
          </div>
          <div className="contact-links">
            <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
            <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
          </div>
        </div>
      </section>
      <CallToAction
        title="Schedule a confidential consultation"
        description="A clear conversation about your circumstances is the first step."
      />
    </main>
  );
}
