"use client";

import { Deck } from "@revealjs/react";

import { QuoteSlide } from "@/registry/slidecn/ui/quote-slide";

import "reveal.js/reveal.css";

export const QuoteSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <QuoteSlide
      quote="The best way to predict the future is to create it."
      attribution="Peter Drucker"
      variant="minimal"
    />
  </Deck>
);
