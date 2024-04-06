import EntityContainer from "@components/EntityContainer";
import ProjectCard from "@components/ProjectCard";
import styles from "./ProjectsContainer.module.css";

interface IProjects {
	id: string;
	name: string;
	description: string;
}
function ProjectsContainer() {
	const projects: IProjects[] = [
		{
			id: "1",
			name: "Train Door System",
			description:
				"The train door system is  responsible for the opening and closing of the carriage doors."
		},
		{
			id: "2",
			name: "Insulin Pump",
			description:
				"The Insulin Pump System is a medical device designed to administer insulin."
		},
		{
			id: "3",
			name: "UATM",
			description: "UATM is a system under development to manage urban air vehicle traffic."
		}
	];

	return (
		<EntityContainer title="Projects">
			<div className={styles.container}>
				{projects.map(project => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</EntityContainer>
	);
}

export default ProjectsContainer;
