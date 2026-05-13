"use client";

import { Deck } from "@revealjs/react";

import { ListSlide } from "@/registry/slidecn/ui/list-slide";

import "reveal.js/dist/reveal.css";

export const ListSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
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
  </div>
);
