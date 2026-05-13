"use client";

import { Deck } from "@revealjs/react";

import { TeamSlide } from "@/registry/slidecn/ui/team-slide";

import "reveal.js/dist/reveal.css";

export const TeamSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <TeamSlide
        title="Our Team"
        columns="3"
        members={[
          { name: "Jane Smith", role: "CEO" },
          { name: "Bob Lee", role: "CTO" },
          { name: "Sara Chen", role: "CPO" },
        ]}
      />
    </Deck>
  </div>
);
