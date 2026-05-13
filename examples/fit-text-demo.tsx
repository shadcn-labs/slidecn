"use client";

import { Deck } from "@revealjs/react";

import { FitText } from "@/registry/slidecn/ui/fit-text";

import "reveal.js/reveal.css";

export const FitTextPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <FitText as="h1">Big Impact Heading</FitText>
    </Deck>
  </div>
);
