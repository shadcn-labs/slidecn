"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statSlideVariants = cva("", {
  defaultVariants: {
    layout: "single",
  },
  variants: {
    layout: {
      grid: "grid grid-cols-2 gap-8",
      row: "flex flex-wrap items-center justify-around gap-8",
      single: "flex flex-col items-center justify-center gap-2",
    },
  },
});

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatSlideProps
  extends SlideProps, VariantProps<typeof statSlideVariants> {
  title?: string;
  stats: Stat[];
  notes?: string;
}

const StatSlide = ({
  title,
  stats,
  layout,
  className,
  notes,
  ...slideProps
}: StatSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className="flex h-full flex-col gap-8">
      {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
      <div className={cn(statSlideVariants({ layout }), "flex-1")}>
        {stats.map((stat, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col",
              layout === "single" && "items-center text-center"
            )}
          >
            <span
              className={cn(
                "font-bold tracking-tight",
                layout === "single" ? "r-fit-text" : "text-4xl"
              )}
            >
              {stat.value}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
            {stat.description && (
              <span className="mt-1 text-xs text-muted-foreground/70">
                {stat.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { StatSlide, statSlideVariants };
