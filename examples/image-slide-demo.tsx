"use client";

import { Deck } from "@revealjs/react";

import { ImageSlide } from "@/registry/slidecn/ui/image-slide";

import "reveal.js/reveal.css";

export const ImageSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <ImageSlide
      src="/placeholder.png"
      alt="Product screenshot"
      mode="contained"
      caption="Dashboard overview"
    />
  </Deck>
);
