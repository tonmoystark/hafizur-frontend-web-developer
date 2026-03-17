import { motion } from "framer-motion";
import { skillsData } from "./skills"; // পাথ নিশ্চিত করুন

export default function SkillsProficiency() {
  const allSkills = skillsData.flatMap(cat => cat.skills);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {allSkills.map((skill, index) => {
          const radius = 18; 
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.level / 100) * circumference;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -3 }}
              className="relative group bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-xl p-2.5 flex flex-col items-center justify-center gap-2 hover:border-white/10 transition-all duration-300"
            >
              <div className="relative flex items-center justify-center w-11 h-11">
                <svg width="44" height="44" className="transform -rotate-90">
                  <circle cx="22" cy="22" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" fill="transparent" />
                  <motion.circle
                    cx="22" cy="22" r={radius}
                    stroke={skill.color}
                    strokeWidth="2.5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-base" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <span className="text-white/60 font-medium text-[9px] uppercase truncate w-full text-center group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}