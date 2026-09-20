import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, Card, Heading, Text, Button, Badge } from "@/components/ui";
import { PageHero, FaqSection } from "@/components/marketing";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/animations";
import { PRICING_TIERS, PRICING_NOTE } from "@/config/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, quote-based pricing for individual, business, and specialized tax services.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear pricing, no surprises"
        intro={PRICING_NOTE}
      />
      <Section>
        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <Card
                interactive
                className={
                  tier.highlighted
                    ? "flex h-full flex-col border-accent shadow-lg ring-1 ring-accent/30 lg:-translate-y-2 lg:scale-[1.03]"
                    : "flex h-full flex-col"
                }
              >
                <div className="flex items-center justify-between">
                  <Heading level={3} size="h3" className="text-xl">
                    {tier.name}
                  </Heading>
                  {tier.highlighted && <Badge variant="accent">Popular</Badge>}
                </div>
                <Text variant="bodySm" tone="muted" className="mt-2">
                  {tier.description}
                </Text>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-accent-dark"
                        aria-hidden
                      />
                      <Text variant="bodySm" as="span">
                        {feature}
                      </Text>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={tier.href}
                    variant={tier.highlighted ? "secondary" : "ghost"}
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <Reveal className="mt-8">
          <Text variant="bodySm" tone="muted" className="text-center">
            Pricing is tailored to your situation. Request a quote and we&apos;ll
            provide clear, itemized pricing before any work begins.
          </Text>
        </Reveal>
      </Section>
      <FaqSection limit={5} showViewAll />
    </>
  );
}
