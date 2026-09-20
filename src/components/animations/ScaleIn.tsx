"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT_SOFT, VIEWPORT_ONCE } from "@/lib/utils/motion";

type ScaleInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Subtle fade + scale-up reveal (opacity/transform only). Reduced-motion safe.
 * Restrained per animation guidelines — small scale delta, no bounce.
 */
export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: DURATION.base, ease: EASE_OUT_SOFT, delay }}
    >
      {children}
    </motion.div>
  );
}
