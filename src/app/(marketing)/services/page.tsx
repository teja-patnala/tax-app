import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, ServiceCard, FinalCTA } from "@/components/marketing";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { TAX_SERVICES } from "@/config/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our tax services: individual and business tax filing, non-resident tax, ITIN, FBAR, amendments, and tax representation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Tax services, end to end"
        intro="Professional preparation and support across individual, business, and specialized tax needs."
      />
      <Section>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </Section>
      <FinalCTA />
    </>
  );
}
