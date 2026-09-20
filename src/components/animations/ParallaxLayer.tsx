"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Parallax intensity. Positive moves the layer up as you scroll down;
   * negative moves it down. Different values on sibling layers create depth.
   * Keep small (roughly -0.3 to 0.3) for a subtle, professional feel.
   */
  speed?: number;
  /** Optional horizontal drift in px across the scroll range (very subtle). */
  driftX?: number;
  as?: "div" | "span";
};

/**
 * Speed-based scroll parallax for a single layer. Multiple ParallaxLayers with
 * different `speed` values move at different rates to create depth. Uses only
 * transform (GPU-friendly), is spring-smoothed, and is fully disabled under
 * prefers-reduced-motion. Intended for decorative/visual layers — not content.
 */
export function ParallaxLayer({
  children,
  className,
  speed = 0.15,
  driftX = 0,
  as = "div",
}: ParallaxLayerProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0..1) to a vertical offset scaled by speed. The 200
  // factor keeps motion gentle; sign of speed controls direction.
  const rawY = useTransform(scrollYProgress, [0, 1], [speed * 200, speed * -200]);
  const rawX = useTransform(scrollYProgress, [0, 1], [driftX, -driftX]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.4 });

  const MotionTag = motion[as];

  if (prefersReduced) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag ref={ref} className={className} style={{ y, x }}>
      {children}
    </MotionTag>
  );
}
