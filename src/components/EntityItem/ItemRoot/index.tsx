import styles from "../EntityItem.module.css";

interface ItemRootProps {
	children: React.ReactNode;
}
function ItemRoot({ children }: ItemRootProps) {
	return (
		<>
			<div className={styles.entityItem}>{children}</div>
		</>
	);
}

export default ItemRoot;
