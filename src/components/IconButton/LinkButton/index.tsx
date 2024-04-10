import { BiLink as LinkIcon } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "../IconButton.module.css";

interface LinkButtonProps {
	to: string;
}
function LinkButton({ to }: LinkButtonProps) {
	return (
		<Link to={to}>
			<button className={styles.editButton} type="button">
				<LinkIcon />
			</button>
		</Link>
	);
}

export default LinkButton;
