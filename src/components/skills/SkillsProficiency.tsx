const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "SASS", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "React JS", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "TypeScript", level: 70 },
  { name: "Git & GitHub", level: 88 },
  { name: "Motion & GSAP", level: 80 },
];

const SkillsProficiency = () => {
  return (
    <div className="space-y-8 sm:w-[40%] w-full">
      <div className="space-y-6 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            {/* Skill Header */}
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>

            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
              {/* Animated Fill */}
              <div
                className="h-full rounded-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500
                           transition-all duration-700 ease-out group-hover:brightness-110"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProficiency;
