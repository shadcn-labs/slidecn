"use client";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const calloutVariants = cva("rounded-lg border-l-4 p-4", {
  defaultVariants: {
    variant: "info",
  },
  variants: {
    variant: {
      danger: "border-l-red-500 bg-red-500/5",
      info: "border-l-blue-500 bg-blue-500/5",
      tip: "border-l-emerald-500 bg-emerald-500/5",
      warning: "border-l-amber-500 bg-amber-500/5",
    },
  },
});

const icons = {
  danger: AlertCircle,
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
};

interface CalloutProps extends VariantProps<typeof calloutVariants> {
  title?: string;
  children: ReactNode;
  icon?: boolean;
}

const Callout = ({
  variant = "info",
  title,
  children,
  icon = true,
}: CalloutProps) => {
  const Icon = icons[variant ?? "info"];

  return (
    <div className={cn(calloutVariants({ variant }))}>
      <div className="flex gap-3">
        {icon && <Icon className="mt-0.5 size-5 shrink-0 text-foreground" />}
        <div className="min-w-0">
          {title && <div className="mb-1 text-sm font-semibold">{title}</div>}
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { Callout, calloutVariants };
