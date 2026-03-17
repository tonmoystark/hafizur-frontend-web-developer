import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skillsData } from "./skills"; 

type Bubble = {
  x: number;
  y: number;
  size: number;
  id: string;
};

export default function SkillBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const allSkills = skillsData.flatMap((category) => category.skills);

  useEffect(() => {
    const initial = allSkills.map((s, i) => ({
      id: `${s.name}-${i}`,
      x: (Math.random() - 0.5) * 300, 
      y: (Math.random() - 0.5) * 300,
      size: 45 + Math.random() * 25 
    }));
    setBubbles(initial);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-full w-full flex items-center justify-center overflow-hidden touch-none"
    >
      {bubbles.map((bubble, i) => {
        const dx = bubble.x - mouse.x;
        const dy = bubble.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let x = bubble.x;
        let y = bubble.y;

        if (distance < 120) {
          x += dx * 0.6;
          y += dy * 0.6;
        }

        return (
          <motion.div
            key={bubble.id}
            animate={{ x, y }}
            // Hover করলে গ্লো ইফেক্ট যোগ করা হয়েছে
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 0 20px ${allSkills[i].color}`,
              borderColor: allSkills[i].color,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className="absolute rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl group cursor-pointer"
            style={{ 
              width: bubble.size, 
              height: bubble.size, 
              color: allSkills[i].color 
            }}
          >
            <div className="text-xl md:text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {allSkills[i].icon}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}