import { Lens } from "../ui/Lens";
import pro1 from "../../assets/pro1.webp";
import pro2 from "../../assets/pro2.webp";
import pro3 from "../../assets/pro3.webp";
import pro4 from "../../assets/pro4.webp";
import pro5 from "../../assets/pro5.webp";
import { Code2Icon, ExternalLink } from "lucide-react";
interface ProjectContainerProps {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
}
const ProjectData: ProjectContainerProps[] = [
  {
    image: pro1,
    title: "Task Flow Management App",
    description:
      "A task management system with role-based dashboards where admins assign tasks and employees track their task status using Context API and LocalStorage.",
    stack: ["React", "TailwindCSS", "Context API"],
    liveLink: "https://task-flow-employee-task-manager.vercel.app/",
    githubLink:
      "https://github.com/tonmoystark/task-flow-employee-task-manager",
  },
  {
    image: pro2,
    title: "Mood Tracking App",
    description:
      "A simple and calming interface that helps users log daily moods and sleep patterns, encouraging self-reflection.",
    stack: ["HTML", "TailwindCSS", "JavaScript"],
    liveLink: "https://mood-tracking-ui.vercel.app/",
    githubLink: "https://github.com/tonmoystark/mood-tracking-ui",
  },
  {
    image: pro3,
    title: "Bookmark Manager App",
    description:
      "An intuitive bookmark manager that allows users to organize, search, and categorize saved links.",
    stack: ["HTML", "TailwindCSS", "JavaScript"],
    liveLink: "https://bookmark-manager-weld.vercel.app/",
    githubLink: "https://github.com/tonmoystark/bookmark-manager",
  },
  {
    image: pro4,
    title: "Frontend Developer Portfolio",
    description:
      "A responsive personal portfolio website designed to showcase projects and experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tonmoystark.github.io/FrontEnd-Developer-Tonmoy/",
    githubLink: "https://github.com/tonmoystark/FrontEnd-Developer-Tonmoy",
  },
  {
    image: pro5,
    title: "Quiz App",
    description:
      "An interactive quiz application with instant feedback and score display..",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tonmoystark.github.io/quiz-app/",
    githubLink: "https://github.com/tonmoystark/quiz-app",
  },
];

export function ProjectContainer() {
  return (
    <div className="flex flex-wrap justify-start sm:py-10 py-5 items-center gap-8">
      {ProjectData.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] lg:w-[30%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
        >
          {/* Image Section */}
          <div className="relative w-full overflow-hidden">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </Lens>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm">{project.description}</p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-sky-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <a href={project.liveLink} target="_blank">
                <button className="bg-blue-500 flex items-center text-white px-4 py-2 rounded-lg font-medium transition hover:bg-blue-400 active:scale-95 shadow-lg shadow-blue-500/20">
                  <span>Live</span>
                  <ExternalLink className="ml-2 z-10" size={20} />
                </button>
              </a>

              {/* Code Button (Glass Effect) */}
              <button className="border flex items-center border-slate-600 text-slate-200 px-4 py-2 rounded-lg font-medium transition hover:bg-slate-700/60 active:scale-95">
                <span>Code</span>
                <Code2Icon className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
