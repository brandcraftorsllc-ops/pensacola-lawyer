export const SITE_NAME = "Law Office of James M. Burns";
export const SITE_PHONE = "(850) 293-0392";
export const SITE_PHONE_LINK = "tel:+18502930392";
export const SITE_EMAIL = "Jmbpcola33@gmail.com";
export const SITE_EMAIL_LINK = "mailto:Jmbpcola33@gmail.com";
export const SITE_ADDRESS = "4502 Twin Oaks Drive";
export const SITE_CITY = "Pensacola, FL 32506";
export const SERVICE_AREA =
  "Pensacola, Escambia County, Santa Rosa County, Okaloosa County and the Emerald Coast, including military families from NAS Pensacola, NAS Whiting Field, Corry Station, Eglin AFB and Hurlburt Field.";

export function getSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (configured) return configured;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return undefined;
}

export function absoluteUrl(path: string): string | undefined {
  const base = getSiteUrl();
  return base ? new URL(path, `${base}/`).toString() : undefined;
}
