"use client";

import { Deck } from "@revealjs/react";

import { FragmentReveal } from "@/registry/slidecn/ui/fragment-reveal";

import "reveal.js/dist/reveal.css";

export const FragmentRevealPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <FragmentReveal animation="fade-in" stagger>
        <p key="1" className="text-muted-foreground">
          Revealed first
        </p>
        <p key="2" className="text-muted-foreground">
          Revealed second
        </p>
        <p key="3" className="text-muted-foreground">
          Revealed third
        </p>
      </FragmentReveal>
    </Deck>
  </div>
);
