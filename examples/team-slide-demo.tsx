"use client";

import { Deck } from "@revealjs/react";

import { TeamSlide } from "@/registry/slidecn/ui/team-slide";

import "reveal.js/reveal.css";

export const TeamSlideDemo = () => (
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
);
