export type FragmentAnimation =
  | "fade-in"
  | "fade-out"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in-then-out"
  | "fade-in-then-semi-out"
  | "grow"
  | "shrink"
  | "highlight-red"
  | "highlight-green"
  | "highlight-blue"
  | "highlight-current-red"
  | "highlight-current-green"
  | "highlight-current-blue"
  | "custom";

export type SlideTransition =
  | "none"
  | "fade"
  | "slide"
  | "convex"
  | "concave"
  | "zoom";

export type GradientPreset =
  | "dawn"
  | "ocean"
  | "midnight"
  | "forest"
  | "slate"
  | "rose";

const GRADIENTS: Record<GradientPreset, string> = {
  dawn: "linear-gradient(to bottom, #f8b500, #e06c4c)",
  forest: "linear-gradient(to bottom, #134e5e, #71b280)",
  midnight: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
  ocean: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
  rose: "linear-gradient(to bottom, #f43f5e, #e11d48)",
  slate: "linear-gradient(to bottom, #1e293b, #334155)",
};

export const withAutoAnimate = (
  id: string,
  opts?: {
    easing?: string;
    duration?: number;
    delay?: number;
  }
) => ({
  "data-auto-animate": true,
  "data-auto-animate-id": id,
  ...(opts?.easing && { "data-auto-animate-easing": opts.easing }),
  ...(opts?.duration && { "data-auto-animate-duration": opts.duration }),
  ...(opts?.delay && { "data-auto-animate-delay": opts.delay }),
});

export const fragmentProps = (
  animation?: FragmentAnimation,
  index?: number
) => ({
  className: ["fragment", animation].filter(Boolean).join(" "),
  ...(index !== undefined && { "data-fragment-index": index }),
});

export const colorBg = (color: string) => ({ background: color });
export const gradientBg = (preset: GradientPreset) => ({
  backgroundGradient: GRADIENTS[preset],
});
export const imageBg = (
  src: string,
  opts?: { size?: string; repeat?: string; opacity?: number }
) => ({
  backgroundImage: src,
  ...(opts?.size && { backgroundSize: opts.size }),
  ...(opts?.repeat && { backgroundRepeat: opts.repeat }),
  ...(opts?.opacity && { backgroundOpacity: opts.opacity }),
});
export const videoBg = (
  src: string,
  opts?: { loop?: boolean; muted?: boolean }
) => ({
  backgroundVideo: src,
  backgroundVideoLoop: opts?.loop ?? true,
  backgroundVideoMuted: opts?.muted ?? true,
});
export const iframeBg = (url: string, opts?: { interactive?: boolean }) => ({
  backgroundIframe: url,
  backgroundInteractive: opts?.interactive ?? false,
});
