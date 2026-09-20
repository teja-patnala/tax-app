import { cn } from "@/lib/utils/cn";
import { ParallaxLayer } from "@/components/animations";

type GlowBackgroundProps = {
  /** Where to bias the glows. */
  variant?: "hero" | "band";
  className?: string;
  /**
   * Enable subtle scroll-parallax on the glow blooms (layered depth). Defaults
   * on. Set false for fully static sections. Reduced-motion disables it anyway.
   */
  parallax?: boolean;
};

/**
 * Decorative, non-interactive glow layers for dark sections. Soft radial
 * accent/primary blooms plus a faint grid, to give depth and a cinematic feel.
 * The two blooms drift at slightly different scroll speeds for layered depth;
 * the grid stays fixed. Purely presentational (aria-hidden); token-based colors.
 */
export function GlowBackground({
  variant = "hero",
  className,
  parallax = true,
}: GlowBackgroundProps) {
  const accentBloom = (
    <div
      className={cn(
        "absolute rounded-full blur-3xl",
        variant === "hero"
          ? "-right-24 -top-24 size-[28rem] bg-accent/20"
          : "-left-20 top-1/2 size-80 -translate-y-1/2 bg-accent/15",
      )}
    />
  );

  const secondaryBloom = (
    <div
      className={cn(
        "absolute rounded-full blur-3xl",
        variant === "hero"
          ? "-left-24 bottom-0 size-96 bg-accent-light/10"
          : "-right-16 -top-10 size-72 bg-accent-light/10",
      )}
    />
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {parallax ? (
        <>
          {/* Blooms move at different speeds -> depth. */}
          <ParallaxLayer speed={0.18} className="absolute inset-0">
            {accentBloom}
          </ParallaxLayer>
          <ParallaxLayer speed={-0.12} className="absolute inset-0">
            {secondaryBloom}
          </ParallaxLayer>
        </>
      ) : (
        <>
          {accentBloom}
          {secondaryBloom}
        </>
      )}

      {/* Faint grid overlay for texture (static). */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-text-inverse)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-text-inverse)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
