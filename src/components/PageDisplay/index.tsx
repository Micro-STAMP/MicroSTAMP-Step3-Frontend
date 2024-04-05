import { BiSolidLeftArrowCircle as GoBackIcon } from "react-icons/bi";
import styles from "./PageDisplay.module.css";

interface PageDisplayProps {
	controlAction: string;
	controller: string;
}
function PageDisplay({ controlAction, controller }: PageDisplayProps) {
	return (
		<header className={styles.display}>
			<div className={styles.information}>
				<div>
					<strong>Control Action: </strong>
					<span>{controlAction}</span>
				</div>
				<div>
					<strong>Controller: </strong>
					<span>{controller}</span>
				</div>
			</div>
			<button type="button">
				<GoBackIcon className={styles.icon} />
				Go Back
			</button>
		</header>
	);
}

export default PageDisplay;
