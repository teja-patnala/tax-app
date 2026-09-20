"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { EASE_OUT_SOFT } from "@/lib/utils/motion";
import { HERO } from "@/config/site";
import { HeroVisual } from "./HeroVisual";
import { GlowBackground } from "./GlowBackground";

/**
 * Home hero — dark cinematic centerpiece. Navy gradient background with a teal
 * glow, a word-by-word headline reveal, and a staged entrance for the rest.
 * Transform/opacity only; reduced motion shows everything immediately.
 */
export function Hero() {
  const prefersReduced = useReducedMotion();

  const item = (index: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            ease: EASE_OUT_SOFT,
            delay: 0.2 + index * 0.12,
          },
        };

  const words = HERO.title.split(" ");

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-primary text-content-inverse">
      {/* Dark gradient base + cinematic glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-dark)" }}
      />
      <GlowBackground variant="hero" />

      <Container className="relative grid w-full items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-12">
        <div className="flex flex-col items-start gap-5">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-content-inverse/15 bg-content-inverse/5 px-3 py-1 text-caption font-medium uppercase tracking-wide text-accent-light"
            {...item(0)}
          >
            {HERO.eyebrow}
          </motion.span>

          {/* Word-by-word headline reveal */}
          <h1 className="font-display text-h1 font-semibold leading-[1.1] tracking-tight text-content-inverse lg:text-[2.75rem]">
            {words.map((word, i) =>
              prefersReduced ? (
                <span key={`${word}-${i}`}>{word} </span>
              ) : (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.35em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_OUT_SOFT,
                    delay: 0.3 + i * 0.06,
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              ),
            )}
          </h1>

          <motion.p
            className="max-w-xl text-body leading-relaxed text-content-inverse/80"
            {...item(4)}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div className="flex flex-col gap-3 sm:flex-row" {...item(5)}>
            <Button href={HERO.primaryCta.href} variant="secondary" size="lg">
              {HERO.primaryCta.label}
              <ArrowRight className="size-5" aria-hidden />
            </Button>
            <Button href={HERO.secondaryCta.href} variant="outline" size="lg">
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="lg:pl-6">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
