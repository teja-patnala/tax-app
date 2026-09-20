import type { Transition, Variants } from "framer-motion";

/**
 * Centralized motion configuration — single source of truth for durations,
 * easing and offsets. Mirrors animation-guidelines.md. Do not hardcode
 * durations/easings in individual components; import from here.
 */
export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

/** Soft ease-out curve reused everywhere. */
export const EASE_OUT_SOFT = [0.22, 1, 0.36, 1] as const;

export const REVEAL_OFFSET_Y = 24;
export const STAGGER_STEP = 0.1;

/** Standard viewport trigger: animate once when ~20% enters view. */
export const VIEWPORT_ONCE = { once: true, amount: 0.2 } as const;

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT_SOFT,
};

/**
 * Reveal variants: fade + slight upward movement. `hidden`/`visible` names are
 * shared so a StaggerContainer can orchestrate child StaggerItems.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET_Y },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

export function staggerContainerVariants(step: number = STAGGER_STEP): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step },
    },
  };
}
