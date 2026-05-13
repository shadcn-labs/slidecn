"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const imageSlideVariants = cva("", {
  defaultVariants: {
    mode: "contained",
  },
  variants: {
    mode: {
      contained: "",
      "full-bleed": "",
      stretch: "",
    },
  },
});

interface ImageSlideProps
  extends SlideProps, VariantProps<typeof imageSlideVariants> {
  src: string;
  alt: string;
  caption?: string;
  notes?: string;
}

const ImageSlide = ({
  src,
  alt,
  caption,
  mode,
  className,
  notes,
  ...slideProps
}: ImageSlideProps) => {
  if (mode === "full-bleed") {
    return (
      <Slide
        className={cn(className)}
        backgroundImage={src}
        backgroundSize="cover"
        {...slideProps}
      >
        {caption && (
          <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-3 py-1.5 text-sm text-foreground backdrop-blur-sm">
            {caption}
          </div>
        )}
        {notes && <aside className="notes">{notes}</aside>}
      </Slide>
    );
  }

  return (
    <Slide className={cn(className)} {...slideProps}>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={cn(
            mode === "stretch"
              ? "r-stretch"
              : "mx-auto max-h-[60vh] object-contain"
          )}
        />
        {caption && <p className="text-sm text-muted-foreground">{caption}</p>}
      </div>
      {notes && <aside className="notes">{notes}</aside>}
    </Slide>
  );
};

export { ImageSlide, imageSlideVariants };
