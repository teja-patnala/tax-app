import type { AccordionItem } from "@/components/ui";

/**
 * FAQ content — single source of truth, shared by the Home FAQ section and the
 * dedicated /faq page. Every answer maps to a service KronixTax actually
 * advertises. Answers stay informational and conservative — no legal or tax
 * guarantees beyond what the client's material supports.
 */
export const FAQS: AccordionItem[] = [
  {
    question: "What services does KronixTax provide?",
    answer:
      "We provide US tax and accounting services for individuals and businesses: individual tax filing (Form 1040 and 1040NR), ITIN application guidance, FBAR/FATCA reporting, business tax filing (Forms 1120, 1065, 1120-S), bookkeeping and accounting, payroll, tax planning and consultation, audits and notice clearance assistance, and US business formation.",
  },
  {
    question: "Which individual tax forms do you handle?",
    answer:
      "We prepare individual returns including Form 1040 for US residents and Form 1040NR for non-residents with US filing obligations.",
  },
  {
    question: "Can you help me apply for an ITIN?",
    answer:
      "Yes. We provide guidance for both new ITIN applications and renewals, and help you identify the documentation required.",
  },
  {
    question: "Do you handle FBAR / FATCA reporting?",
    answer:
      "Yes. If you meet the reporting thresholds for foreign financial accounts, we help you organize your account details and complete the required FBAR/FATCA reporting.",
  },
  {
    question: "Which business tax returns do you file?",
    answer:
      "We prepare business returns including Form 1120 (C corporations), Form 1065 (partnerships and multi-member LLCs), and Form 1120-S (S corporations).",
  },
  {
    question: "Can you help me start a US company?",
    answer:
      "Yes. We offer complete business formation for entrepreneurs worldwide — Single-Member and Multi-Member LLCs, C Corporations, and S Corporations — along with EIN registration, US business bank account opening support, operating agreements, and annual filings.",
  },
  {
    question: "Do you offer bookkeeping, accounting, and payroll?",
    answer:
      "Yes. We provide ongoing bookkeeping and accounting to keep your records organized and filing-ready, as well as payroll services for businesses with employees.",
  },
  {
    question: "What does tax planning and consultation include?",
    answer:
      "Our tax planning and consultation helps you reduce liabilities, prepare for the future, and protect your wealth, with guidance grounded in current US tax rules.",
  },
  {
    question: "Can you help if I received an IRS notice?",
    answer:
      "Yes. We assist with audits and notice clearance — helping you understand the correspondence, organize supporting records, and prepare an appropriate response.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book your free consultation today. We'll discuss your situation and outline clear next steps.",
  },
];
