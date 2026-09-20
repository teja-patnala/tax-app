"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button, Input, Textarea, Select, Text } from "@/components/ui";
import { contactSchema } from "@/lib/validation/contact";
import { TAX_SERVICES } from "@/config/services";
import {
  buildWhatsAppUrl,
  isWhatsAppConfigured,
  sendLeadEmail,
  serviceLabel,
  type LeadValues,
} from "@/lib/lead";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "service" | "message", string>
>;

const serviceOptions = TAX_SERVICES.map((s) => ({
  value: s.slug,
  label: s.title,
}));

/**
 * Frontend-only inquiry form (no backend/database).
 * - Prefills the service from a ?service=<slug> query param.
 * - On submit, validates, then sends via EmailJS if configured.
 * - Always offers a WhatsApp action with a pre-filled (user-reviewed) message.
 * - Never collects sensitive data (SSN, bank, documents, etc.).
 */
export function ContactForm() {
  const prefersReduced = useReducedMotion();
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";

  const [service, setService] = useState(initialService);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [emailSent, setEmailSent] = useState(false);
  const [lead, setLead] = useState<LeadValues | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: LeadValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    const sent = await sendLeadEmail(values);
    setEmailSent(sent);
    setLead(values);
    setStatus("done");
  }

  if (status === "done" && lead) {
    const whatsappUrl = buildWhatsAppUrl(lead);
    return (
      <motion.div
        className="flex flex-col items-center gap-4 rounded-lg border border-border bg-surface p-8 text-center shadow-sm"
        role="status"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          initial={prefersReduced ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
        >
          <CheckCircle2 className="size-10 text-success" aria-hidden />
        </motion.span>

        <div>
          <Text variant="body" className="font-semibold">
            {emailSent
              ? "Thank you! Your inquiry has been submitted."
              : "Thanks! Your inquiry is ready to send."}
          </Text>
          <Text variant="bodySm" tone="muted" className="mt-1">
            {emailSent
              ? "Our tax team will contact you shortly."
              : "You can reach our team directly on WhatsApp below and we'll respond shortly."}
          </Text>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
          <Button
            href={whatsappUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-5" aria-hidden />
            Contact on WhatsApp
          </Button>
        </div>
      </motion.div>
    );
  }

  const previewLead: LeadValues = {
    name: "",
    email: "",
    phone: "",
    service,
    message: "",
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" name="name" autoComplete="name" required error={errors.name} />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          autoComplete="tel"
          helperText="Include country code"
          error={errors.phone}
        />
        <Select
          label="Service"
          name="service"
          placeholder="Select a service (optional)"
          options={serviceOptions}
          value={service}
          onChange={(e) => setService(e.target.value)}
          error={errors.service}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        required
        placeholder="Tell us a little about what you need help with."
        error={errors.message}
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" isLoading={status === "sending"}>
          {status === "sending" ? "Submitting…" : "Submit Inquiry"}
        </Button>
        {isWhatsAppConfigured() && (
          <Button
            href={buildWhatsAppUrl(previewLead)}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="border-accent/40 text-accent-dark hover:bg-accent/10"
          >
            <MessageCircle className="size-5" aria-hidden />
            Contact on WhatsApp
          </Button>
        )}
      </div>

      {service && (
        <Text variant="bodySm" tone="muted">
          Selected service: <span className="font-medium text-content">{serviceLabel(service)}</span>
        </Text>
      )}
    </form>
  );
}
