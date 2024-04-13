import { BiSolidTrash as DeleteIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface DeleteButtonProps {
	onClick: () => void;
}
function DeleteButton({ onClick }: DeleteButtonProps) {
	return (
		<button type="button" className={styles.delete_button} onClick={onClick}>
			<DeleteIcon />
		</button>
	);
}

export default DeleteButton;
