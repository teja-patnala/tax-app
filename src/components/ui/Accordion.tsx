"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

/**
 * Accessible FAQ accordion. Button-controlled disclosure with
 * aria-expanded/aria-controls. Height animation is skipped under reduced motion.
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn(
        "divide-y divide-border rounded-lg border border-border bg-surface",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={item.question}
            className={cn(
              "transition-colors duration-300",
              isOpen && "bg-accent/5",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-body font-medium transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent",
                  isOpen ? "text-accent-dark" : "text-content",
                )}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300",
                    isOpen
                      ? "rotate-180 bg-accent text-content-inverse"
                      : "bg-surface-muted text-content-muted",
                  )}
                >
                  <ChevronDown className="size-4" aria-hidden />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-body text-content-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
