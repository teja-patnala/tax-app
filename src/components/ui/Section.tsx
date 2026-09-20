import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Optional inner Container wrap. Defaults to true. */
  contained?: boolean;
  /** Background surface treatment. */
  tone?: "default" | "muted" | "primary";
  id?: string;
  "aria-labelledby"?: string;
};

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-transparent",
  muted: "bg-surface-muted",
  primary: "bg-primary text-content-inverse",
};

/**
 * Vertical rhythm wrapper for page sections. Applies consistent block spacing
 * and optional background tone, so pages never hand-roll padding values.
 */
export function Section({
  children,
  className,
  contained = true,
  tone = "default",
  id,
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", toneStyles[tone], className)}
      {...aria}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
