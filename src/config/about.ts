import {
  ClipboardCheck,
  ShieldCheck,
  Users,
  MessagesSquare,
  Target,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import type { Benefit } from "@/types/content";

/**
 * About-page content. Kept in config so the client can edit copy without
 * touching components. Deliberately free of invented history, credentials,
 * or statistics — only KronixTax's approved messaging is used.
 */
export const ABOUT_INTRO = [
  "At KronixTax, we are a team of dedicated professionals with a passion for helping individuals and businesses make informed financial decisions while staying compliant with US tax laws.",
  "From individual and business tax filing to bookkeeping, payroll, tax planning, and US business formation, we provide clear, professional support — accurate today, secure tomorrow.",
];

/**
 * Brand values drawn from the client's recurring messaging:
 * "Accurate. Compliant. Trusted." and "Your Success, Our Priority."
 */
export const BRAND_VALUES: Benefit[] = [
  {
    title: "Accurate",
    description:
      "Precise, carefully prepared filings you can rely on, every time.",
    icon: Target,
  },
  {
    title: "Compliant",
    description:
      "We help you stay aligned with current US tax laws and requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted",
    description:
      "A dependable partner focused on your success, not just the paperwork.",
    icon: Handshake,
  },
];

export const OUR_APPROACH: Benefit[] = [
  {
    title: "Clarity first",
    description:
      "We explain what's needed and what happens next, in plain language.",
    icon: ClipboardCheck,
  },
  {
    title: "Professional review",
    description:
      "Your return is prepared and reviewed with care before anything is filed.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized support",
    description:
      "Guidance that reflects your individual or business circumstances.",
    icon: Users,
  },
  {
    title: "Open communication",
    description: "You stay informed throughout, with a clear point of contact.",
    icon: MessagesSquare,
  },
];

/** Who we help + what that looks like — sourced from the actual service set. */
export const WHO_WE_HELP = [
  "Individuals filing US and non-resident returns (Form 1040 / 1040NR)",
  "Businesses needing filing, bookkeeping, payroll, and accounting",
  "Entrepreneurs worldwide starting and running a US company",
];

export const WHY_PROFESSIONAL = [
  "Tax rules are detailed and change over time. Professional support helps you file accurately and understand your obligations.",
  "A guided process reduces the chance of missed documents, deductions, or deadlines.",
  "You get a clear review of your return before it is filed, so there are no surprises.",
];
