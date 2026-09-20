import { ArrowRight } from "lucide-react";
import { Container, Heading, Text, Button } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { GlowBackground } from "./GlowBackground";

type FinalCTAProps = {
  title?: string;
  subtitle?: string;
};

/**
 * Closing call-to-action band — dark, cinematic finish. Navy gradient with a
 * teal glow to draw the eye to the primary action. Reusable across marketing
 * pages with optional copy overrides.
 */
export function FinalCTA({
  title = "Ready to get started?",
  subtitle = "Book your free consultation today and take the first step toward accurate, stress-free tax and accounting support.",
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-content-inverse">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-dark)" }}
      />
      <GlowBackground variant="band" />
      <Container className="relative py-20 sm:py-24">
        <Reveal
          blur
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <Heading level={2} className="text-content-inverse">
            {title}
          </Heading>
          <Text variant="bodyLg" tone="inverse" className="opacity-85">
            {subtitle}
          </Text>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary" size="lg">
              Book a Free Consultation
              <ArrowRight className="size-5" aria-hidden />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
