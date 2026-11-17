"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

const practiceLinks = [
  {
    href: "/military-divorce",
    label: "Military Divorce & Family Law",
    description: "USFSPA and the 10/10 rule · 20/20/20 and 20/20/15 · Deployment custody planning",
  },
  {
    href: "/family-law",
    label: "Civilian Family Law & Child Custody",
    description: "Custody and parenting plans · Support and alimony · Modifications and contempt",
  },
  {
    href: "/criminal-defense",
    label: "Criminal Defense",
    description: "DUI and license issues · Domestic violence and injunctions · Misdemeanors and felonies",
  },
];

const primaryLinks = [
  { href: "/attorney", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Law Office of James M. Burns — home">
      <span className="brand-mark">JMB</span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-caption">
        Military Divorce, Family Law
        <br />
        &amp; Criminal Defense
      </span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary">
          <Link className={pathname === "/" ? "active" : ""} href="/">
            Home
          </Link>
          <details className="nav-dropdown">
            <summary>
              Practice Areas <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {practiceLinks.map((item) => (
                <Link href={item.href} key={item.href}>
                  <span>{item.label}</span>
                  <small>{item.description}</small>
                </Link>
              ))}
            </div>
          </details>
          {primaryLinks.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={SITE_PHONE_LINK}>
            {SITE_PHONE}
          </a>
          <Link className="button button-gold header-consult" href="/case-evaluation">
            Free Consultation
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile primary">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <details>
            <summary>Practice Areas</summary>
            <div className="mobile-practice-links">
              {practiceLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          {primaryLinks.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
          <Link href="/case-evaluation" onClick={() => setMenuOpen(false)}>
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
