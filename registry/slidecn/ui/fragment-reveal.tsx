"use client";

import { Fragment } from "@revealjs/react";
import type { ReactNode } from "react";

import type { FragmentAnimation } from "@/lib/slide-utils";

interface FragmentRevealProps {
  children: ReactNode[];
  animation?: FragmentAnimation;
  stagger?: boolean;
}

const FragmentReveal = ({
  children,
  animation = "fade-in",
  stagger = false,
}: FragmentRevealProps) => (
  <>
    {children.map((child, i) => (
      <Fragment key={i} animation={animation} index={stagger ? i : undefined}>
        {child}
      </Fragment>
    ))}
  </>
);

export { FragmentReveal };
