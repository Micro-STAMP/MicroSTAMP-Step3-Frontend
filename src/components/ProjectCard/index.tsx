import { BiImageAlt as ImageIcon } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
	id: string;
	name: string;
	description: string;
}
function ProjectCard({ id, name, description }: ProjectCardProps) {
	return (
		<div className={styles.card}>
			<Link to={`/project/${id}`}>
				<div className={styles.name}>{name}</div>
				<div className={styles.image}>
					<ImageIcon />
				</div>
				<div className={styles.description}>{description}</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
