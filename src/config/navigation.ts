import type { NavItem } from "@/types/content";

/**
 * Primary site navigation. Single source of truth for the header (desktop +
 * mobile) and the footer's primary links. This is a marketing + lead-gen site:
 * no auth/account links anywhere.
 */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

/** Single primary call-to-action used in header and mobile menu. */
export const PRIMARY_CTA = {
  label: "Free Consultation",
  href: "/contact",
} as const;

/** Footer link groups. */
export const FOOTER_NAV: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Explore",
    items: [
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
