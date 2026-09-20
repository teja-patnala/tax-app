import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as a different element (e.g. "section", "header"). */
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Centers content, applies the max content width and responsive side gutters.
 * Layout primitive — use instead of ad-hoc max-width/padding on every section.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-container px-6 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
