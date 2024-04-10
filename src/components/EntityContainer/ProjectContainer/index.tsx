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
			<div className={styles.projectContainer}>
				<div className={styles.name}>
					<div>
						<strong>Name: </strong>
						<span>{name}</span>
					</div>
					<EditButton onClick={() => {}} />
				</div>
				<div className={styles.description}>
					<div>
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
