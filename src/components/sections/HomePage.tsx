import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import {
  CallToAction,
  SectionHeading,
} from "@/components/sections/CommonSections";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { homeContent } from "@/data/site-content";

export function HomePage() {
  return (
    <main id="main">
      <section
        className="home-hero"
        aria-label="Military divorce, family law and criminal defense in Pensacola"
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
              Schedule a Confidential Consultation <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-outline" href="tel:+18502930392">
              <span aria-hidden="true">⌕</span> Call (850) 293-0392
            </a>
          </div>
          <p className="hero-note">{homeContent.promise}</p>
        </div>
        <a className="scroll-cue" href="#military-divorce" aria-label="Scroll to learn why military divorce is different">
          Scroll
        </a>
      </section>

      <section className="trust-strip" aria-label="Why clients choose JMB">
        <div className="trust-grid">
          {homeContent.trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="practice-areas">
        <div className="container">
          <SectionHeading
            eyebrow={homeContent.practiceIntro.eyebrow}
            title={homeContent.practiceIntro.title}
            description={homeContent.practiceIntro.description}
          />
          <div className="practice-grid">
            {homeContent.practiceAreas.map((area) => (
              <Link className="practice-card" href={area.href} key={area.href}>
                <span className="card-icon" aria-hidden="true">
                  {area.icon}
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul>
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="text-link">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="military-divorce">
        <div className="container">
          <SectionHeading
            eyebrow={homeContent.militaryIntro.eyebrow}
            title={homeContent.militaryIntro.title}
            description={homeContent.militaryIntro.description}
          />
          <div className="feature-grid">
            {homeContent.militaryFeatures.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="section-foot">
            <Link className="text-link" href="/military-divorce">
              Explore Military Divorce in Detail <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-grid">
          <div className="portrait-wrap">
            <Image
              src="/images/headshot-placeholder.png"
              alt="Placeholder portrait, to be replaced with a professional headshot of James Martinez Burns"
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
              <Link className="text-link" href="/attorney">
                Read the Full Profile <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" href="/case-evaluation">
                Or Schedule a Consultation <span aria-hidden="true">→</span>
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
          <div className="steps-grid approach-list">
            {homeContent.approach.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
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
              See Client Results <span aria-hidden="true">→</span>
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
