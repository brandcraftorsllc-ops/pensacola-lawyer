import { ContactForm } from "@/components/forms/ContactForm";
import { CallToAction, PageHero } from "@/components/sections/CommonSections";
import { getPageMetadata } from "@/data/route-metadata";
import { contactPage } from "@/data/site-content";
import { SITE_EMAIL_LINK, SITE_PHONE_LINK } from "@/lib/site";

export const metadata = getPageMetadata("/contact");

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        current="Contact"
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        description={contactPage.description}
        image="/images/attorney-contact-header.png"
      />
      <section className="section section-alt">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
          <aside className="office-details">
            <p className="eyebrow">The office</p>
            <div>
              <span className="eyebrow">Click to call</span>
              <a href={SITE_PHONE_LINK}>{contactPage.phone}</a>
            </div>
            <div>
              <span className="eyebrow">Email (not confirmed by source)</span>
              <a href={SITE_EMAIL_LINK}>{contactPage.email}</a>
            </div>
            <div>
              <span className="eyebrow">Office address</span>
              <p>{contactPage.address}<br />{contactPage.city}</p>
            </div>
            <div>
              <span className="eyebrow">Office hours</span>
              <p>{contactPage.officeHours}</p>
            </div>
            <p>{contactPage.officeDescription}</p>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container directions-grid">
          <div>
            <p className="eyebrow">Directions</p>
            <h2>Find the Pensacola office</h2>
            <p>Twin Oaks Drive sits in southwest Pensacola, close to Corry Station and NAS Pensacola.</p>
            <p>{contactPage.address}<br />{contactPage.city}</p>
            <a
              className="text-link"
              href="https://maps.google.com/?q=4502+Twin+Oaks+Drive,+Pensacola,+FL+32506"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="directions-placeholder">
            <p className="eyebrow">Getting Here</p>
            <p>{contactPage.gettingHere}</p>
            <p>{contactPage.serviceArea}</p>
          </div>
        </div>
      </section>
      <CallToAction
        title="Need to discuss a legal matter?"
        description="Call the office to arrange a free consultation."
      />
    </main>
  );
}
