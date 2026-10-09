import { budgets, projectTypes, timelines } from "./options.js";

const TO_EMAIL = "info@essemdigital.com";

function invalid() {
  return { status: 400, body: { error: "Invalid form data. Please check your inputs." } };
}

function text(value, max) {
  return String(value || "").trim().slice(0, max);
}

export function normalizeContact(input) {
  const body = input && typeof input === "object" ? input : {};
  return {
    name: text(body.name, 100),
    email: text(body.email, 200),
    projectType: text(body.projectType, 80),
    budgetRange: text(body.budgetRange, 80),
    timeline: text(body.timeline, 80),
    message: text(body.message, 5000),
  };
}

export function validateContact(contact) {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
  if (contact.name.length < 2 || contact.name.length > 100) return invalid();
  if (!emailOk) return invalid();
  if (!projectTypes.includes(contact.projectType)) return invalid();
  if (!budgets.includes(contact.budgetRange)) return invalid();
  if (!timelines.includes(contact.timeline)) return invalid();
  if (contact.message.length < 10 || contact.message.length > 5000) return invalid();
  return null;
}

function providerMessage(result, fallback) {
  if (typeof result?.message === "string" && result.message) return result.message;
  if (typeof result?.error === "string" && result.error) return result.error;
  if (typeof result?.error?.message === "string" && result.error.message) return result.error.message;
  return fallback;
}

function enquiryText(contact) {
  return [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Project: ${contact.projectType}`,
    `Budget: ${contact.budgetRange}`,
    `Timeline: ${contact.timeline}`,
    "",
    contact.message,
  ].join("\n");
}

async function postResend(contact, from) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO || TO_EMAIL],
      reply_to: contact.email,
      subject: `New enquiry from ${contact.name}`,
      text: enquiryText(contact),
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(providerMessage(result, "Resend could not send this message."));
  }
}

async function sendWithResend(contact) {
  const preferred = process.env.CONTACT_FROM || "ESSEM Digital <info@essemdigital.com>";
  try {
    await postResend(contact, preferred);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (!/not verified/i.test(message)) throw error;
    await postResend(contact, "ESSEM Digital <onboarding@resend.dev>");
  }
}

async function sendWithFormSubmit(contact) {
  const response = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://www.essemdigital.com",
      Referer: "https://www.essemdigital.com/",
    },
    body: JSON.stringify({
      name: contact.name,
      email: contact.email,
      project: contact.projectType,
      budget: contact.budgetRange,
      timeline: contact.timeline,
      message: contact.message,
      _replyto: contact.email,
      _subject: `New enquiry from ${contact.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });
  const raw = await response.text();
  let result = {};
  try {
    result = raw ? JSON.parse(raw) : {};
  } catch {
    result = { message: raw.slice(0, 180) };
  }
  if (result.success === true || result.success === "true") return;
  const message = providerMessage(result, "");
  if (/activation/i.test(message)) {
    throw new Error("Open info@essemdigital.com and confirm the FormSubmit activation email, then send the form again.");
  }
  throw new Error(message || `Backup inbox failed (${response.status}).`);
}

export async function handleContact(input) {
  const contact = normalizeContact(input);
  const rejected = validateContact(contact);
  if (rejected) return rejected;
  const failures = [];
  if (process.env.RESEND_API_KEY) {
    try {
      await sendWithResend(contact);
      return { status: 200, body: { ok: true } };
    } catch (error) {
      failures.push(error instanceof Error ? error.message : "Resend could not send this message.");
    }
  }
  try {
    await sendWithFormSubmit(contact);
    return { status: 200, body: { ok: true } };
  } catch (error) {
    failures.push(error instanceof Error ? error.message : "The backup inbox could not accept this message.");
  }
  const joined = failures.filter(Boolean).join(" ");
  let error = joined || "Failed to send message. Please try again or email info@essemdigital.com.";
  if (/activation/i.test(joined)) {
    error = "Open info@essemdigital.com and confirm the FormSubmit activation email, then send the form again.";
  } else if (/not verified|only send testing emails|verify a domain/i.test(joined)) {
    error = "Resend cannot email info@essemdigital.com until essemdigital.com is verified. Add the domain at https://resend.com/domains, then add the DNS records it shows in Hover.";
  }
  return { status: 502, body: { error } };
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString() || "{}");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const result = await handleContact(await readBody(req));
    res.status(result.status).json(result.body);
  } catch {
    res.status(400).json({ error: "Invalid form data. Please check your inputs." });
  }
}
