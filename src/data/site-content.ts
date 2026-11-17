import type { AccordionItemData } from "@/components/ui/Accordion";
import { familyFaqs, familyServiceItems, homeFaqs, militaryFaqs } from "@/data/faq";
import {
  SITE_ADDRESS,
  SITE_CITY,
  SITE_EMAIL,
  SITE_PHONE,
  SERVICE_AREA,
} from "@/lib/site";

export const homeContent = {
  eyebrow: "Pensacola, Florida | Military Divorce, Family Law & Criminal Defense",
  titleFirst: "Your Service Protected.",
  titleSecond: "Your Family Defended.",
  lead:
    "Military divorce, family law and criminal defense for Pensacola service members, veterans and families. Strategic. Discreet. Relentless.",
  promise: "Confidential. Responsive. Mission-focused.",
  trustItems: [
    "Military Divorce Focus",
    "Family Law and Criminal Defense",
    "Serving the Emerald Coast",
    "Confidential Consultations",
  ],
  practiceIntro: {
    eyebrow: "Practice Areas",
    title: "Three pillars, one standard of preparation",
    description:
      "The office focuses on the family law and criminal matters that most often involve service members, veterans and the families around them.",
  },
  practiceAreas: [
    {
      href: "/military-divorce",
      title: "Military Divorce & Family Law",
      description:
        "Retired pay, SBP, TRICARE and deployment-aware custody for service members, veterans and military spouses.",
      bullets: ["USFSPA and the 10/10 rule", "20/20/20 and 20/20/15", "Deployment custody planning"],
      icon: "✦",
    },
    {
      href: "/family-law",
      title: "Civilian Family Law & Child Custody",
      description:
        "Divorce, time-sharing, support, property division and post-judgment enforcement for Pensacola families.",
      bullets: ["Custody and parenting plans", "Support and alimony", "Modifications and contempt"],
      icon: "⌂",
    },
    {
      href: "/criminal-defense",
      title: "Criminal Defense",
      description:
        "Calm, prepared representation for DUI, domestic violence, injunctions, drug and felony allegations.",
      bullets: ["DUI and license issues", "Domestic violence and injunctions", "Misdemeanors and felonies"],
      icon: "◇",
    },
  ],
  militaryIntro: {
    eyebrow: "Why Military Divorce Is Different",
    title: "Benefits, orders and jurisdiction change the analysis",
    description:
      "A military divorce is not a civilian divorce with a uniform. Retired pay, healthcare, deployment and residency each follow their own rules.",
  },
  militaryFeatures: [
    {
      title: "Military Pension Division",
      description:
        "The Uniformed Services Former Spouses’ Protection Act and the “10/10 rule” govern whether and how retired pay can be divided.",
    },
    {
      title: "Survivor Benefit Plan (SBP)",
      description:
        "SBP elections, coverage and beneficiary decisions carry long-term financial consequences that must be handled with care.",
    },
    {
      title: "TRICARE and Healthcare Coverage",
      description:
        "Eligibility for military healthcare after a divorce depends on specific statutory requirements, not simply the length of the marriage.",
    },
    {
      title: "Deployment and Custody Planning",
      description:
        "Deployment-aware parenting plans address mobility, notice requirements and temporary arrangements before orders are needed.",
    },
    {
      title: "Servicemembers Civil Relief Act",
      description:
        "The SCRA can provide limited protections involving default judgments, stays and certain financial obligations during active service.",
    },
    {
      title: "Jurisdiction and Residency",
      description:
        "Where a military family may file depends on residency, domicile and statutory waiting periods that differ from civilian cases.",
    },
  ],
  about: {
    eyebrow: "About the Attorney",
    title: "Meet James Martinez Burns",
    description:
      "James Martinez Burns is a Pensacola attorney whose practice centers on military divorce and family law, alongside criminal defense. He represents active-duty service members, reservists, National Guard members, veterans, military spouses and civilian families across the Emerald Coast.",
    secondary:
      "Military family life runs on orders, deployments and timelines civilian families never face, and the legal decisions involved can shape a family’s finances and stability for years. His approach is direct, discreet and prepared: clear advice, careful documentation, and communication that respects what you are already carrying.",
    facts: [
      { label: "Bar Admission", value: "Placeholder — add Florida Bar admission and year" },
      { label: "Education", value: "Placeholder — add law school and undergraduate details" },
      { label: "Affiliations", value: "Placeholder — add professional and military associations" },
    ],
  },
  approachIntro: {
    eyebrow: "Our Approach",
    title: "A clear path, from first call to next chapter",
    description: "Four deliberate steps, each built to keep you informed and in control.",
  },
  approach: [
    {
      title: "Confidential Consultation",
      description:
        "We start with a private conversation about your service, your family and what you are facing. Nothing is assumed.",
    },
    {
      title: "Strategy Built Around Your Service and Family",
      description:
        "A plan shaped by your orders, your timeline and your goals, with jurisdiction and benefits considered from the outset.",
    },
    {
      title: "Decisive Representation",
      description:
        "Clear communication, prepared filings and firm advocacy at the negotiating table or before the court.",
    },
    {
      title: "Resolution and Your Next Chapter",
      description:
        "We work toward closure that protects what matters most, so you can move forward with clarity.",
    },
  ],
  testimonialIntro: {
    eyebrow: "Client Voices",
    title: "Words from the families we serve",
    description:
      "Placeholder testimonials are shown here and on the Results page until verified client feedback is supplied.",
  },
  testimonials: [
    {
      quote:
        "Placeholder, replace with verified client feedback. A short, specific statement about how clear and calm the process felt during a difficult transition.",
      credit: "Placeholder — client review",
      label: "Placeholder, replace with verified client feedback",
    },
    {
      quote: "Placeholder, replace with verified client feedback and approved case results.",
      credit: "Placeholder — client review",
      label: "Placeholder, replace with verified client feedback",
    },
    {
      quote: "Placeholder, replace with verified client feedback and approved case results.",
      credit: "Placeholder — client review",
      label: "Placeholder, replace with verified client feedback",
    },
  ],
  faqIntro: {
    eyebrow: "Questions",
    title: "Answers before you call",
    description:
      "General information only. Every family’s circumstances differ, and nothing here is legal advice about your case.",
  },
  faqs: homeFaqs,
  cta: {
    title: "Take the Next Step With Confidence.",
    description: "Your questions are confidential. Reach out today and let’s build your strategy.",
  },
};

