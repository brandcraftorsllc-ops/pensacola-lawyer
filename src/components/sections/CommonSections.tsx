import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import type { AccordionItemData } from "@/components/ui/Accordion";
import { SITE_EMAIL, SITE_EMAIL_LINK, SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  current: string;
  note?: string;
  parent?: { href: string; label: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  current,
  note,
  parent,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        className="hero-media"
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={88}
      />
      <div className="page-heading">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          {parent ? (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span aria-hidden="true">›</span>
            </>
          ) : null}
          <span aria-current="page">{current}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
        {note ? <div className="page-note">{note}</div> : null}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "align-left" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

interface FaqSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: AccordionItemData[];
  link?: { href: string; label: string };
  className?: string;
}

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
  link,
  className = "",
}: FaqSectionProps) {
  return (
    <section className={`section section-alt page-faq ${className}`}>
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          {link ? (
            <Link className="text-link" href={link.href}>
              {link.label} <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
        <Accordion items={items} label={title} multiple />
      </div>
    </section>
  );
}

interface CallToActionProps {
  title: string;
  description: string;
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="cta-band" aria-label={title}>
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-contact">
          <div className="contact-links">
            <a className="cta-phone" href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
            <a className="cta-email" href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
          </div>
          <Link className="button button-gold" href="/case-evaluation">
            Free Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DraftNotice({ children }: { children: React.ReactNode }) {
  return <p className="draft-note">{children}</p>;
}

export function ContactDetailsInline() {
  return (
    <div className="contact-links">
      <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
      <a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a>
    </div>
  );
}
