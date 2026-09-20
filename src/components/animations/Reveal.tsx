"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  DURATION,
  EASE_OUT_SOFT,
  REVEAL_OFFSET_Y,
  VIEWPORT_ONCE,
} from "@/lib/utils/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before this element animates in. */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  /** Add a subtle blur-in for a more cinematic, deliberate reveal. */
  blur?: boolean;
};

/**
 * Fade + slight upward reveal when the element enters the viewport (once).
 * Optional blur-in for a more premium, deliberate feel. Under reduced motion,
 * content appears immediately with no transform/blur.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  blur = false,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReduced) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y: REVEAL_OFFSET_Y,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: blur ? DURATION.slow : DURATION.base,
        ease: EASE_OUT_SOFT,
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
