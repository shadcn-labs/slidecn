"use client";

import type { JSX } from "react";

interface FitTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
}

const FitText = ({ children, as: As = "h2" }: FitTextProps) => {
  const Component = As as keyof JSX.IntrinsicElements;

  return <Component className="r-fit-text">{children}</Component>;
};

export { FitText };
