"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

interface ContactFormProps {
  mode?: "contact" | "evaluation";
  selectedMatter?: string;
  details?: string;
}

export function ContactForm({
  mode = "contact",
  selectedMatter,
  details,
}: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      matter: selectedMatter ?? "",
      details: details ?? "",
      source: mode,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(result.message ?? "The message could not be sent. Please call the office.");
        return;
      }
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been received and the office will follow up.");
    } catch (error) {
      console.error("Contact form request failed:", error);
      setStatus("error");
      setMessage("The message could not be sent. Please call the office directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full Name <span aria-hidden="true">*</span>
          <input
            autoComplete="name"
            name="name"
            type="text"
            maxLength={120}
            required
          />
        </label>
        <label>
          Phone <span aria-hidden="true">*</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            maxLength={40}
            required
          />
        </label>
        <label className="form-full">
          Email <span aria-hidden="true">*</span>
          <input
            autoComplete="email"
            name="email"
            type="email"
            maxLength={254}
            required
          />
        </label>
        {mode === "contact" ? (
          <label className="form-full">
            Message <span aria-hidden="true">*</span>
            <textarea name="message" rows={5} maxLength={4000} required />
          </label>
        ) : null}
      </div>
      <label className="honeypot" aria-hidden="true" tabIndex={-1}>
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="form-disclaimer">
        Submitting this form does not create an attorney-client relationship. Please do not include
        confidential details until an attorney-client relationship has been established.
      </p>
      <button className="button button-gold" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : mode === "contact" ? "Send Message" : "Submit Request"}
        <span aria-hidden="true">→</span>
      </button>
      {message ? (
        <p className={`form-status ${status}`} role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
