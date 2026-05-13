"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const comparisonSlideVariants = cva("h-full", {
  defaultVariants: {
    variant: "columns",
  },
  variants: {
    variant: {
      columns: "grid grid-cols-2 gap-6",
      table: "",
    },
  },
});

const headerColorVariants: Record<string, string> = {
  default: "bg-muted text-foreground",
  green: "bg-green-500/10 text-green-600 dark:text-green-400",
  red: "bg-red-500/10 text-red-600 dark:text-red-400",
};

interface ComparisonColumn {
  label: string;
  items: string[];
  color?: "default" | "green" | "red";
}

interface ComparisonSlideProps
  extends SlideProps, VariantProps<typeof comparisonSlideVariants> {
  title?: string;
  left: ComparisonColumn;
  right: ComparisonColumn;
  notes?: string;
}

const ComparisonSlide = ({
  title,
  left,
  right,
  variant,
  className,
  notes,
  ...slideProps
}: ComparisonSlideProps) => {
  if (variant === "table") {
    return (
      <Slide className={cn(className)} {...slideProps}>
        <div className="flex h-full flex-col gap-6">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          )}
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th
                  className={cn(
                    "rounded-tl-lg px-4 py-3 text-sm font-semibold",
                    headerColorVariants[left.color ?? "default"]
                  )}
                >
                  {left.label}
                </th>
                <th
                  className={cn(
                    "rounded-tr-lg px-4 py-3 text-sm font-semibold",
                    headerColorVariants[right.color ?? "default"]
                  )}
                >
                  {right.label}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.max(left.items.length, right.items.length),
              }).map((_, i) => (
                <tr key={i} className="border-b border-border odd:bg-muted/30">
                  <td className="px-4 py-2.5 text-sm">{left.items[i] ?? ""}</td>
                  <td className="px-4 py-2.5 text-sm">
                    {right.items[i] ?? ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {notes && <aside className="notes">{notes}</aside>}
      </Slide>
    );
  }

  const renderColumn = (col: ComparisonColumn) => (
    <div className="flex flex-col rounded-lg border">
      <div
        className={cn(
          "rounded-t-lg px-4 py-3 text-sm font-semibold",
          headerColorVariants[col.color ?? "default"]
        )}
      >
        {col.label}
      </div>
      <div className="flex flex-col gap-2 p-4">
        {col.items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Slide className={cn(className)} {...slideProps}>
      <div className="flex h-full flex-col gap-6">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        )}
        <div className={cn(comparisonSlideVariants({ variant }))}>
          {renderColumn(left)}
          {renderColumn(right)}
        </div>
      </div>
      {notes && <aside className="notes">{notes}</aside>}
    </Slide>
  );
};

export { ComparisonSlide, comparisonSlideVariants };
