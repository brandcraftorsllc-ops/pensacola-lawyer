import type { PracticeAreaSection } from "@/components/sections/PracticeAreaGuide";
import { familyFaqs, familyServiceItems, homeFaqs, militaryFaqs } from "@/data/faq";
import {
  SITE_ADDRESS,
  SITE_CITY,
  SITE_EMAIL,
  SITE_OFFICE_HOURS,
  SITE_PHONE,
  SERVICE_AREA,
} from "@/lib/site";

export const homeContent = {
  eyebrow: "Direct. Determined. Dedicated.",
  titleFirst: "Experience you need.",
  titleSecond: "Attention you deserve.",
  lead:
    "Divorce, military family matters and criminal defense, with guidance for your next step in Pensacola.",
  promise: "Here in Pensacola. Here for your next step.",
  trustItems: [
    "Divorce & Family Law",
    "Military Family Matters",
    "Criminal Defense",
    "Pensacola & Nearby Communities",
  ],
  practiceIntro: {
    eyebrow: "How We Can Help",
    title: "Practice Areas",
    description:
      "Legal issues affect your family, your finances, and your future. Get straightforward guidance and a plan built around your circumstances.",
    cta: "Discuss your case",
  },
  practiceAreas: [
    {
      number: "01",
      href: "/family-law",
      title: "Divorce",
      description: "Practical guidance through the personal and financial decisions of divorce.",
    },
    {
      number: "02",
      href: "/family-law#military-divorce",
      title: "Military Divorce",
      description: "Help for military service members and spouses facing family changes.",
    },
    {
      number: "03",
      href: "/family-law",
      title: "Family Law",
      description: "Personal attention for the issues affecting your family and future.",
    },
    {
      number: "04",
      href: "/criminal-defense",
      title: "Criminal Defense",
      description: "Understand your options when criminal allegations put your freedom at stake.",
    },
  ],
  about: {
    eyebrow: "About the Office",
    title: "Paying attention to your expectations",
    description:
      "The office aims to explain what may come next, which decisions you may face and what your options could mean for you and your family.",
    secondary:
      "Located near Corry Station and NAS Pensacola, the office serves local residents and military families with divorce, family matters and criminal defense. The source website describes the practice as formerly the Law Offices of Steven W. Bowden.",
    facts: [
      { label: "Location", value: "Pensacola, Florida" },
      { label: "Practice", value: "Family Law & Criminal Defense" },
      { label: "Communities", value: "Pensacola, Milton, Navarre & Gulf Breeze" },
    ],
  },
  approachIntro: {
    eyebrow: "Our Approach",
    title: "Start with a conversation",
    description:
      "The source website does not describe a step-by-step process. This timeline is a general illustration and requires attorney review.",
  },
  approach: [
    {
      title: "Discuss Your Concerns",
      description:
        "Call the office to discuss your legal concerns and ask about a free consultation.",
    },
    {
      title: "Understand Your Options",
      description:
        "Consider the options that may be available based on your circumstances.",
    },
    {
      title: "Plan Your Next Steps",
      description:
        "Identify the information and decisions relevant to your legal matter.",
    },
    {
      title: "Confirm How the Office Can Help",
      description:
        "The office can confirm whether it handles your matter and how to proceed.",
    },
  ],
  testimonialIntro: {
    eyebrow: "Client Voices",
    title: "Client feedback",
    description:
      "No verified testimonials or case outcomes were available on the source website reviewed for this content update.",
  },
  testimonials: [
    {
      quote: "Verified client feedback has not been supplied for publication.",
      credit: "Client feedback unavailable",
      label: "Client feedback unavailable",
    },
    {
      quote: "No approved case outcome was found in the source materials reviewed.",
      credit: "Case outcomes unavailable",
      label: "Case outcomes unavailable",
    },
    {
      quote: "This space is reserved for verified and approved client feedback.",
      credit: "Client feedback pending",
      label: "Client feedback pending",
    },
  ],
  faqIntro: {
    eyebrow: "Questions",
    title: "Answers before you call",
    description:
      "The source website did not publish these FAQs. They remain general draft information and should be reviewed by an attorney.",
  },
  faqs: homeFaqs,
  cta: {
    title: "Need to discuss a legal matter?",
    description: "Call the office to arrange a free consultation and discuss your next steps.",
  },
};

