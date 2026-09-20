import type { Testimonial } from "@/types/content";

/**
 * DEMO PLACEHOLDER TESTIMONIALS.
 *
 * These are NOT real client quotes. Every entry has isPlaceholder: true and the
 * UI marks the section as illustrative. Replace with genuine, attributed
 * testimonials (with consent) before any real launch.
 */
export const TESTIMONIALS_ARE_PLACEHOLDER = true;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The process was clear from start to finish. I always knew what was needed and what happened next.",
    name: "Sample Client",
    role: "Individual filer",
    isPlaceholder: true,
  },
  {
    quote:
      "Uploading documents and getting a professional review took the stress out of filing for our business.",
    name: "Sample Client",
    role: "Small business owner",
    isPlaceholder: true,
  },
  {
    quote:
      "They guided our US company formation end to end — EIN, bank account, and filings all handled clearly.",
    name: "Sample Client",
    role: "Business formation client",
    isPlaceholder: true,
  },
];
