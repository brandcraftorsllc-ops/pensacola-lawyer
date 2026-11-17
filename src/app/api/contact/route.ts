import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  details?: unknown;
  matter?: unknown;
  source?: unknown;
  website?: unknown;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const requestCounts = new Map<string, RateLimitEntry>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()0-9.\-\s]+$/;

function responseError(status: number, message: string) {
  return NextResponse.json({ message }, { status });
}

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.replace(/\r\n?/g, "\n").trim() : "";
}

function isContactPayload(value: unknown): value is ContactPayload {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const parsedOrigin = new URL(origin);
    const host =
      request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ??
      request.headers.get("host");
    const protocol =
      request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
      new URL(request.url).protocol.replace(/:$/, "");
    return parsedOrigin.host === host && parsedOrigin.protocol.replace(/:$/, "") === protocol;
  } catch {
    return false;
  }
}

function isRateLimited(request: Request): boolean {
  const max = Number.parseInt(process.env.CONTACT_RATE_LIMIT_MAX ?? "5", 10);
  const windowMs = Number.parseInt(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? "900000", 10);
  const limit = Number.isFinite(max) && max > 0 ? max : 5;
  const duration = Number.isFinite(windowMs) && windowMs > 0 ? windowMs : 900000;
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const current = requestCounts.get(ip);

  if (!current || current.resetAt <= now) {
    if (requestCounts.size > 5000) {
      for (const [key, entry] of requestCounts) {
        if (entry.resetAt <= now) requestCounts.delete(key);
      }
    }
    requestCounts.set(ip, { count: 1, resetAt: now + duration });
    return false;
  }
  if (current.count >= limit) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  if (!validateOrigin(request)) {
    return responseError(403, "This request could not be verified. Please refresh the page and try again.");
  }
  if (isRateLimited(request)) {
    return responseError(429, "Too many submissions. Please wait a few minutes or call the office.");
  }
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return responseError(415, "This form request must use JSON.");
  }
  const declaredLength = Number.parseInt(request.headers.get("content-length") ?? "", 10);
  if (Number.isFinite(declaredLength) && declaredLength > 16384) {
    return responseError(413, "The form request is too large.");
  }

  let payload: ContactPayload;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > 16384) {
      return responseError(413, "The form request is too large.");
    }
    const parsed: unknown = JSON.parse(body);
    if (!isContactPayload(parsed)) {
      return responseError(400, "The form data could not be read. Please review it and try again.");
    }
    payload = parsed;
  } catch {
    return responseError(400, "The form data could not be read. Please review it and try again.");
  }

  const name = cleanText(payload.name);
  const phone = cleanText(payload.phone);
  const email = cleanText(payload.email);
  const message = cleanText(payload.message);
  const details = cleanText(payload.details);
  const matter = cleanText(payload.matter);
  const source = cleanText(payload.source);
  const website = cleanText(payload.website);

  if (website) return responseError(400, "This submission could not be accepted.");
  if (name.length < 2 || name.length > 120) {
    return responseError(400, "Enter a name between 2 and 120 characters.");
  }
  if (!phonePattern.test(phone) || phone.replace(/\D/g, "").length < 7 || phone.length > 40) {
    return responseError(400, "Enter a valid phone number.");
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return responseError(400, "Enter a valid email address.");
  }
  if (message.length > 4000 || details.length > 4000 || matter.length > 120) {
    return responseError(400, "One or more fields exceed the allowed length.");
  }
  if (source !== "contact" && source !== "evaluation") {
    return responseError(400, "The form type is invalid. Refresh the page and try again.");
  }
  if (source === "contact" && message.length < 1) {
    return responseError(400, "Please enter a message.");
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number.parseInt(process.env.SMTP_PORT ?? "", 10);
  const secureSetting = process.env.SMTP_SECURE?.trim().toLowerCase();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const to = process.env.TO_EMAIL?.trim();
  const from = process.env.FROM_EMAIL?.trim();
  const fromName = process.env.FROM_NAME?.trim() || "Law Office of James M. Burns";

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !to || !from) {
    console.error("Contact form SMTP configuration is incomplete.");
    return responseError(503, "The contact service is temporarily unavailable. Please call the office.");
  }
  if ((user && !pass) || (!user && pass)) {
    console.error("Contact form SMTP credentials are incomplete.");
    return responseError(503, "The contact service is temporarily unavailable. Please call the office.");
  }

  const secure = secureSetting === "true" || (secureSetting !== "false" && port === 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    ...(user && pass ? { auth: { user, pass } } : {}),
  });
  const text = [
    `Source: ${source === "evaluation" ? "Case evaluation" : "Contact form"}`,
    matter ? `Matter: ${matter}` : "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    message ? `Message:\n${message}` : "",
    details ? `Additional details:\n${details}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    await transporter.sendMail({
      from: { name: fromName, address: from },
      to,
      replyTo: email,
      subject: source === "evaluation" ? "New case evaluation request" : "New website contact message",
      text,
    });
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return responseError(502, "The message could not be delivered. Please call the office directly.");
  }

  return NextResponse.json({ message: "Your message has been received." });
}
