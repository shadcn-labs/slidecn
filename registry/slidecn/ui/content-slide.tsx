"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const contentSlideVariants = cva("h-full", {
  defaultVariants: {
    layout: "default",
  },
  variants: {
    layout: {
      default: "flex flex-col gap-4",
      "full-bleed": "h-full w-full",
      split: "grid grid-cols-2 gap-8",
    },
  },
});

interface ContentSlideProps
  extends SlideProps, VariantProps<typeof contentSlideVariants> {
  title?: string;
  children: ReactNode;
  notes?: string;
}

const ContentSlide = ({
  title,
  layout,
  className,
  children,
  notes,
  ...slideProps
}: ContentSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className={cn(contentSlideVariants({ layout }))}>
      {title && layout !== "full-bleed" && (
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      )}
      {children}
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { ContentSlide, contentSlideVariants };
