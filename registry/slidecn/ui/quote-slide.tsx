"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";

const quoteSlideVariants = cva("flex h-full flex-col justify-center", {
  defaultVariants: {
    variant: "minimal",
  },
  variants: {
    variant: {
      accent: "gap-4 relative",
      large: "gap-6",
      minimal: "gap-4",
    },
  },
});

interface QuoteSlideProps
  extends SlideProps, VariantProps<typeof quoteSlideVariants> {
  quote: string;
  attribution?: string;
  source?: string;
  notes?: string;
}

const QuoteSlide = ({
  quote,
  attribution,
  source,
  variant,
  className,
  notes,
  ...slideProps
}: QuoteSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className={cn(quoteSlideVariants({ variant }))}>
      {variant === "accent" && (
        <Quote className="absolute left-8 top-8 size-32 opacity-10" />
      )}
      <blockquote
        className={cn(
          "font-medium leading-relaxed tracking-tight",
          variant === "large" ? "r-fit-text" : "text-2xl"
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(attribution || source) && (
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          {attribution && (
            <cite className="not-italic">&mdash; {attribution}</cite>
          )}
          {source && <span className="text-xs">{source}</span>}
        </div>
      )}
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { QuoteSlide, quoteSlideVariants };
