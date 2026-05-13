"use client";

import { Deck } from "@revealjs/react";

import { WeeklyReport } from "@/registry/slidecn/blocks/weekly-report";

import "reveal.js/reveal.css";

export const WeeklyReportDemo = () => (
  <Deck config={{ embedded: true }}>{WeeklyReport}</Deck>
);
