import { BiPlus as AddIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface AddButtonProps {
	onClick: () => void;
}
function AddButton({ onClick }: AddButtonProps) {
	return (
		<button className={styles.addButton} onClick={onClick} type="button">
			<AddIcon />
		</button>
	);
}

export default AddButton;
