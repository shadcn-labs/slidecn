import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
    {...props}
  >
    <path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18 5-5 5 5M15.5 9.667 12.167 13m2.667-7L8.5 12.334" />
  </svg>
);

export const getLogoMarkSVG = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18 5-5 5 5M15.5 9.667 12.167 13m2.667-7L8.5 12.334"/>
  </svg>
`;
