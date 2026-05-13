"use client";

import { Deck } from "@revealjs/react";

import { FitText } from "@/registry/slidecn/ui/fit-text";

import "reveal.js/reveal.css";

export const FitTextDemo = () => (
  <Deck config={{ embedded: true }}>
    <FitText as="h1">Big Impact Heading</FitText>
  </Deck>
);
