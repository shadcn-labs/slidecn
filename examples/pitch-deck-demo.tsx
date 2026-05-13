"use client";

import { Deck } from "@revealjs/react";

import { PitchDeck } from "@/registry/slidecn/blocks/pitch-deck";

import "reveal.js/dist/reveal.css";

export const PitchDeckPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>{PitchDeck}</Deck>
  </div>
);
