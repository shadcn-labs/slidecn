"use client";

import { Deck } from "@revealjs/react";

import { SectionSlide } from "@/registry/slidecn/ui/section-slide";

import "reveal.js/reveal.css";

export const SectionSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <SectionSlide label="Part I" title="The Problem" variant="accent" />
    </Deck>
  </div>
);
