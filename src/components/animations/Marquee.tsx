"use client";

import { cn } from "@/lib/utils/cn";

type MarqueeProps = {
  children: React.ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  speed?: number;
  /** Scroll direction. */
  direction?: "left" | "right";
  /** Pause the scroll while hovered. */
  pauseOnHover?: boolean;
  className?: string;
};

/**
 * Seamless horizontal auto-scrolling marquee. The children are rendered twice
 * inside a track; a pure-CSS keyframe shifts the track by -50% for a continuous
 * loop with no jump. CSS animation means hover-pause and prefers-reduced-motion
 * (which neutralizes the animation globally) both work with zero per-frame JS.
 * Edges are masked so items fade in/out gracefully.
 */
export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "marquee-paused",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="marquee-track gap-4"
        data-direction={direction}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {/* Two identical copies -> seamless -50% loop. */}
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
