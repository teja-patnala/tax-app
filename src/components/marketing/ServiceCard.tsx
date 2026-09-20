import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, Heading, Text } from "@/components/ui";
import type { TaxService } from "@/types/content";

type ServiceCardProps = Pick<TaxService, "slug" | "title" | "summary" | "icon">;

/**
 * Single, reusable service card. Fed entirely by TAX_SERVICES config.
 * Cinematic hover: icon tile lifts + glows, arrow slides. Group-driven so the
 * whole card animates cohesively. Transform/opacity only.
 */
export function ServiceCard({
  slug,
  title,
  summary,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Card as="article" interactive className="group flex h-full flex-col">
      <span className="inline-flex size-12 items-center justify-center rounded-md bg-accent/10 text-accent-dark transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-content-inverse group-hover:shadow-[0_8px_24px_var(--glow-accent)]">
        <Icon className="size-6" aria-hidden />
      </span>
      <Heading level={3} size="h3" className="mt-5 text-xl">
        {title}
      </Heading>
      <Text variant="body" tone="muted" className="mt-2 flex-1">
        {summary}
      </Text>
      <Link
        href={`/services/${slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-bodySm font-semibold text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Learn more
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </Card>
  );
}
