"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface ApproachSlide {
  title: string;
  description: string;
}

export function HomeApproachCarousel({ items }: { items: readonly ApproachSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (items.length === 0) return null;

  const showSlide = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };
  const activeItem = items[activeIndex];

  return (
    <div className="home-experience-carousel" data-reveal="up" data-reveal-delay="3">
      <div className="home-experience-carousel-meta">
        <span>THE OFFICE&apos;S APPROACH</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <div className="home-experience-slide" aria-live="polite" aria-atomic="true">
        <motion.div
          key={activeItem.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>{activeItem.title}</h3>
          <p>{activeItem.description}</p>
        </motion.div>
      </div>
      <div className="home-experience-carousel-controls">
        <div className="home-experience-carousel-arrows">
          <button
            aria-label="Previous approach slide"
            className="home-experience-arrow"
            onClick={() => showSlide(activeIndex - 1)}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            aria-label="Next approach slide"
            className="home-experience-arrow"
            onClick={() => showSlide(activeIndex + 1)}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="home-experience-carousel-dots" role="group" aria-label="Choose an approach slide">
          {items.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              className="home-experience-dot"
              key={item.title}
              onClick={() => showSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
