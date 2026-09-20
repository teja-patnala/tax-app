import { Header, Footer } from "@/components/layout";
import { WhatsAppButton } from "@/components/marketing";

/**
 * Marketing (public website) layout: shared Header + Footer, a skip link, and a
 * floating WhatsApp action fixed to the bottom-right corner across all pages.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-content-inverse"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
