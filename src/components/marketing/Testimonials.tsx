import { Quote } from "lucide-react";
import { Section, Card, Text, Badge, StarRating } from "@/components/ui";
import { StaggerContainer, StaggerItem, Reveal, Marquee } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import {
  TESTIMONIALS,
  SHORT_REVIEWS,
  REVIEW_STATS,
  TESTIMONIALS_ARE_PLACEHOLDER,
} from "@/config/testimonials";

/**
 * Reviews & testimonials — professional, animated social-proof section.
 * Layout: heading -> trust/ratings stats row -> star-rated testimonial cards
 * (stagger reveal) -> auto-scrolling short-review marquee.
 *
 * Content is placeholder and clearly labeled as illustrative; replace with real,
 * consented quotes and verifiable numbers before launch.
 */
export function Testimonials() {
  return (
    <Section id="reviews" aria-labelledby="testimonials-heading">
      <SectionHeading
        eyebrow="Reviews & Testimonials"
        title="Trusted by individuals and businesses"
        intro="A calm, professional experience — from first consultation to completed filing."
        headingId="testimonials-heading"
      />

      {TESTIMONIALS_ARE_PLACEHOLDER && (
        <div className="mt-6 flex justify-center">
          <Badge variant="warning">
            Sample content — illustrative only, to be replaced with real reviews
          </Badge>
        </div>
      )}

      {/* Trust / ratings stats */}
      <Reveal className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 rounded-xl border border-border bg-surface p-6 shadow-sm sm:grid-cols-4">
        {REVIEW_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-2xl font-semibold text-primary">
              {stat.value}
            </div>
            <Text variant="caption" tone="muted" as="span" className="normal-case tracking-normal">
              {stat.label}
            </Text>
          </div>
        ))}
      </Reveal>

      {/* Testimonial cards */}
      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, index) => (
          <StaggerItem key={index} className="h-full">
            <Card
              as="article"
              interactive
              className="group flex h-full flex-col"
            >
              <div className="flex items-center justify-between">
                <Quote
                  className="size-8 text-accent/30 transition-[transform,color] duration-300 ease-out group-hover:scale-110 group-hover:text-accent/60"
                  aria-hidden
                />
                <StarRating value={t.rating} />
              </div>
              <Text variant="body" className="mt-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </Text>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent-dark"
                  aria-hidden
                >
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <div>
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
                    {t.detail ? ` · ${t.detail}` : ""}
                  </Text>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Auto-scrolling short reviews */}
      <Reveal className="mt-12">
        <Marquee speed={45} className="py-2">
          {SHORT_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="flex w-72 shrink-0 flex-col gap-2 rounded-lg border border-border bg-surface p-5 shadow-sm"
            >
              <StarRating value={review.rating} size={14} />
              <Text variant="bodySm" className="flex-1">
                &ldquo;{review.quote}&rdquo;
              </Text>
              <Text
                variant="caption"
                tone="muted"
                as="span"
                className="normal-case tracking-normal"
              >
                {review.name}
              </Text>
            </div>
          ))}
        </Marquee>
      </Reveal>
    </Section>
  );
}
