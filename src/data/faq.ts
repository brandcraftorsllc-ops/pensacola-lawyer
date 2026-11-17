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

export const familyServiceItems = source.familyLawServices.map(({ question, answer }) => {
  const [description = "", list = ""] = answer.split("\n\n");
  return {
    question,
    description,
    bullets: list.split("\n").filter(Boolean),
  };
});

export const resourceCategories = Object.keys(source.resources);
export const resourceFaqs = Object.fromEntries(
  Object.entries(source.resources).map(([category, items]) => [
    category,
    toAccordionItems(items),
  ]),
) as Record<string, AccordionItemData[]>;
