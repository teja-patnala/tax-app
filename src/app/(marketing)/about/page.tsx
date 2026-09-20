import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, Heading, Text } from "@/components/ui";
import {
  PageHero,
  SectionHeading,
  FinalCTA,
  HowItWorks,
} from "@/components/marketing";
import {
  StaggerContainer,
  StaggerItem,
  Reveal,
} from "@/components/animations";
import { SITE } from "@/config/site";
import {
  ABOUT_INTRO,
  BRAND_VALUES,
  OUR_APPROACH,
  WHO_WE_HELP,
  WHY_PROFESSIONAL,
} from "@/config/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about KronixTax — a team of dedicated professionals helping individuals and businesses with US tax, accounting, and business formation. Accurate. Compliant. Trusted.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KronixTax"
        title="Your trusted partner in US taxation services"
        intro={SITE.tagline}
      />

      {/* Intro + brand pull-quote */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal blur>
            {ABOUT_INTRO.map((paragraph) => (
              <Text
                key={paragraph.slice(0, 24)}
                variant="bodyLg"
                tone="muted"
                className="mb-4"
              >
                {paragraph}
              </Text>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <blockquote className="border-l-4 border-accent pl-6">
              <Text
                variant="bodyLg"
                className="font-display text-xl font-semibold text-primary sm:text-2xl"
              >
                &ldquo;Your Success, Our Priority.&rdquo;
              </Text>
            </blockquote>
          </Reveal>
        </div>
      </Section>

      {/* Brand values: Accurate. Compliant. Trusted. */}
      <Section tone="muted" aria-labelledby="values-heading">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Accurate. Compliant. Trusted."
          intro="The principles behind every filing, every client, every time."
          headingId="values-heading"
        />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {BRAND_VALUES.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="group flex h-full flex-col items-center gap-4 rounded-lg border border-border bg-surface p-8 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg">
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-accent/10 text-accent-dark transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-content-inverse group-hover:shadow-[0_8px_24px_var(--glow-accent)]">
                  <value.icon className="size-7" aria-hidden />
                </span>
                <Heading level={3} size="h3" className="text-xl">
                  {value.title}
                </Heading>
                <Text variant="bodySm" tone="muted">
                  {value.description}
                </Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Our approach */}
      <Section aria-labelledby="approach-heading">
        <SectionHeading
          eyebrow="Our Approach"
          title="How we work with you"
          headingId="approach-heading"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
          {OUR_APPROACH.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group flex h-full gap-4 rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-dark transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-content-inverse group-hover:shadow-[0_8px_24px_var(--glow-accent)]">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <Heading level={3} size="h3" className="text-lg">
                    {item.title}
                  </Heading>
                  <Text variant="bodySm" tone="muted" className="mt-1.5">
                    {item.description}
                  </Text>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Who we help */}
      <Section tone="muted" aria-labelledby="who-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal blur>
            <SectionHeading
              eyebrow="Who We Help"
              title="Support for individuals and businesses"
              align="left"
              headingId="who-heading"
            />
          </Reveal>
          <StaggerContainer className="flex flex-col gap-4">
            {WHO_WE_HELP.map((who) => (
              <StaggerItem key={who}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-accent-dark"
                    aria-hidden
                  />
                  <Text variant="body" as="span">
                    {who}
                  </Text>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <HowItWorks />

      {/* Why it matters */}
      <Section aria-labelledby="why-professional-heading">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Why choose professional tax support"
          headingId="why-professional-heading"
        />
        <StaggerContainer className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
          {WHY_PROFESSIONAL.map((point) => (
            <StaggerItem key={point.slice(0, 24)}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                  <Check className="size-4" aria-hidden />
                </span>
                <Text variant="body" tone="muted" as="span">
                  {point}
                </Text>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <FinalCTA />
    </>
  );
}
