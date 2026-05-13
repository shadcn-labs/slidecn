"use client";

import { Deck } from "@revealjs/react";

import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

import "reveal.js/reveal.css";
import "@/registry/slidecn/themes/theme-minimal.css";

export const ThemeMinimalDemo = () => (
  <Deck config={{ embedded: true }}>
    <TitleSlide
      eyebrow="Minimal Theme"
      title="Less is More"
      subtitle="Generous typography meets clean design"
      author="slidecn"
      date="2024"
    />
  </Deck>
);
