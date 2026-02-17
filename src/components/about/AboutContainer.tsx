import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const AboutContainer = () => {
  return (
    <div id="about" className=" sm:h-screen py-10 px-10 lg:px-20">
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
