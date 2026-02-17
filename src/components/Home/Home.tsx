import React from "react";
import myImage from "../../assets/myimage.webp";
import { PixelImage } from "../ui/PixelImage";
import { TypingAnimation } from "../ui/Typing-animation";
import { TextAnimate } from "../ui/TextAnimate";
import { ContactBtn } from "../others/ContactBtn";
import DownloadButton from "../others/DownloadButton";
const Home = () => {
  return (
    <div id="home" className="flex flex-col pt-30 pb-20 justify-center px-10 lg:px-20 items-center">
      <div className="w-full flex justify-center items-center">
        <PixelImage src={myImage} grid="6x4" />
      </div>
      <h1 className="lg:text-xl text-md font-semibold text-slate-400">
        Hi I am{" "}
        <TypingAnimation
          className="text-purple-600 font-bold"
          words={["Hafizur", "Tonmoy"]}
          typeSpeed={50}
          deleteSpeed={150}
          pauseDelay={2000}
          loop
        />
      </h1>
      <TextAnimate
        className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold"
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            rotate: 45,
            scale: 0.5,
          },
          show: (i) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
              delay: i * 0.1,
              duration: 0.4,
              y: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                mass: 0.8,
              },
              rotate: {
                type: "spring",
                damping: 8,
                stiffness: 150,
              },
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 300,
              },
            },
          }),
          exit: (i) => ({
            opacity: 0,
            y: 30,
            rotate: 45,
            scale: 0.5,
            transition: {
              delay: i * 0.1,
              duration: 0.4,
            },
          }),
        }}
        by="character"
      >
        Frontend Web Developer Intern
      </TextAnimate>
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-slate-400 text-sm lg:text:base mb-2 w-[90%] lg:w-[31%] text-center"
        once
      >
        I am a frontend web developer with a passion for creating beautiful and
        functional websites.
      </TextAnimate>
      <div className="flex gap-2 mt-5">
        <a href="/hafizur-frontend-resume.pdf" download><DownloadButton /></a>
        <ContactBtn />
      </div>
    </div>
  );
};

export default Home;
