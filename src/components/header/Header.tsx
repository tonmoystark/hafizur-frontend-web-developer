import HeadName from "../others/HeadName";
import { MiddleNav } from "./MiddleNav";
import { ContactBtn } from "../others/ContactBtn";
import { Menu } from "lucide-react";

interface HeaderProps {
  setOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setOpen }) => {
  return (
    <div
      className="flex justify-between fixed z-50 w-full top-0 items-center sm:px-10 md:px-14 lg:px-20 px-5 py-3 bg-linear-to-r from-slate-950 via-blue-900 to-slate-900 border-b border-white/10 backdrop-blur-md"
    >
      <HeadName />
      <MiddleNav />
      <div className="flex gap-5 sm:gap-2 items-center">
        <ContactBtn />
        <Menu onClick={() => setOpen(true)} className="text-white sm:hidden" />
      </div>
    </div>
  );
};

export default Header;
