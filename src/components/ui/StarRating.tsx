import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type StarRatingProps = {
  /** Rating out of `max` (supports halves visually via rounding). */
  value: number;
  max?: number;
  /** Star size in px. */
  size?: number;
  className?: string;
};

/**
 * Accessible star rating. Renders filled/empty stars from tokens and exposes
 * the numeric rating to screen readers. Decorative stars are aria-hidden.
 */
export function StarRating({
  value,
  max = 5,
  size = 16,
  className,
}: StarRatingProps) {
  const rounded = Math.round(value);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${value} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={
            i < rounded
              ? "fill-warning text-warning"
              : "fill-transparent text-border-strong"
          }
          aria-hidden
        />
      ))}
    </span>
  );
}
