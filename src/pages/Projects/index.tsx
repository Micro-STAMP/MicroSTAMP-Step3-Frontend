import { projects } from "@/json";
import { ProjectsContainer } from "@components/EntityContainer";
import { ModalNewProject } from "@components/Modal";
import { useState } from "react";

function Projects() {
	const [modalCreateProjectOpen, setmodalCreateProjectOpen] = useState(false);
	const toggleModal = () => {
		setmodalCreateProjectOpen(!modalCreateProjectOpen);
	};
	return (
		<>
			<ProjectsContainer projects={projects} onClickCreateProject={toggleModal} />
			<ModalNewProject open={modalCreateProjectOpen} onClose={toggleModal} />
		</>
	);
}

export default Projects;