export const militaryDivorcePage = {
  eyebrow: "Military Divorce",
  title: "Family-law matters involving military service",
  description:
    "The source website lists military divorce, support, custody, visitation and related family-law matters among the office's practice areas. Military service and family circumstances can raise questions that require an individual review.",
  note:
    "This overview is general information, not legal advice. The source website does not provide enough detail to determine how a rule or benefit applies to an individual matter.",
  sections: [
    {
      title: "Military Divorce and Retirement Benefits",
      paragraphs: [
        "A military divorce may involve questions about retirement benefits as well as other financial issues. The source website identifies military retirement as a subject for discussion but does not publish an individual case assessment.",
        "Benefit eligibility, division and payment depend on the applicable law and the parties' records. Review current information and case-specific documents before making decisions.",
      ],
      bullets: [
        "The service and marriage records relevant to the question",
        "How an order addresses any benefit being considered",
        "Whether additional review is needed before an agreement",
      ],
    },
    {
      title: "Healthcare and Military Benefits",
      paragraphs: [
        "Healthcare and other military benefits may raise separate questions from the division of retirement pay. The source materials discuss benefit-related issues in the context of military divorce.",
        "Eligibility depends on current rules and the facts of the marriage and service. Do not rely on a general description as a determination of coverage.",
      ],
      bullets: [
        "Identify the specific benefit in question",
        "Gather current service and family records",
        "Confirm eligibility with the appropriate source",
      ],
    },
    {
      title: "Survivor Benefit Plan Questions",
      paragraphs: [
        "The Survivor Benefit Plan may be one of the benefits to consider when a military family is addressing divorce and future financial arrangements.",
        "Coverage, cost, election requirements and timing should be checked against current official guidance and the family's circumstances.",
      ],
      bullets: [
        "Confirm current coverage and beneficiary information",
        "Review any proposed order or agreement",
        "Verify applicable requirements and deadlines",
      ],
    },
    {
      title: "Deployment, Custody and Visitation",
      paragraphs: [
        "Military service and deployment can affect family arrangements, including custody and visitation. The source website identifies these as issues that may arise in military family-law matters.",
        "Parenting plans and court orders should be considered in light of the family's actual schedule, service obligations and children's needs.",
      ],
      bullets: [
        "Existing parenting plans and court orders",
        "The family's anticipated schedule and communication needs",
        "How to address changes through the proper process",
      ],
    },
    {
      title: "Child Support and Alimony",
      paragraphs: [
        "The source website lists child support and alimony among the family-law issues addressed by the office. Military income, family needs and existing orders may be relevant to an individual matter.",
        "The outcome depends on the applicable law and financial information available for review.",
      ],
      bullets: [
        "Current support orders and relevant financial information",
        "Questions about existing or proposed arrangements",
        "Whether an order may need further review",
      ],
    },
    {
      title: "Residency and Jurisdiction",
      paragraphs: [
        "When a family has connections to more than one place, questions about where a matter should be handled may arise. The source website serves communities in Northwest Florida, including Pensacola, Milton, Navarre and Gulf Breeze.",
        "Residency, court authority and case timing depend on the specific circumstances. Have the relevant records reviewed rather than relying on a general statement.",
      ],
      bullets: [
        "Where each person lives and has lived",
        "The relevant service and family records",
        "Any existing case or court order",
      ],
    },
    {
      title: "Modifications and Court Orders",
      paragraphs: [
        "The source website lists modifications and enforcement among its family-law services. A request involving an existing order requires review of that order and the circumstances surrounding it.",
        "Do not assume that a change in circumstances automatically changes a court order; get advice about the appropriate process.",
      ],
      bullets: [
        "Locate the current signed order",
        "Identify which part needs to be addressed",
        "Ask about the appropriate court process",
      ],
    },
    {
      title: "Serving Pensacola and Nearby Communities",
      paragraphs: [
        "The Law Office of James M. Burns is located at 4502 Twin Oaks Drive in Pensacola. The source website lists Pensacola, Milton, Navarre and Gulf Breeze among the communities it serves.",
        "Call the office to confirm whether it can assist with your location and the type of legal matter you have.",
      ],
      bullets: [
        "Pensacola",
        "Milton",
        "Navarre and Gulf Breeze",
      ],
    },
  ],
  faqIntro: {
    eyebrow: "Military Divorce Questions",
    title: "A few answers to start with",
    description:
      "The source website did not publish these FAQs. The existing general answers should be reviewed by an attorney before relying on them.",
  },
  faqs: militaryFaqs,
  cta: {
    title: "Need to discuss a military family-law matter?",
    description: "Call the office to arrange a free consultation.",
  },
};

