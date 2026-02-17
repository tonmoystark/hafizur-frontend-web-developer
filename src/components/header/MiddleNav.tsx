import React from "react";

import { Dock, DockIcon } from "../ui/DockNav";

export type IconProps = React.HTMLAttributes<SVGElement>;
export function MiddleNav() {
  return (
    <div className="relative hidden sm:block">
      <Dock direction="middle" className="flex gap-10 px-10 text-slate-300">
        <DockIcon>
          <a href="#home">
            <div className="flex items-center gap-1 hover:text-white">
              <HomeIcon className="size-4" />
              <span className="text-sm font-medium">Home</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#about">
            <div className="flex items-center gap-1 hover:text-white">
              <AboutIcon className="size-4" />
              <span className="text-sm font-medium">About</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#skills">
            <div className="flex items-center gap-1 hover:text-white">
              <SkillsIcon className="size-4" />
              <span className="text-sm font-medium">Skills</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#projects">
            <div className="flex items-center gap-1 hover:text-white">
              <ProjectsIcon className="size-4" />
              <span className="text-sm font-medium">Projects</span>
            </div>
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

// Simple icon components
const HomeIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const AboutIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M5.5 20.5c.9-2.3 3.5-4 6.5-4s5.6 1.7 6.5 4" />
  </svg>
);

const SkillsIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ProjectsIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
