import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Section, Heading, Text } from "@/components/ui";
import { PageHero, ContactForm, FinalCTA } from "@/components/marketing";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our team. Ask a question or request a quote for individual or business tax services.",
};

export default function ContactPage() {
  const { address } = SITE.contact;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Ask a question or request a quote. We'll get back to you with clear next steps."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <div>
              <Heading level={2} size="h3">
                Contact details
              </Heading>
              {SITE.isContactPlaceholder && (
                <Text variant="bodySm" tone="muted" className="mt-2">
                  Contact details below are placeholders and will be replaced
                  with real information.
                </Text>
              )}
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-accent-dark" aria-hidden />
                <div>
                  <Text variant="bodySm" className="font-medium">
                    Email
                  </Text>
                  <Text variant="bodySm" tone="muted">
                    {SITE.contact.email}
                  </Text>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-accent-dark" aria-hidden />
                <div>
                  <Text variant="bodySm" className="font-medium">
                    Phone
                  </Text>
                  <Text variant="bodySm" tone="muted">
                    {SITE.contact.phone}
                  </Text>
                </div>
              </li>
              {SITE.contact.phoneIndia && (
                <li className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-0.5 size-5 text-accent-dark"
                    aria-hidden
                  />
                  <div>
                    <Text variant="bodySm" className="font-medium">
                      WhatsApp
                    </Text>
                    <Text variant="bodySm" tone="muted">
                      {SITE.contact.phoneIndia}
                    </Text>
                  </div>
                </li>
              )}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-accent-dark" aria-hidden />
                <div>
                  <Text variant="bodySm" className="font-medium">
                    Address
                  </Text>
                  <Text variant="bodySm" tone="muted">
                    {address.line1}, {address.line2}
                    <br />
                    {address.city}, {address.state} {address.zip}
                  </Text>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
      <FinalCTA
        title="Prefer to talk it through?"
        subtitle="Book your free consultation and our team will guide you from there."
      />
    </>
  );
}
