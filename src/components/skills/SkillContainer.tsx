import SkillsProficiency from "./SkillsProficiency";

const SkillContainer = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-16 bg-linear-to-b from-slate-900 via-emerald-950/40 to-slate-900"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Technical Skills
        </h2>
        <p className="text-slate-400 mt-6 leading-relaxed">
          I specialize in building responsive, performant, and user-friendly
          web applications using modern frontend technologies.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto">
        <SkillsProficiency />
      </div>
    </section>
  );
};

export default SkillContainer;