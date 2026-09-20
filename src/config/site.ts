/**
 * Central brand/site configuration. Change brand-level values here only.
 * Content sourced from the client's approved Instagram promotional material
 * (KRONIXTAX / US Taxation Services).
 */
export const SITE = {
  name: "KronixTax",
  /** Primary positioning line used near the brand. */
  positioning: "US Taxation Services",
  tagline: "Accurate. Compliant. Trusted.",
  /**
   * Full brand logo image (served from apps/web/public). Contains the KronixTax
   * wordmark + tagline. Save the file at public/brand/kronixtax-logo.png.
   * Update these values if you use a different filename or dimensions.
   */
  logo: {
    src: "/brand/kronixtax-logo.png",
    /* Intrinsic size of the source image — used by next/image for aspect ratio.
       Adjust to your actual file's pixel dimensions if different. */
    width: 1024,
    height: 260,
    alt: "KronixTax — US Taxation Services",
  },
  /** Canonical site URL. Override via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kronixtax.com",
  description:
    "Your trusted partner in US taxation services. Tax and accounting for individuals and businesses — from filing and bookkeeping to US business formation and ongoing compliance.",
  contact: {
    email: "info@kronixtax.com",
    /*
     * PHONE CONFLICT — NEEDS CLIENT CONFIRMATION.
     * The client's posts show two different US numbers:
     *   +1 (712) 414-6604   (Post 1)
     *   +1 (279) 200-7153   (other posts)
     * `phone` below holds the US number currently used on the site; the
     * alternate is preserved in `phoneUsAlternate`. Confirm the correct one
     * with the client, then remove the alternate. The India number is
     * consistent across posts.
     */
    phone: "+1 (712) 414-6604",
    phoneUsAlternate: "+1 (279) 200-7153",
    phoneIndia: "+91 88970 86655",
    address: {
      line1: "1209 Mountain Road PL NE",
      line2: "STE R",
      city: "Albuquerque",
      state: "NM",
      zip: "87110",
    },
  },
  /** Real contact details are in place; the US phone number needs confirming. */
  isContactPlaceholder: false,
  socials: {
    instagram: "https://www.instagram.com/kronixtaxllc",
    instagramHandle: "@kronixtaxllc",
    linkedin: "",
    twitter: "",
  },
  /**
   * Lead-generation config (frontend-only, no backend). All values are read
   * from public env vars so keys are not hardcoded. See .env.example.
   *
   * - WhatsApp: digits only, no "+" or spaces (e.g. "17124146604").
   * - EmailJS: create a free account, add a service + template, then set the
   *   three NEXT_PUBLIC_EMAILJS_* vars. The template should expose fields:
   *   from_name, from_email, phone, service, message.
   */
  lead: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    /** Office inbox that receives inquiries (used in the EmailJS template). */
    inboxEmail: process.env.NEXT_PUBLIC_INQUIRY_EMAIL ?? "info@kronixtax.com",
    emailjs: {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    },
  },
} as const;

export type SiteConfig = typeof SITE;

/**
 * Hero copy kept here so marketing wording lives in config, not components.
 * Wording drawn from the client's approved messaging.
 */
export const HERO = {
  eyebrow: "Professional US Tax Services",
  title: "Tax and accounting made simple, clear and stress-free.",
  subtitle:
    "Your trusted partner in US taxation services. Professional support for individuals and businesses — from tax filing and accounting to US business formation and ongoing compliance.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
} as const;
