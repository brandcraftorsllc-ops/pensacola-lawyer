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
      "The Law Office of James M. Burns lists divorce, military family matters, child support, alimony and related family-law services in Pensacola.",
  },
  "/motions-for-contempt": {
    title: "Motions for Contempt | Law Office of James M. Burns",
    description:
      "Information about motions for contempt and court-order compliance in family-law matters. The right process depends on the order and circumstances.",
  },
  "/criminal-defense": {
    title: "Criminal Defense in Pensacola | Law Office of James M. Burns",
    description:
      "The source website lists DUI, drug trafficking, sexual assault, stalking, domestic-violence charges and injunction-related matters.",
  },
  "/attorney": {
    title: "About James M. Burns | Law Office of James M. Burns",
    description:
      "The Law Office of James M. Burns is based in Pensacola. Verified personal biographical and credential details were not available in the source materials reviewed.",
  },
  "/results": {
    title: "Client Feedback | Law Office of James M. Burns",
    description:
      "The source website reviewed for this update did not publish verified client testimonials or specific case outcomes.",
  },
  "/resources": {
    title: "Legal Resources | Law Office of James M. Burns",
    description:
      "General information on military family matters, divorce and criminal law. Some retained FAQ content requires attorney review.",
  },
  "/blog": {
    title: "Our Blog | Law Office of James M. Burns",
    description:
      "Articles from the Law Office of James M. Burns on military family matters, divorce and criminal defense. Some legal information may be outdated.",
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
      "A current privacy policy was not available in the source materials reviewed. This page requires firm review before publication.",
  },
  "/terms": {
    title: "Terms of Use | JMB Pensacola",
    description:
      "A plain-language summary of website terms from the source site. Review the current terms with the firm before publication.",
  },
  "/blog/residency-in-a-florida-military-divorce": {
    title: "Residency Issues in a Florida Military Divorce | JMB",
    description:
      "Military moves and changing assignments may complicate where a divorce can be filed. Confirm current residency and jurisdiction requirements.",
  },
  "/blog/custody-rights-for-deployed-parents": {
    title: "Custody Rights Expand for Deployed Military | JMB",
    description:
      "A legacy source article discusses custody and time-sharing when a parent is deployed. Verify current Florida law before relying on it.",
  },
  "/blog/military-retirement-benefits-20-20-20": {
    title: "Military Divorce: 20/20/20 and 20/20/15 Standards | JMB",
    description:
      "A legacy source article discusses military benefit standards. Check current official guidance and your individual circumstances.",
  },
  "/blog/when-stalking-is-a-misdemeanor-or-felony": {
    title: "Florida's Laws on Stalking | JMB",
    description:
      "The source article discusses Florida stalking charges. Its descriptions of statutory elements and penalties may be out of date.",
  },
  "/blog/what-to-do-after-a-dui-arrest-in-florida": {
    title: "What to Do After a DUI Arrest in Florida | JMB",
    description:
      "A DUI article matching this topic was not located in the source materials reviewed. Contact the office to confirm current guidance.",
  },
  "/blog/how-social-media-can-affect-a-divorce": {
    title: "How Social Media Can Affect My Divorce | JMB",
    description:
      "A legacy source article discusses social media in divorce matters. Whether information matters depends on the case and current law.",
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
