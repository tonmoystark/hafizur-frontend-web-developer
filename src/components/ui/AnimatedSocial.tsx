import { forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";
import { AnimatedBeam } from "./AnimatedBeam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white hover:scale-110 transition-transform duration-300 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedSocial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-75 w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-50 max-w-lg flex-col  items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.github />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.linkedin />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.facebook />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.user />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.instagram />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.email />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  facebook: () => (
    <a href="https://www.facebook.com/hafizur.s007" target="_blank">
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.099 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.099 24 12.073z"
          fill="#1877F2"
        />
      </svg>
    </a>
  ),
  user: () => (
    <a href="">
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="12" cy="8" r="4" fill="#111111" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#111111" />
      </svg>
    </a>
  ),
  github: () => (
    <a href="https://github.com/tonmoystark" target="_blank">
      <svg
        width="105"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.1 3.792 21.423 8.365 22.95C8.965 23.05 9.185 22.7 9.185 22.4C9.185 22.13 9.175 21.36 9.17 20.42C6 21.09 5.34 18.92 5.34 18.92C4.84 17.65 4.09 17.3 4.09 17.3C3.07 16.63 4.17 16.64 4.17 16.64C5.3 16.72 5.89 17.83 5.89 17.83C6.89 19.53 8.53 19.04 9.18 18.75C9.28 18.02 9.57 17.53 9.89 17.25C7.14 16.95 4.25 15.88 4.25 11.1C4.25 9.74 4.74 8.63 5.54 7.77C5.41 7.47 4.99 6.23 5.66 4.55C5.66 4.55 6.7 4.22 9.16 5.84C10.16 5.56 11.24 5.42 12.32 5.42C13.4 5.42 14.48 5.56 15.48 5.84C17.94 4.22 18.98 4.55 18.98 4.55C19.65 6.23 19.23 7.47 19.1 7.77C19.9 8.63 20.39 9.74 20.39 11.1C20.39 15.89 17.49 16.94 14.73 17.24C15.14 17.59 15.5 18.28 15.5 19.33C15.5 20.84 15.49 21.98 15.49 22.4C15.49 22.7 15.71 23.06 16.32 22.95C20.89 21.42 24.18 17.1 24.18 12C24.18 5.65 19.03 0.5 12.68 0.5H12Z"
          fill="#201515"
        />
      </svg>
    </a>
  ),
  whatsapp: () => (
    <a href="https://wa.me/+8801700962184" target="_blank">
      <svg
        width="35"
        height="35"
        viewBox="0 0 175.216 175.552"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="b"
            x1="85.915"
            x2="86.535"
            y1="32.567"
            y2="137.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
          <filter
            id="a"
            width="1.115"
            height="1.114"
            x="-.057"
            y="-.057"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="3.531" />
          </filter>
        </defs>
        <path
          d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
          fill="#b3b3b3"
          filter="url(#a)"
        />
        <path
          d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          fill="#ffffff"
        />
        <path
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
          fill="url(#linearGradient1780)"
        />
        <path
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
          fill="url(#b)"
        />
        <path
          d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
          fill="#ffffff"
          fillRule="evenodd"
        />
      </svg>
    </a>
  ),
  linkedin: () => (
    <a
      href="https://www.linkedin.com/in/md-hafizur-rahman-69b723258/"
      target="_blank"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"
          fill="#0A66C2"
        />
        <path
          d="M7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43a2.05 2.05 0 110-4.09 2.05 2.05 0 010 4.09zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.4V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31z"
          fill="#ffffff"
        />
      </svg>
    </a>
  ),
  instagram: () => (
    <a href="https://www.instagram.com/hafizur.s007/" target="_blank">
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="6"
          fill="url(#ig-gradient)"
        />

        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />

        <circle cx="17" cy="7" r="1.5" fill="white" />
      </svg>
    </a>
  ),
  email: () => (
    <a
      href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBMpGLcwWcVCzZGZpPNmfbxSKrKfLfsNrpwcjGvVMsJBsprtjlnKMXSFpkpsQWfZgLMg"
      target="_blank"
    >
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          stroke="#111111"
          strokeWidth="2"
        />
        <path
          d="M2 7l10 7 10-7"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  ),
};
