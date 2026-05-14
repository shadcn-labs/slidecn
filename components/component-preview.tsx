import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";
import { demos } from "@/examples/__index";
import { cn } from "@/lib/utils";

export const ComponentPreview = ({
  name,
  src,
  title,
  children,
  hideCode = false,
  className,
}: {
  name?: string;
  src?: string;
  title?: string;
  children?: ReactNode;
  hideCode?: boolean;
  className?: string;
}) => {
  const DemoComponent = name ? demos[name] : undefined;

  return (
    <>
      <div
        className={cn(
          "relative h-[400px] w-full overflow-hidden rounded-lg border",
          className
        )}
      >
        {DemoComponent ? <DemoComponent /> : children}
      </div>
      {!hideCode && <ComponentSource name={name} src={src} title={title} />}
    </>
  );
};