export const militaryDivorcePage = {
  eyebrow: "Military Divorce & Family Law",
  title: "Military divorce raises questions civilian cases never do",
  description:
    "Retired pay, healthcare, deployment orders and jurisdiction all interact with a dissolution of marriage. This page explains the issues most often involved so you can prepare for a conversation with an attorney.",
  note:
    "The information on this page is general and does not constitute legal advice. Military benefits and family law rules change, and how they apply depends on your service dates, orders and family circumstances.",
  sections: [
    {
      title: "Military Pension Division: USFSPA and the 10/10 Rule",
      paragraphs: [
        "Retired pay earned during a marriage is often the largest single asset in a military divorce. Under the Uniformed Services Former Spouses’ Protection Act (USFSPA), a state court may treat disposable retired pay as marital property and divide it under state law, subject to federal limits.",
        "The “10/10 rule” controls how that division is paid, not whether a court may order it. Where the marriage and the creditable service overlapped for at least ten years, the Defense Finance and Accounting Service can generally pay a former spouse directly. Shorter overlaps usually require a different payment mechanism written into the final judgment.",
      ],
      bullets: [
        "How disposable retired pay is calculated and which deductions are excluded",
        "Whether the marital portion is defined by a time formula or a fixed dollar amount",
        "Drafting an order DFAS can accept and administer without amendment",
      ],
    },
    {
      title: "The 20/20/20 and 20/20/15 Rules",
      paragraphs: [
        "These rules address whether an unremarried former spouse keeps military healthcare and certain base privileges after divorce. They are separate from pension division, and the two are often confused.",
        "The 20/20/20 rule generally requires at least 20 years of marriage, at least 20 years of creditable service, and at least 20 years of overlap between the marriage and the service. A qualifying unremarried former spouse may retain medical, dental, commissary, exchange and military legal assistance eligibility.",
        "The 20/20/15 rule applies where the overlap is at least 15 years but fewer than 20. It generally provides a limited period of continued medical coverage rather than permanent eligibility. Remarriage changes the analysis.",
      ],
      bullets: [
        "How overlap years are documented in the record",
        "What a court order must say for a former spouse to be recognized",
        "Why the distinction matters before a settlement is signed",
      ],
    },
    {
      title: "Survivor Benefit Plan (SBP)",
      paragraphs: [
        "The Survivor Benefit Plan is an annuity a retiree may elect to provide continuing monthly income to a beneficiary after death. In a divorce, the SBP decision can matter more over time than the pension division itself.",
        "A court may order former spouse coverage, and a deemed election generally must be requested within one year of the divorce for it to take effect. Deadlines can be difficult to correct once missed.",
      ],
      bullets: [
        "Whether coverage already exists and who is currently named",
        "The cost of coverage and which party bears it",
        "Documenting an election so it is recorded correctly",
      ],
    },
    {
      title: "TRICARE and Healthcare Coverage",
      paragraphs: [
        "Healthcare eligibility after a military divorce is set by statute, and the length of the marriage alone does not decide it. TRICARE generally follows the 20/20/20 analysis; former spouses who do not qualify may have a limited option to purchase temporary coverage through the Continued Health Care Benefit Program.",
        "Because coverage can end abruptly, it is worth planning healthcare for the period after the divorce is final. Coverage for children is analyzed separately from coverage for a former spouse.",
      ],
      bullets: [
        "An eligibility review before a settlement is signed",
        "Coverage for minor children and young adults",
        "Coordination with employer or marketplace coverage",
      ],
    },
    {
      title: "Deployment and Custody Planning Under Florida Law",
      paragraphs: [
        "Florida’s Uniform Deployed Parents Custody and Visitation Act addresses what happens to time-sharing when a parent receives deployment orders. It provides mechanisms for a temporary arrangement, for delegating limited time to a close family member, and for notifying the other parent of pending deployment.",
        "A parenting plan built with deployment in mind can establish notice requirements, a temporary schedule and communication terms before a crisis arrives, rather than after a motion is filed.",
      ],
      bullets: [
        "Notice provisions and how deployment is defined",
        "Temporary schedules and delegated time with relatives",
        "Restoring the original schedule after return",
      ],
    },
    {
      title: "Servicemembers Civil Relief Act (SCRA) Protections",
      paragraphs: [
        "The SCRA offers limited protections to service members on active duty. In family law, the provisions most often used allow a request to stay proceedings when military service materially affects the ability to appear, and require an affidavit before a default judgment is entered.",
        "The SCRA also caps interest at six percent on obligations incurred before military service in some circumstances. It is not a blanket immunity from court proceedings and does not suspend every deadline.",
      ],
      bullets: [
        "Stays and continuances when service interferes with participation",
        "Default judgment safeguards",
        "Interest rate relief on pre-service obligations",
      ],
    },
    {
      title: "Residency and Jurisdiction for Military Families",
      paragraphs: [
        "Florida requires that a petitioner reside in the state for six months before filing for dissolution. For military families, residency and domicile questions are usually reviewed alongside orders, home of record, and where the spouse and children actually live.",
        "When more than one state could be involved, jurisdiction over support and custody may be governed by statutes such as the Uniform Interstate Family Support Act. The choice of forum can affect timing and what relief is available.",
      ],
      bullets: [
        "Proving the six-month residency requirement",
        "Which state has authority over custody and support",
        "How a filing in one state interacts with another",
      ],
    },
    {
      title: "Pensacola Base Jurisdiction",
      paragraphs: [
        "Where a case is filed depends on where the parties live, and military families in this region often cross county lines. A petition is typically filed in the circuit court of the county where the parties reside.",
        "This office is based in Pensacola, a short distance from Corry Station and NAS Pensacola, and serves clients from Escambia, Santa Rosa and Okaloosa counties, including NAS Whiting Field, Eglin AFB and Hurlburt Field.",
      ],
      bullets: [
        "Escambia County — Pensacola, Corry Station, NAS Pensacola",
        "Santa Rosa County — Milton, Navarre, NAS Whiting Field",
        "Okaloosa County — Fort Walton Beach, Eglin AFB, Hurlburt Field",
      ],
    },
  ],
  faqIntro: {
    eyebrow: "Military Divorce Questions",
    title: "A few answers to start with",
    description: "These are general answers. Your dates and orders determine how the rules apply.",
  },
  faqs: militaryFaqs,
  cta: {
    title: "Facing a military divorce?",
    description: "Bring your orders, your timeline and your questions. The first conversation is confidential.",
  },
};

