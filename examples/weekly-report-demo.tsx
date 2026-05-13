"use client";

import { Deck } from "@revealjs/react";

import { WeeklyReport } from "@/registry/slidecn/blocks/weekly-report";

import "reveal.js/reveal.css";

export const WeeklyReportPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>{WeeklyReport}</Deck>
  </div>
);
