import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export interface RouteMetadata {
  title: string;
  description: string;
}

export const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Pensacola Military Divorce, Family Law & Criminal Defense | JMB",
    description:
      "Law Office of James M. Burns: military divorce, family law, child custody and criminal defense for service members, veterans and families in Pensacola and the Emerald Coast.",
  },
  "/military-divorce": {
    title: "Military Divorce & Family Law Attorney in Pensacola | JMB",
    description:
      "USFSPA and the 10/10 rule, 20/20/20 and 20/20/15 healthcare rules, Survivor Benefit Plan, TRICARE, deployment custody and SCRA protections for Pensacola military families.",
  },
  "/family-law": {
    title: "Family Law & Child Custody Attorney in Pensacola | JMB",
    description:
      "Divorce, custody and time-sharing, parenting plans, child support, alimony, property division, paternity, modifications and enforcement in Pensacola and Escambia County.",
  },
  "/criminal-defense": {
    title: "Criminal Defense Attorney in Pensacola | JMB",
    description:
      "Defense for DUI, domestic violence, injunctions, sex crimes, violent felonies, drug trafficking, stalking and misdemeanor or felony charges in Pensacola and Escambia County.",
  },
  "/attorney": {
    title: "James Martinez Burns, Attorney in Pensacola | JMB",
    description:
      "Meet James Martinez Burns of the Law Office of James M. Burns, practicing military divorce, family law and criminal defense in Pensacola, Florida.",
  },
  "/results": {
    title: "Client Results & Testimonials | JMB Pensacola",
    description:
      "Client feedback and case outcome placeholders for the Law Office of James M. Burns. Every case is different, and past results do not guarantee future outcomes.",
  },
  "/resources": {
    title: "Military Legal Resources & FAQ | JMB Pensacola",
    description:
      "Practical, general answers for service members and spouses on military divorce, deployment custody, criminal charges, domestic violence and injunctions in Florida.",
  },
  "/blog": {
    title: "Legal Insights & Blog | JMB Pensacola",
    description:
      "Articles on military divorce, family law and criminal defense in Florida, published by the Law Office of James M. Burns in Pensacola.",
  },
  "/contact": {
    title: "Contact & Pensacola Office | JMB Military Divorce & Family Law",
    description:
      "Call (850) 293-0392 or send a message to the Law Office of James M. Burns, 4502 Twin Oaks Drive, Pensacola, FL 32506, near Corry Station and NAS Pensacola.",
  },
  "/case-evaluation": {
    title: "Confidential Case Evaluation | JMB Pensacola",
    description:
      "Request a confidential case evaluation for military divorce, family law, child custody or criminal defense matters in Pensacola, Florida.",
  },
  "/privacy": {
    title: "Privacy Policy | JMB Pensacola",
    description:
      "How the Law Office of James M. Burns handles information submitted through this website, including consultation and case evaluation requests.",
  },
  "/terms": {
    title: "Terms of Use | JMB Pensacola",
    description:
      "Terms of use for the Law Office of James M. Burns website, including the limits of the general information published here.",
  },
  "/blog/residency-in-a-florida-military-divorce": {
    title: "Residency in a Florida Military Divorce | JMB Pensacola",
    description:
      "What Florida's six-month residency requirement means for service members stationed in Pensacola, and how orders and home of record can affect a filing.",
  },
  "/blog/custody-rights-for-deployed-parents": {
    title: "Custody Rights for Deployed Parents in Florida | JMB",
    description:
      "How Florida's deployment custody statute addresses temporary schedules, notice and the return to an existing parenting plan after deployment.",
  },
  "/blog/military-retirement-benefits-20-20-20": {
    title: "Military Retirement and the 20/20/20 Rule | JMB Pensacola",
    description:
      "How the 20/20/20 rule affects healthcare eligibility for an unremarried former spouse, and how it differs from pension division under USFSPA.",
  },
  "/blog/when-stalking-is-a-misdemeanor-or-felony": {
    title: "Stalking Charges: Misdemeanor or Felony in Florida | JMB",
    description:
      "A general overview of how Florida stalking allegations are evaluated, including the conduct alleged, prior record and the role of communications evidence.",
  },
  "/blog/what-to-do-after-a-dui-arrest-in-florida": {
    title: "What to Do After a DUI Arrest in Florida | JMB Pensacola",
    description:
      "Practical first steps after a Florida DUI arrest, including the separate license process, court dates and documents to keep.",
  },
  "/blog/how-social-media-can-affect-a-divorce": {
    title: "How Social Media Can Affect a Divorce | JMB Pensacola",
    description:
      "Why posts, photos and location data are routinely used in family law cases, and how to reduce risk while a case is pending.",
  },
};

export function getPageMetadata(path: string): Metadata {
  const content = routeMetadata[path] ?? routeMetadata["/"];
  const canonical = absoluteUrl(path);
  const socialImage = "/images/pensacola-bay.png";

  return {
    title: content.title,
    description: content.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      title: content.title,
      description: content.description,
      ...(canonical ? { url: canonical } : {}),
      images: [{ url: socialImage, alt: "Dusk over Pensacola Bay" }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [socialImage],
    },
  };
}
