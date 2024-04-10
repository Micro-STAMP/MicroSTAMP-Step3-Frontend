import styles from "../EntityItem.module.css";

interface ItemActionsProps {
	children: React.ReactNode;
}
function ItemActions({ children }: ItemActionsProps) {
	return (
		<>
			<div className={styles.actions}>{children}</div>
		</>
	);
}

export default ItemActions;
