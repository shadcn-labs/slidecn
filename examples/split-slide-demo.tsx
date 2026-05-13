"use client";

import { Deck } from "@revealjs/react";

import { SplitSlide } from "@/registry/slidecn/ui/split-slide";

import "reveal.js/reveal.css";

export const SplitSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <SplitSlide
        title="Comparison"
        ratio="equal"
        divider
        left={
          <div className="flex h-full items-center justify-center rounded-lg bg-muted p-6">
            <p className="text-center text-muted-foreground">Column A</p>
          </div>
        }
        right={
          <div className="flex h-full items-center justify-center rounded-lg bg-muted p-6">
            <p className="text-center text-muted-foreground">Column B</p>
          </div>
        }
      />
    </Deck>
  </div>
);
