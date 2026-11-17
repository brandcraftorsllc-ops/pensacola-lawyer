export const SITE_NAME = "Law Office of James M. Burns";
export const SITE_PHONE = "(850) 456-5779";
export const SITE_PHONE_E164 = "+18504565779";
export const SITE_PHONE_LINK = `tel:${SITE_PHONE_E164}`;
export const SITE_EMAIL = "Jmbpcola33@gmail.com";
export const SITE_EMAIL_LINK = "mailto:Jmbpcola33@gmail.com";
export const SITE_ADDRESS = "4502 Twin Oaks Drive";
export const SITE_CITY = "Pensacola, FL 32506";
export const SITE_OFFICE_HOURS = "Monday–Friday, 9 a.m.–5 p.m.; Saturday and Sunday: closed.";
export const SERVICE_AREA =
  "Pensacola, Milton, Navarre and Gulf Breeze.";

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
