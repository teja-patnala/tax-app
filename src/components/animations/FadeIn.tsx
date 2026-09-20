"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT_SOFT, VIEWPORT_ONCE } from "@/lib/utils/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Opacity-only reveal on viewport enter (once). Reduced-motion safe. */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: DURATION.base, ease: EASE_OUT_SOFT, delay }}
    >
      {children}
    </motion.div>
  );
}
