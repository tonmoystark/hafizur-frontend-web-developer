import myImage from "../../assets/myimage.webp";
import { PixelImage } from "../ui/PixelImage";
import { TextAnimate } from "../ui/TextAnimate";
import { ContactBtn } from "../others/ContactBtn";
import DownloadButton from "../others/DownloadButton";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "JavaScript Enthusiast",
  "React Developer",
  "Web Developer",
  "TypeScript Enthusiast",
  "UI Engineer",
];

const Home = () => {

  const [text, setText] = useState("");
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  if (index === roles.length) return;

  if (subIndex === roles[index].length + 1 && !deleting) {
    setTimeout(() => setDeleting(true), 1000);
    return;
  }

  if (subIndex === 0 && deleting) {
    setDeleting(false);
    setIndex((prev) => (prev + 1) % roles.length);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + (deleting ? -1 : 1));
  }, deleting ? 40 : 80);

  setText(roles[index].substring(0, subIndex));

  return () => clearTimeout(timeout);
}, [subIndex, index, deleting]);

  return (
    <div id="home" className="flex flex-col h-screen bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 pt-30 pb-20 justify-center px-10 lg:px-20 items-center">
      <div className="w-full flex justify-center items-center">
        <PixelImage src={myImage}  grid="6x4" />
      </div>
      <h2 className="text-lg md:text-xl font-medium text-purple-400 mt-4 h-8 tracking-widest">
  {text.toUpperCase()}
  <span className="animate-pulse">|</span>
</h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r font-heading text-4xl md:text-6xl font-semibold tracking-tight from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
            Hafizur Rahman
          </span>
        </h1>
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-slate-400 lg:text-md text-sm mb-2 w-[90%] lg:w-[31%] text-center"
        once
      >
        I am a frontend web developer with a passion for creating beautiful and
        functional websites.
      </TextAnimate>
      
      <div className="flex gap-2 mt-5">
        <a href="#projects"><DownloadButton /></a>
        <ContactBtn />
      </div>
             <div className=" flex justify-center gap-6 flex-wrap">
          <motion.a
            href="./hafizur-frontend-resume.pdf"
            download
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition"
          >
            <Download className="text-base opacity-70" />
            Download Resume
          </motion.a>
        </div> 
    </div>
  );
};

export default Home;
