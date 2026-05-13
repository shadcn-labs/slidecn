"use client";

import { Deck } from "@revealjs/react";

import { PitchDeck } from "@/registry/slidecn/blocks/pitch-deck";

import "reveal.js/reveal.css";

export const PitchDeckDemo = () => (
  <Deck config={{ embedded: true }}>{PitchDeck}</Deck>
);
