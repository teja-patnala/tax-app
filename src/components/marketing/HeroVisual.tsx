"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, FileText, ShieldCheck, UploadCloud } from "lucide-react";
import { EASE_OUT_SOFT } from "@/lib/utils/motion";
import { CountUp, ParallaxLayer } from "@/components/animations";

type Step = { label: string; done: boolean };

const STEPS: Step[] = [
  { label: "Information", done: true },
  { label: "Documents", done: true },
  { label: "Professional Review", done: true },
  { label: "Filing", done: false },
];

/**
 * Premium hero visual: a bright "tax filing progress" dashboard card that glows
 * against the dark hero, with an animated progress fill, a count-up stat, and
 * two subtle floating accent cards. Transform/opacity only; reduced-motion safe.
 */
export function HeroVisual() {
  const prefersReduced = useReducedMotion();

  const float = (delay: number) =>
    prefersReduced
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            delay,
          },
        };

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Main progress card */}
      <motion.div
        className="rounded-xl border border-border bg-surface p-6 shadow-lg"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT_SOFT, delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <span className="text-bodySm font-semibold text-content">
            Tax Filing Progress
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-caption font-medium text-accent-dark">
            <ShieldCheck className="size-3.5" aria-hidden />
            Secure
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.label}
              className="flex items-center gap-3"
              initial={prefersReduced ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: EASE_OUT_SOFT,
                delay: 0.8 + i * 0.12,
              }}
            >
              <span
                className={
                  step.done
                    ? "inline-flex size-6 items-center justify-center rounded-full bg-accent text-content-inverse"
                    : "inline-flex size-6 items-center justify-center rounded-full border-2 border-border-strong text-transparent"
                }
              >
                {step.done && <Check className="size-3.5" aria-hidden />}
              </span>
              <span
                className={
                  step.done
                    ? "text-body text-content"
                    : "text-body text-content-muted"
                }
              >
                {step.label}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Animated progress fill */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-surface-muted">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={prefersReduced ? false : { width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1, ease: EASE_OUT_SOFT, delay: 1.1 }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-caption text-content-muted">Simple &amp; guided</span>
          <span className="text-caption font-semibold text-accent-dark">
            <CountUp to={75} suffix="% complete" />
          </span>
        </div>
      </motion.div>

      {/* Floating accent card: upload — scroll-parallax layer + gentle float */}
      <ParallaxLayer
        speed={0.2}
        className="absolute -left-4 -top-5 hidden sm:block"
      >
        <motion.div
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 shadow-md"
          aria-hidden
          {...float(0)}
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-info/10 text-info">
            <UploadCloud className="size-4" />
          </span>
          <span className="text-bodySm font-medium text-content">Upload W-2</span>
        </motion.div>
      </ParallaxLayer>

      {/* Floating accent card: document — different speed for depth */}
      <ParallaxLayer
        speed={-0.14}
        className="absolute -bottom-5 -right-3 hidden sm:block"
      >
        <motion.div
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 shadow-md"
          aria-hidden
          {...float(1.2)}
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-success/10 text-success">
            <FileText className="size-4" />
          </span>
          <span className="text-bodySm font-medium text-content">Return ready</span>
        </motion.div>
      </ParallaxLayer>
    </div>
  );
}
