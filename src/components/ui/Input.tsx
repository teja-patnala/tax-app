"use client";

import { useId } from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = {
  label: string;
  hideLabel?: boolean;
  helperText?: string;
  error?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "id">;

/**
 * Accessible text field: associated label, helper text, and error messaging
 * wired via aria-describedby / aria-invalid. Comfortable sizing for mobile.
 */
export function Input({
  label,
  hideLabel = false,
  helperText,
  error,
  className,
  required,
  ...props
}: InputProps) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn(
          "text-bodySm font-medium text-content",
          hideLabel && "sr-only",
        )}
      >
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          cn(helperText && helperId, error && errorId) || undefined
        }
        className={cn(
          "min-h-[44px] w-full rounded-md border border-border bg-surface px-4 text-body text-content shadow-sm outline-none transition-colors placeholder:text-content-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30",
          error &&
            "border-danger focus-visible:border-danger focus-visible:ring-danger/30",
          className,
        )}
        {...props}
      />
      {helperText && !error && (
        <p id={helperId} className="text-bodySm text-content-muted">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-bodySm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
