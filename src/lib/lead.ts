import { SITE } from "@/config/site";
import { TAX_SERVICES } from "@/config/services";

/**
 * Frontend-only lead helpers: build a WhatsApp deep link and send the inquiry
 * via EmailJS. No backend/database is involved.
 */

export type LeadValues = {
  name: string;
  email: string;
  phone: string;
  /** Service slug (may be empty). */
  service: string;
  message: string;
};

/** Human-readable service label from a slug (falls back to the raw value). */
export function serviceLabel(slug: string): string {
  if (!slug) return "General inquiry";
  return TAX_SERVICES.find((s) => s.slug === slug)?.title ?? slug;
}

/** True when EmailJS is fully configured via env vars. */
export function isEmailConfigured(): boolean {
  const { serviceId, templateId, publicKey } = SITE.lead.emailjs;
  return Boolean(serviceId && templateId && publicKey);
}

/** True when a WhatsApp number is configured. */
export function isWhatsAppConfigured(): boolean {
  return Boolean(SITE.lead.whatsappNumber);
}

/**
 * Build a wa.me link with a pre-filled message. The user reviews and sends it
 * themselves — we never claim to have sent it automatically.
 */
export function buildWhatsAppUrl(values: LeadValues): string {
  const lines = [
    "Hello KronixTax,",
    "",
    "I am interested in:",
    serviceLabel(values.service),
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    "",
    "Message:",
    values.message,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  const number = SITE.lead.whatsappNumber;
  // If no number is configured, wa.me still opens WhatsApp with the text so the
  // user can pick the chat; with a number it opens the office chat directly.
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

/**
 * Send the inquiry through EmailJS (dynamically imported so it never bloats the
 * initial bundle). Returns true on success. If EmailJS isn't configured or the
 * package isn't available, returns false so the UI can fall back to WhatsApp.
 */
export async function sendLeadEmail(values: LeadValues): Promise<boolean> {
  if (!isEmailConfigured()) return false;

  try {
    const emailjs = await import("@emailjs/browser");
    const { serviceId, templateId, publicKey } = SITE.lead.emailjs;
    await emailjs.send(
      serviceId,
      templateId,
      {
        subject: `New KronixTax Service Inquiry — ${serviceLabel(values.service)}`,
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        service: serviceLabel(values.service),
        message: values.message,
        to_email: SITE.lead.inboxEmail,
      },
      { publicKey },
    );
    return true;
  } catch {
    // Network error, package missing, or misconfiguration — caller falls back.
    return false;
  }
}
