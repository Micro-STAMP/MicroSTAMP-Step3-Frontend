import DeleteButton from "@components/IconButton/DeleteButton";
import EditButton from "@components/IconButton/EditButton";
import styles from "../IconButton.module.css";

interface EditDeleteButtonProps {
	onEdit: () => void;
	onDelete: () => void;
}
function EditDeleteButton({ onEdit, onDelete }: EditDeleteButtonProps) {
	return (
		<div className={styles.editDeleteButtonsContainer}>
			<EditButton onClick={onEdit} />
			<DeleteButton onClick={onDelete} />
		</div>
	);
}

export default EditDeleteButton;