export const familyLawPage = {
  eyebrow: "Divorce",
  title: "Divorce and family-law matters in Pensacola",
  description:
    "The source website lists divorce, family law, child custody, support, alimony, modifications and enforcement among its practice areas. The details of each matter depend on the people and circumstances involved.",
  faqIntro: {
    eyebrow: "Family Law Questions",
    title: "Common questions about custody and support",
    description:
      "The source website did not publish these FAQs. The existing general answers should be reviewed by an attorney before relying on them.",
  },
  faqs: familyFaqs,
  cta: {
    title: "Questions about a family-law matter?",
    description: "Call the office to arrange a free consultation.",
  },
};

export const motionsForContemptPage = {
  eyebrow: "Family Law",
  title: "Motions for Contempt",
  description:
    "When a court order is not being followed, a motion for contempt may be one way to ask the court to address compliance. The right approach depends on the order, current law and the facts.",
  sections: [
    {
      title: "Court orders and compliance",
      paragraphs: [
        "The source website discusses motions for contempt in connection with court orders involving matters such as support, parenting arrangements and protective orders.",
        "Whether conduct violates an order, and what steps may be available, depends on the order's language and the circumstances.",
      ],
    },
    {
      title: "Filing or responding to a motion",
      paragraphs: [
        "The source page describes both seeking enforcement and responding to an allegation of noncompliance. The appropriate process depends on the current order, the relevant records and applicable law.",
        "This page does not determine whether contempt is appropriate or predict how a court may rule.",
      ],
    },
    {
      title: "Information to gather",
      bullets: [
        "A copy of the current court order",
        "Records related to the issue being raised",
        "Relevant dates and communications",
        "Any notice or filing received from the court",
      ],
    },
  ],
  cta: {
    title: "Questions about a court order?",
    description: "Call the office to arrange a free consultation.",
  },
};

