import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiFramer,
  SiGreensock,
} from "react-icons/si";

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", percentage: 95, icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", percentage: 90, icon: <SiCss3 />, color: "#1572B6" },
  { name: "SASS", percentage: 85, icon: <SiSass />, color: "#CC6699" },
  { name: "JavaScript", percentage: 92, icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", percentage: 85, icon: <SiTypescript />, color: "#3178C6" },
  { name: "TailwindCSS", percentage: 95, icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "PHP", percentage: 80, icon: <SiPhp />, color: "#777BB4" },
  { name: "MySQL", percentage: 85, icon: <SiMysql />, color: "#4479A1" },
  { name: "Git", percentage: 90, icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", percentage: 90, icon: <SiGithub />, color: "#ffffff" },
  { name: "Framer Motion", percentage: 85, icon: <SiFramer />, color: "#0055FF" },
  { name: "GSAP", percentage: 80, icon: <SiGreensock />, color: "#88CE02" },
];

export default function SkillsProficiency() {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {skills.map((skill, index) => {
        const radius = 34;
        const circumference = 2 * Math.PI * radius;
        const offset =
          circumference - (skill.percentage / 100) * circumference;

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="w-42.5 h-50 bg-linear-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
          >
            {/* Circular Meter */}
            <div className="relative flex items-center justify-center">
              <svg width="85" height="85">
                <circle
                  cx="42.5"
                  cy="42.5"
                  r={radius}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="6"
                  fill="transparent"
                />

                <motion.circle
                  cx="42.5"
                  cy="42.5"
                  r={radius}
                  stroke={skill.color}
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  transform="rotate(-90 42.5 42.5)"
                />
              </svg>

              <div
                className="absolute text-xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
            </div>

            {/* Name + Percentage */}
            <div className="text-center">
              <p className="text-sm text-slate-200 font-medium tracking-wide">
                {skill.name}
              </p>
              <p className="text-xs text-slate-400">
                {skill.percentage}%
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}