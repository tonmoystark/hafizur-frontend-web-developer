import { motion } from "framer-motion";
import { skillsData } from "./skills"; // আপনার ডাটা ফাইলের পাথ নিশ্চিত করুন

export default function InfiniteSkillScroll() {
  // সব ক্যাটাগরির স্কিলগুলোকে একটি সিঙ্গেল এরেতে নিয়ে আসা
  const allSkills = skillsData.flatMap((category) => category.skills);

  // ইনফিনিট লুপ তৈরি করতে ডাটাকে ডাবল করে নেওয়া
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <div className="w-full bg-[#0a0f1d] py-10 overflow-hidden relative">
      {/* দুই পাশে শ্যাডো ইফেক্ট (ঐচ্ছিক) */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0f1d] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0f1d] to-transparent z-10"></div>

      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: ["0%", "-50%"], // অর্ধেক এরে পার হওয়ার পর আবার শুরুতে ফিরে আসবে
        }}
        transition={{
          duration: 20, // স্পিড নিয়ন্ত্রণের জন্য (বেশি দিলে আস্তে চলবে)
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-white/5 px-6 py-3 rounded-full hover:border-emerald-500/30 transition-colors group"
          >
            <div 
              className="text-2xl group-hover:scale-110 transition-transform duration-300" 
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-white/80 font-medium whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}