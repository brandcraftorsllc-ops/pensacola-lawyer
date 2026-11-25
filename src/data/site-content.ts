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
      image: "/images/practice-divorce-family.jpg",
      imageAlt: "Wedding rings, legal documents and a judge's gavel",
    },
    {
      number: "02",
      href: "/family-law#military-divorce",
      title: "Military Divorce",
      description: "Help for military service members and spouses facing family changes.",
      image: "/images/practice-military-divorce.jpg",
      imageAlt: "A US service member discussing a legal matter with an attorney",
    },
    {
      number: "03",
      href: "/family-law",
      title: "Family Law",
      description: "Personal attention for the issues affecting your family and future.",
      image: "/images/practice-family-law.jpg",
      imageAlt: "Parents and child spending time together outdoors",
    },
    {
      number: "04",
      href: "/criminal-defense",
      title: "Criminal Defense",
      description: "Understand your options when criminal allegations put your freedom at stake.",
      image: "/images/criminal-defense-header.png",
      imageAlt: "A courthouse illuminated at dusk",
    },
  ],
  about: {
    eyebrow: "About the Office",
    title: "Paying attention to your expectations",
    description:
      "The office aims to explain what may come next, which decisions you may face and what your options could mean for you and your family.",
    secondary:
      "Located near Corry Station and NAS Pensacola, the office serves local residents and military families with divorce, family matters and criminal defense. The practice was formerly the Law Office of Stephen W. Bowden.",
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
      "Every matter is different, but most begin the same way: a conversation about what happened, what you need and what may come next.",
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
    eyebrow: "Client Experience",
    title: "Every Case Deserves a Personal Approach.",
    description:
      "Personal attention and clear answers, from the first call through the steps that follow.",
  },
  approachSlides: [
    {
      title: "Discuss Your Concerns",
      description:
        "Call the office to discuss your legal concerns and ask about a free consultation.",
    },
    {
      title: "Understand Your Options",
      description: "Consider the options that may be available based on your circumstances.",
    },
    {
      title: "Plan Your Next Steps",
      description: "Identify the information and decisions relevant to your legal matter.",
    },
    {
      title: "Confirm How the Office Can Help",
      description: "The office can confirm whether it handles your matter and how to proceed.",
    },
  ],
  office: {
    eyebrow: "A PENSACOLA OFFICE. A PERSONAL APPROACH.",
    title: "Close to home. Focused on your future.",
    address: "4502 Twin Oaks Drive · Pensacola, FL 32506",
    cta: "Let's Talk About Your Case",
    href: "/case-evaluation",
    image: "/images/pensacola-bay.png",
    imageAlt: "Dusk settles over Pensacola Bay near the naval air station.",
  },
  additionalServicesIntro: {
    eyebrow: "BEYOND THE CORE PRACTICE AREAS",
    title: "More ways we can help.",
    description: "Additional legal services for the challenges that life can bring.",
  },
  // The office's stated commitments (not client reviews).
  testimonials: [
    {
      quote: "Direct. Determined. Dedicated.",
      credit: "Our approach",
      label: "Our approach",
    },
    {
      quote: "Personal attention. Clear answers.",
      credit: "Our commitment",
      label: "Our commitment",
    },
    {
      quote: "Close to home. Focused on your future.",
      credit: "Here in Pensacola",
      label: "Here in Pensacola",
    },
  ],
  faqIntro: {
    eyebrow: "Questions",
    title: "Answers before you call",
    description:
      "Short answers to common questions. Every case is different, so call the office to discuss your own situation.",
  },
  faqs: homeFaqs,
  cta: {
    title: "Need to discuss a legal matter?",
    description: "Call the office to arrange a free consultation and discuss your next steps.",
  },
  additionalServices: [
    {
      number: "01",
      title: "Motions for Contempt",
      description: "Representation when a court order is not being followed.",
      href: "/motions-for-contempt",
      image: {
        src: "/images/practice-areas/motions-for-contempt.jpg",
        alt: "Stone columns and steps of a courthouse framed by autumn leaves",
        position: "50% 55%",
      },
    },
    {
      number: "02",
      title: "DUI Defense",
      description: "Discuss the charge, your license, and the next steps in your defense.",
      href: "/criminal-defense#dui",
      image: {
        src: "/images/practice-areas/dui-defense.jpg",
        alt: "A car driving along a city street at night with light trails behind it",
        position: "35% 55%",
      },
    },
    {
      number: "03",
      title: "Domestic Violence Injunctions",
      description: "Guidance for protective-order proceedings in Florida.",
      href: "/criminal-defense#domestic-violence-injunction",
      image: {
        src: "/images/practice-areas/injunction-support.jpg",
        alt: "One person resting their head on another's shoulder in a quiet moment of support",
        position: "45% 45%",
      },
    },
  ] satisfies {
    number: string;
    title: string;
    description: string;
    href: string;
    image: { src: string; alt: string; position: string };
  }[],
  consultation: {
    eyebrow: "Local Counsel. Personal Attention.",
    title: "Your next step starts with a conversation.",
    description:
      "Speak with the Law Office of James M. Burns about your concerns and the options available to you.",
    cta: "Free Consultation",
    href: "/case-evaluation",
  },
};

