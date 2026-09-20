"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";

type CountUpProps = {
  /** Target value to count to. */
  to: number;
  /** Optional prefix/suffix (e.g. "$", "%", "+"). */
  prefix?: string;
  suffix?: string;
  /** Seconds for the count animation. */
  duration?: number;
  className?: string;
};

/**
 * Counts a number up from 0 to `to` when it scrolls into view (once).
 * Under reduced motion, renders the final value immediately.
 * Only text content changes — no layout-affecting animation.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: CountUpProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
