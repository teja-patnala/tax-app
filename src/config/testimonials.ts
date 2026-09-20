import type {
  Testimonial,
  ShortReview,
  ReviewStat,
} from "@/types/content";

/**
 * DEMO PLACEHOLDER TESTIMONIALS & REVIEWS.
 *
 * These are NOT real client quotes, names, or statistics. Every entry is marked
 * isPlaceholder: true and the UI labels the section as illustrative. Replace
 * with genuine, attributed testimonials and real numbers (with consent) before
 * launch. Do not present these as real client statements or metrics.
 */
export const TESTIMONIALS_ARE_PLACEHOLDER = true;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The process was clear from start to finish. I always knew what was needed and what happened next — no jargon, no surprises.",
    name: "Sample Client",
    role: "Individual filer",
    detail: "Form 1040",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "Getting a professional review took the stress out of filing for our business. Accurate, on time, and easy to work with.",
    name: "Sample Client",
    role: "Small business owner",
    detail: "Business Tax Filing",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "They guided our US company formation end to end — EIN, bank account, and annual filings all handled clearly.",
    name: "Sample Client",
    role: "Founder",
    detail: "US Business Formation",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "As a non-resident, my ITIN and filing felt complicated until they walked me through every step in plain language.",
    name: "Sample Client",
    role: "Non-resident filer",
    detail: "ITIN + 1040NR",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "Responsive, organized, and genuinely helpful with year-round tax planning. Exactly the partner we needed.",
    name: "Sample Client",
    role: "Consultant",
    detail: "Tax Planning",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "They cleared an IRS notice for me quickly and kept me informed the whole way. Real peace of mind.",
    name: "Sample Client",
    role: "Individual filer",
    detail: "Notice Clearance",
    rating: 5,
    isPlaceholder: true,
  },
];

/** Short one-liners for the auto-scrolling marquee row. */
export const SHORT_REVIEWS: ShortReview[] = [
  { quote: "Accurate, compliant, and stress-free.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Clear communication at every step.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Made our business filing simple.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Guided my ITIN application perfectly.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Year-round support that actually helps.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Handled our LLC formation end to end.", name: "Sample Client", rating: 5, isPlaceholder: true },
  { quote: "Professional and genuinely reassuring.", name: "Sample Client", rating: 5, isPlaceholder: true },
];

/**
 * Trust/ratings summary. Placeholder numbers — replace with real, verifiable
 * figures before launch (or remove entries you cannot substantiate).
 */
export const REVIEW_STATS: ReviewStat[] = [
  { label: "Average client rating", value: "5.0" },
  { label: "Would recommend", value: "100%" },
  { label: "Services covered", value: "9+" },
  { label: "Support", value: "Year-round" },
];
