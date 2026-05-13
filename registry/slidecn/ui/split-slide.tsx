"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const splitSlideVariants = cva("grid h-full gap-8", {
  defaultVariants: {
    ratio: "equal",
  },
  variants: {
    ratio: {
      equal: "grid-cols-[1fr_1fr]",
      "left-wide": "grid-cols-[2fr_1fr]",
      "right-wide": "grid-cols-[1fr_2fr]",
    },
  },
});

interface SplitSlideProps
  extends SlideProps, VariantProps<typeof splitSlideVariants> {
  title?: string;
  left: ReactNode;
  right: ReactNode;
  divider?: boolean;
  notes?: string;
}

const SplitSlide = ({
  title,
  left,
  right,
  ratio,
  divider,
  className,
  notes,
  ...slideProps
}: SplitSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className="flex h-full flex-col gap-6">
      {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
      <div className={cn(splitSlideVariants({ ratio }), "flex-1")}>
        <div>{left}</div>
        {divider && (
          <div className="hidden md:block" aria-hidden="true">
            <div className="mx-auto h-full w-px bg-border" />
          </div>
        )}
        <div>{right}</div>
      </div>
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { SplitSlide, splitSlideVariants };
