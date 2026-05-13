"use client";

import { Deck } from "@revealjs/react";

import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

import "reveal.js/reveal.css";
import "@/registry/slidecn/themes/theme-dark.css";

export const ThemeDarkDemo = () => (
  <Deck config={{ embedded: true }}>
    <TitleSlide
      eyebrow="Dark Theme"
      title="Deep & Focused"
      subtitle="Low-light environment optimized"
      author="slidecn"
      date="2024"
    />
  </Deck>
);
