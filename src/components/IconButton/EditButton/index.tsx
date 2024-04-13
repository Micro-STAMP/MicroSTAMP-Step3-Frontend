import { BiEditAlt as EditIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface EditButtonProps {
	onClick: () => void;
}
function EditButton({ onClick }: EditButtonProps) {
	return (
		<button type="button" className={styles.edit_button} onClick={onClick}>
			<EditIcon />
		</button>
	);
}

export default EditButton;
