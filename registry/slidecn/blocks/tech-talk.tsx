// Requires: @revealjs/react reveal.js
// Returns an array of slide elements for an 8-slide technical talk
// Wrap in <Deck> in your app

import { AutoAnimatePair } from "@/registry/slidecn/ui/auto-animate-pair";
import { CodeBlock } from "@/registry/slidecn/ui/code-block";
import { ContentSlide } from "@/registry/slidecn/ui/content-slide";
import { ListSlide } from "@/registry/slidecn/ui/list-slide";
import { SectionSlide } from "@/registry/slidecn/ui/section-slide";
import { TitleSlide } from "@/registry/slidecn/ui/title-slide";

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

export const TechTalk = [
  <TitleSlide
    key="title"
    eyebrow="Tech Talk"
    title="Optimizing Fibonacci"
    subtitle="From recursion to dynamic programming"
    author="Jane Smith"
    date="2024"
  />,
  <ListSlide
    key="agenda"
    title="Agenda"
    animated
    items={[
      { text: "The problem with naive recursion" },
      { text: "Introducing memoization" },
      { text: "Dynamic programming approach" },
      { text: "Benchmark results" },
    ]}
  />,
  <SectionSlide key="problem-section" label="Part I" title="The Problem" />,
  <ContentSlide key="naive" title="Naive Recursion">
    <CodeBlock language="typescript" filename="fibonacci.ts">
      {codeBefore}
    </CodeBlock>
    <p className="mt-4 text-muted-foreground">
      O(2ⁿ) time complexity — exponential growth.
    </p>
  </ContentSlide>,
  <AutoAnimatePair
    key="optimization"
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
  />,
  <SectionSlide key="results-section" label="Part II" title="Results" />,
  <ContentSlide key="benchmark" title="Benchmark Results">
    <CodeBlock
      language="text"
      lineNumbers="1|3-5|8-12"
      filename="benchmark.txt"
    >
      {`n=10:  recursive 0.02ms  ·  dp 0.01ms
n=20:  recursive 0.15ms  ·  dp 0.01ms
n=30:  recursive 18.2ms  ·  dp 0.02ms
n=40:  recursive 2.3s    ·  dp 0.02ms
n=50:  recursive timeout  ·  dp 0.03ms`}
    </CodeBlock>
  </ContentSlide>,
  <TitleSlide
    key="thanks"
    eyebrow="Thank You"
    title="Questions?"
    subtitle="github.com/jane/fib-opt · @janesmith"
  />,
];
