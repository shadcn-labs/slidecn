// Requires: @revealjs/react reveal.js
// Returns an array of slide elements for a 5-slide weekly report
// Wrap in <Deck> in your app

import { ListSlide } from "@/registry/slidecn/ui/list-slide";
import { SplitSlide } from "@/registry/slidecn/ui/split-slide";
import { StatSlide } from "@/registry/slidecn/ui/stat-slide";
import { TimelineSlide } from "@/registry/slidecn/ui/timeline-slide";
import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

export const WeeklyReport = [
  <TitleSlide
    key="title"
    eyebrow="Weekly Report"
    title="Engineering Update"
    subtitle="May 6 – May 12, 2024"
    author="Engineering Team"
    date="2024"
  />,
  <StatSlide
    key="kpis"
    title="Key Metrics"
    layout="grid"
    stats={[
      { label: "PRs merged", value: "12" },
      { label: "Bugs fixed", value: "3" },
      { label: "Test coverage", value: "89%" },
      { label: "Avg response time", value: "4.2s" },
    ]}
  />,
  <TimelineSlide
    key="timeline"
    title="Weekly Timeline"
    direction="horizontal"
    animated
    steps={[
      { description: "API refactor", label: "Mon" },
      { description: "Code review", label: "Tue" },
      { description: "Integration tests", label: "Wed" },
      { description: "Deploy v2.1", label: "Thu" },
      { description: "Retrospective", label: "Fri" },
    ]}
  />,
  <SplitSlide
    key="wins-blockers"
    title="Wins & Blockers"
    left={
      <ListSlide
        title="Wins"
        items={[
          { text: "Shipped v2.1 on time" },
          { text: "Reduced p95 latency by 40%" },
          { text: "Onboarded 2 new contributors" },
        ]}
      />
    }
    right={
      <ListSlide
        title="Blockers"
        items={[
          { text: "Awaiting design review for dashboard" },
          { text: "Third-party API rate limits" },
        ]}
      />
    }
  />,
  <ListSlide
    key="next-week"
    title="Next Week"
    ordered
    items={[
      { text: "Complete dashboard redesign" },
      { text: "Performance audit" },
      { text: "Write migration guide" },
    ]}
  />,
];