export const criminalDefensePage = {
  eyebrow: "Criminal Defense",
  title: "Criminal defense in Pensacola",
  description:
    "The source website identifies DUI, drug trafficking, sexual assault, stalking, domestic-violence charges and injunction-related matters among its criminal-defense services.",
  sections: [
    {
      id: "drug-trafficking",
      title: "Drug Trafficking",
      visual: "evidence",
      paragraphs: [
        "The source website lists drug trafficking as a criminal-defense practice area. The facts, evidence and law applicable to an individual case require review.",
        "This page does not describe penalties or predict an outcome.",
      ],
    },
    {
      id: "stalking",
      title: "Stalking",
      visual: "eye",
      paragraphs: [
        "Stalking is among the criminal matters listed on the source website. Questions about the conduct alleged, communications and any related orders depend on the specific record.",
        "A general web page cannot determine how a particular allegation will be charged or resolved.",
      ],
    },
    {
      id: "violation-of-domestic-violence-criminal",
      title: "Violation of Domestic Violence – Criminal",
      visual: "order",
      paragraphs: [
        "The source website lists domestic-violence charges and injunction violations among matters addressed by the office. Criminal allegations and any related family-court proceedings may raise separate issues.",
        "The charge, documents, existing order and current law should be reviewed individually. This page does not determine whether an order was violated or predict a case outcome.",
      ],
    },
    {
      id: "domestic-violence-injunction",
      title: "Domestic Violence Injunction",
      visual: "shield",
      paragraphs: [
        "The source website discusses domestic-violence injunctions as a distinct legal matter. The applicable process and requirements depend on the petition and the court's orders.",
        "Read any papers carefully and seek legal guidance about the next steps.",
      ],
    },
    {
      id: "sexual-assault",
      title: "Sexual Assault",
      visual: "scales",
      paragraphs: [
        "The source website lists sexual assault among the criminal matters addressed by the practice. Each allegation and its supporting information should be reviewed on its own facts.",
        "Avoid relying on a general web description to assess a specific investigation or charge.",
      ],
    },
    {
      id: "dui",
      title: "DUI",
      visual: "vehicle",
      paragraphs: [
        "The source website lists DUI among the criminal matters handled by the office. The circumstances, records and legal issues in each case need individual review.",
        "If you have questions after an arrest or charge, contact an attorney to discuss the matter and any documents you received.",
      ],
    },
  ] satisfies PracticeAreaSection[],
  stepsIntro: {
    eyebrow: "If You Have Been Charged",
    title: "Questions after an arrest or charge",
    description: "Contact an attorney to discuss the paperwork, the court process and the circumstances of your matter.",
  },
  steps: [
    {
      title: "Review the documents",
      description:
        "Keep the paperwork you received and note any court dates or instructions. An attorney can help explain what the documents mean.",
    },
    {
      title: "Write down your questions",
      description:
        "Record the questions you want to ask and the events you remember, while details are available to you.",
    },
    {
      title: "Ask about next steps",
      description:
        "Discuss the process, any upcoming dates and the steps that may be relevant to your specific matter.",
    },
    {
      title: "Protect your privacy",
      description:
        "Avoid sharing sensitive case details through a public website or social media.",
    },
    {
      title: "Mention related proceedings",
      description:
        "Tell the attorney if there are related family-court, injunction or service-related matters that may need to be considered.",
    },
  ],
  stepsNote:
    "This information is general and is not legal advice. The appropriate next steps depend on the charge, documents and circumstances.",
  cta: {
    title: "Need to discuss a criminal matter?",
    description: "Contact the office to arrange a free consultation.",
  },
};

export const attorneyPage = {
  eyebrow: "Attorney Profile",
  title: "James M. Burns",
  description:
    "The Law Office of James M. Burns is based in Pensacola and lists divorce, family law and criminal defense among its practice areas.",
  facts: [
    { label: "Bar Admission", value: "Placeholder — add Florida Bar admission and year" },
    { label: "Education", value: "Placeholder — add law school and undergraduate details" },
    { label: "Years of Practice", value: "Placeholder — add years in practice" },
    { label: "Affiliations", value: "Placeholder — add professional and military associations" },
  ],
  sections: [
    {
      title: "Background",
      paragraphs: [
        "The source website identifies the practice as the Law Office of James M. Burns and describes it as formerly the Law Offices of Steven W. Bowden.",
        "The source materials reviewed for this update do not provide verified personal background details for James M. Burns. Information about another attorney's experience is not attributed to him.",
      ],
    },
    {
      title: "Courtroom Experience",
      paragraphs: [
        "Placeholder — add representative courtroom experience, including the types of hearings handled, the jurisdictions practiced in, and any trial or evidentiary hearing experience the attorney wants published.",
        "No statistics, case counts or success rates are listed here unless the attorney supplies verified figures. Every case is different.",
      ],
    },
    {
      title: "Pensacola Community Ties",
      paragraphs: [
        "The office address listed on the source website is 4502 Twin Oaks Drive, Pensacola, Florida 32506.",
        "The source website lists Pensacola, Milton, Navarre and Gulf Breeze among the communities served. It does not provide verified details about personal community involvement.",
      ],
    },
    {
      title: "Advocacy Philosophy",
      paragraphs: [
        "The current website describes the firm's approach as direct, determined and dedicated.",
        "Prospective clients can call the office to discuss their legal concerns and arrange a consultation.",
      ],
    },
  ],
};

export const resultsPage = {
  title: "Client feedback and case outcomes",
  description:
    "The source website reviewed for this content update did not publish verified client testimonials or specific case outcomes.",
  categories: [
    "Military Divorce",
    "Time-Sharing",
    "Child Support",
    "Retired Pay Division",
    "DUI Defense",
    "Injunction Hearing",
  ],
  disclaimer: "Every case is different. Past results do not guarantee future outcomes.",
  cta: {
    title: "Every case starts with its own facts.",
    description:
      "Call the office to arrange a free consultation and discuss your legal matter.",
  },
};

