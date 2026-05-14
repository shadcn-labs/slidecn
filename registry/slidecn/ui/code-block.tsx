"use client";

import { Code } from "@revealjs/react";
import type { CodeProps } from "@revealjs/react";
import { FileCode, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

interface CodeBlockProps extends Omit<CodeProps, "children"> {
  children: string;
  language: string;
  lineNumbers?: boolean | string;
  filename?: string;
  showCopy?: boolean;
  autoAnimateId?: string;
  startFrom?: number;
  trim?: boolean;
}

const CodeBlock = ({
  children,
  language,
  lineNumbers,
  filename,
  showCopy = true,
  autoAnimateId,
  startFrom,
  trim = true,
  className,
  ...codeProps
}: CodeBlockProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch {
      //noop
    }
  };

  return (
    <div
      className={cn("overflow-hidden rounded-lg border bg-muted/50", className)}
    >
      {filename && (
        <div className="flex items-center gap-2 border-b bg-muted px-4 py-2 text-xs text-muted-foreground">
          <FileCode className="size-3.5" />
          <span>{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre data-id={autoAnimateId}>
          <Code
            language={language}
            lineNumbers={lineNumbers}
            startFrom={startFrom}
            trim={trim}
            {...codeProps}
          >
            {children}
          </Code>
        </pre>
        {showCopy && (
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-opacity hover:bg-muted hover:text-foreground group-hover:opacity-100"
            aria-label="Copy code"
          >
            <Copy className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export { CodeBlock };
