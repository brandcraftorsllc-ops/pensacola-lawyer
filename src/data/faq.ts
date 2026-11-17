import source from "../../reference/interactions/faq.json";
import type { AccordionItemData } from "@/components/ui/Accordion";

type FaqSource = {
  question: string;
  answer: string;
};

const toAccordionItems = (items: FaqSource[]): AccordionItemData[] =>
  items.map(({ question, answer }) => ({ question, answer }));

export const homeFaqs = toAccordionItems(source.home);
export const militaryFaqs = toAccordionItems(source.militaryDivorce);
export const familyFaqs = toAccordionItems(source.familyLaw);

export const familyServiceItems = [
  {
    question: "Divorce Representation",
    description:
      "The source website lists divorce among the office's practice areas. The concerns in a divorce depend on the people and circumstances involved.",
    bullets: ["Questions about the process", "Family and financial concerns", "Possible next steps"],
  },
  {
    question: "Child Custody and Time-Sharing",
    description:
      "The source materials discuss family-law matters involving children. Contact the office to discuss the arrangements and questions relevant to your family.",
    bullets: ["Existing parenting arrangements", "Questions about time-sharing", "Court orders and related concerns"],
  },
  {
    question: "Parenting Plans",
    description:
      "Parenting arrangements can raise practical and legal questions. The source website lists custody and visitation among the matters addressed by the practice.",
    bullets: ["Current parenting arrangements", "Questions about visitation", "Whether an existing order needs review"],
  },
  {
    question: "Child Support",
    description:
      "The source website lists support among the family-law matters addressed by the office. Individual questions depend on the relevant records and circumstances.",
    bullets: ["Existing support arrangements", "Questions about support orders", "Documents relevant to your circumstances"],
  },
  {
    question: "Alimony and Spousal Support",
    description:
      "Alimony is listed on the source website as a practice area. Contact the office to discuss the facts and financial questions relevant to your matter.",
    bullets: ["Existing or proposed support", "Financial information", "Questions about an order"],
  },
  {
    question: "Property and Asset Division",
    description:
      "The source materials reviewed do not describe the firm's approach to property or asset division. Contact the office to confirm whether it can assist.",
    bullets: ["Confirm the current scope of services", "Ask which records may be relevant", "Discuss your specific question"],
  },
  {
    question: "Termination of Parental Rights",
    description:
      "This service was not confirmed in the source materials reviewed. Contact the office to ask whether it currently handles this type of matter.",
    bullets: ["Confirm the current scope of services", "Ask about the appropriate process", "Discuss your specific circumstances"],
  },
  {
    question: "Paternity",
    description:
      "This service was not confirmed in the source materials reviewed. Contact the office to ask whether it currently handles this type of matter.",
    bullets: ["Confirm the current scope of services", "Ask what information may be relevant", "Discuss your specific circumstances"],
  },
  {
    question: "Modifications",
    description:
      "The source website lists modifications among its family-law services. Contact the office to discuss an existing order and the circumstances that have changed.",
    bullets: ["Locate the current order", "Identify the issue you want reviewed", "Ask about the next steps"],
  },
  {
    question: "Motions for Contempt and Enforcement",
    description:
      "The source website lists contempt motions among the practice areas. Questions about enforcement depend on the order and the specific facts.",
    bullets: ["Locate the order at issue", "Keep records relevant to the concern", "Discuss the available process with an attorney"],
  },
];

export const resourceCategories = Object.keys(source.resources);
export const resourceFaqs = Object.fromEntries(
  Object.entries(source.resources).map(([category, items]) => [
    category,
    toAccordionItems(items),
  ]),
) as Record<string, AccordionItemData[]>;
