import { BiPlus as AddIcon } from "react-icons/bi";
import styles from "../IconButton.module.css";

interface AddButtonProps {
	onClick: () => void;
}
function AddButton({ onClick }: AddButtonProps) {
	return (
		<button type="button" className={styles.add_button} onClick={onClick}>
			<AddIcon />
		</button>
	);
}

export default AddButton;
