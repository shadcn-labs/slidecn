"use client";

import { Deck } from "@revealjs/react";

import { FragmentList } from "@/registry/slidecn/ui/fragment-list";

import "reveal.js/dist/reveal.css";

export const FragmentListPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
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
  </div>
);
