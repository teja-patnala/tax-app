import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { SITE } from "@/config/site";
import "@/styles/globals.css";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display font for headings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Resolve metadataBase safely — never let a bad/empty URL crash the build
 * (Next calls new URL() during static generation of every page incl. 404).
 */
function resolveMetadataBase(): URL {
  try {
    return new URL(SITE.url);
  } catch {
    return new URL("https://www.kronixtax.com");
  }
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
