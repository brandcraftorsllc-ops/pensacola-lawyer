"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  credit: string;
  label: string;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  function move(direction: number) {
    setActive((index) => (index + direction + items.length) % items.length);
  }

  return (
    <div className="testimonial" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="quote-mark" aria-hidden="true">
        “
      </div>
      <blockquote aria-live="polite">
        <p>{current.quote}</p>
      </blockquote>
      <cite>{current.credit}</cite>
      <p className="sr-only" aria-live="polite">
        {current.label}
      </p>
      <div className="carousel-controls">
        <button
          className="carousel-arrow"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => move(-1)}
        >
          ‹
        </button>
        {items.map((item, index) => (
          <button
            type="button"
            aria-label={`Testimonial ${index + 1}`}
            aria-pressed={index === active}
            key={`${item.credit}-${index}`}
            onClick={() => setActive(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="carousel-arrow"
          type="button"
          aria-label="Next testimonial"
          onClick={() => move(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
