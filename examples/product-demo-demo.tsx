"use client";

import { Deck } from "@revealjs/react";

import { ProductDemo } from "@/registry/slidecn/blocks/product-demo";

import "reveal.js/dist/reveal.css";

export const ProductDemoPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>{ProductDemo}</Deck>
  </div>
);
