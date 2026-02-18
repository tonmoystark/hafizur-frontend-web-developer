const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0f172a] border-t border-white/10">
      <div className="py-3 text-center text-[14px] lg:text-sm text-white/60">
        © {new Date().getFullYear()} Tonmoy. Built with React, TypeScript &
        Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
