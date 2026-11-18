"use client";

import { useEffect, useRef, type ReactNode } from "react";

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

    return () => {
      observer.disconnect();
      delete root.dataset.animationActive;
    };
  }, []);

  return (
    <div className={className} data-animation-scope="" ref={rootRef}>
      {children}
    </div>
  );
}
