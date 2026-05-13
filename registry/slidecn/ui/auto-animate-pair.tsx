"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Auto-animate pair renders two consecutive slides that animate between each other.
 * The caller must place a child with `data-id={animateId}` inside both `from` and `to`
 * for the animation to trigger.
 */
interface AutoAnimatePairProps extends SlideProps {
  animateId: string;
  from: ReactNode;
  to: ReactNode;
  easing?: string;
  duration?: number;
  notes?: string;
}

const AutoAnimatePair = ({
  animateId,
  from,
  to,
  easing,
  duration,
  className,
  notes,
  ...slideProps
}: AutoAnimatePairProps) => (
  <>
    <Slide
      className={cn(className)}
      autoAnimate
      autoAnimateId={animateId}
      autoAnimateEasing={easing}
      autoAnimateDuration={duration}
      {...slideProps}
    >
      {from}
      {notes && <aside className="notes">{notes}</aside>}
    </Slide>
    <Slide
      className={cn(className)}
      autoAnimate
      autoAnimateId={animateId}
      autoAnimateEasing={easing}
      autoAnimateDuration={duration}
      {...slideProps}
    >
      {to}
    </Slide>
  </>
);

export { AutoAnimatePair };
