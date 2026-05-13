"use client";

import { Deck } from "@revealjs/react";

import { TimelineSlide } from "@/registry/slidecn/ui/timeline-slide";

import "reveal.js/reveal.css";

export const TimelineSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <TimelineSlide
      title="Project Timeline"
      direction="horizontal"
      steps={[
        { description: "Research", label: "Q1" },
        { description: "Development", label: "Q2" },
        { description: "Launch", label: "Q3" },
      ]}
    />
  </Deck>
);
