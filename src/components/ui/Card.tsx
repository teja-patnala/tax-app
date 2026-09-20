import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Adds a subtle hover lift + shadow. Use for interactive/linked cards. */
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

/**
 * Surface panel: background, border, radius and soft shadow from tokens.
 * The single card shell used across marketing and portals.
 */
export function Card({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-surface p-6 shadow-sm",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
