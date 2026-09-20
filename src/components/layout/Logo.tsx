import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  /**
   * Kept for API compatibility with existing call sites. The full-color logo
   * image is used in all cases; on dark backgrounds it sits on its own.
   */
  tone?: "default" | "inverse";
  /** Rendered logo height in px (width scales to preserve aspect ratio). */
  height?: number;
};

/**
 * Brand logo. Renders the full KronixTax wordmark image from SITE config and
 * links to home. Height is responsive; width auto-scales via next/image using
 * the source aspect ratio.
 */
export function Logo({ className, height = 40 }: LogoProps) {
  const { logo } = SITE;
  const aspectRatio = logo.width / logo.height;

  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn(
        "inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={Math.round(height * aspectRatio)}
        height={height}
        priority
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  );
}
