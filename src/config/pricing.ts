import type { PricingTier } from "@/types/content";

/**
 * The client's material does NOT include specific prices. We do not invent any.
 * Every tier uses a free-consultation / contact CTA. When the client provides
 * real pricing, add a `price` field to PricingTier and render it here.
 *
 * Tiers below reflect the client's actual service categories, not placeholders.
 */
export const PRICING_NOTE =
  "Every situation is different, so we keep pricing simple: book a free consultation and we'll provide a personalized quote based on exactly what you need.";

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Individual Tax Services",
    description:
      "For individuals filing US or non-resident returns and related reporting.",
    features: [
      "Individual tax filing (Form 1040 / 1040NR)",
      "ITIN application guidance",
      "FBAR / FATCA reporting",
      "Tax planning & consultation",
    ],
    ctaLabel: "Book a Free Consultation",
    href: "/contact",
  },
  {
    name: "Business Tax & Accounting",
    description:
      "For businesses that need filing, accounting, and ongoing support.",
    features: [
      "Business tax filing (1120 / 1065 / 1120-S)",
      "Bookkeeping & accounting",
      "Payroll services",
      "Audits & notice clearance assistance",
    ],
    ctaLabel: "Book a Free Consultation",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "US Business Formation",
    description:
      "Complete formation & compliance for entrepreneurs worldwide.",
    features: [
      "LLC, C-Corp & S-Corp formation",
      "EIN registration",
      "Bank account opening support",
      "Operating agreements & annual filings",
    ],
    ctaLabel: "Start Your US Company",
    href: "/contact",
  },
];
