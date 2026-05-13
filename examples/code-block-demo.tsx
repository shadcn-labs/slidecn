"use client";

import { Deck } from "@revealjs/react";

import { CodeBlock } from "@/registry/slidecn/ui/code-block";

import "reveal.js/reveal.css";

const code = `function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`;

export const CodeBlockDemo = () => (
  <Deck config={{ embedded: true }}>
    <CodeBlock language="typescript" filename="hello.ts">
      {code}
    </CodeBlock>
  </Deck>
);
