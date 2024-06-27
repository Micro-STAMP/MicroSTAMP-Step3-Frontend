import { BiSolidLeftArrowCircle as GoBackIcon } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styles from "./TitleDisplay.module.css";

interface TitleDisplayProps {
	controller: string;
	controlAction?: string;
	project?: string;
}
function TitleDisplay({ controller, project, controlAction }: TitleDisplayProps) {
	const navigate = useNavigate();

	return (
		<header className={styles.title_display}>
			<div className={styles.information}>
				{controlAction?.length && (
					<div>
						<strong>Control Action: </strong>
						<span>{controlAction}</span>
					</div>
				)}
				{project?.length && (
					<div>
						<strong>Project: </strong>
						<span>{project}</span>
					</div>
				)}
				<div>
					<strong>Controller: </strong>
					<span>{controller}</span>
				</div>
			</div>
			<button type="button" className={styles.button} onClick={() => navigate(-1)}>
				<GoBackIcon className={styles.icon} />
				Go Back
			</button>
		</header>
	);
}

export default TitleDisplay;
