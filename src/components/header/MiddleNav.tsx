import React from "react";

import { Dock, DockIcon } from "../ui/DockNav";
import { Codesandbox, Home, Slack, SquareUser } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;
export function MiddleNav() {
  return (
    <div className="relative hidden sm:block">
      <Dock direction="middle" className="flex gap-10 px-10 text-slate-300">
        <DockIcon>
          <a href="#home">
            <div className="flex items-center gap-1 hover:text-white">
              <Home/>
              <span className="text-sm font-medium">Home</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#about">
            <div className="flex items-center gap-1 hover:text-white">
              <SquareUser />
              <span className="text-sm font-medium">About</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#skills">
            <div className="flex items-center gap-1 hover:text-white">
              <Slack />
              <span className="text-sm font-medium">Skills</span>
            </div>
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#projects">
            <div className="flex items-center gap-1 hover:text-white">
              <Codesandbox />
              <span className="text-sm font-medium">Projects</span>
            </div>
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

