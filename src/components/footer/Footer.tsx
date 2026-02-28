const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 border-t border-white/5 py-6">
      <div className="py-3 text-center text-[14px] lg:text-sm text-white/60">
        © {new Date().getFullYear()} Tonmoy. Built with React & TypeScript
      </div>
    </footer>
  );
};

export default Footer;
