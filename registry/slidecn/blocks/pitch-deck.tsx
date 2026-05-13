import { ImageSlide } from "@/registry/slidecn/ui/image-slide";
import { ListSlide } from "@/registry/slidecn/ui/list-slide";
import { SplitSlide } from "@/registry/slidecn/ui/split-slide";
import { StatSlide } from "@/registry/slidecn/ui/stat-slide";
import { TeamSlide } from "@/registry/slidecn/ui/team-slide";
import { TimelineSlide } from "@/registry/slidecn/ui/timeline-slide";
import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

export const PitchDeck = [
  <TitleSlide
    key="title"
    eyebrow="Pitch Deck"
    title="Acme Corp"
    subtitle="The future of X"
    author="Jane Smith"
    date="2024"
  />,
  <SplitSlide
    key="problem"
    title="The Problem"
    left={
      <StatSlide
        stats={[{ label: "of teams waste time on X", value: "73%" }]}
        layout="single"
      />
    }
    right={<p>Description of the problem...</p>}
  />,
  <ListSlide
    key="solution"
    title="Our Solution"
    animated
    items={[
      { text: "Point one" },
      { text: "Point two" },
      { text: "Point three" },
    ]}
  />,
  <SplitSlide
    key="how-it-works"
    title="How It Works"
    left={
      <TimelineSlide
        steps={[{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]}
        direction="vertical"
      />
    }
    right={<ImageSlide src="/placeholder.png" alt="Product screenshot" />}
  />,
  <StatSlide
    key="traction"
    title="Traction"
    layout="row"
    stats={[
      { label: "ARR", value: "$2M" },
      { label: "Customers", value: "500+" },
      { label: "Retention", value: "98%" },
    ]}
  />,
  <TeamSlide
    key="team"
    title="The Team"
    columns="3"
    members={[
      { name: "Jane Smith", role: "CEO" },
      { name: "Bob Lee", role: "CTO" },
      { name: "Sara Chen", role: "CPO" },
    ]}
  />,
  <TitleSlide
    key="thank-you"
    eyebrow="Thank You"
    title="Let's build together"
    subtitle="jane@acme.com · acme.com"
  />,
];
