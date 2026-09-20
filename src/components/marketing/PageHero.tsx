import { Container, Badge, Heading, Text } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { GlowBackground } from "./GlowBackground";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

/**
 * Compact dark hero for inner marketing pages (About, Pricing, FAQ, Contact,
 * service details). Mirrors the Home hero's cinematic navy + glow treatment so
 * page tops feel consistent and premium.
 */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-content-inverse">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-dark)" }}
      />
      <GlowBackground variant="band" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal
          blur
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          {eyebrow && (
            <Badge
              variant="accent"
              className="bg-content-inverse/10 text-accent-light"
            >
              {eyebrow}
            </Badge>
          )}
          <Heading level={1} className="text-content-inverse">
            {title}
          </Heading>
          {intro && (
            <Text variant="bodyLg" tone="inverse" className="opacity-85">
              {intro}
            </Text>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
