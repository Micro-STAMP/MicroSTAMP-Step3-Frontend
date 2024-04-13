import { BiEditAlt as EditIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface EditButtonProps {
	onClick: () => void;
}
function EditButton({ onClick }: EditButtonProps) {
	return (
		<button className={styles.editButton} onClick={onClick} type="button">
			<EditIcon />
		</button>
	);
}

export default EditButton;
