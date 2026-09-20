import {
  Hero,
  TrustSection,
  ServicesSection,
  HowItWorks,
  WhyChooseUs,
  TaxExpertise,
  Testimonials,
  FaqSection,
  FinalCTA,
} from "@/components/marketing";

/**
 * Home — the primary marketing page. Composed entirely from reusable marketing
 * sections; all copy/data comes from config. Order follows the product spec.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <TaxExpertise />
      <Testimonials />
      <FaqSection limit={5} showViewAll />
      <FinalCTA />
    </>
  );
}
