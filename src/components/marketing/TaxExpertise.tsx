import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import { TAX_SERVICES } from "@/config/services";

/**
 * Tax expertise range. Compact chips linking to each service detail page.
 * Reads from TAX_SERVICES so it never drifts from the services offered.
 */
export function TaxExpertise() {
  return (
    <Section tone="muted" aria-labelledby="expertise-heading">
      <SectionHeading
        eyebrow="Tax Expertise"
        title="A broad range of tax support"
        intro="We work across individual, business, and specialized tax needs."
        headingId="expertise-heading"
      />
      <StaggerContainer className="mt-10 flex flex-wrap justify-center gap-3">
        {TAX_SERVICES.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-bodySm font-medium text-content shadow-sm transition-[transform,border-color,color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent-dark hover:shadow-[0_8px_24px_var(--glow-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <service.icon className="size-4 text-accent-dark" aria-hidden />
              {service.title}
              <ArrowUpRight
                className="size-4 text-content-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
