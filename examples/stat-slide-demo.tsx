"use client";

import { Deck } from "@revealjs/react";

import { StatSlide } from "@/registry/slidecn/ui/stat-slide";

import "reveal.js/dist/reveal.css";

export const StatSlidePreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <StatSlide
        title="Key Metrics"
        layout="row"
        stats={[
          { label: "ARR", value: "$2M" },
          { label: "Customers", value: "500+" },
          { label: "Retention", value: "98%" },
        ]}
      />
    </Deck>
  </div>
);
