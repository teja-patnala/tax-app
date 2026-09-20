"use client";

import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  helperText?: string;
  error?: string;
  className?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className" | "id">;

/**
 * Accessible native select styled to match the design system. Native element
 * keeps mobile UX and keyboard behavior correct without extra JS.
 */
export function Select({
  label,
  options,
  placeholder,
  helperText,
  error,
  className,
  required,
  defaultValue,
  value,
  ...props
}: SelectProps) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  // Support both controlled (value) and uncontrolled (defaultValue) usage
  // without passing both to the native element (React warns on that).
  const isControlled = value !== undefined;
  const valueProps = isControlled
    ? { value }
    : { defaultValue: defaultValue ?? (placeholder ? "" : undefined) };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-bodySm font-medium text-content">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          required={required}
          {...valueProps}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            cn(helperText && helperId, error && errorId) || undefined
          }
          className={cn(
            "min-h-[44px] w-full appearance-none rounded-md border border-border bg-surface px-4 pr-10 text-body text-content shadow-sm outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30",
            error &&
              "border-danger focus-visible:border-danger focus-visible:ring-danger/30",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-content-muted"
          aria-hidden
        />
      </div>
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
