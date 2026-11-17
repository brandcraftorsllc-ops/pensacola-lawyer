import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import {
  CallToAction,
  SectionHeading,
} from "@/components/sections/CommonSections";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ApproachTimeline } from "@/components/sections/ApproachTimeline";
import { homeContent } from "@/data/site-content";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

export function HomePage() {
  return (
    <main id="main">
      <section
        className="home-hero"
        aria-label="Divorce, family law and criminal defense in Pensacola"
      >
        <Image
          className="hero-media"
          src="/images/pensacola-bay.png"
          alt="Dusk over Pensacola Bay with the naval air station silhouetted on the horizon"
          fill
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="home-hero-content">
          <p className="eyebrow">{homeContent.eyebrow}</p>
          <h1>
            {homeContent.titleFirst}
            <em>{homeContent.titleSecond}</em>
          </h1>
          <p className="hero-lead">{homeContent.lead}</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/case-evaluation">
              Free Consultation <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-outline" href={SITE_PHONE_LINK}>
              <span aria-hidden="true">⌕</span> Call {SITE_PHONE}
            </a>
          </div>
          <p className="hero-note">{homeContent.promise}</p>
        </div>
        <a className="scroll-cue" href="#practice-areas" aria-label="Scroll to explore our practice areas">
          Scroll
        </a>
      </section>

      <section className="trust-strip" aria-label="Practice areas and location">
        <div className="trust-grid">
          {homeContent.trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-alt practice-section" id="practice-areas">
        <div className="container practice-layout">
          <div className="practice-intro">
            <p className="eyebrow">{homeContent.practiceIntro.eyebrow}</p>
            <h2>{homeContent.practiceIntro.title}</h2>
            <span className="practice-divider" aria-hidden="true" />
            <p className="practice-intro-description">{homeContent.practiceIntro.description}</p>
            <Link className="text-link" href="/case-evaluation">
              {homeContent.practiceIntro.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="practice-grid">
            {homeContent.practiceAreas.map((area) => (
              <Link className="practice-card" href={area.href} key={area.number}>
                <span className="practice-number" aria-hidden="true">
                  {area.number}
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="text-link">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-grid">
          <div className="portrait-wrap">
            <Image
              src="/images/headshot-placeholder.png"
              alt="Placeholder portrait of James M. Burns"
              width={1024}
              height={1365}
              sizes="(max-width: 600px) 90vw, 40vw"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">{homeContent.about.eyebrow}</p>
            <h2>{homeContent.about.title}</h2>
            <p>{homeContent.about.description}</p>
            <p>{homeContent.about.secondary}</p>
            <div className="about-facts">
              {homeContent.about.facts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <Link className="button button-gold" href="/attorney">
                Read the Full Profile <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-outline" href="/case-evaluation">
                Free Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt approach-section" id="process">
        <div className="container">
          <SectionHeading
            eyebrow={homeContent.approachIntro.eyebrow}
            title={homeContent.approachIntro.title}
            description={homeContent.approachIntro.description}
            align="left"
          />
          <ApproachTimeline steps={homeContent.approach} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={homeContent.testimonialIntro.eyebrow}
            title={homeContent.testimonialIntro.title}
            description={homeContent.testimonialIntro.description}
          />
          <TestimonialCarousel items={homeContent.testimonials} />
          <div className="section-foot">
            <Link className="text-link" href="/results">
              Client Feedback <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">{homeContent.faqIntro.eyebrow}</p>
            <h2>{homeContent.faqIntro.title}</h2>
            <p>{homeContent.faqIntro.description}</p>
            <Link className="text-link" href="/resources">
              See All Military Legal Resources <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Accordion items={homeContent.faqs} label="Answers before you call" multiple />
        </div>
      </section>
      <CallToAction {...homeContent.cta} />
    </main>
  );
}
