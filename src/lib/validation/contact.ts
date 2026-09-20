import { z } from "zod";
import { TAX_SERVICES } from "@/config/services";

/** Allowed service values for the contact form's service selector. */
const serviceSlugs = TAX_SERVICES.map((s) => s.slug);

/**
 * Contact form schema — single source of truth for validation. Used by the
 * client form; the same schema can validate on the server when the backend
 * endpoint is added.
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(100),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().max(30).optional().or(z.literal("")),
  service: z
    .string()
    .refine(
      (v) => v === "" || serviceSlugs.includes(v),
      "Please choose a valid service.",
    )
    .optional(),
  message: z
    .string()
    .min(10, "Please share a little more detail (at least 10 characters).")
    .max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
