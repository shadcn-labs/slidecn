"use client";

import { Deck } from "@revealjs/react";

import { ContentSlide } from "@/registry/slidecn/ui/content-slide";
import { Notes } from "@/registry/slidecn/ui/notes";

import "reveal.js/dist/reveal.css";

export const NotesPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <ContentSlide title="Presentation Title">
        <p className="text-muted-foreground">Slide content goes here.</p>
        <Notes markdown>## Speaker Notes - Point one - Point two</Notes>
      </ContentSlide>
    </Deck>
  </div>
);
