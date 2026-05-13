"use client";

import { Deck } from "@revealjs/react";

import { ListSlide } from "@/registry/slidecn/ui/list-slide";

import "reveal.js/reveal.css";

export const ListSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <ListSlide
      title="Agenda"
      animated
      items={[
        { text: "Introduction" },
        { text: "Core concepts" },
        { text: "Live demo" },
      ]}
    />
  </Deck>
);
