"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PracticeAreaIllustration } from "@/components/sections/PracticeAreaIllustration";
import type { PracticeAreaVisual } from "@/components/sections/PracticeAreaIllustration";

export interface PracticeAreaSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  visual: PracticeAreaVisual;
}

export function PracticeAreaGuide({ sections }: { sections: readonly PracticeAreaSection[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const activeSection = sections[activeIndex] ?? sections[0];

  useEffect(() => {
    const navigation = rootRef.current?.querySelector<HTMLElement>(".practice-area-toc");
    const activeLink = navigation?.querySelector<HTMLAnchorElement>(
      'a[aria-current="location"]',
    );
    if (!navigation || !activeLink) return;

    const horizontalRail = window.matchMedia("(max-width: 1120px)").matches;
    const scrollContainer = horizontalRail
      ? navigation.querySelector<HTMLOListElement>("ol")
      : navigation;
    if (!scrollContainer) return;

    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (horizontalRail) {
      if (linkRect.left < containerRect.left || linkRect.right > containerRect.right) {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + linkRect.left - containerRect.left - 12,
          behavior,
        });
      }
    } else if (linkRect.top < containerRect.top || linkRect.bottom > containerRect.bottom) {
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + linkRect.top - containerRect.top - 12,
        behavior,
      });
    }
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || sections.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia(root);
    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        noPreference: "(prefers-reduced-motion: no-preference)",
      },
      ({ conditions }) => {
        const topics = Array.from(root.querySelectorAll<HTMLElement>("[data-practice-topic]"));
        const reducedMotion = conditions?.reduceMotion === true;

        progressRef.current?.style.setProperty("--practice-progress", "0");

        const syncActiveTopic = () => {
          const activationLine = window.innerHeight * 0.52;
          let nextActiveIndex = 0;

          topics.forEach((topic, index) => {
            if (topic.getBoundingClientRect().top <= activationLine) {
              nextActiveIndex = index;
            }
          });

          if (activeIndexRef.current !== nextActiveIndex) {
            activeIndexRef.current = nextActiveIndex;
            setActiveIndex(nextActiveIndex);
          }
        };

        ScrollTrigger.create({
          trigger: root,
          start: "top top+=140",
          end: "bottom bottom",
          onUpdate: ({ progress }) => {
            progressRef.current?.style.setProperty("--practice-progress", `${progress}`);
            syncActiveTopic();
          },
          onRefresh: ({ progress }) => {
            progressRef.current?.style.setProperty("--practice-progress", `${progress}`);
            syncActiveTopic();
          },
        });

        topics.forEach((topic) => {
          if (reducedMotion) return;

          const heading = topic.querySelector<HTMLElement>(".practice-story-topic-heading");
          const supporting = topic.querySelectorAll<HTMLElement>("[data-practice-support]");
          const mobileArtwork = topic.querySelector<HTMLElement>(".practice-story-topic-art");
          if (!heading) return;

          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: topic,
              start: "top 76%",
              once: true,
            },
          });

          if (mobileArtwork) {
            reveal.fromTo(
              mobileArtwork,
              { opacity: 0, y: 18 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            );
          }

          reveal.fromTo(
            heading,
            { opacity: 0, y: 28, filter: "blur(7px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.82,
              ease: "power3.out",
            },
            mobileArtwork ? "-=0.28" : 0,
          );

          if (supporting.length > 0) {
            reveal.fromTo(
              supporting,
              { opacity: 0, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.64,
                stagger: 0.085,
                ease: "power2.out",
              },
              "-=0.42",
            );
          }
        });

        if (!reducedMotion) {
          root.querySelectorAll<HTMLElement>("[data-practice-parallax]").forEach((shape, index) => {
            gsap.to(shape, {
              xPercent: index === 0 ? 5 : -4,
              yPercent: index === 0 ? -18 : 12,
              rotation: index === 0 ? 4 : -3,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.65,
              },
            });
          });
        }

        ScrollTrigger.refresh();
      },
    );

    return () => media.revert();
  }, [sections]);

  if (!activeSection) return null;

  return (
    <section
      className="section section-alt practice-story-section practice-area-reading"
      ref={rootRef}
    >
      <div className="container practice-story-grid">
        <aside className="practice-story-index">
          <nav className="practice-area-toc" aria-label="On this page">
            <h2>On this page</h2>
            <div className="practice-story-nav-track" aria-hidden="true">
              <span ref={progressRef} />
            </div>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={index === activeIndex ? "location" : undefined}
                    onClick={() => {
                      activeIndexRef.current = index;
                      setActiveIndex(index);
                    }}
                  >
                    <span className="practice-story-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="practice-story-link-title">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
            <p className="sr-only" aria-live="polite">
              Section {activeIndex + 1} of {sections.length}: {activeSection.title}
            </p>
          </nav>
        </aside>

        <div className="practice-story-content">
          {sections.map((section, index) => (
            <article
              className="practice-story-topic practice-area-topic"
              data-practice-topic
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="practice-story-topic-art" aria-hidden="true">
                <PracticeAreaIllustration visual={section.visual} />
              </div>
              <div className="practice-story-topic-copy">
                <h2 className="practice-story-topic-heading" id={`${section.id}-heading`}>
                  <span className="detail-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{section.title}</span>
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p data-practice-support key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="content-list">
                    {section.bullets.map((bullet) => (
                      <li data-practice-support key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <aside className="practice-story-scene" aria-hidden="true">
          <span className="practice-story-ornament practice-story-ornament-orbit" data-practice-parallax />
          <span className="practice-story-ornament practice-story-ornament-rule" data-practice-parallax />
          <div className="practice-story-scene-frame">
            <p className="practice-story-scene-index">
              <span>Practice area</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
              </span>
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="practice-story-scene-content"
                key={activeSection.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="practice-story-scene-title">{activeSection.title}</p>
                <PracticeAreaIllustration visual={activeSection.visual} />
              </motion.div>
            </AnimatePresence>
            <p className="practice-story-scene-caption">Law Office of James M. Burns</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
