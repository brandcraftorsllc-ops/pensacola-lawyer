"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/lib/site";

const matters = [
  {
    name: "Military Divorce",
    detail: "Dissolution of marriage involving a service member, veteran or military spouse.",
  },
  {
    name: "Family Law or Custody",
    detail: "Custody, time-sharing, support, parenting plans, modifications or enforcement.",
  },
  {
    name: "Criminal Defense",
    detail: "DUI, domestic violence, injunctions, drug or felony allegations.",
  },
];

export function CaseEvaluationWizard() {
  const [step, setStep] = useState(1);
  const [matter, setMatter] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="evaluation-layout">
      <div className="evaluation-progress" aria-label={`Step ${step} of 3`}>
        {["Matter", "Details", "Contact"].map((label, index) => (
          <div className={index + 1 <= step ? "active" : ""} key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </div>
        ))}
      </div>
      <div className="evaluation-card">
        <p className="eyebrow">Step {step} of 3: {["Matter", "Details", "Contact"][step - 1]}</p>
        {step === 1 ? (
          <>
            <h2>What do you need help with?</h2>
            <div className="matter-options">
              {matters.map((item) => (
                <button
                  type="button"
                  className={matter === item.name ? "matter-option selected" : "matter-option"}
                  aria-pressed={matter === item.name}
                  key={item.name}
                  onClick={() => setMatter(item.name)}
                >
                  <span className="selection-mark" aria-hidden="true" />
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </button>
              ))}
            </div>
            <button
              className="button button-gold"
              type="button"
              disabled={!matter}
              onClick={() => setStep(2)}
            >
              Continue <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}
        {step === 2 ? (
          <>
            <h2>A little more about the matter</h2>
            <p className="form-disclaimer">
              Share only what you are comfortable putting in writing. Please do not include
              confidential details.
            </p>
            <label className="details-label">
              What would you like the office to know?
              <textarea
                rows={7}
                maxLength={4000}
                value={details}
                onChange={(event) => setDetails(event.target.value)}
              />
            </label>
            <div className="wizard-actions">
              <button className="button button-outline" type="button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="button button-gold" type="button" onClick={() => setStep(3)}>
                Continue <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : null}
        {step === 3 ? (
          <>
            <h2>How can the office reach you?</h2>
            <p className="matter-summary">Matter: {matter}</p>
            <ContactForm mode="evaluation" selectedMatter={matter} details={details} />
            <button className="back-link" type="button" onClick={() => setStep(2)}>
              ← Back to details
            </button>
          </>
        ) : null}
      </div>
      <p className="direct-contact">
        Prefer to speak directly? Call <a href={SITE_PHONE_LINK}>{SITE_PHONE}</a>.
      </p>
      <p className="form-disclaimer">
        <Link href="/privacy">Privacy Policy</Link>
      </p>
    </div>
  );
}
