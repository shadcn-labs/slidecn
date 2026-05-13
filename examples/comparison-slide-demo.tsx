"use client";

import { Deck } from "@revealjs/react";

import { ComparisonSlide } from "@/registry/slidecn/ui/comparison-slide";

import "reveal.js/reveal.css";

export const ComparisonSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
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
  </div>
);
