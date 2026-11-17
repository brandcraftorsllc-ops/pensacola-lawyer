"use client";

import { useEffect, useRef } from "react";

interface ApproachStep {
  title: string;
  description: string;
}

export function ApproachTimeline({ steps }: { steps: readonly ApproachStep[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const markers = Array.from(
          timeline.querySelectorAll<HTMLElement>(".approach-marker"),
        );
        if (markers.length < 2) return;

        const timelineTop = timeline.getBoundingClientRect().top;
        const first = markers[0].getBoundingClientRect();
        const last = markers[markers.length - 1].getBoundingClientRect();
        const firstCenter = first.top + first.height / 2;
        const lastCenter = last.top + last.height / 2;

        timeline.style.setProperty(
          "--approach-line-top",
          `${firstCenter - timelineTop}px`,
        );
        timeline.style.setProperty(
          "--approach-line-height",
          `${Math.max(lastCenter - firstCenter, 1)}px`,
        );

        const start = window.scrollY + firstCenter - window.innerHeight * 0.68;
        const end = window.scrollY + lastCenter - window.innerHeight * 0.42;
        const progress = Math.max(
          0,
          Math.min(1, (window.scrollY - start) / Math.max(end - start, 1)),
        );
        timeline.style.setProperty("--approach-progress", String(progress));

        markers.forEach((marker) => {
          const center = marker.getBoundingClientRect().top + marker.offsetHeight / 2;
          marker.classList.toggle("is-active", center <= window.innerHeight * 0.68);
        });
      });
    };

    const resizeObserver = new ResizeObserver(updateProgress);
    resizeObserver.observe(timeline);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="approach-timeline" ref={timelineRef}>
      <span className="approach-track" aria-hidden="true" />
      <span className="approach-progress" aria-hidden="true" />
      <ol className="approach-list">
        {steps.map((step, index) => (
          <li className="step-card" key={step.title}>
            <span className="approach-marker" aria-hidden="true">
              <span />
            </span>
            <span className="step-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="approach-step-copy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
