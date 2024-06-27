import { Container } from "@components/EntityContainer";
import { ModalCreateProject } from "@components/Modal";
import ProjectCard from "@components/ProjectCard";
import { IProjectListItem } from "@interfaces/IProject";
import { useState } from "react";
import styles from "./ProjectsContainer.module.css";

interface ProjectsContainerProps {
	projects: IProjectListItem[];
}
function ProjectsContainer({ projects }: ProjectsContainerProps) {
	const [modalCreateProjectOpen, setModalCreateProjectOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateProjectOpen(!modalCreateProjectOpen);
	};

	return (
		<>
			<Container title="Projects" onClick={toggleModal}>
				<div className={styles.projects_container}>
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</Container>
			<ModalCreateProject open={modalCreateProjectOpen} onClose={toggleModal} />
		</>
	);
}

export default ProjectsContainer;
