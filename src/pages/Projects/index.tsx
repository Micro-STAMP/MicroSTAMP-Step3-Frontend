import { projects } from "@/json";
import { ProjectsContainer } from "@components/EntityContainer";

function Projects() {
	return (
		<>
			<ProjectsContainer projects={projects} />
		</>
	);
}

export default Projects;
