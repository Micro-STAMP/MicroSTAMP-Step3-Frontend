import styles from "./ItemDisplay.module.css";

interface ItemDisplayProps {
	children: React.ReactNode;
}
function ItemDisplay({ children }: ItemDisplayProps) {
	return (
		<>
			<div className={styles.display}>{children}</div>
		</>
	);
}

export default ItemDisplay;
