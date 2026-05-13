"use client";

import { Deck } from "@revealjs/react";

import { ImageSlide } from "@/registry/slidecn/ui/image-slide";

import "reveal.js/dist/reveal.css";

export const ImageSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <ImageSlide
        src="/placeholder.png"
        alt="Product screenshot"
        mode="contained"
        caption="Dashboard overview"
      />
    </Deck>
  </div>
);
