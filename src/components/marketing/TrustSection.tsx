import { Section, Text } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { TRUST_ITEMS } from "@/config/highlights";

/**
 * Credibility strip: generic, configurable trust points (no invented stats,
 * awards, or credentials). Reads from TRUST_ITEMS config.
 */
export function TrustSection() {
  return (
    <Section tone="muted" className="py-12 sm:py-14 lg:py-16">
      <StaggerContainer className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
        {TRUST_ITEMS.map((item) => (
          <StaggerItem
            key={item.title}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-md bg-surface text-accent-dark shadow-sm transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_var(--glow-accent)]">
              <item.icon className="size-5" aria-hidden />
            </span>
            <Text variant="bodySm" className="font-medium">
              {item.title}
            </Text>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
