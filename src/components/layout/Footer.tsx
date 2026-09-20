import Link from "next/link";
import { Container, Text } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { Logo } from "./Logo";
import { SITE } from "@/config/site";
import { FOOTER_NAV } from "@/config/navigation";
import { TAX_SERVICES } from "@/config/services";

/**
 * Site footer. Links come from centralized config. Contact details are
 * placeholders (SITE.isContactPlaceholder) until the client provides real ones.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <Reveal className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <Text variant="bodySm" tone="muted" className="mt-4">
              {SITE.description}
            </Text>
          </div>

          <nav aria-label="Services">
            <h2 className="text-bodySm font-semibold text-content">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {TAX_SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-bodySm text-content-muted transition-colors hover:text-accent-dark"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {FOOTER_NAV.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-bodySm font-semibold text-content">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-bodySm text-content-muted transition-colors hover:text-accent-dark"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Text variant="caption" tone="muted" as="span">
            © {year} {SITE.name}. All rights reserved.
          </Text>
          <Text variant="caption" tone="muted" as="span">
            {SITE.contact.email} · {SITE.contact.phone}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
