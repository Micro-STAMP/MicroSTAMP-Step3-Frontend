import { Container } from "@components/EntityContainer";
import { EditButton } from "@components/IconButton";
import styles from "./ProjectContainer.module.css";

interface ProjectContainerProps {
	name: string;
	description: string;
	onEditName?: () => void;
	onEditDescription?: () => void;
}
function ProjectContainer({ name, description }: ProjectContainerProps) {
	return (
		<Container title="Project" justTitle>
			<div className={styles.project_container}>
				<div className={styles.name}>
					<div className={styles.text}>
						<strong>Name: </strong>
						<span>{name}</span>
					</div>
					<EditButton onClick={() => {}} />
				</div>
				<div className={styles.description}>
					<div className={styles.text}>
						<strong>Description: </strong>
						<span>{description}</span>
					</div>
					<EditButton onClick={() => {}} />
				</div>
			</div>
		</Container>
	);
}

export default ProjectContainer;
