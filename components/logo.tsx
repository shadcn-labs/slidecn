import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    fill="none"
    className={cn("size-4", className)}
    {...props}
  >
    <g stroke="currentColor">
      <path
        d="M4 22.271a2.9 2.9 0 0 1 2.313-2.839l71.05-14.71a2.9 2.9 0 0 1 3.487 2.84V81.59a2.9 2.9 0 0 1-3.526 2.831L6.274 68.696A2.9 2.9 0 0 1 4 65.863z"
        strokeWidth={6}
      />
      <path
        d="M91.725 66.929a.725.725 0 0 1-.579.71l-71.05 14.709a.725.725 0 0 1-.871-.71V7.612a.725.725 0 0 1 .882-.707l71.05 15.724a.725.725 0 0 1 .568.709z"
        strokeWidth={6}
      />
      <path
        d="M64.54 45.661 50.736 59.465M61.78 30.477 35.552 56.705"
        strokeWidth={6}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const getLogoMarkSVG = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/>
    <path d="M12 22V12"/>
    <polyline points="3.29 7 12 12 20.71 7"/>
    <path d="m7.5 4.27 9 5.15"/>
  </svg>
`;
