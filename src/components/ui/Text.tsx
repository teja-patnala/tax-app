import { cn } from "@/lib/utils/cn";

type TextProps = {
  children: React.ReactNode;
  variant?: "body" | "bodyLg" | "bodySm" | "caption";
  tone?: "default" | "muted" | "inverse";
  className?: string;
  as?: "p" | "span" | "div";
};

const variantStyles = {
  body: "text-body",
  bodyLg: "text-body sm:text-lg leading-relaxed",
  bodySm: "text-bodySm",
  caption: "text-caption uppercase tracking-wide font-medium",
} as const;

const toneStyles = {
  default: "text-content",
  muted: "text-content-muted",
  inverse: "text-content-inverse",
} as const;

/**
 * Centralized body/caption typography. Use instead of raw text utilities so
 * font sizing and muted tones stay consistent site-wide.
 */
export function Text({
  children,
  variant = "body",
  tone = "default",
  className,
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag className={cn(variantStyles[variant], toneStyles[tone], className)}>
      {children}
    </Tag>
  );
}
