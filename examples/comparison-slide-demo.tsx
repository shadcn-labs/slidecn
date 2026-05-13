"use client";

import { Deck } from "@revealjs/react";

import { ComparisonSlide } from "@/registry/slidecn/ui/comparison-slide";

import "reveal.js/reveal.css";

export const ComparisonSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <ComparisonSlide
      title="Before vs After"
      left={{
        color: "red",
        items: ["Manual process", "No automation"],
        label: "Before",
      }}
      right={{
        color: "green",
        items: ["Automated flow", "Real-time sync"],
        label: "After",
      }}
    />
  </Deck>
);
