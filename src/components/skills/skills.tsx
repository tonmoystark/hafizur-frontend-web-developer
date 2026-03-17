import {
  SiHtml5, SiCss3, SiSass, SiJavascript, SiTailwindcss, 
  SiPhp, SiMysql, SiFramer, SiGreensock, 
  SiReact, SiLaravel, SiTypescript, SiVercel, SiNetlify
} from "react-icons/si";

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, level: 95, color: "#E34F26" },
      { name: "CSS", icon: <SiCss3 />, level: 90, color: "#1572B6" },
      { name: "Sass", icon: <SiSass />, level: 80, color: "#CC6699" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: 90, color: "#06B6D4" },
      { name: "JavaScript", icon: <SiJavascript />, level: 85, color: "#F7DF1E" },
      { name: "React", icon: <SiReact />, level: 85, color: "#61DAFB" }
    ]
  },
  {
    title: "Animation",
    skills: [
      { name: "Framer Motion", icon: <SiFramer />, level: 80, color: "#0055FF" },
      { name: "GSAP", icon: <SiGreensock />, level: 70, color: "#88CE02" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <SiPhp />, level: 80, color: "#777BB4" },
      { name: "Laravel", icon: <SiLaravel />, level: 70, color: "#FF2D20" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 75, color: "#4479A1" }
    ]
  },
  {
    title: "Others",
    skills: [
      { name: "Typescript", icon: <SiTypescript />, level: 70, color: "#007ACC" },
      { name: "Vercel", icon: <SiVercel />, level: 80, color: "#000000" },
      { name: "Netlify", icon: <SiNetlify />, level: 80, color: "#00C7B7" }
    ]
  }
];