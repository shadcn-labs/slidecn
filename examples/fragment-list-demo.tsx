"use client";

import { Deck } from "@revealjs/react";

import { FragmentList } from "@/registry/slidecn/ui/fragment-list";

import "reveal.js/reveal.css";

export const FragmentListDemo = () => (
  <Deck config={{ embedded: true }}>
    <FragmentList
      as="ul"
      animation="fade-up"
      stagger
      items={[
        <span key="1">First point</span>,
        <span key="2">Second point</span>,
        <span key="3">Third point</span>,
      ]}
    />
  </Deck>
);
