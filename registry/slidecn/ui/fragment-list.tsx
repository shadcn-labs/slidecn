"use client";

import { Fragment } from "@revealjs/react";
import type { ReactNode } from "react";

import type { FragmentAnimation } from "@/lib/slide-utils";

interface FragmentListProps {
  items: ReactNode[];
  as?: "ul" | "ol";
  animation?: FragmentAnimation;
  stagger?: boolean;
}

const FragmentList = ({
  items,
  as: Tag = "ul",
  animation = "fade-up",
  stagger = false,
}: FragmentListProps) => (
  <Tag className="flex flex-col gap-3">
    {items.map((item, i) => (
      <Fragment
        key={i}
        as="li"
        animation={animation}
        index={stagger ? i : undefined}
      >
        {item}
      </Fragment>
    ))}
  </Tag>
);

export { FragmentList };
