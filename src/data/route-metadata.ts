import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export interface RouteMetadata {
  title: string;
  description: string;
}

export const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Divorce, Military Family Law & Criminal Defense | JMB Pensacola",
    description:
      "The Law Office of James M. Burns serves Pensacola with divorce, military family law and criminal defense representation.",
  },
  "/family-law": {
    title: "Divorce in Pensacola | Law Office of James M. Burns",
    description:
      "Divorce, military divorce, child support, alimony, custody and related family-law help from the Law Office of James M. Burns in Pensacola.",
  },
  "/motions-for-contempt": {
    title: "Motions for Contempt | Law Office of James M. Burns",
    description:
      "Information about motions for contempt and court-order compliance in family-law matters. The right process depends on the order and circumstances.",
  },
  "/criminal-defense": {
    title: "Criminal Defense in Pensacola | Law Office of James M. Burns",
    description:
      "Criminal defense for DUI, drug trafficking, sexual assault, stalking, domestic violence and injunction violations in Escambia, Santa Rosa and Okaloosa counties.",
  },
  "/attorney": {
    title: "About James M. Burns | Law Office of James M. Burns",
    description:
      "James M. Burns leads the Law Office of James M. Burns in Pensacola, formerly the Law Office of Stephen W. Bowden, serving local and military families.",
  },
  "/results": {
    title: "Client Feedback | Law Office of James M. Burns",
    description:
      "How the Law Office of James M. Burns approaches each case: personal attention, clear answers and a plan built around your circumstances.",
  },
  "/resources": {
    title: "Legal Resources | Law Office of James M. Burns",
    description:
      "Answers to common questions about military divorce, family law and criminal defense in Florida.",
  },
  "/blog": {
    title: "Our Blog | Law Office of James M. Burns",
    description:
      "Articles from the Law Office of James M. Burns on military family matters, divorce and criminal defense.",
  },
  "/contact": {
    title: "Contact the Pensacola Office | Law Office of James M. Burns",
    description:
      "Call (850) 456-5779 or contact the Law Office of James M. Burns at 4502 Twin Oaks Drive, Pensacola, FL 32506.",
  },
  "/case-evaluation": {
    title: "Request a Free Consultation | Law Office of James M. Burns",
    description:
      "Contact the Law Office of James M. Burns to request a consultation about a divorce, family-law or criminal-defense matter in Pensacola.",
  },
  "/privacy": {
    title: "Privacy Policy | JMB Pensacola",
    description:
      "How the Law Office of James M. Burns handles information submitted through this website.",
  },
  "/terms": {
    title: "Terms of Use | JMB Pensacola",
    description:
      "Terms of use for the Law Office of James M. Burns website.",
  },
  "/blog/residency-in-a-florida-military-divorce": {
    title: "Residency Issues in a Florida Military Divorce | JMB",
    description:
      "Military moves can complicate where a divorce may be filed. How Florida's six-month residency rule applies to military families.",
  },
  "/blog/custody-rights-for-deployed-parents": {
    title: "Custody Rights Expand for Deployed Military | JMB",
    description:
      "Florida law gives deploying parents a faster way to set temporary custody and time-sharing arrangements.",
  },
  "/blog/military-retirement-benefits-20-20-20": {
    title: "Military Divorce: 20/20/20 and 20/20/15 Standards | JMB",
    description:
      "How the 20/20/20 and 20/20/15 standards decide which military benefits a former spouse keeps after divorce.",
  },
  "/blog/when-stalking-is-a-misdemeanor-or-felony": {
    title: "Florida's Laws on Stalking | JMB",
    description:
      "How Florida defines stalking and cyberstalking, and when a stalking charge becomes a felony.",
  },
  "/blog/what-to-do-after-a-dui-arrest-in-florida": {
    title: "What to Do After a DUI Arrest in Florida | JMB",
    description:
      "What a Florida DUI charge can mean, possible penalties, and why early decisions in a DUI case matter.",
  },
  "/blog/how-social-media-can-affect-a-divorce": {
    title: "How Social Media Can Affect My Divorce | JMB",
    description:
      "How posts, photos and messages can come up in a divorce, and what to think about before you share.",
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
