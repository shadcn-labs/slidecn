"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleSlideVariants = cva("flex h-full flex-col", {
  defaultVariants: {
    align: "center",
  },
  variants: {
    align: {
      center: "items-center text-center",
      left: "items-start text-left",
    },
  },
});

interface TitleSlideProps
  extends SlideProps, VariantProps<typeof titleSlideVariants> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  notes?: string;
}

const TitleSlide = ({
  eyebrow,
  title,
  subtitle,
  author,
  date,
  align,
  className,
  notes,
  ...slideProps
}: TitleSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className={cn(titleSlideVariants({ align }), "justify-center gap-6")}>
      <div className="flex flex-col gap-4">
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {(author || date) && (
        <div className="mt-auto flex gap-2 text-sm text-muted-foreground">
          {author && <span>{author}</span>}
          {author && date && <span aria-hidden="true">·</span>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { TitleSlide, titleSlideVariants };
