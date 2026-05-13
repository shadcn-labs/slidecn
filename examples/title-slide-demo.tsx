"use client";

import { Deck } from "@revealjs/react";

import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

import "reveal.js/reveal.css";

export const TitleSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <TitleSlide
        eyebrow="Chapter 1"
        title="Getting Started"
        subtitle="Everything you need to build beautiful slides"
        author="Jane Smith"
        date="2024"
      />
    </Deck>
  </div>
);
