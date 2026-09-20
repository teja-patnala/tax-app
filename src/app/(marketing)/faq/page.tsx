import type { Metadata } from "next";
import { Section, Accordion } from "@/components/ui";
import { PageHero, FinalCTA } from "@/components/marketing";
import { Reveal } from "@/components/animations";
import { FAQS } from "@/config/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about our tax preparation process, documents, and services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Clear, conservative answers to the questions we hear most."
      />
      <Section>
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={FAQS} />
        </Reveal>
      </Section>
      <FinalCTA />
    </>
  );
}
