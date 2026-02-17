import { X } from "lucide-react";
import { AnimatedSocial } from "../ui/AnimatedSocial";

const Sidebar = ({ setOpen }: { setOpen: (v: boolean) => void }) => {
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div
      className="h-screen w-full 
      bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e293b]
      backdrop-blur-xl border-l border-white/10
      shadow-2xl z-50 flex flex-col"
    >
      {/* Close Button */}
      <div className="w-full p-6 flex justify-end">
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 
          transition duration-300 hover:rotate-90"
        >
          <X size={28} className="text-white" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-6 px-10 mt-10">
        {menuItems.map((item, index) => {
          const href = `#${item.toLowerCase()}`;

          return (
            <a
              key={index}
              href={href}
              onClick={() => setOpen(false)}
              className="text-xl font-semibold text-white/80
              cursor-pointer relative group transition-all duration-300"
            >
              <span className="group-hover:text-white transition duration-300">
                {item}
              </span>

              {/* Hover underline animation */}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 
                bg-linear-to-r from-cyan-400 to-blue-500
                transition-all duration-300 group-hover:w-full"
              />
            </a>
          );
        })}
      </div>
      <div>
        <AnimatedSocial />
      </div>
    </div>
  );
};

export default Sidebar;
