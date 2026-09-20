import {
  Building2,
  FileText,
  IdCard,
  Landmark,
  BookOpenCheck,
  Wallet,
  Lightbulb,
  ShieldAlert,
  Rocket,
} from "lucide-react";
import type { TaxService } from "@/types/content";

/**
 * Single source of truth for services. Cards, the services index, the
 * navigation, and each /services/[slug] page all read from here.
 *
 * Every entry is supported by KronixTax's approved Instagram material. Do NOT
 * add generic tax/financial services (investment, wealth, insurance, legal,
 * immigration, etc.) unless the client explicitly confirms them.
 */
export const TAX_SERVICES: TaxService[] = [
  {
    slug: "individual-tax",
    title: "Individual Tax Filing",
    summary: "Accurate individual return preparation, including Form 1040 and 1040NR.",
    overview:
      "Preparation and filing support for individual taxpayers, including US residents (Form 1040) and non-residents (Form 1040NR). We help you organize your information, review your documents, and file an accurate, compliant return.",
    icon: FileText,
    audience: [
      "US residents filing Form 1040",
      "Non-residents with US filing obligations (Form 1040NR)",
      "Individuals with multiple or cross-border income sources",
    ],
    highlights: [
      "Form 1040 and 1040NR preparation",
      "Deduction and credit review",
      "Clear explanation of your return before filing",
    ],
    process: [
      { title: "Share your details", description: "Tell us about your tax situation and goals." },
      { title: "Provide documents", description: "Securely share your income and supporting records." },
      { title: "Professional review", description: "A KronixTax professional prepares and reviews your return." },
      { title: "Approve and file", description: "You review the return, then we complete the filing." },
    ],
  },
  {
    slug: "itin-application",
    title: "ITIN Application Guidance",
    summary:
      "Guidance applying for or renewing an Individual Taxpayer Identification Number.",
    overview:
      "Support with the ITIN application and renewal process for individuals who need a taxpayer identification number but are not eligible for a Social Security Number.",
    icon: IdCard,
    audience: [
      "Individuals not eligible for an SSN",
      "Dependents and spouses who need an ITIN",
      "Filers renewing an expiring ITIN",
    ],
    highlights: [
      "New ITIN application guidance",
      "ITIN renewal support",
      "Help identifying required documentation",
    ],
    process: [
      { title: "Assess needs", description: "We confirm whether you need a new ITIN or a renewal." },
      { title: "Prepare application", description: "We guide the application and required documents." },
      { title: "Review", description: "We review everything with you before submission." },
      { title: "Submit", description: "We guide you through submitting your application." },
    ],
  },
  {
    slug: "fbar-fatca",
    title: "FBAR / FATCA Reporting",
    summary:
      "Reporting support for foreign bank and financial accounts (FBAR / FATCA).",
    overview:
      "Assistance preparing foreign account reporting for individuals who meet FBAR/FATCA thresholds, including organizing account details and completing the required reporting accurately.",
    icon: Landmark,
    audience: [
      "US persons with foreign financial accounts",
      "Individuals meeting FBAR/FATCA reporting thresholds",
      "Filers reporting multiple foreign accounts",
    ],
    highlights: [
      "FBAR / FATCA preparation",
      "Account information organization",
      "Guidance on reporting requirements",
    ],
    process: [
      { title: "Review accounts", description: "We identify which accounts must be reported." },
      { title: "Collect details", description: "Provide account balances and institution details." },
      { title: "Preparation", description: "We prepare your reporting accurately." },
      { title: "Submit", description: "We help you complete the required submission." },
    ],
  },
  {
    slug: "business-tax",
    title: "Business Tax Filing",
    summary:
      "Business return preparation, including Forms 1120, 1065, and 1120-S.",
    overview:
      "Support for business entities that need accurate, compliant tax filings — including C corporations (Form 1120), partnerships (Form 1065), and S corporations (Form 1120-S). We work with your records to prepare and file your business return.",
    icon: Building2,
    audience: [
      "C corporations (Form 1120)",
      "Partnerships and multi-member LLCs (Form 1065)",
      "S corporations (Form 1120-S)",
    ],
    highlights: [
      "Form 1120, 1065, and 1120-S preparation",
      "Income and expense organization",
      "Coordination with your bookkeeping records",
    ],
    process: [
      { title: "Business intake", description: "We gather your entity details and financial records." },
      { title: "Document collection", description: "Share statements, ledgers, and supporting documents." },
      { title: "Preparation and review", description: "We prepare the return and review it with you." },
      { title: "Filing", description: "We complete the filing once you approve." },
    ],
  },
  {
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    summary:
      "Ongoing bookkeeping and accounting to keep your finances organized and compliant.",
    overview:
      "Bookkeeping and accounting services that keep your financial records accurate and up to date, giving you a clear picture of your business and a clean foundation for tax filing.",
    icon: BookOpenCheck,
    audience: [
      "Small businesses and startups",
      "Business owners who want organized books",
      "Entities preparing for tax season",
    ],
    highlights: [
      "Ongoing bookkeeping",
      "Accounting records maintenance",
      "A clean foundation for accurate filing",
    ],
    process: [
      { title: "Understand your business", description: "We learn how your business operates and records finances." },
      { title: "Organize records", description: "We set up and maintain your books." },
      { title: "Ongoing upkeep", description: "We keep your accounts current throughout the year." },
      { title: "Reporting", description: "You get clear, filing-ready financial records." },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Services",
    summary: "Payroll support so your team is paid accurately and on time.",
    overview:
      "Payroll services that help you run payroll accurately and stay on top of related obligations, so you can focus on running your business.",
    icon: Wallet,
    audience: [
      "Businesses with employees",
      "Owners who want reliable payroll runs",
      "Entities needing payroll compliance support",
    ],
    highlights: [
      "Payroll processing support",
      "Accurate, on-time runs",
      "Help staying compliant",
    ],
    process: [
      { title: "Setup", description: "We gather your payroll and employee details." },
      { title: "Processing", description: "We help run payroll on your schedule." },
      { title: "Compliance", description: "We help keep payroll obligations on track." },
      { title: "Ongoing support", description: "We support your payroll through the year." },
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning & Consultation",
    summary: "Reduce liabilities, prepare for the future, and protect your wealth.",
    overview:
      "Tax planning and consultation to help you make informed decisions, reduce liabilities, and prepare for what's ahead — with guidance grounded in current US tax rules.",
    icon: Lightbulb,
    audience: [
      "Individuals planning ahead",
      "Business owners managing tax exposure",
      "Anyone seeking proactive, year-round guidance",
    ],
    highlights: [
      "Reduce liabilities",
      "Prepare for the future",
      "Protect your wealth",
    ],
    process: [
      { title: "Review your situation", description: "We understand your income, entity, and goals." },
      { title: "Identify opportunities", description: "We highlight planning options that apply to you." },
      { title: "Plan", description: "We outline a clear, compliant approach." },
      { title: "Ongoing support", description: "We revisit the plan as your situation changes." },
    ],
  },
  {
    slug: "audits-notices",
    title: "Audits & Notice Clearance",
    summary:
      "Support understanding and responding to IRS notices and audit requests.",
    overview:
      "Assistance when you receive an IRS notice or audit request. We help you understand the correspondence, organize the relevant records, and prepare an appropriate response.",
    icon: ShieldAlert,
    audience: [
      "Individuals or businesses who received an IRS notice",
      "Filers responding to an audit or inquiry",
      "Anyone needing help organizing a response",
    ],
    highlights: [
      "Notice and correspondence review",
      "Help organizing supporting records",
      "Guidance through the response process",
    ],
    process: [
      { title: "Review the notice", description: "We help you understand what's being requested." },
      { title: "Collect records", description: "We gather the documents relevant to the matter." },
      { title: "Prepare response", description: "We help prepare an organized response." },
      { title: "Follow through", description: "We support you through to resolution." },
    ],
  },
  {
    slug: "business-formation",
    title: "US Business Formation",
    summary:
      "Start your US company — end-to-end formation and compliance for entrepreneurs worldwide.",
    overview:
      "Complete business formation and compliance solutions for entrepreneurs worldwide. From choosing an entity to EIN registration, bank account support, operating agreements, and annual filings — we help you build, grow, and succeed.",
    icon: Rocket,
    audience: [
      "Entrepreneurs worldwide starting a US company",
      "Founders forming an LLC or corporation",
      "Owners needing EIN, banking, and compliance support",
    ],
    highlights: [
      "Single-Member & Multi-Member LLC formation",
      "C Corporation & S Corporation formation",
      "EIN registration, bank account opening support, and operating agreements",
      "Annual filings and ongoing compliance support",
    ],
    process: [
      { title: "Choose your entity", description: "We help you select LLC, C-Corp, or S-Corp for your goals." },
      { title: "Formation", description: "We handle the formation paperwork end to end." },
      { title: "EIN & banking", description: "We support EIN registration and US bank account opening." },
      { title: "Stay compliant", description: "We handle operating agreements and annual filings." },
    ],
  },
];

export function getServiceBySlug(slug: string): TaxService | undefined {
  return TAX_SERVICES.find((service) => service.slug === slug);
}
