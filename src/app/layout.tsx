import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import {
  absoluteUrl,
  getSiteUrl,
  SITE_ADDRESS,
  SITE_NAME,
  SITE_PHONE_E164,
} from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "../../public/fonts/manrope.woff2",
  variable: "--font-manrope",
  weight: "300 700",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/playfair-display.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "../../public/fonts/playfair-display-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const siteDescription =
  "The Law Office of James M. Burns serves Pensacola with divorce, military family law and criminal defense representation.";
const socialImage = absoluteUrl("/images/pensacola-bay.png") ?? "/images/pensacola-bay.png";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: "Divorce, Military Family Law & Criminal Defense | JMB Pensacola",
    template: "%s",
  },
  description: siteDescription,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Divorce, Military Family Law & Criminal Defense | JMB Pensacola",
    description: siteDescription,
    images: [{ url: socialImage, alt: "Dusk over Pensacola Bay" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divorce, Military Family Law & Criminal Defense | JMB Pensacola",
    description: siteDescription,
    images: [socialImage],
  },
  other: { "theme-color": "#07193e" },
};

function LegalServiceJsonLd() {
  const url = absoluteUrl("/");
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    ...(url ? { url } : {}),
    telephone: SITE_PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS,
      addressLocality: "Pensacola",
      addressRegion: "FL",
      postalCode: "32506",
      addressCountry: "US",
    },
    areaServed: [
      "Pensacola",
      "Milton",
      "Navarre",
      "Gulf Breeze",
    ],
    image: socialImage,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <LegalServiceJsonLd />
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
