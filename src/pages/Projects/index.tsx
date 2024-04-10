import { projects } from "@/json";
import EntityContainer from "@components/EntityContainer";
import ProjectCard from "@components/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
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
