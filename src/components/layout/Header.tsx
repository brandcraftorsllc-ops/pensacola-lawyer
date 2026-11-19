"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

const practiceGroups = [
  {
    id: "divorce",
    label: "Divorce",
    href: "/family-law",
    items: [
      { href: "/family-law#military-divorce", label: "Military Divorce" },
      { href: "/family-law#child-support-law", label: "Child Support Law" },
      {
        href: "/family-law#deployed-parents-custody-rights",
        label: "Deployed Parents’ Custody Rights",
      },
      {
        href: "/family-law#how-can-social-media-affect-my-divorce",
        label: "How can Social Media Affect My Divorce",
      },
      {
        href: "/family-law#military-retirement-benefits",
        label: "Military Retirement Benefits",
      },
      {
        href: "/family-law#military-divorce-residency",
        label: "Military Divorce Residency",
      },
      { href: "/family-law#same-sex-marriage-in-florida", label: "Same Sex Marriage in Florida" },
      { href: "/family-law#senior-citizen-divorce", label: "Senior Citizen Divorce" },
      { href: "/family-law#substantial-asset-divorce", label: "Substantial Asset Divorce" },
      {
        href: "/family-law#the-irretrievably-broken-marriage",
        label: "The Irretrievably-Broken Marriage",
      },
      {
        href: "/family-law#what-to-expect-during-a-florida-divorce",
        label: "What to Expect During a Florida Divorce",
      },
    ],
  },
  {
    id: "criminal-defense",
    label: "Criminal Defense",
    href: "/criminal-defense",
    items: [
      { href: "/criminal-defense#drug-trafficking", label: "Drug Trafficking" },
      {
        href: "/criminal-defense#stalking",
        label: "Stalking",
      },
      {
        href: "/criminal-defense#violation-of-domestic-violence-criminal",
        label: "Violation of Domestic Violence – Criminal",
      },
      {
        href: "/criminal-defense#domestic-violence-injunction",
        label: "Domestic Violence Injunction",
      },
      {
        href: "/criminal-defense#sexual-assault",
        label: "Sexual Assault",
      },
      { href: "/criminal-defense#dui", label: "DUI" },
    ],
  },
];

const linksBeforePractice = [{ href: "/attorney", label: "About Us" }];
const linksAfterPractice = [
  { href: "/motions-for-contempt", label: "Motions for Contempt" },
  { href: "/contact", label: "Contact Us" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="J&B Gulf Coast — home">
      <span className="brand-lockup">
        <span className="brand-mark">J&amp;B</span>
        <span className="brand-sub">Gulf Coast</span>
      </span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-caption">
        <span className="brand-headline">
          Pensacola Military Divorce <span className="brand-sep">|</span> Family Law{" "}
          <span className="brand-sep">|</span> Criminal Defense
        </span>
        <span className="brand-formerly">Formerly The Law Offices Of Stephen W. Bowden</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPracticeGroup, setOpenPracticeGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Publish the real header height so page offsets and sticky elements stay aligned.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--header-h", `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  function closeMobileNavigation(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget
      .closest(".mobile-navigation")
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((details) => {
        details.open = false;
      });
    setMenuOpen(false);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Brand />
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
      <div className="header-nav-row">
        <nav className="desktop-nav" aria-label="Primary">
          <Link className={pathname === "/" ? "active" : ""} href="/">
            Home
          </Link>
          {linksBeforePractice.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <details
            className="nav-dropdown"
            onMouseEnter={(event) => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                event.currentTarget.open = true;
              }
            }}
            onMouseLeave={(event) => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                if (!event.currentTarget.contains(document.activeElement)) {
                  event.currentTarget.open = false;
                  setOpenPracticeGroup(null);
                }
              }
            }}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;
              if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                event.currentTarget.open = false;
                setOpenPracticeGroup(null);
              }
            }}
          >
            <summary>
              Practice Areas <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {practiceGroups.map((group) => (
                <div
                  className="nav-practice-group"
                  key={group.id}
                  onMouseEnter={() => setOpenPracticeGroup(group.id)}
                  onMouseLeave={(event) => {
                    if (!event.currentTarget.contains(document.activeElement)) {
                      setOpenPracticeGroup(null);
                    }
                  }}
                  onFocus={() => setOpenPracticeGroup(group.id)}
                  onBlur={(event) => {
                    const nextTarget = event.relatedTarget;
                    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                      setOpenPracticeGroup(null);
                    }
                  }}
                >
                  <Link
                    className="nav-practice-link"
                    href={group.href}
                    aria-haspopup="true"
                    aria-expanded={openPracticeGroup === group.id}
                  >
                    {group.label}
                    <span className="nav-practice-arrow" aria-hidden="true" />
                  </Link>
                  {openPracticeGroup === group.id ? (
                    <div
                      className="nav-submenu-panel"
                      role="group"
                      aria-label={`${group.label} practice links`}
                      data-practice-submenu={group.id}
                    >
                      {group.items.map((item) => (
                        <Link href={item.href} key={item.label}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </details>
          {linksAfterPractice.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile primary">
          <Link href="/" onClick={closeMobileNavigation}>
            Home
          </Link>
          {linksBeforePractice.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMobileNavigation}>
              {item.label}
            </Link>
          ))}
          <details>
            <summary>Practice Areas</summary>
            <div className="mobile-practice-links">
              {practiceGroups.map((group) => (
                <details className="mobile-practice-group" key={group.id}>
                  <summary>{group.label}</summary>
                  <div className="mobile-practice-subnav">
                    <Link href={group.href} onClick={closeMobileNavigation}>
                      {group.label} Overview
                    </Link>
                    {group.items.map((item) => (
                      <Link
                        href={item.href}
                        key={item.label}
                        onClick={closeMobileNavigation}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </details>
          {linksAfterPractice.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMobileNavigation}>
              {item.label}
            </Link>
          ))}
          <a href={SITE_PHONE_LINK} onClick={closeMobileNavigation}>{SITE_PHONE}</a>
          <Link href="/case-evaluation" onClick={closeMobileNavigation}>
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
