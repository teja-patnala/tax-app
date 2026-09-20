import {
  ShieldCheck,
  UserCheck,
  MonitorSmartphone,
  MessagesSquare,
  HandHeart,
  ClipboardCheck,
  UploadCloud,
  FileCheck2,
  Send,
  UserPlus,
  ScrollText,
} from "lucide-react";
import type { Benefit, ProcessStep } from "@/types/content";

/**
 * Trust/credibility items. Generic and configurable — no invented statistics,
 * awards, credentials, ratings, or guarantees.
 */
export const TRUST_ITEMS: Benefit[] = [
  {
    title: "Accurate & Compliant",
    description: "Accurate filings that keep you compliant with US tax rules.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Support",
    description: "A team of dedicated tax and accounting professionals.",
    icon: UserCheck,
  },
  {
    title: "Stress-Free Filing",
    description: "A clear, guided process from start to finish.",
    icon: MonitorSmartphone,
  },
  {
    title: "Year-Round Support",
    description: "Guidance and support well beyond tax season.",
    icon: MessagesSquare,
  },
  {
    title: "Your Success, Our Priority",
    description: "Support tailored to individuals and businesses alike.",
    icon: HandHeart,
  },
];

/**
 * "Why Choose Us" benefits — drawn from the client's "Why Choose KronixTax?"
 * messaging (Accurate Filings, Proven Savings, Year-Round Support) plus their
 * recurring value propositions.
 */
export const WHY_CHOOSE_US: Benefit[] = [
  {
    title: "Accurate Filings",
    description: "Accurate, compliant returns prepared and reviewed by professionals.",
    icon: ClipboardCheck,
  },
  {
    title: "Proven Savings",
    description: "Guidance that helps you plan ahead and reduce liabilities.",
    icon: HandHeart,
  },
  {
    title: "Year-Round Support",
    description: "Support beyond tax season, whenever you need us.",
    icon: MessagesSquare,
  },
  {
    title: "IRS Compliance",
    description: "We help you stay compliant with current US tax rules.",
    icon: ShieldCheck,
  },
  {
    title: "For Individuals & Business",
    description: "Tax, accounting, and formation support tailored to your needs.",
    icon: UserCheck,
  },
];

/** "How It Works" — the end-to-end process shown on the Home page. */
export const HOW_IT_WORKS: (ProcessStep & { icon: typeof UserPlus })[] = [
  {
    title: "Book a Consultation",
    description: "Reach out for a free consultation about your tax needs.",
    icon: UserPlus,
  },
  {
    title: "Share Information",
    description: "Tell us about your tax situation so we understand your needs.",
    icon: ScrollText,
  },
  {
    title: "Upload Documents",
    description: "Securely provide your income and supporting documents.",
    icon: UploadCloud,
  },
  {
    title: "Professional Reviews",
    description:
      "A tax professional reviews your information and prepares your return.",
    icon: UserCheck,
  },
  {
    title: "Review & Approve",
    description: "You review the prepared return and approve it.",
    icon: FileCheck2,
  },
  {
    title: "Filing Completed",
    description: "We complete the filing and confirm when it is done.",
    icon: Send,
  },
];
