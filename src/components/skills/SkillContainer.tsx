import InfiniteSkillScroll from "./InfiniteSkillScroll";
import SkillBubbles from "./SkillBubbles";
import SkillsProficiency from "./SkillsProficiency";

const SkillContainer = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0f1d] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            I build performant and visually stunning applications using a modern tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-center">
          <div className="w-full order-2 lg:order-1">
             <SkillsProficiency />
          </div>
          
          <div className="w-full h-[350px] md:h-[400px] relative order-1 lg:order-2 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[2rem] border border-white/[0.05] shadow-2xl backdrop-blur-3xl overflow-hidden">
             <SkillBubbles />
          </div>
        </div>

        <div className="mt-10 border-white/5 pt-5">
          {/* <p className="text-slate-500 text-center mb-8 uppercase tracking-[0.3em] text-[10px] font-bold">Tech Stack Flow</p> */}
          <InfiniteSkillScroll />
        </div>
      </div>
    </section>
  );
};

export default SkillContainer;