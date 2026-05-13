"use client";

import { Callout } from "@/registry/slidecn/ui/callout";

export const CalloutPreview = () => (
  <div className="flex flex-col gap-4">
    <Callout variant="info" title="Note">
      Here is some important information.
    </Callout>
    <Callout variant="warning" title="Caution">
      This operation cannot be undone.
    </Callout>
    <Callout variant="tip" title="Pro tip">
      Use this approach for better performance.
    </Callout>
    <Callout variant="danger" title="Alert">
      This action is irreversible.
    </Callout>
  </div>
);
