"use client";

import { Deck } from "@revealjs/react";

import { QuoteSlide } from "@/registry/slidecn/ui/quote-slide";

import "reveal.js/dist/reveal.css";

export const QuoteSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <QuoteSlide
        quote="The best way to predict the future is to create it."
        attribution="Peter Drucker"
        variant="minimal"
      />
    </Deck>
  </div>
);
