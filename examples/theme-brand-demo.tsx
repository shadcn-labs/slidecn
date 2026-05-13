"use client";

import { Deck } from "@revealjs/react";

import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

import "reveal.js/reveal.css";
import "@/registry/slidecn/themes/theme-brand.css";

export const ThemeBrandDemo = () => (
  <Deck config={{ embedded: true }}>
    <TitleSlide
      eyebrow="Brand Theme"
      title="Your Brand, Your Colors"
      subtitle="Customize every variable to match your identity"
      author="slidecn"
      date="2024"
    />
  </Deck>
);
