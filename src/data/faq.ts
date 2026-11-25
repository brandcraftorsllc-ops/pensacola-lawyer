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

export const familyServiceItems: Array<{
  id?: string;
  question: string;
  description: string;
  bullets: string[];
}> = [
  {
    id: "divorce-representation",
    question: "Divorce Representation",
    description:
      "Florida is a no-fault state, so a divorce requires showing that the marriage is irretrievably broken. Uncontested cases can move quickly; contested cases usually go to mediation first.",
    bullets: ["Questions about the process", "Family and financial concerns", "Possible next steps"],
  },
  {
    question: "Child Custody and Time-Sharing",
    description:
      "When parents separate, Florida courts look at a parenting plan that sets time-sharing and decision-making. A well-drafted plan can keep a family out of court later.",
    bullets: ["Existing parenting arrangements", "Questions about time-sharing", "Court orders and related concerns"],
  },
  {
    question: "Parenting Plans",
    description:
      "Florida uses a standard parenting plan form that covers time-sharing, holidays, communication and decision-making. Getting the details right up front helps avoid disputes later.",
    bullets: ["Current parenting arrangements", "Questions about visitation", "Whether an existing order needs review"],
  },
  {
    id: "child-support",
    question: "Child Support",
    description:
      "Florida child support is set by statutory guidelines based on both parents' combined net income, the number of children and the time each parent has. Child care, health insurance and medical costs are added. Parents cannot simply agree on a number, and temporary support can be ordered soon after filing, sometimes back to the date of separation.",
    bullets: [
      "Guideline calculation from both parents' income",
      "Temporary and retroactive support",
      "Enforcement when support is not paid",
    ],
  },
  {
    question: "Alimony and Spousal Support",
    description:
      "Alimony depends on the length of the marriage and each spouse's needs and ability to pay. It is a common issue in longer marriages and in divorces later in life.",
    bullets: ["Existing or proposed support", "Financial information", "Questions about an order"],
  },
  {
    question: "Property and Asset Division",
    description:
      "When significant assets are involved, value matters. Real estate, jewelry, art and businesses can be appraised when value is disputed, and a forensic CPA can review tax returns, bank records and contracts when one spouse may be hiding income or assets.",
    bullets: [
      "Appraisals for real estate and personal property",
      "Business valuations",
      "Forensic accounting to uncover hidden income",
    ],
  },
  {
    question: "Termination of Parental Rights",
    description:
      "Termination of parental rights is a serious step with its own court process. Call the office to discuss your situation and whether it can help.",
    bullets: ["Discuss your situation", "Understand the court process", "Ask about next steps"],
  },
  {
    question: "Paternity",
    description:
      "Establishing paternity can be the first step toward time-sharing and child support. Call the office to discuss your situation and whether it can help.",
    bullets: ["Discuss your situation", "Understand what information is needed", "Ask about next steps"],
  },
  {
    question: "Modifications",
    description:
      "When circumstances change, such as a new job, a move or a deployment, an existing custody, support or alimony order may need to be modified. A change in circumstances does not change the order on its own; the court has to approve it.",
    bullets: ["Locate the current order", "Identify the issue you want reviewed", "Ask about the next steps"],
  },
  {
    question: "Motions for Contempt and Enforcement",
    description:
      "When an order for support, custody or alimony is not being followed, a motion for contempt asks the court to enforce it. Unpaid support can lead to contempt, license suspension and wage withholding.",
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
