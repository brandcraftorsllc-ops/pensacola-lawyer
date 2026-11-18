"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AttorneyScrollAnimations({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (
      !root ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    root.dataset.animationActive = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.12 },
    );

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    const parallaxTargets = root.querySelectorAll<HTMLElement>("[data-scroll-parallax]");
    const media = parallaxTargets.length > 0 ? gsap.matchMedia(root) : undefined;

    if (media) {
      gsap.registerPlugin(ScrollTrigger);
      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 881px)",
        },
        ({ conditions }) => {
          if (conditions?.reduceMotion || !conditions?.desktop) return;

          parallaxTargets.forEach((element) => {
            const trigger = element.closest("[data-parallax-section]") ?? element;
            gsap.to(element, {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          });
        },
      );
    }

    return () => {
      observer.disconnect();
      media?.revert();
      delete root.dataset.animationActive;
    };
  }, []);

  return (
    <div className={className} data-animation-scope="" ref={rootRef}>
      {children}
    </div>
  );
}