export const contactPage = {
  eyebrow: "Contact & Pensacola Office",
  title: "Talk with the office",
  description:
    "Call the office or use the contact form to ask about a free consultation and the legal matter you would like to discuss.",
  address: SITE_ADDRESS,
  city: SITE_CITY,
  phone: SITE_PHONE,
  email: SITE_EMAIL,
  officeHours: SITE_OFFICE_HOURS,
  officeDescription:
    "The Law Office of James M. Burns is located at 4502 Twin Oaks Drive in Pensacola.",
  gettingHere:
    "Contact the office for directions and current parking information.",
  serviceArea: SERVICE_AREA,
};

export const articleData = [
  {
    slug: "residency-in-a-florida-military-divorce",
    category: "Military Divorce",
    date: "July 13, 2026",
    title: "Residency Issues in a Florida Military Divorce",
    listingTitle: "Residency Issues in a Florida Military Divorce",
    description:
      "Military moves and changing assignments may complicate where a divorce can be filed. The source article discusses residency and jurisdiction; confirm current requirements for your situation.",
    sections: [
      {
        title: "Military moves and residency",
        paragraphs: [
          "The source article describes how frequent relocations and deployments can affect a military family's connection to a state. Residency requirements differ, and the article's legal details should be checked against current law.",
        ],
      },
      {
        title: "Considering where to file",
        paragraphs: [
          "A military family may have ties to more than one state. The source article notes that laws and filing requirements can differ between places, so a decision should be based on current rules and the family's circumstances.",
        ],
      },
      {
        title: "Preparing for a conversation",
        bullets: [
          "Current and recent duty-station information",
          "Where each family member has lived",
          "Any existing court case or order",
          "Questions about the location and timing of a filing",
        ],
      },
      {
        title: "Get current guidance",
        paragraphs: [
          "This summary is based on a legacy source article and does not determine where a specific case may be filed. Ask an attorney to review the current requirements and relevant facts.",
        ],
      },
    ],
    related: [
      "custody-rights-for-deployed-parents",
      "military-retirement-benefits-20-20-20",
    ],
  },
  {
    slug: "custody-rights-for-deployed-parents",
    category: "Military Divorce",
    date: "July 13, 2026",
    title: "Custody Rights Expand for Deployed Military",
    listingTitle: "Custody Rights Expand for Deployed Military",
    description:
      "The source article discusses custody and time-sharing questions when a parent is deployed. Its legal references are historical, so verify current Florida law before relying on them.",
    sections: [
      {
        title: "Deployment and parenting arrangements",
        paragraphs: [
          "A legacy source article describes Florida legislation concerning deployed parents and arrangements for their children's care. Because the article refers to an earlier version of the law, its descriptions should not be treated as current legal advice.",
        ],
      },
      {
        title: "Questions families may need to address",
        paragraphs: [
          "The source article focuses on planning for a parent's absence and the child's care. The right process depends on current law, any existing parenting plan and the family's circumstances.",
        ],
      },
      {
        title: "Review existing orders",
        paragraphs: [
          "Before making changes, review any current court orders and get advice about how they apply. This page does not determine the rights or obligations of any parent.",
        ],
      },
      {
        title: "Topics to discuss",
        bullets: [
          "The current parenting plan or court order",
          "The expected service schedule",
          "The child's care and communication arrangements",
          "Current requirements for any proposed change",
        ],
      },
    ],
    related: [
      "residency-in-a-florida-military-divorce",
      "military-retirement-benefits-20-20-20",
    ],
  },
  {
    slug: "military-retirement-benefits-20-20-20",
    category: "Military Divorce",
    date: "July 13, 2026",
    title: "Military Divorce: 20/20/20 Standards & 20/20/15 Standards",
    listingTitle: "Military Divorce: 20/20/20 & 20/20/15 Standards",
    description:
      "A legacy source article discusses the 20/20/20 and 20/20/15 standards. Benefit rules may change, so check current official guidance and your individual circumstances.",
    sections: [
      {
        title: "Military benefits in a divorce",
        paragraphs: [
          "The source article discusses military benefits that may arise in a divorce and describes the 20/20/20 and 20/20/15 standards. It also contains legacy information about a former attorney; that experience is not attributed to James M. Burns.",
        ],
      },
      {
        title: "Verify current requirements",
        paragraphs: [
          "Eligibility for military benefits depends on current requirements and the relevant service and family records. The legacy article's statements are not a determination that any person qualifies for a benefit.",
        ],
      },
      {
        title: "Documents to have reviewed",
        paragraphs: [
          "A careful review may require records relating to the marriage, service and any existing orders. Contact the appropriate benefits administrator for current official information.",
        ],
      },
      {
        title: "Get case-specific advice",
        paragraphs: [
          "This article is a summary of a legacy source page, not legal or benefits advice. Discuss current rules with a qualified professional before relying on them.",
        ],
      },
    ],
    related: [
      "residency-in-a-florida-military-divorce",
      "custody-rights-for-deployed-parents",
    ],
  },
  {
    slug: "when-stalking-is-a-misdemeanor-or-felony",
    category: "Criminal Defense",
    date: "July 13, 2026",
    title: "When Is It a Crime? Florida's Laws on Stalking",
    listingTitle: "Florida's Laws on Stalking",
    description:
      "The source article discusses Florida stalking charges. Its descriptions of statutory elements and penalties may be out of date; seek current legal advice.",
    sections: [
      {
        title: "A legacy overview",
        paragraphs: [
          "The source article describes stalking allegations and conduct that it says may be relevant. Its statutory descriptions are historical and should not be relied on as a current statement of Florida law.",
        ],
      },
      {
        title: "Charge classifications and penalties",
        paragraphs: [
          "The source article discusses misdemeanor and felony classifications, but its descriptions of charges and penalties may have changed. Confirm current law with an attorney rather than relying on this summary.",
        ],
      },
      {
        title: "Individual circumstances matter",
        paragraphs: [
          "The information needed to understand an allegation depends on the specific facts and records. This page does not assess any person's conduct or predict an outcome.",
        ],
      },
      {
        title: "Seek current advice",
        paragraphs: [
          "If you have questions about a stalking investigation or charge, contact an attorney for guidance based on current law and your circumstances.",
        ],
      },
    ],
    related: ["what-to-do-after-a-dui-arrest-in-florida"],
  },
  {
    slug: "what-to-do-after-a-dui-arrest-in-florida",
    category: "Criminal Defense",
    date: "Source not verified",
    title: "What to Do After a DUI Arrest in Florida",
    listingTitle: "What to Do After a DUI Arrest in Florida",
    description:
      "A DUI article matching this topic was not located in the source materials reviewed. Contact the office to confirm current services and guidance.",
    sections: [
      {
        title: "Source content not verified",
        paragraphs: [
          "The source website lists DUI among its practice areas, but a corresponding source article was not located during this content update. This page does not provide legal guidance about DUI charges.",
        ],
      },
      {
        title: "Contact the office",
        bullets: [
          "Ask whether the office can assist with your matter",
          "Have any relevant documents available for discussion",
          "Confirm any dates or instructions with the appropriate source",
        ],
      },
      {
        title: "General information only",
        paragraphs: [
          "Do not rely on outdated or general material to decide what to do in a specific case. Seek current advice from a qualified attorney.",
        ],
      },
    ],
    related: ["when-stalking-is-a-misdemeanor-or-felony"],
  },
  {
    slug: "how-social-media-can-affect-a-divorce",
    category: "Family Law",
    date: "July 13, 2026",
    title: "How Can Social Media Affect My Divorce?",
    listingTitle: "How Social Media Can Affect My Divorce?",
    description:
      "The source article discusses how social media may intersect with divorce issues. Whether particular information matters depends on the case and applicable law.",
    sections: [
      {
        title: "The source article's overview",
        paragraphs: [
          "The legacy source article discusses social media in relation to support, parenting, property, income and credibility. Its examples are not a determination that a post is relevant or admissible in a particular case.",
        ],
      },
      {
        title: "Consider the context",
        bullets: [
          "The subject and context of the information",
          "How it relates to the issues in the case",
          "Current legal requirements for using information",
          "Whether the material should be reviewed by counsel",
        ],
      },
      {
        title: "Avoid assumptions",
        paragraphs: [
          "Not every post will be relevant to a divorce. Ask an attorney to review questions about particular content and current legal rules.",
        ],
      },
    ],
    related: [],
  },
] as const;

