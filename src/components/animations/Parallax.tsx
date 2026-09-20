"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Total vertical travel in px across the scroll range. Keep small/subtle. */
  offset?: number;
};

/**
 * Subtle scroll-linked vertical parallax using transform only. Restrained by
 * default. Disabled entirely under reduced motion (renders static).
 */
export function Parallax({ children, className, offset = 40 }: ParallaxProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
