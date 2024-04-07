import { IProject } from "@/interfaces/IProjects";
import projectsJson from "@/json/projects.json";
import EntityContainer from "@components/EntityContainer";
import ProjectCard from "@components/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
	const projects = projectsJson as IProject[];
	return (
		<>
			<EntityContainer title="Projects">
				<div className={styles.projectsContainer}>
					{projects.map(project => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</EntityContainer>
		</>
	);
}

export default Projects;
