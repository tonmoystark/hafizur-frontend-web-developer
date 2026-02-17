import { SkillCloud } from "./SkillCloud";
import SkillsProficiency from "./SkillsProficiency";

const SkillContainer = () => {
  return (
    <div id="skills" className="h-fit  px-10 sm:px-20 py-10 sm:py-20">
      <h2 className="text-3xl text-left  sm:text-center font-semibold mb-10">
        Technical Proficiency
      </h2>
      <div className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-2 justify-between items-center">
        <SkillCloud />
        <SkillsProficiency />
      </div>
    </div>
  );
};

export default SkillContainer;
