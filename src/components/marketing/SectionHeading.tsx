import { Badge, Heading, Text } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  headingId?: string;
};

/**
 * Consistent section header: optional eyebrow badge, title, and intro text.
 * Reused across every marketing section so hierarchy stays uniform.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "default",
  headingId,
}: SectionHeadingProps) {
  return (
    <Reveal
      blur
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-2xl items-center text-center"
          : "items-start",
      )}
    >
      {eyebrow && (
        <Badge variant="accent" dot>
          {eyebrow}
        </Badge>
      )}
      <Heading
        level={2}
        id={headingId}
        className={tone === "inverse" ? "text-content-inverse" : undefined}
      >
        {title}
      </Heading>
      {intro && (
        <Text variant="bodyLg" tone={tone === "inverse" ? "inverse" : "muted"}>
          {intro}
        </Text>
      )}
    </Reveal>
  );
}
