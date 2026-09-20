import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "success" | "warning" | "info";
  /** Show a small leading dot (pulses) — nice for "live"/eyebrow labels. */
  dot?: boolean;
  className?: string;
};

const variantStyles = {
  neutral: "bg-surface-muted text-content-muted",
  accent: "bg-accent/10 text-accent-dark",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
} as const;

const dotStyles = {
  neutral: "bg-content-muted",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  info: "bg-info",
} as const;

/**
 * Small status/label pill. Token-driven; used for eyebrow labels and statuses.
 * The optional pulsing dot uses opacity only (reduced-motion neutralizes it
 * via the global prefers-reduced-motion rule).
 */
export function Badge({
  children,
  variant = "neutral",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {dot && (
        <span className="relative flex size-2" aria-hidden>
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              dotStyles[variant],
            )}
          />
          <span
            className={cn(
              "relative inline-flex size-2 rounded-full",
              dotStyles[variant],
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
