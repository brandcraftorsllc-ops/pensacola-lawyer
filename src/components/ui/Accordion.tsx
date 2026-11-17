"use client";

import { useId, useState } from "react";

export interface AccordionItemData {
  question: string;
  answer: string;
  bullets?: string[];
}

interface AccordionProps {
  items: AccordionItemData[];
  label?: string;
  multiple?: boolean;
  className?: string;
}

export function Accordion({ items, label, multiple = false, className = "" }: AccordionProps) {
  const id = useId();
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggle(index: number) {
    setOpenItems((current) => {
      if (current.includes(index)) return current.filter((value) => value !== index);
      return multiple ? [...current, index] : [index];
    });
  }

  return (
    <div className={`accordion ${className}`.trim()} aria-label={label}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const panelId = `${id}-panel-${index}`;
        return (
          <section className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="accordion-chevron" aria-hidden="true" />
              </button>
            </h3>
            <div className="accordion-panel" id={panelId} hidden={!isOpen}>
              <p>{item.answer}</p>
              {item.bullets?.length ? (
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
