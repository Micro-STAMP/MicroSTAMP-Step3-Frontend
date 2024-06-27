import { IProjectListItem } from "@interfaces/IProject";
import { BiImageAlt as ImageIcon } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
	project: IProjectListItem;
}
function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className={styles.project_card}>
			<Link to={`/project/${project.id}`}>
				<div className={styles.name}>{project.name}</div>
				<div className={styles.image}>
					<ImageIcon />
				</div>
				<div className={styles.description}>{project.description}</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
