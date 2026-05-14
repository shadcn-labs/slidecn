import type { ComponentType } from "react";

import { AutoAnimatePairDemo } from "./auto-animate-pair-demo";
import { CodeBlockDemo } from "./code-block-demo";
import { ComparisonSlideDemo } from "./comparison-slide-demo";
import { ContentSlideDemo } from "./content-slide-demo";
import { FitTextDemo } from "./fit-text-demo";
import { FragmentListDemo } from "./fragment-list-demo";
import { FragmentRevealDemo } from "./fragment-reveal-demo";
import { ImageSlideDemo } from "./image-slide-demo";
import { ListSlideDemo } from "./list-slide-demo";
import { NotesDemo } from "./notes-demo";
import { PitchDeckDemo } from "./pitch-deck-demo";
import { ProductDemoDemo } from "./product-demo-demo";
import { QuoteSlideDemo } from "./quote-slide-demo";
import { SectionSlideDemo } from "./section-slide-demo";
import { SplitSlideDemo } from "./split-slide-demo";
import { StackRevealDemo } from "./stack-reveal-demo";
import { StatSlideDemo } from "./stat-slide-demo";
import { TeamSlideDemo } from "./team-slide-demo";
import { TechTalkDemo } from "./tech-talk-demo";
import { ThemeBrandDemo } from "./theme-brand-demo";
import { ThemeDarkDemo } from "./theme-dark-demo";
import { ThemeDefaultDemo } from "./theme-default-demo";
import { ThemeMinimalDemo } from "./theme-minimal-demo";
import { TimelineSlideDemo } from "./timeline-slide-demo";
import { TitleSlideDemo } from "./title-slide-demo";
import { WeeklyReportDemo } from "./weekly-report-demo";

export const demos: Record<string, ComponentType> = {
  "auto-animate-pair-demo": AutoAnimatePairDemo,
  "code-block-demo": CodeBlockDemo,
  "comparison-slide-demo": ComparisonSlideDemo,
  "content-slide-demo": ContentSlideDemo,
  "fit-text-demo": FitTextDemo,
  "fragment-list-demo": FragmentListDemo,
  "fragment-reveal-demo": FragmentRevealDemo,
  "image-slide-demo": ImageSlideDemo,
  "list-slide-demo": ListSlideDemo,
  "notes-demo": NotesDemo,
  "pitch-deck-demo": PitchDeckDemo,
  "product-demo-demo": ProductDemoDemo,
  "quote-slide-demo": QuoteSlideDemo,
  "section-slide-demo": SectionSlideDemo,
  "split-slide-demo": SplitSlideDemo,
  "stack-reveal-demo": StackRevealDemo,
  "stat-slide-demo": StatSlideDemo,
  "team-slide-demo": TeamSlideDemo,
  "tech-talk-demo": TechTalkDemo,
  "theme-brand-demo": ThemeBrandDemo,
  "theme-dark-demo": ThemeDarkDemo,
  "theme-default-demo": ThemeDefaultDemo,
  "theme-minimal-demo": ThemeMinimalDemo,
  "timeline-slide-demo": TimelineSlideDemo,
  "title-slide-demo": TitleSlideDemo,
  "weekly-report-demo": WeeklyReportDemo,
};
