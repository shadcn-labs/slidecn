"use client";

import { Deck } from "@revealjs/react";

import { ProductDemo } from "@/registry/slidecn/blocks/product-demo";

import "reveal.js/reveal.css";

export const ProductDemoDemo = () => (
  <Deck config={{ embedded: true }}>{ProductDemo}</Deck>
);