export const militaryDivorcePage = {
  eyebrow: "Military Divorce",
  title: "Family-law matters involving military service",
  description:
    "Located near Corry Station and NAS Pensacola, the office handles military divorce matters where Florida has jurisdiction, including divorce, support, modification, custody and contempt. Deployed parents may be able to testify by phone.",
  note:
    "This overview is general information, not legal advice. How a rule or benefit applies depends on your service and marriage records.",
  sections: [
    {
      title: "Military Divorce and Retirement Benefits",
      paragraphs: [
        "Military retirement is treated as a marital asset. The former spouse may receive a pro rata share that continues even after remarriage, and Survivor Benefit Plan death benefits may also be addressed.",
        "The division formula matters: it should be written so that it excludes promotions earned after the divorce. Benefit eligibility and payment depend on the parties' records, so review them before signing an agreement.",
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
        "Healthcare and base privileges follow separate rules from retired pay. Under the 20/20/20 standard (20 years of marriage, 20 years of service and 20 years of overlap), a former spouse may keep TRICARE, commissary, exchange and MWR privileges, which end on remarriage.",
        "Under the 20/20/15 standard (15 years of overlap), commissary, exchange and MWR privileges are not available, but one year of TRICARE may be. Eligibility depends on the exact service and marriage dates.",
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
        "Military service and deployment can affect custody and visitation. Florida law allows a deploying parent to reach a temporary agreement on time-sharing, and a temporary arrangement ends when the service member returns.",
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
        "Child support calculations for service members can include housing allowance, sea or flight pay, retirement pay, Social Security and VA benefits.",
        "Support can begin when the divorce is filed or when the parties separate. Waiting until the final hearing can leave arrears plus interest, so it is worth raising support early.",
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
        "The military decides where service members live, so a divorce must be filed in a state where the residency requirement is met. In Florida, at least one spouse must live in or be stationed in the state for six months before filing.",
        "If the case needs to be filed in another state, a civilian attorney licensed in that state may be needed.",
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
        "The office handles modifications and enforcement of existing orders. A request involving an existing order starts with a review of that order and what has changed since it was entered.",
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
        "The Law Office of James M. Burns is located at 4502 Twin Oaks Drive in Pensacola, near Corry Station and NAS Pensacola. The office serves Pensacola, Milton, Navarre and Gulf Breeze, with particular attention to military families.",
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
      "General answers to questions military families often ask. Your service and marriage dates can change the answer, so call to discuss your situation.",
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
    "The office helps Pensacola families with divorce, child custody, time-sharing, child support, alimony, property division, modifications and enforcement, with personal attention and clear answers at each step.",
  faqIntro: {
    eyebrow: "Family Law Questions",
    title: "Common questions about custody and support",
    description:
      "General answers to common family-law questions. Call the office to discuss how they apply to your family.",
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
        "A motion for contempt asks the court to act when someone is not complying with a court order, such as unpaid child support or alimony, custody or visitation violations, or a violated restraining order.",
        "Contempt can lead to fines, other penalties or even jail, so whether conduct violates an order depends closely on the order's language and the facts.",
      ],
    },
    {
      title: "Filing or responding to a motion",
      paragraphs: [
        "The office helps on both sides: filing motions to enforce child support, custody, alimony or other orders, and defending people accused of contempt, including showing compliance or genuine hardship.",
        "Each case gets a strategy built around the current order, the records and the circumstances. No outcome can be promised before the facts are reviewed.",
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
    "The office defends people charged with DUI, drug trafficking, sexual assault, stalking, domestic violence and injunction violations in Escambia, Santa Rosa and Okaloosa counties.",
  sections: [
    {
      id: "drug-trafficking",
      title: "Drug Trafficking",
      visual: "evidence",
      paragraphs: [
        "Drug charges can involve delivery, sale, production, importation or possession. Trafficking cases often bring high bonds, commonly $100,000 to $1 million, and mandatory minimum sentences under Florida Statute 893.135.",
        "Because the stakes are high from the first appearance, it matters to address bond and review the evidence early.",
      ],
    },
    {
      id: "stalking",
      title: "Stalking",
      visual: "eye",
      paragraphs: [
        "Under Florida law, stalking means repeatedly following or communicating with someone in a way that causes substantial emotional distress and serves no legitimate purpose, including cyberstalking. It is usually a first-degree misdemeanor; aggravated stalking can be a third-degree felony.",
        "Many cases come down to misunderstandings or one person's word against another's. First-offender programs and record sealing or expungement may be options in some cases.",
      ],
    },
    {
      id: "violation-of-domestic-violence-criminal",
      title: "Violation of Domestic Violence – Criminal",
      visual: "order",
      paragraphs: [
        "Violating a domestic, dating, sexual or repeat violence injunction is a first-degree misdemeanor, punishable by up to one year in jail or 12 months of probation and a $1,000 fine. Repeated violations can lead to an aggravated stalking charge.",
        "Prohibited conduct can include coming within 500 feet of the petitioner's home, school or work. Defenses may include that the contact was not willful or that the person never received proper notice of the injunction.",
      ],
    },
    {
      id: "domestic-violence-injunction",
      title: "Domestic Violence Injunction",
      visual: "shield",
      paragraphs: [
        "An injunction is a stay-away order available in cases of domestic violence, repeat violence, dating violence and stalking. Violating one is a crime, and the order becomes part of the public record.",
        "The court can also order classes, require surrender of weapons and address the residence, custody, child support and alimony. Whether you are asking for an injunction or responding to one, it helps to understand the procedure and defenses before the hearing.",
      ],
    },
    {
      id: "sexual-assault",
      title: "Sexual Assault",
      visual: "scales",
      paragraphs: [
        "Sexual assault allegations can involve people who know each other, including a spouse or former spouse. If you are under investigation, do not talk to investigators without an attorney.",
        "Do not delete anything. Preserve messages, call records and calendars that may matter, and remember that calls from jail are recorded.",
      ],
    },
    {
      id: "dui",
      title: "DUI",
      visual: "vehicle",
      paragraphs: [
        "A blood alcohol level of 0.08% or higher is enough for a DUI arrest in Florida, and a DUI can be charged as a misdemeanor or a felony. Penalties can include fines, community service, probation, vehicle impoundment and jail.",
        "A DUI conviction cannot be sealed or expunged, which makes the early decisions in a case important. The office handles DUI cases in Escambia, Santa Rosa and Okaloosa counties.",
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
  credentialNote:
    "Call the office to schedule a free consultation and talk with James M. Burns directly about your matter.",
  sections: [
    {
      title: "The Practice",
      paragraphs: [
        "James M. Burns leads the Law Office of James M. Burns, formerly the Law Office of Stephen W. Bowden.",
        "The office helps people facing divorce, family disputes and criminal charges, with personal attention and clear answers at every step.",
      ],
    },
    {
      title: "Serving Military Families",
      paragraphs: [
        "Located near Corry Station and NAS Pensacola, the office gives particular attention to military families, helping service members, veterans and military spouses with divorce, custody, support and retirement-benefit questions.",
      ],
    },
    {
      title: "Pensacola Community Ties",
      paragraphs: [
        "The office is at 4502 Twin Oaks Drive, Pensacola, Florida 32506.",
        "It serves Pensacola, Milton, Navarre and Gulf Breeze, and handles criminal matters across Escambia, Santa Rosa and Okaloosa counties.",
      ],
    },
  ],
  practiceAreas: [
    {
      title: "Divorce",
      description:
        "Practical guidance through the personal and financial decisions of divorce.",
      href: "/family-law",
      image: "/images/practice-divorce-family.jpg",
      imageAlt: "Wedding rings beside a judge's gavel, representing divorce and family law",
    },
    {
      title: "Military Divorce",
      description:
        "Help for military service members and spouses facing family changes.",
      href: "/family-law#military-divorce",
      image: "/images/practice-military-divorce.jpg",
      imageAlt: "A service member speaking with an attorney about a military family-law matter",
    },
    {
      title: "Family Law",
      description:
        "Personal attention for the issues affecting your family and future.",
      href: "/family-law#child-support-law",
      image: "/images/practice-family-law.jpg",
      imageAlt: "Parents and child spending time together outdoors",
    },
    {
      title: "Criminal Defense",
      description:
        "Understand your options when criminal allegations put your freedom at stake.",
      href: "/criminal-defense",
      image: "/images/criminal-defense-header.png",
      imageAlt: "A courthouse illuminated at dusk",
    },
  ] satisfies {
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
  }[],
  philosophy: {
    eyebrow: "Advocacy Philosophy",
    title: "Personal Attention. Practical Guidance.",
    description:
      "The firm describes its approach as direct, determined and dedicated—taking time to explain what may come next, the decisions you may face and what your options could mean for you and your family.",
  },
};

export const resultsPage = {
  title: "Every case deserves a personal approach",
  description:
    "Each matter is handled on its own facts, with personal attention and clear answers from the first call.",
  categories: [
    {
      title: "Military Divorce",
      description: "Divorce, support and custody for service members and military spouses.",
    },
    {
      title: "Time-Sharing",
      description: "Parenting plans and time-sharing schedules, including deployment planning.",
    },
    {
      title: "Child Support",
      description: "Guideline support calculations, modifications and enforcement.",
    },
    {
      title: "Retired Pay Division",
      description: "Dividing military retirement, SBP and related benefits.",
    },
    {
      title: "DUI Defense",
      description: "DUI charges in Escambia, Santa Rosa and Okaloosa counties.",
    },
    {
      title: "Injunction Hearing",
      description: "Asking for or responding to a domestic violence injunction.",
    },
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
      "Military moves and changing assignments can complicate where a divorce may be filed. Here is how residency works for military families in Florida.",
    sections: [
      {
        title: "Military moves and residency",
        paragraphs: [
          "The military decides where service members live, and frequent relocations and deployments can make it unclear which state a family belongs to. A divorce must be filed in a state where the residency requirement is met.",
        ],
      },
      {
        title: "Florida's six-month rule",
        paragraphs: [
          "To file for divorce in Florida, at least one spouse must live in or be stationed in Florida for six months before the petition is filed. Other states set their own requirements, and if the case belongs in another state, a civilian attorney licensed there may be needed.",
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
        title: "Talk it through",
        paragraphs: [
          "Where to file can affect timing, support and how benefits are handled. Call the office to review your orders and your family's situation before you file.",
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
      "Florida law gives deploying parents a faster way to set temporary custody and time-sharing arrangements while they serve.",
    sections: [
      {
        title: "Deployment and parenting arrangements",
        paragraphs: [
          "Under the Uniform Deployed Parents Custody and Visitation Act, a deploying parent can reach quick agreements on custody and time-sharing, and disputes can be heard promptly.",
        ],
      },
      {
        title: "Temporary, not permanent",
        paragraphs: [
          "A permanent custody arrangement cannot be set simply because a parent is deploying. A temporary agreement ends when the service member returns, and the law widens who can be given caretaking authority during the deployment.",
        ],
      },
      {
        title: "Review existing orders",
        paragraphs: [
          "Before making changes, review the current parenting plan and court orders. A plan that anticipates deployment, with clear notice and scheduling terms, can prevent conflict later.",
        ],
      },
      {
        title: "Topics to discuss",
        bullets: [
          "The current parenting plan or court order",
          "The expected service schedule",
          "The child's care and communication arrangements",
          "Who should have caretaking authority while you are away",
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
      "The 20/20/20 and 20/20/15 standards decide which military benefits a former spouse keeps after divorce.",
    sections: [
      {
        title: "The 20/20/20 standard",
        paragraphs: [
          "A former spouse meets the 20/20/20 standard with 20 years of marriage, 20 years of creditable service and 20 years of overlap between the two. They keep commissary and exchange privileges, TRICARE coverage and MWR theater privileges, all of which end on remarriage.",
        ],
      },
      {
        title: "The 20/20/15 standard",
        paragraphs: [
          "When the marriage and service overlap for 15 years instead of 20, commissary, exchange and MWR privileges are not available, but the former spouse may receive one year of TRICARE coverage.",
        ],
      },
      {
        title: "Documents to have reviewed",
        paragraphs: [
          "The exact dates of the marriage and of creditable service decide which standard applies. Have your marriage certificate, service records and any existing orders ready when you meet.",
        ],
      },
      {
        title: "Get case-specific advice",
        paragraphs: [
          "Benefits are only part of a military divorce. Retired pay, Survivor Benefit Plan elections and support all need attention, so call the office to discuss your situation.",
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
      "How Florida defines stalking and cyberstalking, and when a charge becomes a felony.",
    sections: [
      {
        title: "What counts as stalking",
        paragraphs: [
          "Florida defines stalking as willfully, maliciously and repeatedly following, harassing or cyberstalking another person in a way that causes substantial emotional distress and serves no legitimate purpose.",
        ],
      },
      {
        title: "Misdemeanor or felony",
        paragraphs: [
          "Stalking is generally a first-degree misdemeanor. Aggravated stalking, such as stalking that involves a credible threat or violates an injunction, can be charged as a third-degree felony.",
        ],
      },
      {
        title: "Individual circumstances matter",
        paragraphs: [
          "Many stalking cases grow out of misunderstandings or one person's word against another's. First-offender programs and record sealing or expungement may be available in some cases.",
        ],
      },
      {
        title: "Get advice early",
        paragraphs: [
          "If you are under investigation or have been charged, contact the office before you respond. The office handles stalking cases in Escambia, Santa Rosa and Okaloosa counties.",
        ],
      },
    ],
    related: ["what-to-do-after-a-dui-arrest-in-florida"],
  },
  {
    slug: "what-to-do-after-a-dui-arrest-in-florida",
    category: "Criminal Defense",
    date: "July 13, 2026",
    title: "What to Do After a DUI Arrest in Florida",
    listingTitle: "What to Do After a DUI Arrest in Florida",
    description:
      "What a Florida DUI charge can mean, and why the decisions you make early in the case matter.",
    sections: [
      {
        title: "How a DUI is charged",
        paragraphs: [
          "A blood alcohol level of 0.08% or higher is enough for a DUI arrest in Florida. Depending on the circumstances, a DUI can be charged as a misdemeanor or a felony.",
        ],
      },
      {
        title: "Possible penalties",
        bullets: [
          "Fines and community service",
          "Probation",
          "Vehicle impoundment or immobilization",
          "Jail or prison in more serious cases",
        ],
      },
      {
        title: "Your record",
        paragraphs: [
          "A DUI conviction cannot be sealed or expunged. Sealing may be available when a case ends in a withheld adjudication on a lesser charge, and expungement generally only when a case is dismissed or ends in a not-guilty verdict. That makes the early decisions in a DUI case important.",
        ],
      },
      {
        title: "Contact the office",
        paragraphs: [
          "Keep every document you received and note any court dates. The office handles DUI cases in Escambia, Santa Rosa and Okaloosa counties; call to discuss your arrest and next steps.",
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
      "Posts, photos and messages can come up in a divorce. Here is what to think about before you share.",
    sections: [
      {
        title: "Why posts can matter",
        paragraphs: [
          "Social media can touch on support, parenting, property, income and credibility. A photo of a new purchase or a post about a night out may be raised by the other side, depending on the issues in the case.",
        ],
      },
      {
        title: "Think before you post",
        bullets: [
          "Assume anything you post may be seen by your spouse",
          "Avoid discussing the case or the other parent online",
          "Do not delete existing content without advice",
          "Ask your attorney about content you are unsure of",
        ],
      },
      {
        title: "Avoid assumptions",
        paragraphs: [
          "Not every post will matter in a divorce. Call the office if you have questions about particular content or messages.",
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
    paragraphs: [
      "Same-sex marriage has been recognized in Florida since January 6, 2015, following the Brenner v. Scott decision. Married same-sex couples have the same rights as any married couple, including joint tax filing, family health coverage, hospital visitation and inheritance rights.",
      "If the marriage ends, those same protections apply: custody and time-sharing, child and spousal support, and equitable division of property.",
    ],
    bullets: [
      "Divorce for same-sex couples",
      "Custody, time-sharing and support",
      "Equitable division of property",
    ],
  },
  {
    id: "senior-citizen-divorce",
    title: "Senior Citizen Divorce",
    visual: "generations",
    paragraphs: [
      "Divorce after 50, often called a \"gray divorce,\" is increasingly common. Child support is rarely the issue; alimony often is, and after a marriage of 17 years or more one spouse is likely to receive it.",
      "Later-life divorce also raises questions about dividing retirement accounts and Social Security, protecting inheritances for adult children or grandchildren, and re-entering the workforce. It is never too late to start over.",
    ],
    bullets: [
      "Alimony after a long-term marriage",
      "Retirement accounts and Social Security",
      "Inheritance plans for children and grandchildren",
    ],
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
    paragraphs: [
      "Florida is a no-fault divorce state. To get a divorce, a spouse must show that the marriage is irretrievably broken or that the other spouse is mentally incapacitated; there is no need to prove adultery or other fault.",
      "If one spouse disputes that the marriage is broken, the judge may delay the decision and ask for more information. Disputing the petition does not guarantee the divorce will be stopped, and mediation can often avoid a long, expensive case.",
    ],
  },
  {
    id: "what-to-expect-during-a-florida-divorce",
    title: "What to Expect During a Florida Divorce",
    visual: "checklist",
    paragraphs: [
      "In an uncontested divorce without children, the paperwork is prepared from basic information and the divorce is often final about 30 days after filing, without a court hearing.",
      "With children, a parenting plan and child support must be addressed, and parents must complete a Florida parenting class. Most contested cases settle at mediation; a trial is usually best avoided.",
    ],
    bullets: [
      "Uncontested divorce, often final in about 30 days",
      "Parenting plan and guideline child support",
      "Mediation before any trial",
    ],
  },
];
