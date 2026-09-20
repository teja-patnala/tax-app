"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  revealVariants,
  staggerContainerVariants,
  STAGGER_STEP,
  VIEWPORT_ONCE,
} from "@/lib/utils/motion";

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child animating in. */
  step?: number;
  as?: "div" | "ul" | "ol";
};

/**
 * Orchestrates a natural stagger for grouped children (e.g. card grids).
 * Wrap each child in <StaggerItem>. Under reduced motion, renders children
 * immediately with no motion.
 */
export function StaggerContainer({
  children,
  className,
  step = STAGGER_STEP,
  as = "div",
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReduced) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={staggerContainerVariants(step)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
};

/**
 * A single item within a StaggerContainer. Inherits the container's
 * orchestration via shared hidden/visible variants.
 */
export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReduced) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag className={className} variants={revealVariants}>
      {children}
    </MotionTag>
  );
}
