"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ApproachStep {
  title: string;
  description: string;
}

export function ApproachTimeline({ steps }: { steps: readonly ApproachStep[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || steps.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia(timeline);
    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        noPreference: "(prefers-reduced-motion: no-preference)",
      },
      ({ conditions }) => {
        const items = Array.from(timeline.querySelectorAll<HTMLElement>(".step-card"));
        const markers = items
          .map((item) => item.querySelector<HTMLElement>(".approach-marker"))
          .filter((marker): marker is HTMLElement => marker !== null);
        const copy = items
          .map((item) => item.querySelector<HTMLElement>(".approach-step-copy"))
          .filter((element): element is HTMLElement => element !== null);
        const reducedMotion = conditions?.reduceMotion === true;

        const updateLineGeometry = () => {
          if (markers.length < 2) return;
          const timelineTop = timeline.getBoundingClientRect().top;
          const first = markers[0].getBoundingClientRect();
          const last = markers[markers.length - 1].getBoundingClientRect();
          const firstCenter = first.top + first.height / 2;
          const lastCenter = last.top + last.height / 2;

          timeline.style.setProperty("--approach-line-top", `${firstCenter - timelineTop}px`);
          timeline.style.setProperty(
            "--approach-line-height",
            `${Math.max(lastCenter - firstCenter, 1)}px`,
          );
        };

        const syncProgressAndActiveStep = (progress: number) => {
          const activationLine = window.innerHeight * 0.58;
          let nextActiveIndex = 0;

          markers.forEach((marker, index) => {
            const rect = marker.getBoundingClientRect();
            if (rect.top + rect.height / 2 <= activationLine) nextActiveIndex = index;
          });

          if (progress >= 1) nextActiveIndex = steps.length - 1;
          if (activeIndexRef.current !== nextActiveIndex) {
            activeIndexRef.current = nextActiveIndex;
            setActiveIndex(nextActiveIndex);
          }

          const stepProgress =
            steps.length > 1 ? nextActiveIndex / (steps.length - 1) : Number(progress > 0);
          timeline.style.setProperty(
            "--approach-progress",
            String(reducedMotion ? stepProgress : progress),
          );
        };

        const resizeObserver = new ResizeObserver(updateLineGeometry);
        resizeObserver.observe(timeline);
        updateLineGeometry();

        ScrollTrigger.create({
          trigger: timeline,
          start: "top 64%",
          end: "bottom 42%",
          onUpdate: (self) => syncProgressAndActiveStep(self.progress),
          onRefresh: (self) => {
            updateLineGeometry();
            syncProgressAndActiveStep(self.progress);
          },
        });

        if (!reducedMotion && copy.length > 0) {
          gsap.fromTo(
            copy,
            { opacity: 0.45, y: 22 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              stagger: 0.13,
              scrollTrigger: {
                trigger: timeline,
                start: "top 82%",
                end: "top 34%",
                scrub: 0.55,
              },
            },
          );
        }

        ScrollTrigger.refresh();
        return () => resizeObserver.disconnect();
      },
    );

    return () => media.revert();
  }, [steps]);

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>, index: number) => {
    let targetIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") targetIndex += 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") targetIndex -= 1;
    else if (event.key === "Home") targetIndex = 0;
    else if (event.key === "End") targetIndex = steps.length - 1;
    else return;

    event.preventDefault();
    targetIndex = Math.max(0, Math.min(steps.length - 1, targetIndex));
    activeIndexRef.current = targetIndex;
    setActiveIndex(targetIndex);
    const target = timelineRef.current?.querySelectorAll<HTMLLIElement>(".step-card")[targetIndex];
    target?.focus();
    target?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <div className="approach-timeline" ref={timelineRef}>
      <span className="approach-track" aria-hidden="true" />
      <span className="approach-progress" aria-hidden="true" />
      <ol className="approach-list" aria-label="Four steps in the office's general approach">
        {steps.map((step, index) => {
          const state =
            index === activeIndex ? "active" : index < activeIndex ? "completed" : "upcoming";

          return (
            <li
              aria-current={index === activeIndex ? "step" : undefined}
              className="step-card"
              data-state={state}
              key={step.title}
              onKeyDown={(event) => handleKeyDown(event, index)}
              tabIndex={0}
            >
              <span className="approach-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="approach-step-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
