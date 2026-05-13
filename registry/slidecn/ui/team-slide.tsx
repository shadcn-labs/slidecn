"use client";

import { Slide } from "@revealjs/react";
import type { SlideProps } from "@revealjs/react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const teamSlideVariants = cva("grid gap-6", {
  defaultVariants: {
    columns: "3",
  },
  variants: {
    columns: {
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
    },
  },
});

interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

interface TeamSlideProps
  extends SlideProps, VariantProps<typeof teamSlideVariants> {
  title?: string;
  members: TeamMember[];
  notes?: string;
}

const TeamSlide = ({
  title,
  members,
  columns,
  className,
  notes,
  ...slideProps
}: TeamSlideProps) => (
  <Slide className={cn(className)} {...slideProps}>
    <div className="flex h-full flex-col gap-8">
      {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
      <div className={cn(teamSlideVariants({ columns }))}>
        {members.map((member, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center">
            {member.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.avatar}
                alt={member.name}
                className="size-16 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-16 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div>
              <div className="font-semibold">{member.name}</div>
              <div className="text-sm text-muted-foreground">{member.role}</div>
            </div>
            {member.bio && (
              <p className="text-xs text-muted-foreground/70">{member.bio}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    {notes && <aside className="notes">{notes}</aside>}
  </Slide>
);

export { TeamSlide, teamSlideVariants };
