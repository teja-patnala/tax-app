import { Section, Heading, Text } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import { HOW_IT_WORKS } from "@/config/highlights";

/**
 * "How It Works" process. Numbered steps that stack cleanly on mobile and form
 * a connected grid on larger screens. Reads from HOW_IT_WORKS config.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="muted" aria-labelledby="how-heading">
      <SectionHeading
        eyebrow="How It Works"
        title="A simple, guided process"
        intro="Six clear steps from your first consultation to a completed filing."
        headingId="how-heading"
      />
      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HOW_IT_WORKS.map((step, index) => (
          <StaggerItem key={step.title}>
            <div className="group relative h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-accent/40 transition-colors duration-300 group-hover:text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary text-content-inverse transition-transform duration-300 ease-out group-hover:scale-110">
                  <step.icon className="size-5" aria-hidden />
                </span>
              </div>
              <Heading level={3} size="h3" className="mt-4 text-lg">
                {step.title}
              </Heading>
              <Text variant="bodySm" tone="muted" className="mt-2">
                {step.description}
              </Text>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