function getFamilyServiceContent(question: string) {
  const service = familyServiceItems.find((item) => item.question === question);
  if (!service) throw new Error(`Missing family-law content for "${question}".`);

  return {
    paragraphs: [service.description],
    bullets: service.bullets,
  };
}

function getArticleContent(slug: string) {
  const article = articleData.find((item) => item.slug === slug);
  if (!article) throw new Error(`Missing article content for "${slug}".`);

  return {
    paragraphs: article.sections.flatMap((section) =>
      "paragraphs" in section ? section.paragraphs : [],
    ),
    bullets: article.sections.flatMap((section) => "bullets" in section ? section.bullets : []),
  };
}

const unverifiedTopic = (topic: string) => ({
  paragraphs: [
    `The source materials reviewed do not include verified details for ${topic}. Contact the office to confirm its current scope and discuss your circumstances.`,
  ],
});

const militaryRetirementSection = militaryDivorcePage.sections[0];
if (!militaryRetirementSection) throw new Error("Missing military retirement section content.");

export const divorcePracticeSections: PracticeAreaSection[] = [
  {
    id: "military-divorce",
    title: "Military Divorce",
    visual: "military",
    paragraphs: [
      militaryDivorcePage.description,
      "Military-service questions may include finances, benefits, parenting arrangements and where a case can be handled. The details depend on current rules and the family's records.",
    ],
    bullets: [
      "Service and marriage records",
      "Existing parenting plans and court orders",
      "Questions about benefits, support and residency",
    ],
  },
  {
    id: "child-support-law",
    title: "Child Support Law",
    visual: "family",
    ...getFamilyServiceContent("Child Support"),
  },
  {
    id: "deployed-parents-custody-rights",
    title: "Deployed Parents’ Custody Rights",
    visual: "deployment",
    ...getArticleContent("custody-rights-for-deployed-parents"),
  },
  {
    id: "how-can-social-media-affect-my-divorce",
    title: "How can Social Media Affect My Divorce",
    visual: "conversation",
    ...getArticleContent("how-social-media-can-affect-a-divorce"),
  },
  {
    id: "military-retirement-benefits",
    title: "Military Retirement Benefits",
    visual: "benefits",
    paragraphs: militaryRetirementSection.paragraphs,
    bullets: militaryRetirementSection.bullets,
  },
  {
    id: "military-divorce-residency",
    title: "Military Divorce Residency",
    visual: "location",
    ...getArticleContent("residency-in-a-florida-military-divorce"),
  },
  {
    id: "same-sex-marriage-in-florida",
    title: "Same Sex Marriage in Florida",
    visual: "equality",
    ...unverifiedTopic("same-sex marriage in Florida"),
  },
  {
    id: "senior-citizen-divorce",
    title: "Senior Citizen Divorce",
    visual: "generations",
    ...unverifiedTopic("senior citizen divorce"),
  },
  {
    id: "substantial-asset-divorce",
    title: "Substantial Asset Divorce",
    visual: "property",
    ...getFamilyServiceContent("Property and Asset Division"),
  },
  {
    id: "the-irretrievably-broken-marriage",
    title: "The Irretrievably-Broken Marriage",
    visual: "separation",
    ...unverifiedTopic("the irretrievably-broken marriage topic"),
  },
  {
    id: "what-to-expect-during-a-florida-divorce",
    title: "What to Expect During a Florida Divorce",
    visual: "checklist",
    paragraphs: [
      "The source website does not outline a step-by-step timeline for a Florida divorce. Timing and issues depend on the people, documents and court process involved.",
      "Contact the office to discuss the questions and circumstances relevant to your matter.",
    ],
    bullets: getFamilyServiceContent("Divorce Representation").bullets,
  },
];
