// Requires: @revealjs/react reveal.js
// Returns an array of slide elements for a 6-slide product demo
// Wrap in <Deck> in your app

import { ComparisonSlide } from "@/registry/slidecn/ui/comparison-slide";
import { ImageSlide } from "@/registry/slidecn/ui/image-slide";
import { ListSlide } from "@/registry/slidecn/ui/list-slide";
import { StatSlide } from "@/registry/slidecn/ui/stat-slide";
import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

export const ProductDemo = [
  <TitleSlide
    key="title"
    eyebrow="Product Demo"
    title="SlideFlow"
    subtitle="Beautiful presentations, faster"
    author="Product Team"
    date="2024"
  />,
  <ListSlide
    key="features"
    title="Key Features"
    animated
    items={[
      { text: "Real-time collaboration" },
      { text: "AI-powered design suggestions" },
      { text: "One-click brand theming" },
      { text: "Export to any format" },
    ]}
  />,
  <ImageSlide
    key="screenshot"
    src="/placeholder.png"
    alt="SlideFlow dashboard"
    mode="full-bleed"
    caption="The SlideFlow editor interface"
  />,
  <ComparisonSlide
    key="comparison"
    title="Why SlideFlow?"
    variant="table"
    left={{
      color: "red",
      items: [
        "Manual formatting",
        "Static templates",
        "No collaboration",
        "Hours per deck",
      ],
      label: "Traditional Tools",
    }}
    right={{
      color: "green",
      items: [
        "AI-assisted design",
        "Dynamic templates",
        "Real-time team editing",
        "Minutes per deck",
      ],
      label: "SlideFlow",
    }}
  />,
  <StatSlide
    key="metrics"
    title="Trusted by teams"
    layout="row"
    stats={[
      { label: "Faster creation", value: "10x" },
      { label: "User satisfaction", value: "95%" },
      { label: "Active teams", value: "5K+" },
    ]}
  />,
  <TitleSlide
    key="cta"
    eyebrow="Get Started"
    title="Try SlideFlow Free"
    subtitle="slideflow.com · Start building today"
  />,
];
