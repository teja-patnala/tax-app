import { Section, Heading, Text } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import { WHY_CHOOSE_US } from "@/config/highlights";

/**
 * "Why Choose Us" benefits. Visual hierarchy over decoration. Reads from config.
 */
export function WhyChooseUs() {
  return (
    <Section aria-labelledby="why-heading">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Professional support, made simple"
        intro="A calm, clear experience backed by professional review at every step."
        headingId="why-heading"
      />
      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US.map((benefit) => (
          <StaggerItem key={benefit.title} className="h-full">
            <div className="group flex h-full gap-4 rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-dark transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-content-inverse group-hover:shadow-[0_8px_24px_var(--glow-accent)]">
                <benefit.icon className="size-5" aria-hidden />
              </span>
              <div>
                <Heading level={3} size="h3" className="text-lg">
                  {benefit.title}
                </Heading>
                <Text variant="bodySm" tone="muted" className="mt-1.5">
                  {benefit.description}
                </Text>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
