import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Users } from "lucide-react";
import { Section, Heading, Text, Button } from "@/components/ui";
import { PageHero, SectionHeading, FinalCTA } from "@/components/marketing";
import {
  StaggerContainer,
  StaggerItem,
  Reveal,
  ScaleIn,
} from "@/components/animations";
import { TAX_SERVICES, getServiceBySlug } from "@/config/services";

type ServicePageProps = {
  params: { slug: string };
};

/** Pre-render a static page for each service slug. */
export function generateStaticParams() {
  return TAX_SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

/**
 * Single reusable service-detail page for all 7 services. Content is driven
 * entirely by the TAX_SERVICES config, so there is one architecture, not seven.
 * Structure: Hero -> Overview -> Who It Is For -> What We Help With -> Process -> CTA.
 */
export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} intro={service.summary} />

      {/* Overview */}
      <Section aria-labelledby="overview-heading">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <ScaleIn>
            <span className="inline-flex size-14 items-center justify-center rounded-lg bg-accent/10 text-accent-dark shadow-[0_8px_24px_var(--glow-accent)]">
              <Icon className="size-7" aria-hidden />
            </span>
          </ScaleIn>
          <Reveal blur>
            <Heading level={2} id="overview-heading">
              Overview
            </Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <Text variant="bodyLg" tone="muted">
              {service.overview}
            </Text>
          </Reveal>
        </div>
      </Section>

      {/* Who it is for + What we help with */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-surface p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <Users className="size-6 text-accent-dark" aria-hidden />
              <Heading level={2} size="h3" className="text-xl">
                Who it&apos;s for
              </Heading>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {service.audience.map((who) => (
                <li key={who} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-accent-dark"
                    aria-hidden
                  />
                  <Text variant="body" tone="muted" as="span">
                    {who}
                  </Text>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-lg border border-border bg-surface p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <Heading level={2} size="h3" className="text-xl">
              What we help with
            </Heading>
            <ul className="mt-5 flex flex-col gap-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-accent-dark"
                    aria-hidden
                  />
                  <Text variant="body" tone="muted" as="span">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section aria-labelledby="process-heading">
        <SectionHeading
          eyebrow="Process"
          title="How this service works"
          headingId="process-heading"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="group h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg">
                <span className="font-display text-2xl font-semibold text-accent/40 transition-colors duration-300 group-hover:text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading level={3} size="h3" className="mt-3 text-lg">
                  {step.title}
                </Heading>
                <Text variant="bodySm" tone="muted" className="mt-2">
                  {step.description}
                </Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <Reveal className="mt-10 flex justify-center">
          <Button href={`/contact?service=${service.slug}`} size="lg">
            Book a Free Consultation
            <ArrowRight className="size-5" aria-hidden />
          </Button>
        </Reveal>
      </Section>

      <FinalCTA
        title={`Ready to begin with ${service.title.toLowerCase()}?`}
        subtitle="Book your free consultation and we'll guide you through the next steps."
      />
    </>
  );
}
