import Link from "next/link";
import {
  SITE_ADDRESS,
  SITE_CITY,
  SITE_EMAIL,
  SITE_EMAIL_LINK,
  SITE_OFFICE_HOURS,
  SITE_PHONE,
  SITE_PHONE_LINK,
  SERVICE_AREA,
} from "@/lib/site";

const practiceLinks = [
  { href: "/family-law", label: "Divorce & Family Law" },
  { href: "/family-law#military-divorce", label: "Military Divorce" },
  { href: "/criminal-defense", label: "Criminal Defense" },
];

const exploreLinks = [
  { href: "/attorney", label: "About the Attorney" },
  { href: "/results", label: "Client Feedback" },
  { href: "/resources", label: "Legal Resources" },
  { href: "/blog", label: "Legal Insights" },
  { href: "/case-evaluation", label: "Case Evaluation" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-logo" href="/">
            <span className="brand-mark">J&amp;B</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-caption">Gulf Coast</span>
          </Link>
          <p>Personal attention. Practical guidance.</p>
          <p>{SERVICE_AREA}</p>
        </div>
        <nav aria-label="Practice areas">
          <h2>Practice Areas</h2>
          <ul>
            {practiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Quick links">
          <h2>Explore</h2>
          <ul>
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
            </li>
            <li>
              <span>Email (not confirmed by source):</span>
              <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
            </li>
            <li>
              <span>{SITE_ADDRESS}</span>
              <span>{SITE_CITY}</span>
            </li>
            <li>{SITE_OFFICE_HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          The information on this website is for general informational purposes only and does not
          constitute legal advice. Contacting this firm does not create an attorney-client
          relationship. Past results do not guarantee future outcomes. Attorney advertising.
        </p>
        <div className="footer-meta">
          <p>© 2026 Law Office of James M. Burns. All rights reserved.</p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
