"use client";

import { Deck } from "@revealjs/react";

import { TechTalk } from "@/registry/slidecn/blocks/tech-talk";

import "reveal.js/reveal.css";

export const TechTalkDemo = () => (
  <Deck config={{ embedded: true }}>{TechTalk}</Deck>
);
