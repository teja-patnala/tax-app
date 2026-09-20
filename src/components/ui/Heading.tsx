import { cn } from "@/lib/utils/cn";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  children: React.ReactNode;
  /** Semantic heading level (h1-h3). */
  level?: HeadingLevel;
  /** Visual size override, decoupled from semantic level. */
  size?: "display" | "h1" | "h2" | "h3";
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

const sizeStyles = {
  display: "font-display text-display tracking-tight",
  h1: "font-display text-h1 tracking-tight",
  h2: "font-display text-h2 tracking-tight",
  h3: "font-display text-h3",
} as const;

const defaultSizeForLevel: Record<HeadingLevel, keyof typeof sizeStyles> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

/**
 * Centralized heading. Keeps type scale and display font in one place so
 * components never hand-pick font sizes. `size` lets visual weight differ
 * from semantic level when needed.
 */
export function Heading({
  children,
  level = 2,
  size,
  className,
  id,
  as,
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as const);
  const resolvedSize = size ?? defaultSizeForLevel[level];

  return (
    <Tag
      id={id}
      className={cn(
        "text-balance text-content",
        sizeStyles[resolvedSize],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
