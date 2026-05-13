import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";
import { demos } from "@/examples/__index";

export const ComponentPreview = ({
  name,
  src,
  title,
  children,
  hideCode = false,
}: {
  name?: string;
  src?: string;
  title?: string;
  children?: ReactNode;
  hideCode?: boolean;
}) => {
  const DemoComponent = name ? demos[name] : undefined;

  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
        {DemoComponent ? <DemoComponent /> : children}
      </div>
      {!hideCode && <ComponentSource name={name} src={src} title={title} />}
    </>
  );
};