export const familyLawPage = {
  eyebrow: "Civilian Family Law & Child Custody",
  title: "Family law matters handled with care and preparation",
  description:
    "Divorce, custody, support and post-judgment disputes are decided on records, deadlines and documentation. These are the matters the office handles, and what each one generally involves.",
  services: familyServiceItems,
  faqIntro: {
    eyebrow: "Family Law Questions",
    title: "Common questions about custody and support",
    description: "General information only. Every case turns on its own facts and documents.",
  },
  faqs: familyFaqs,
  cta: {
    title: "Clarity for the decisions ahead.",
    description: "Custody, support and property decisions last for years. Start with a confidential conversation.",
  },
};

export const criminalDefensePage = {
  eyebrow: "Criminal Defense",
  title: "A calm, prepared response to a criminal charge",
  description:
    "A charge is the beginning of a process, not an ending. The office handles the matters listed below and works through each stage with attention to the record, the deadlines and the consequences that reach beyond the courtroom.",
  servicesIntro: {
    eyebrow: "Practice Areas",
    title: "Matters the office handles",
    description: "Each of these matters is different in its defenses, its deadlines and its consequences. The descriptions below are general.",
  },
  services: [
    {
      title: "DUI Defense",
      paragraphs: [
        "Florida DUI cases involve both a criminal charge and a separate administrative license process with its own short deadlines. The evidence usually centers on the stop, the investigation and testing, and each is reviewed closely.",
        "License consequences can begin before any court appearance, so the first steps after an arrest matter. This is general information, not advice about a specific case.",
      ],
    },
    {
      title: "Sex Crimes and Sexual Assault Defense",
      paragraphs: [
        "These charges carry severe consequences and are investigated thoroughly and early. Representation focuses on the accuracy of the allegations, the reliability of the evidence, and protecting the rights of the accused at every stage.",
        "Early involvement matters most where an investigation is open and no charge has yet been filed.",
      ],
    },
    {
      title: "Violent Crimes, Including Serious Felony Defense",
      paragraphs: [
        "Serious felony allegations require a careful review of the state’s evidence, including identification, statements and physical proof. Sentencing exposure and collateral consequences are addressed from the first meeting.",
        "Includes matters where the possible penalty is measured in years rather than months.",
      ],
    },
    {
      title: "Domestic Violence Defense",
      paragraphs: [
        "Domestic violence charges often involve disputed accounts of a single event and can affect housing, firearm rights and family law proceedings at the same time. A violation of an existing order is treated as a separate offense.",
        "Where a family law case is also open, the two matters are best considered together.",
      ],
    },
    {
      title: "Domestic Violence Injunctions",
      paragraphs: [
        "An injunction is a protective-order proceeding in civil court, separate from a criminal charge. It can set contact restrictions, temporary time-sharing and other conditions, and it can be contested at a hearing.",
        "Responding to a petition has a short timeline and a defined evidentiary process.",
      ],
    },
    {
      title: "Drug Trafficking",
      paragraphs: [
        "Trafficking charges are driven by statutory quantity thresholds and can carry mandatory minimum exposure. The analysis usually examines the stop, the search, chain of custody and the weight attributed to the substance.",
        "Florida thresholds vary by substance and are set by statute.",
      ],
    },
    {
      title: "Stalking",
      paragraphs: [
        "Stalking allegations often involve messages, repeated contact or conduct described as a course of action. Whether the matter is charged as a misdemeanor or a felony generally depends on the conduct alleged and any prior record.",
        "The content and context of communications are usually central to the case.",
      ],
    },
    {
      title: "Misdemeanors and Felonies",
      paragraphs: [
        "Not every charge requires the same response, but every charge deserves a review of the facts, the available defenses and the practical consequences of a plea or a conviction.",
        "Includes cases resolved through diversion or pretrial programs where eligible.",
      ],
    },
  ],
  stepsIntro: {
    eyebrow: "If You Have Been Charged",
    title: "Calm, practical first steps",
    description: "A charge is a process with stages. These steps apply to most criminal matters, and they buy time to make better decisions.",
  },
  steps: [
    {
      title: "Say little, and ask for counsel",
      description:
        "You are not required to explain the situation to investigators. Identify yourself, decline to answer questions, and ask to speak with an attorney before going further.",
    },
    {
      title: "Keep the paperwork",
      description:
        "The citation, bond documents, booking paperwork and any court notice all matter. Note the case number, the court and the date on every document.",
    },
    {
      title: "Do not miss a court date",
      description:
        "A missed appearance can create additional problems, including a warrant. If you cannot appear, address it before the date rather than after.",
    },
    {
      title: "Write down what you remember",
      description:
        "Record the sequence of events while it is fresh, including names, times and locations. Do not post about the matter on social media or discuss it with witnesses.",
    },
    {
      title: "Tell your command if you serve",
      description:
        "Service members may be required to report certain arrests, and a civilian case can proceed alongside command action. Addressing both tracks early avoids surprises.",
    },
  ],
  stepsNote:
    "Service members may face both civilian and military consequences for the same conduct. A command can take administrative or disciplinary action while a civilian case is pending, so the two should be planned for together.",
  cta: {
    title: "Charged or under investigation?",
    description:
      "The earlier the facts are reviewed, the more options usually remain. Reach out for a confidential conversation.",
  },
};

