"use client";

import { Deck, Slide } from "@revealjs/react";

import { StackReveal } from "@/registry/slidecn/ui/stack-reveal";

import "reveal.js/reveal.css";

export const StackRevealPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <StackReveal className="gap-4">
        <Slide>
          <div className="flex h-full items-center justify-center">
            <h2 className="text-3xl font-bold">First Stacked Slide</h2>
          </div>
        </Slide>
        <Slide>
          <div className="flex h-full items-center justify-center">
            <h2 className="text-3xl font-bold">Second Stacked Slide</h2>
          </div>
        </Slide>
      </StackReveal>
    </Deck>
  </div>
);
