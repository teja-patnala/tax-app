import { Section, Button } from "@/components/ui";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/animations";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { TAX_SERVICES } from "@/config/services";

/**
 * Services overview grid on the Home page. Cards come from TAX_SERVICES config.
 */
export function ServicesSection() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <SectionHeading
        eyebrow="Our Services"
        title="Tax services for every situation"
        intro="From individual returns to specialized filings, we support you with clear, professional guidance."
        headingId="services-heading"
      />
      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TAX_SERVICES.map((service) => (
          <StaggerItem key={service.slug} className="h-full">
            <ServiceCard
              slug={service.slug}
              title={service.title}
              summary={service.summary}
              icon={service.icon}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <Reveal className="mt-10 flex justify-center">
        <Button href="/services" variant="ghost">
          View all services
        </Button>
      </Reveal>
    </Section>
  );
}
