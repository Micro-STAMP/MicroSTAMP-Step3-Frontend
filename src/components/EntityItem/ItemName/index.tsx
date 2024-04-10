import styles from "../EntityItem.module.css";

interface ItemNameProps {
	children: React.ReactNode;
}
function ItemName({ children }: ItemNameProps) {
	return (
		<>
			<span className={styles.name}>{children}</span>
		</>
	);
}

export default ItemName;