export const attorneyPage = {
  eyebrow: "Attorney Profile",
  title: "James Martinez Burns",
  description:
    "Attorney at the Law Office of James M. Burns, practicing military divorce, family law and criminal defense in Pensacola.",
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
        "James Martinez Burns is a Pensacola attorney with a practice centered on military divorce and family law, alongside criminal defense. He works with active-duty service members, reservists, National Guard members, veterans, military spouses and civilian families throughout Escambia, Santa Rosa and Okaloosa counties.",
        "Placeholder — add the attorney's background: where he grew up, military or family experience that shaped the practice, and the path that led to opening the Law Office of James M. Burns in Pensacola.",
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
        "The office is located on Twin Oaks Drive in southwest Pensacola, a short drive from Corry Station and NAS Pensacola. That proximity is practical: clients can meet in person before or after duty hours without a long trip.",
        "Placeholder — add community involvement, local organizations, volunteer work or ties to the military community that the attorney wants listed.",
      ],
    },
    {
      title: "Advocacy Philosophy",
      paragraphs: [
        "The approach is direct and prepared: understand the facts and the documents first, explain the realistic options, and keep the client informed at each stage. Cases are built to be ready for a hearing, because preparation shapes negotiation as much as it shapes trial.",
        "Communication is treated as part of the representation, not an extra. Questions are answered, deadlines are tracked, and clients are told what is happening and what comes next.",
      ],
    },
  ],
};

