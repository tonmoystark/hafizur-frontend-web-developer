import { AnimatedSocial } from "../ui/AnimatedSocial";

const RightSide = () => {
  return (
    <div className="flex flex-col sm:w-150 sm:mr-5 mr:0 w-full justify-center items-center">
      <h1 className="text-2xl font-bold">Social Links</h1>
      <AnimatedSocial />
    </div>
  );
};

export default RightSide;
