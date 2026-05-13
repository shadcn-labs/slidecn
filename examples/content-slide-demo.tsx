"use client";

import { Deck } from "@revealjs/react";

import { ContentSlide } from "@/registry/slidecn/ui/content-slide";

import "reveal.js/reveal.css";

export const ContentSlideDemo = () => (
  <Deck config={{ embedded: true }}>
    <ContentSlide title="Key Features" layout="default">
      <p className="text-muted-foreground">
        This is a default layout content slide with a title and body text.
      </p>
    </ContentSlide>
  </Deck>
);
