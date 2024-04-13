import { IProject } from "@/interfaces/IProjects";
import { Container } from "@components/EntityContainer";
import ProjectCard from "@components/ProjectCard";
import styles from "./ProjectsContainer.module.css";

interface ProjectsContainerProps {
	projects: IProject[];
}
function ProjectsContainer({ projects }: ProjectsContainerProps) {
	return (
		<Container title="Projects">
			<div className={styles.projects_container}>
				{projects.map(project => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</Container>
	);
}

export default ProjectsContainer;
