import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const variantStyles: Record<ButtonVariant, string> = {
  // Color/background come from stable component classes in globals.css
  // (.btn-primary etc.) which read the design tokens — guaranteed visible
  // label. Shadow/layout stay as Tailwind utilities.
  primary: "btn-primary shadow-sm hover:shadow-md",
  secondary: "btn-secondary shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-primary hover:bg-surface-muted border border-border",
  link: "bg-transparent text-accent-dark underline-offset-4 hover:underline px-0",
  // For use on dark backgrounds (e.g. the primary CTA band).
  outline: "btn-outline",
};

// Sizes keep a >=44px touch target on interactive controls (md/lg).
const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 text-bodySm",
  md: "min-h-[44px] px-5 text-body",
  lg: "min-h-[52px] px-7 text-body",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Single button primitive for the whole app. Renders a Next.js Link when
 * `href` is provided, otherwise a native button. Variants and sizes are the
 * only styling surface — never restyle buttons per-use. All colors come from
 * centralized design tokens (no hardcoded values).
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    isLoading = false,
    className,
    children,
  } = props;

  const classes = cn(
    base,
    variantStyles[variant],
    variant !== "link" && sizeStyles[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, ...rest } = props as ButtonAsButton;
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={classes}
      {...rest}
    >
      {isLoading && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}
