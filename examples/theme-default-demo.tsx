"use client";

import { Deck } from "@revealjs/react";

import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

import "reveal.js/reveal.css";
import "@/registry/slidecn/themes/theme-default.css";

export const ThemeDefaultDemo = () => (
  <Deck config={{ embedded: true }}>
    <TitleSlide
      eyebrow="Default Theme"
      title="Clean & Light"
      subtitle="Neutral tones for everyday presentations"
      author="slidecn"
      date="2024"
    />
  </Deck>
);
