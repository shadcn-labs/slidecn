"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionSlideVariants = cva("flex h-full flex-col justify-center gap-4", {
  defaultVariants: {
    variant: "minimal",
  },
  variants: {
    variant: {
      accent: "border-l-4 border-primary pl-6",
      minimal: "",
    },
  },
});

interface SectionSlideProps
  extends SlideProps, VariantProps<typeof sectionSlideVariants> {
  label?: string;
  title: string;
  notes?: string;
}

const SectionSlide = ({
  label,
  title,
  variant,
  className,
  notes,
  ...slideProps
}: SectionSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className={cn(sectionSlideVariants({ variant }))}>
      {label && (
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { SectionSlide, sectionSlideVariants };
