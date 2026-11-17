import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { absoluteUrl, getSiteUrl, SITE_ADDRESS, SITE_NAME } from "@/lib/site";
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
  "Law Office of James M. Burns: military divorce, family law, child custody and criminal defense for service members, veterans and families in Pensacola and the Emerald Coast.";
const socialImage = absoluteUrl("/images/pensacola-bay.png") ?? "/images/pensacola-bay.png";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: "Pensacola Military Divorce, Family Law & Criminal Defense | JMB",
    template: "%s",
  },
  description: siteDescription,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Pensacola Military Divorce, Family Law & Criminal Defense | JMB",
    description: siteDescription,
    images: [{ url: socialImage, alt: "Dusk over Pensacola Bay" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensacola Military Divorce, Family Law & Criminal Defense | JMB",
    description: siteDescription,
    images: [socialImage],
  },
  other: { "theme-color": "#0a1628" },
};

function LegalServiceJsonLd() {
  const url = absoluteUrl("/");
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    ...(url ? { url } : {}),
    telephone: "+1-850-293-0392",
    email: "Jmbpcola33@gmail.com",
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
      "Escambia County",
      "Santa Rosa County",
      "Okaloosa County",
      "Emerald Coast",
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
