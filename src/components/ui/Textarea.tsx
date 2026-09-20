"use client";

import { useId } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = {
  label: string;
  helperText?: string;
  error?: string;
  className?: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id">;

/**
 * Accessible multi-line field, mirroring Input's label/helper/error wiring.
 */
export function Textarea({
  label,
  helperText,
  error,
  className,
  required,
  rows = 5,
  ...props
}: TextareaProps) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-bodySm font-medium text-content">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          cn(helperText && helperId, error && errorId) || undefined
        }
        className={cn(
          "w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-content shadow-sm outline-none transition-colors placeholder:text-content-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30",
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
