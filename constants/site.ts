export const FALLBACK_SITE_ORIGIN = "https://slidecn.dev" as const;

const getBaseUrl = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return process.env.SITE_URL ?? FALLBACK_SITE_ORIGIN;
};

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    NAME: "Aniket Pawar",
    TWITTER: "@alaymanguy",
  },
  DESCRIPTION: {
    LONG: "Beautiful presentation components, made simple. Built on reveal.js. Works with shadcn/ui.",
    SHORT: "Beautiful presentations, made simple",
  },
  KEYWORDS: [
    "presentation",
    "reveal.js",
    "slides",
    "slide deck",
    "shadcn",
    "component registry",
    "react components",
    "next.js",
    "npx shadcn add",
  ] as const,
  NAME: "slidecn",
  OG_IMAGE: `${baseUrl}/og.png`,
  REGISTRY: "@slidecn",
  URL: baseUrl,
};

export const META_THEME_COLORS = {
  dark: "#09090b",
  light: "#ffffff",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};
