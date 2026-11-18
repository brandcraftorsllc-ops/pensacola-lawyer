import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { CallToAction } from "@/components/sections/CommonSections";
import { HomeApproachCarousel } from "@/components/sections/HomeApproachCarousel";
import { ApproachTimeline } from "@/components/sections/ApproachTimeline";
import { AttorneyScrollAnimations } from "@/components/sections/AttorneyScrollAnimations";
import { homeContent } from "@/data/site-content";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

type HomeServiceIconName = "order" | "vehicle" | "shield";

function HomeServiceIcon({ name }: { name: HomeServiceIconName }) {
  const paths: Record<HomeServiceIconName, string[]> = {
    order: [
      "M7 3.5h7l4.5 4.5v12.5H7z",
      "M14 3.5V8h4.5",
      "M10 12h5M10 15.5h5",
    ],
    vehicle: [
      "m4 14 1.5-5a2 2 0 0 1 1.9-1.4h9.2A2 2 0 0 1 18.5 9l1.5 5v4h-3v-2H7v2H4z",
      "M6 12h12M7.5 7.6 9 12m7.5-4.4L15 12",
      "M7.5 18v2m9-2v2",
    ],
    shield: [
      "m12 3 7 2.5v6.2c0 4.5-3 7.8-7 9.3-4-1.5-7-4.8-7-9.3V5.5z",
      "m9 12 2 2 4-4",
    ],
  };

  return (
    <svg
      aria-hidden="true"
      className="home-service-icon"
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      {paths[name].map((path) => (
        <path
          d={path}
          key={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}

export function HomePage() {
  const [featuredService, ...secondaryServices] = homeContent.additionalServices;

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

      <AttorneyScrollAnimations className="practice-reveal-scope">
        <section className="section section-alt practice-section" id="practice-areas">
          <div className="container practice-layout">
            <div className="practice-intro">
              <p className="eyebrow" data-reveal="up">
                {homeContent.practiceIntro.eyebrow}
              </p>
              <h2 data-reveal="up" data-reveal-delay="1">
                {homeContent.practiceIntro.title}
              </h2>
              <span
                className="practice-divider"
                data-reveal="line"
                data-reveal-delay="2"
                aria-hidden="true"
              />
              <p
                className="practice-intro-description"
                data-reveal="up"
                data-reveal-delay="3"
              >
                {homeContent.practiceIntro.description}
              </p>
              <Link
                className="text-link practice-intro-cta"
                data-reveal="up"
                data-reveal-delay="4"
                href="/case-evaluation"
              >
                {homeContent.practiceIntro.cta} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="practice-grid">
              {homeContent.practiceAreas.map((area, index) => (
                <article
                  className="practice-card"
                  data-reveal="up"
                  data-reveal-delay={String(index + 1)}
                  key={area.number}
                >
                  <div className="practice-card-image">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1120px) 44vw, 27vw"
                    />
                  </div>
                  <div className="practice-card-content">
                    <span className="practice-number">{area.number}</span>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <Link
                      aria-label={`Explore ${area.title} practice area`}
                      className="practice-card-link"
                      href={area.href}
                    >
                      Explore <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AttorneyScrollAnimations>

      <AttorneyScrollAnimations className="home-editorial-reveal-scope">
        <section
          className="home-office-section"
          data-parallax-section=""
          aria-labelledby="home-office-title"
        >
          <div className="home-office-image" data-reveal="image">
            <Image
              src={homeContent.office.image}
              alt={homeContent.office.imageAlt}
              fill
              sizes="100vw"
              quality={88}
              data-scroll-parallax=""
            />
          </div>
          <div className="home-office-overlay" aria-hidden="true" />
          <div className="container home-office-content">
            <p className="eyebrow" data-reveal="up">
              {homeContent.office.eyebrow}
            </p>
            <h2 id="home-office-title" data-reveal="up" data-reveal-delay="1">
              {homeContent.office.title}
            </h2>
            <p className="home-office-address" data-reveal="up" data-reveal-delay="2">
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span>{homeContent.office.address}</span>
            </p>
            <Link
              className="button button-gold"
              href={homeContent.office.href}
              data-reveal="up"
              data-reveal-delay="3"
            >
              {homeContent.office.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </AttorneyScrollAnimations>

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

      <section
        className="section section-alt approach-section"
        id="process"
        aria-labelledby="approach-title"
      >
        <div className="container approach-layout">
          <div className="approach-intro">
            <p className="eyebrow">{homeContent.approachIntro.eyebrow}</p>
            <h2 id="approach-title">{homeContent.approachIntro.title}</h2>
            <span className="approach-divider" aria-hidden="true" />
            <p>{homeContent.approachIntro.description}</p>
            <Link className="text-link" href="/case-evaluation">
              Discuss your situation <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ApproachTimeline steps={homeContent.approach} />
        </div>
      </section>

      <AttorneyScrollAnimations className="home-editorial-reveal-scope">
        <section
          className="section home-feedback-section"
          id="client-voices"
          aria-labelledby="home-feedback-title"
        >
          <div className="container home-feedback-layout">
            <div className="home-feedback-intro">
              <p className="eyebrow" data-reveal="up">
                {homeContent.testimonialIntro.eyebrow}
              </p>
              <h2 id="home-feedback-title" data-reveal="up" data-reveal-delay="1">
                {homeContent.testimonialIntro.title}
              </h2>
              <p className="home-feedback-availability" data-reveal="up" data-reveal-delay="2">
                {homeContent.testimonialIntro.description}
              </p>
              <span
                className="home-editorial-divider"
                data-reveal="line"
                data-reveal-delay="3"
                aria-hidden="true"
              />
              <Link
                className="text-link home-feedback-cta"
                href="/case-evaluation"
                data-reveal="up"
                data-reveal-delay="4"
              >
                Discuss your situation <span aria-hidden="true">→</span>
              </Link>
            </div>
            <HomeApproachCarousel items={homeContent.approachSlides} />
          </div>
        </section>

        <section
          className="section home-services-section"
          aria-labelledby="home-services-title"
        >
          <div className="container">
            <div className="home-services-heading">
              <div>
                <p className="eyebrow" data-reveal="up">
                  {homeContent.additionalServicesIntro.eyebrow}
                </p>
                <h2 id="home-services-title" data-reveal="up" data-reveal-delay="1">
                  {homeContent.additionalServicesIntro.title}
                </h2>
                <p data-reveal="up" data-reveal-delay="2">
                  {homeContent.additionalServicesIntro.description}
                </p>
              </div>
              <span
                className="home-editorial-divider"
                data-reveal="line"
                data-reveal-delay="3"
                aria-hidden="true"
              />
            </div>
            <div className="home-services-showcase">
              {featuredService ? (
                <article
                  className="home-service-card home-service-featured"
                  data-reveal="up"
                  data-reveal-delay="1"
                >
                  <div className="home-service-featured-top">
                    <span className="home-service-number">{featuredService.number}</span>
                    <span>Featured Service</span>
                  </div>
                  <div className="home-service-featured-body">
                    <div className="home-service-featured-copy">
                      <h3>{featuredService.title}</h3>
                      <p>{featuredService.description}</p>
                      <Link
                        aria-label={`Explore ${featuredService.title} service`}
                        className="home-service-link"
                        href={featuredService.href}
                      >
                        Explore Service <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="home-service-featured-art" aria-hidden="true">
                      <HomeServiceIcon name={featuredService.icon} />
                    </div>
                  </div>
                </article>
              ) : null}
              <div className="home-services-secondary">
                {secondaryServices.map((service, index) => (
                  <article
                    className="home-service-card home-service-compact"
                    data-reveal="up"
                    data-reveal-delay={String(index + 2)}
                    key={service.title}
                  >
                    <div className="home-service-card-top">
                      <span className="home-service-number">{service.number}</span>
                      <HomeServiceIcon name={service.icon} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link
                      aria-label={`Explore ${service.title} service`}
                      className="home-service-link"
                      href={service.href}
                    >
                      Explore Service <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="home-consultation-section"
          aria-labelledby="home-consultation-title"
        >
          <div className="container home-consultation-layout">
            <div>
              <p className="eyebrow" data-reveal="up">
                {homeContent.consultation.eyebrow}
              </p>
              <h2
                id="home-consultation-title"
                data-reveal="up"
                data-reveal-delay="1"
              >
                {homeContent.consultation.title}
              </h2>
            </div>
            <div className="home-consultation-copy">
              <span
                className="home-editorial-divider"
                data-reveal="line"
                data-reveal-delay="2"
                aria-hidden="true"
              />
              <p data-reveal="up" data-reveal-delay="3">
                {homeContent.consultation.description}
              </p>
              <Link
                className="button button-gold"
                href={homeContent.consultation.href}
                data-reveal="up"
                data-reveal-delay="4"
              >
                {homeContent.consultation.cta} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </AttorneyScrollAnimations>

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
