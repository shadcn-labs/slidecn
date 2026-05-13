import type { ComponentType } from "react";

import { AutoAnimatePairPreview } from "./auto-animate-pair-demo";
import { CalloutPreview } from "./callout-demo";
import { CodeBlockPreview } from "./code-block-demo";
import { ComparisonSlidePreview } from "./comparison-slide-demo";
import { ContentSlidePreview } from "./content-slide-demo";
import { FitTextPreview } from "./fit-text-demo";
import { FragmentListPreview } from "./fragment-list-demo";
import { FragmentRevealPreview } from "./fragment-reveal-demo";
import { ImageSlidePreview } from "./image-slide-demo";
import { ListSlidePreview } from "./list-slide-demo";
import { NotesPreview } from "./notes-demo";
import { PitchDeckPreview } from "./pitch-deck-demo";
import { ProductDemoPreview } from "./product-demo-demo";
import { QuoteSlidePreview } from "./quote-slide-demo";
import { SectionSlidePreview } from "./section-slide-demo";
import { SplitSlidePreview } from "./split-slide-demo";
import { StackRevealPreview } from "./stack-reveal-demo";
import { StatSlidePreview } from "./stat-slide-demo";
import { TeamSlidePreview } from "./team-slide-demo";
import { TechTalkPreview } from "./tech-talk-demo";
import { TimelineSlidePreview } from "./timeline-slide-demo";
import { TitleSlidePreview } from "./title-slide-demo";
import { WeeklyReportPreview } from "./weekly-report-demo";

export const demos: Record<string, ComponentType> = {
  "auto-animate-pair-demo": AutoAnimatePairPreview,
  "callout-demo": CalloutPreview,
  "code-block-demo": CodeBlockPreview,
  "comparison-slide-demo": ComparisonSlidePreview,
  "content-slide-demo": ContentSlidePreview,
  "fit-text-demo": FitTextPreview,
  "fragment-list-demo": FragmentListPreview,
  "fragment-reveal-demo": FragmentRevealPreview,
  "image-slide-demo": ImageSlidePreview,
  "list-slide-demo": ListSlidePreview,
  "notes-demo": NotesPreview,
  "pitch-deck-demo": PitchDeckPreview,
  "product-demo-demo": ProductDemoPreview,
  "quote-slide-demo": QuoteSlidePreview,
  "section-slide-demo": SectionSlidePreview,
  "split-slide-demo": SplitSlidePreview,
  "stack-reveal-demo": StackRevealPreview,
  "stat-slide-demo": StatSlidePreview,
  "team-slide-demo": TeamSlidePreview,
  "tech-talk-demo": TechTalkPreview,
  "timeline-slide-demo": TimelineSlidePreview,
  "title-slide-demo": TitleSlidePreview,
  "weekly-report-demo": WeeklyReportPreview,
};
