"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui";
import { MAIN_NAV, PRIMARY_CTA } from "@/config/navigation";
import { SITE } from "@/config/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Accessible mobile navigation drawer.
 * - Focus moves into the panel on open and restores on close.
 * - ESC closes; a focus trap keeps Tab within the panel.
 * - Background scroll is locked while open.
 * - Route changes close it (handled by the parent Header via pathname effect).
 * - Reduced motion disables slide/fade.
 */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const prefersReduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Portals require a DOM target that only exists after mount on the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  // Rendered via a portal to document.body so the fixed overlay escapes the
  // header's stacking context (the header uses sticky + z-index + backdrop-blur,
  // which would otherwise clip this drawer).
  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <motion.div
            className="absolute inset-0 bg-primary/60"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            className="absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] flex-col bg-surface shadow-lg"
            initial={prefersReduced ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={prefersReduced ? undefined : { x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-lg font-semibold text-primary">
                {SITE.name}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-md text-content-muted transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-3 py-3"
              aria-label="Primary"
            >
              <ul className="flex flex-col divide-y divide-border">
                {MAIN_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex min-h-[48px] items-center rounded-md px-3 text-base font-semibold text-primary transition-colors hover:bg-surface-muted hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 border-t border-border px-5 py-4">
              <Button
                href={PRIMARY_CTA.href}
                variant="secondary"
                onClick={onClose}
              >
                {PRIMARY_CTA.label}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
