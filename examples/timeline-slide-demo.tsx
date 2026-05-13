"use client";

import { Deck } from "@revealjs/react";

import { TimelineSlide } from "@/registry/slidecn/ui/timeline-slide";

import "reveal.js/dist/reveal.css";

export const TimelineSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
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
  </div>
);
