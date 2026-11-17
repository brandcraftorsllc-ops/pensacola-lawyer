"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import type { AccordionItemData } from "@/components/ui/Accordion";

interface ResourcesBrowserProps {
  categories: string[];
  resources: Record<string, AccordionItemData[]>;
}

export function ResourcesBrowser({ categories, resources }: ResourcesBrowserProps) {
  const [active, setActive] = useState(categories[0]);
  const items = resources[active] ?? [];

  return (
    <div className="resource-browser">
      <div className="resource-tabs" role="tablist" aria-label="Resource categories">
        {categories.map((category) => (
          <button
            type="button"
            role="tab"
            id={`tab-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            aria-selected={active === category}
            aria-controls="resource-questions"
            key={category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section
        id="resource-questions"
        className="resource-questions"
        role="tabpanel"
        aria-label={active}
      >
        <p className="eyebrow">
          {items.length} {items.length === 1 ? "question" : "questions"} in {active}
        </p>
        <Accordion items={items} label={active} multiple />
      </section>
    </div>
  );
}
