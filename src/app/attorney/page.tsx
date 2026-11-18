import Image from "next/image";
import Link from "next/link";
import { AttorneyScrollAnimations } from "@/components/sections/AttorneyScrollAnimations";
import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { attorneyPage, homeContent } from "@/data/site-content";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";
import styles from "./attorney.module.css";

export const metadata = getPageMetadata("/attorney");

export default function AttorneyPage() {
  return (
    <main className={styles.page} id="main">
      <AttorneyScrollAnimations className={styles.animationScope}>
        <div className={styles.hero} data-reveal="hero">
          <PageHero
            current="Attorney"
            eyebrow="Attorney Profile"
            title="James M. Burns"
            description={attorneyPage.description}
            image="/images/attorney-contact-header.png"
          />
        </div>

        <section className={styles.profile} aria-labelledby="attorney-profile-heading">
          <div className={styles.profileGrid}>
            <div className={styles.profileAside}>
              <figure className={styles.portrait} data-reveal="left">
                <Image
                  src="/images/headshot-placeholder.png"
                  alt="Illustrative portrait; this is not a verified photograph of James M. Burns."
                  width={1024}
                  height={1365}
                  sizes="(max-width: 760px) 88vw, (max-width: 1100px) 42vw, 34vw"
                />
                <figcaption>
                  <span>Portrait pending</span>
                  <span>Illustrative image only</span>
                </figcaption>
              </figure>
              <div className={styles.profileIntroduction} data-reveal="up">
                <p className={styles.eyebrow}>The Attorney</p>
                <h2 id="attorney-profile-heading">James M. Burns</h2>
                <p>{homeContent.about.description}</p>
                <span className={styles.goldDivider} data-reveal="line" aria-hidden="true" />
                <p className={styles.officeLocation}>Pensacola, Florida</p>
              </div>
            </div>

            <div className={styles.editorial}>
              <p className={styles.eyebrow} data-reveal="up">
                A Closer Look
              </p>
              {attorneyPage.sections.map((section, index) => (
                <section
                  className={styles.editorialBlock}
                  data-reveal="right"
                  data-reveal-delay={String(index + 1)}
                  key={section.title}
                >
                  <span className={styles.blockNumber} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
              <div className={styles.profileAction} data-reveal="up">
                <Link className="button button-gold" href="/case-evaluation">
                  Free Consultation <span aria-hidden="true">→</span>
                </Link>
                <a href={SITE_PHONE_LINK}>Or Call {SITE_PHONE}</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.credentials} aria-labelledby="credentials-heading">
          <div className={styles.credentialsInner}>
            <div data-reveal="up">
              <p className={styles.eyebrow}>Professional Credentials</p>
              <h2 id="credentials-heading">A clear, verified profile.</h2>
            </div>
            <p className={styles.credentialsNote} data-reveal="up" data-reveal-delay="1">
              {attorneyPage.credentialNote}
            </p>
          </div>
        </section>

        <section className={styles.practice} aria-labelledby="attorney-practice-heading">
          <div className={styles.practiceInner}>
            <div className={styles.practiceHeading} data-reveal="up">
              <p className={styles.eyebrow}>Areas of Practice</p>
              <h2 id="attorney-practice-heading">Focused legal representation.</h2>
            </div>
            <div className={styles.practiceGrid}>
              {attorneyPage.practiceAreas.map((area, index) => (
                <article
                  className={styles.practiceItem}
                  data-reveal="up"
                  data-reveal-delay={String(index + 1)}
                  key={area.title}
                >
                  <div className={styles.practiceVisual}>
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 760px) 36vw, (max-width: 1100px) 28vw, 24vw"
                    />
                  </div>
                  <p className={styles.practiceNumber}>0{index + 1}</p>
                  <h3>{area.title}</h3>
                  <p className={styles.practiceDescription}>{area.description}</p>
                  <Link className={styles.practiceLink} href={area.href}>
                    Explore Practice Area <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.philosophy} aria-labelledby="philosophy-heading">
          <span className={styles.philosophyRule} data-reveal="line" aria-hidden="true" />
          <p className={styles.eyebrow} data-reveal="up">
            {attorneyPage.philosophy.eyebrow}
          </p>
          <h2 id="philosophy-heading" data-reveal="up" data-reveal-delay="1">
            {attorneyPage.philosophy.title}
          </h2>
          <p data-reveal="up" data-reveal-delay="2">
            {attorneyPage.philosophy.description}
          </p>
          <span className={styles.philosophyMark} aria-hidden="true">
            JMB
          </span>
        </section>
      </AttorneyScrollAnimations>

      <CallToAction
        title="Contact the Pensacola office."
        description="Call to arrange a free consultation and discuss your legal matter."
      />
    </main>
  );
}
