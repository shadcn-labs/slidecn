"use client";

import { Deck } from "@revealjs/react";

import { CodeBlock } from "@/registry/slidecn/ui/code-block";

import "reveal.js/reveal.css";

const code = `function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`;

export const CodeBlockPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <CodeBlock language="typescript" filename="hello.ts">
        {code}
      </CodeBlock>
    </Deck>
  </div>
);
