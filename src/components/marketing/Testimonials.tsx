import { Quote } from "lucide-react";
import { Section, Card, Text, Badge } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import {
  TESTIMONIALS,
  TESTIMONIALS_ARE_PLACEHOLDER,
} from "@/config/testimonials";

/**
 * Testimonials section. If content is placeholder, the section is clearly
 * labeled as illustrative sample content and is NOT presented as real client
 * quotes. Replace with genuine, consented testimonials.
 */
export function Testimonials() {
  return (
    <Section aria-labelledby="testimonials-heading">
      <SectionHeading
        eyebrow="Testimonials"
        title="What a great experience looks like"
        headingId="testimonials-heading"
      />

      {TESTIMONIALS_ARE_PLACEHOLDER && (
        <div className="mt-6 flex justify-center">
          <Badge variant="warning">
            Sample content — illustrative only, not real client quotes
          </Badge>
        </div>
      )}

      <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, index) => (
          <StaggerItem key={index} className="h-full">
            <Card as="article" interactive className="group flex h-full flex-col">
              <Quote className="size-8 text-accent/30 transition-[transform,color] duration-300 ease-out group-hover:scale-110 group-hover:text-accent/60" aria-hidden />
              <Text variant="body" className="mt-4 flex-1">
                {t.quote}
              </Text>
              <div className="mt-6">
                <Text variant="bodySm" className="font-semibold" as="span">
                  {t.name}
                </Text>
                <Text
                  variant="caption"
                  tone="muted"
                  as="span"
                  className="block normal-case tracking-normal"
                >
                  {t.role}
                </Text>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
