"use client";

import { Deck } from "@revealjs/react";

import { TechTalk } from "@/registry/slidecn/blocks/tech-talk";

import "reveal.js/dist/reveal.css";

export const TechTalkPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>{TechTalk}</Deck>
  </div>
);
