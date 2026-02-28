import { ProjectContainer } from "./ProjectContainer";
import { ProjectText } from "./ProjectText";

const Projects = () => {
  return (
    <div id="projects" className="h-fit py-24 px-5 sm:px-20 bg-linear-to-b from-zinc-900 via-purple-950/60 to-zinc-900">
      <ProjectText />
      <ProjectContainer />
    </div>
  );
};

export default Projects;
