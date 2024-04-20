import { IProject } from "@/interfaces/IProjects";
import { Container } from "@components/EntityContainer";
import { ModalCreateProject } from "@components/Modal";
import ProjectCard from "@components/ProjectCard";
import { useState } from "react";
import styles from "./ProjectsContainer.module.css";

interface ProjectsContainerProps {
	projects: IProject[];
}
function ProjectsContainer({ projects }: ProjectsContainerProps) {
	const [modalCreateProjectOpen, setmodalCreateProjectOpen] = useState(false);
	const toggleModal = () => {
		setmodalCreateProjectOpen(!modalCreateProjectOpen);
	};
	return (
		<>
			<Container title="Projects" onClick={toggleModal}>
				<div className={styles.projects_container}>
					{projects.map(project => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</Container>
			<ModalCreateProject open={modalCreateProjectOpen} onClose={toggleModal} />
		</>
	);
}

export default ProjectsContainer;
