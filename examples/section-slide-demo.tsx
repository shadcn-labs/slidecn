"use client";

import { Deck } from "@revealjs/react";

import { SectionSlide } from "@/registry/slidecn/ui/section-slide";

import "reveal.js/reveal.css";

export const SectionSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <SectionSlide label="Part I" title="The Problem" variant="accent" />
  </Deck>
);
