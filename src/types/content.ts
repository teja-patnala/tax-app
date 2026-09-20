import type { LucideIcon } from "lucide-react";

/** A step in a linear process (e.g. How It Works, service process). */
export type ProcessStep = {
  title: string;
  description: string;
};

/** A single tax service. `slug` maps to /services/[slug]. */
export type TaxService = {
  slug: string;
  title: string;
  /** Short one-line description for cards. */
  summary: string;
  /** Longer overview shown on the service detail page. */
  overview: string;
  icon: LucideIcon;
  /** Who this service is for. */
  audience: string[];
  /** What the service helps with. */
  highlights: string[];
  /** Ordered steps specific to this service. */
  process: ProcessStep[];
};

/** A feature/benefit tile. */
export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** A single navigation entry. */
export type NavItem = {
  label: string;
  href: string;
};

/** A testimonial. `isPlaceholder` marks demo content that is not a real quote. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Star rating out of 5. */
  rating: number;
  /** Optional company or location shown under the name. */
  detail?: string;
  isPlaceholder: boolean;
};

/** A short one-line review used in the scrolling marquee row. */
export type ShortReview = {
  quote: string;
  name: string;
  rating: number;
  isPlaceholder: boolean;
};

/** A single trust/ratings statistic for the reviews summary row. */
export type ReviewStat = {
  label: string;
  value: string;
};

/** A pricing tier. Prices are intentionally omitted until provided by client. */
export type PricingTier = {
  name: string;
  description: string;
  features: string[];
  /** Call-to-action label; quote-based until real pricing exists. */
  ctaLabel: string;
  href: string;
  highlighted?: boolean;
};