export const resultsPage = {
  title: "Client feedback and case outcomes",
  description:
    "This page is reserved for verified client feedback and approved case results. The entries below are placeholders until that information is supplied and approved for publication.",
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
      "Bring your questions and documents to a confidential consultation and hear how the law applies to your situation.",
  },
};

export const contactPage = {
  eyebrow: "Contact & Pensacola Office",
  title: "Talk with the office",
  description:
    "Call, email or send a message. Consultations are confidential, and the office will explain what to bring before you meet.",
  address: SITE_ADDRESS,
  city: SITE_CITY,
  phone: SITE_PHONE,
  email: SITE_EMAIL,
  officeHours: "Office hours: placeholder — add regular hours",
  officeDescription:
    "The office is on Twin Oaks Drive in southwest Pensacola, a short drive from Corry Station and NAS Pensacola.",
  gettingHere:
    "Directions placeholder — add turn-by-turn notes from the main routes and where to park.",
  serviceArea: SERVICE_AREA,
};

export const articleData = [
  {
    slug: "residency-in-a-florida-military-divorce",
    category: "Military Divorce",
    readTime: "4 min read",
    title: "Residency Issues in a Florida Military Divorce",
    listingTitle: "Residency Issues in a Florida Military Divorce",
    description:
      "Florida requires six months of residency before a dissolution is filed. For service members, that requirement is often more layered than it first appears.",
    sections: [
      {
        title: "The statutory starting point",
        paragraphs: [
          "A dissolution of marriage may be filed in Florida when the petitioner has resided in the state for six months before the filing. That requirement is separate from where the marriage took place or where the other spouse lives.",
        ],
      },
      {
        title: "Why military families ask about it",
        paragraphs: [
          "A service member may be stationed in Pensacola while retaining a different home of record, or may have recently arrived from an overseas assignment. Residency and domicile are not always the same question, and orders can complicate how each is documented.",
          "Judges look at the facts: where the person actually lives, how long they have lived there, and what ties exist to another state. Documents such as a lease, utility records, a driver's license and orders are commonly relevant.",
        ],
      },
      {
        title: "What to gather before a consultation",
        bullets: [
          "Your current orders and reporting date",
          "Your home of record and state of legal residence",
          "Dates of residence in Florida for each spouse",
          "Where the children have lived for the past six months",
        ],
      },
      {
        title: "Related questions",
        paragraphs: [
          "When more than one state could be involved, jurisdiction over support and custody may be governed by separate statutes, and the choice of forum can affect timing. Those questions are best reviewed with an attorney using your actual dates.",
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
    readTime: "4 min read",
    title: "Custody Rights for a Deployed Parent",
    listingTitle: "Custody Rights for a Deployed Parent",
    description:
      "Deployment changes a schedule, but Florida law provides a process for a temporary arrangement and a return to the original plan.",
    sections: [
      {
        title: "A temporary arrangement, not a permanent change",
        paragraphs: [
          "Florida's Uniform Deployed Parents Custody and Visitation Act addresses time-sharing when a parent receives deployment orders. It allows for a temporary modification during the deployment rather than a permanent rewrite of the parenting plan.",
        ],
      },
      {
        title: "Notice and planning",
        paragraphs: [
          "The statute provides for notice to the other parent and for arrangements during the deployment, including limited delegation of time to a close family member in some circumstances. A parenting plan that anticipates deployment can set these terms before anything is filed.",
        ],
      },
      {
        title: "After returning home",
        paragraphs: [
          "The original schedule generally resumes when deployment ends. Keeping records of the arrangement during deployment, including communications and exchanges, makes the transition back easier to document.",
        ],
      },
      {
        title: "What a plan can address",
        bullets: [
          "How and when deployment notice is given",
          "The temporary schedule and exchange logistics",
          "Communication with the deployed parent",
          "Delegated time with relatives, if the plan allows it",
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
    readTime: "5 min read",
    title: "Military Retirement Benefits and the 20/20/20 Rule",
    listingTitle: "Military Retirement Benefits and the 20/20/20 Rule",
    description:
      "The 20/20/20 rule is about healthcare eligibility, not pension division. Confusing the two can lead to costly assumptions in a settlement.",
    sections: [
      {
        title: "Two separate questions",
        paragraphs: [
          "Retired pay division is governed by the Uniformed Services Former Spouses' Protection Act and state law. Healthcare eligibility after divorce is governed by a different set of rules, including the 20/20/20 and 20/20/15 tests.",
        ],
      },
      {
        title: "How the test works",
        paragraphs: [
          "The 20/20/20 rule generally requires at least 20 years of marriage, at least 20 years of creditable service, and at least 20 years of overlap between the marriage and the service. When those conditions are met, an unremarried former spouse may retain medical and certain base privileges.",
          "Where the overlap is at least 15 but fewer than 20 years, the 20/20/15 rule may provide a limited period of continued medical coverage rather than ongoing eligibility.",
        ],
      },
      {
        title: "Why documentation matters",
        paragraphs: [
          "Dates drive these tests. Service records, marriage dates and the divorce date all need to be confirmed early, because the answer can shape both healthcare planning and settlement terms.",
        ],
      },
      {
        title: "Do not overlook the Survivor Benefit Plan",
        paragraphs: [
          "SBP coverage is a separate annuity decision with its own deadlines, including a deemed election that generally must be requested within one year of the divorce.",
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
    readTime: "4 min read",
    title: "When Stalking Is Charged as a Misdemeanor or a Felony",
    listingTitle: "When Stalking Is Charged as a Misdemeanor or a Felony",
    description:
      "Stalking allegations usually turn on a course of conduct and its effect on the person targeted, not on a single message.",
    sections: [
      {
        title: "The core of the allegation",
        paragraphs: [
          "Stalking allegations typically describe repeated conduct directed at a specific person that causes substantial emotional distress and serves no legitimate purpose. A single incident is usually not enough on its own.",
        ],
      },
      {
        title: "Misdemeanor and felony exposure",
        paragraphs: [
          "Whether a matter is charged as a misdemeanor or a felony generally depends on the conduct alleged and on any prior record. Aggravated allegations, threats and violations of existing orders can change the level of the charge.",
        ],
      },
      {
        title: "Evidence that matters",
        paragraphs: [
          "Messages, call logs, social media activity and witness accounts usually define the case. Context, including whether contact was mutual or invited, is often central to how the allegation is evaluated.",
        ],
      },
      {
        title: "First steps",
        paragraphs: [
          "Preserve the communications rather than deleting them, avoid further contact, and treat any court date as mandatory. General information only; every case depends on its facts.",
        ],
      },
    ],
    related: ["what-to-do-after-a-dui-arrest-in-florida"],
  },
  {
    slug: "what-to-do-after-a-dui-arrest-in-florida",
    category: "Criminal Defense",
    readTime: "4 min read",
    title: "What to Do After a DUI Arrest in Florida",
    listingTitle: "What to Do After a DUI Arrest in Florida",
    description:
      "A Florida DUI involves two tracks running at once: a criminal case and an administrative license process with its own deadlines.",
    sections: [
      {
        title: "Two processes, two timelines",
        paragraphs: [
          "A DUI arrest usually starts a criminal case and a separate administrative review of driving privileges. The license process can move faster than the court case, so the paperwork you received at arrest matters immediately.",
        ],
      },
      {
        title: "The first few days",
        bullets: [
          "Read every document you were given and note each deadline",
          "Note the court date, courthouse and case number",
          "Do not discuss the stop or the testing with anyone but your attorney",
          "Keep the vehicle, booking and testing paperwork together",
        ],
      },
      {
        title: "What gets reviewed",
        paragraphs: [
          "The stop, the investigation, the field sobriety exercises and any breath or blood testing are all examined. Whether the required procedures were followed is often the central question.",
        ],
      },
      {
        title: "Service members",
        paragraphs: [
          "A DUI can carry consequences beyond the criminal case for service members, including command action and reporting obligations. Addressing both tracks early avoids conflicting information.",
        ],
      },
    ],
    related: ["when-stalking-is-a-misdemeanor-or-felony"],
  },
  {
    slug: "how-social-media-can-affect-a-divorce",
    category: "Family Law",
    readTime: "3 min read",
    title: "How Social Media Can Affect a Divorce",
    listingTitle: "How Social Media Can Affect a Divorce",
    description:
      "Posts are evidence. In a family law case, they can be used to test credibility, income claims and parenting decisions.",
    sections: [
      {
        title: "Posts are discoverable",
        paragraphs: [
          "Public and semi-public content is routinely collected in family law cases, including photos, check-ins and comments. Even deleted material can surface through screenshots or records held by another party.",
        ],
      },
      {
        title: "Where it shows up",
        bullets: [
          "Income and employment claims in support cases",
          "Parenting decisions and supervision questions",
          "Statements about the other parent or the case itself",
          "Lifestyle claims that conflict with financial disclosures",
        ],
      },
      {
        title: "Practical guidance",
        paragraphs: [
          "Assume anything posted may be read aloud in a courtroom. Pause new posts about the case, review privacy settings, and ask friends and family not to post about the situation either.",
        ],
      },
      {
        title: "What not to do",
        paragraphs: [
          "Do not delete material after litigation begins without discussing it with an attorney, and do not create new accounts to monitor the other party. Both can create problems that are avoidable.",
        ],
      },
    ],
    related: [],
  },
] as const;

export const familyServiceAccordionItems: AccordionItemData[] = familyServiceItems.map((item) => ({
  question: item.question,
  answer: item.description,
  bullets: item.bullets,
}));
