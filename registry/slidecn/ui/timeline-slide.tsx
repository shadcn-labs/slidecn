"use client";

import { Fragment, Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const timelineSlideVariants = cva("", {
  defaultVariants: {
    direction: "horizontal",
  },
  variants: {
    direction: {
      horizontal: "flex flex-row items-start gap-0",
      vertical: "flex flex-col gap-0",
    },
  },
});

interface TimelineStep {
  label: string;
  description?: string;
}

interface TimelineSlideProps
  extends SlideProps, VariantProps<typeof timelineSlideVariants> {
  title?: string;
  steps: TimelineStep[];
  animated?: boolean;
  notes?: string;
}

const TimelineSlide = ({
  title,
  steps,
  direction,
  animated = false,
  className,
  notes,
  ...slideProps
}: TimelineSlideProps) => {
  const isHorizontal = direction === "horizontal";

  const renderStep = (step: TimelineStep, i: number) => {
    const content = (
      <div className={cn(isHorizontal ? "flex-1 px-4" : "flex gap-4")}>
        {isHorizontal ? (
          <>
            <div className="flex items-center justify-center">
              <div className="size-3 rounded-full border-2 border-primary bg-background" />
            </div>
            {i < steps.length - 1 && <div className="h-0.5 flex-1 bg-border" />}
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <div className="size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
              {i < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-border" />
              )}
            </div>
            <div className="pb-8">
              <div className="font-medium">{step.label}</div>
              {step.description && (
                <div className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );

    if (animated) {
      return (
        <Fragment key={i} index={i} animation="fade-in">
          {isHorizontal ? (
            <div className="flex flex-1 flex-col items-center gap-2">
              <div className="flex items-center justify-center">
                <div className="size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
              </div>
              {i < steps.length - 1 && (
                <div className="h-0.5 w-full bg-border" />
              )}
              <div className="text-center">
                <div className="font-medium">{step.label}</div>
                {step.description && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border" />
                )}
              </div>
              <div className="pb-8">
                <div className="font-medium">{step.label}</div>
                {step.description && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </div>
                )}
              </div>
            </div>
          )}
        </Fragment>
      );
    }

    return (
      <div
        key={i}
        className={cn(
          isHorizontal ? "flex flex-1 flex-col items-center gap-2" : ""
        )}
      >
        {isHorizontal && (
          <>
            <div className="flex items-center justify-center">
              <div className="size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
            </div>
            {i < steps.length - 1 && <div className="h-0.5 w-full bg-border" />}
          </>
        )}
        {isHorizontal ? (
          <div className="text-center">
            <div className="font-medium">{step.label}</div>
            {step.description && (
              <div className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </div>
            )}
          </div>
        ) : (
          content
        )}
      </div>
    );
  };

  return (
    <Slide className={cn(className)} {...slideProps}>
      <div className="flex h-full flex-col gap-8">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        )}
        <div
          className={cn(
            timelineSlideVariants({ direction }),
            "flex-1",
            !isHorizontal && "ml-1"
          )}
        >
          {steps.map((step, i) => renderStep(step, i))}
        </div>
      </div>
      {notes && <aside className="notes">{notes}</aside>}
    </Slide>
  );
};

export { TimelineSlide, timelineSlideVariants };
