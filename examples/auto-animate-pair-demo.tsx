"use client";

import { Deck } from "@revealjs/react";

import { AutoAnimatePair } from "@/registry/slidecn/ui/auto-animate-pair";
import { CodeBlock } from "@/registry/slidecn/ui/code-block";
import { ContentSlide } from "@/registry/slidecn/ui/content-slide";

import "reveal.js/reveal.css";

const codeBefore = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;

const codeAfter = `function fibonacci(n: number): number {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`;

export const AutoAnimatePairPreview = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
    <Deck config={{ embedded: true }}>
      <AutoAnimatePair
        animateId="code-transform"
        from={
          <ContentSlide title="Before">
            <CodeBlock language="typescript" autoAnimateId="code-transform">
              {codeBefore}
            </CodeBlock>
          </ContentSlide>
        }
        to={
          <ContentSlide title="After">
            <CodeBlock language="typescript" autoAnimateId="code-transform">
              {codeAfter}
            </CodeBlock>
          </ContentSlide>
        }
      />
    </Deck>
  </div>
);
