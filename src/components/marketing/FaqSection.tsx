import Link from "next/link";
import { Section, Accordion, Text } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import { FAQS } from "@/config/faq";

type FaqSectionProps = {
  /** Limit the number of questions shown (e.g. on the Home page). */
  limit?: number;
  showViewAll?: boolean;
};

/**
 * FAQ section reusing the accessible Accordion and the shared FAQS config.
 * Used on the Home page (limited) and the dedicated /faq page (full).
 */
export function FaqSection({ limit, showViewAll = false }: FaqSectionProps) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <Section aria-labelledby="faq-heading">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Clear answers to the questions we hear most often."
        headingId="faq-heading"
      />
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <Accordion items={items} />
        {showViewAll && (
          <Text variant="bodySm" tone="muted" className="mt-6 text-center">
            Have another question?{" "}
            <Link
              href="/faq"
              className="font-semibold text-accent-dark hover:underline"
            >
              See all FAQs
            </Link>
          </Text>
        )}
      </Reveal>
    </Section>
  );
}
