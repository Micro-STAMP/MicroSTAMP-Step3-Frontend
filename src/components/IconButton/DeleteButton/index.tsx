import { BiSolidTrash as DeleteIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface DeleteButtonProps {
	onClick: () => void;
}
function DeleteButton({ onClick }: DeleteButtonProps) {
	return (
		<button className={styles.deleteButton} onClick={onClick} type="button">
			<DeleteIcon />
		</button>
	);
}

export default DeleteButton;
