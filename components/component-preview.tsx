import type { ReactNode } from "react";

import { ComponentSource } from "@/components/component-source";

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
}) => (
  <>
    {children}
    {!hideCode && <ComponentSource name={name} src={src} title={title} />}
  </>
);
