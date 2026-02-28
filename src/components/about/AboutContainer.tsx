import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const AboutContainer = () => {
  return (
    <div id="about" className=" sm:h-screen py-24 px-10 lg:px-20 bg-linear-to-b from-slate-900 via-indigo-950/60 to-slate-900">
      <h1 className="text-left sm:text-center text-xl sm:text-2xl mb-5 md:text-3xl lg:text-4xl font-bold">
        My Journey Into Tech
      </h1>
      <div className=" flex flex-col gap-10 sm:flex-row justify-between items-start ">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default AboutContainer;
