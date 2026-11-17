"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RevealOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    element.classList.add("is-pending");
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          element.classList.remove("is-pending");
          element.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      element.classList.remove("is-pending");
    };
  }, []);

  return (
    <div className={`scroll-reveal ${className}`.trim()} ref={elementRef}>
      {children}
    </div>
  );
}
