"use client";

import { Fragment, Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";

import type { FragmentAnimation } from "@/lib/slide-utils";
import { cn } from "@/lib/utils";

interface ListItem {
  text: string;
  subtext?: string;
}

interface ListSlideProps extends SlideProps {
  title?: string;
  items: ListItem[];
  ordered?: boolean;
  animated?: boolean;
  animation?: FragmentAnimation;
  notes?: string;
}

const ListSlide = ({
  title,
  items,
  ordered = false,
  animated = false,
  animation,
  className,
  notes,
  ...slideProps
}: ListSlideProps) => {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Slide className={cn(className)} {...slideProps}>
      <div className="flex h-full flex-col gap-6">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        )}
        <Tag
          className={cn(
            "flex flex-col gap-3",
            ordered ? "list-decimal pl-6" : "list-disc pl-6"
          )}
        >
          {items.map((item, i) => {
            const content = (
              <>
                <span>{item.text}</span>
                {item.subtext && (
                  <span className="block text-sm text-muted-foreground">
                    {item.subtext}
                  </span>
                )}
              </>
            );

            if (animated) {
              return (
                <Fragment key={i} as="li" animation={animation} index={i}>
                  {content}
                </Fragment>
              );
            }

            return <li key={i}>{content}</li>;
          })}
        </Tag>
      </div>
      {notes && <aside className="notes">{notes}</aside>}
    </Slide>
  );
};

export { ListSlide };
