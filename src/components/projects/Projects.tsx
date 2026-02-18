import { ProjectContainer } from "./ProjectContainer";
import { ProjectText } from "./ProjectText";

const Projects = () => {
  return (
    <div id="projects" className="h-fit px-5 sm:px-20">
      <ProjectText />
      <ProjectContainer />
    </div>
  );
};

export default Projects;
