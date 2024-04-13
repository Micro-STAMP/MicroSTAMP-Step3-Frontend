import styles from "../EntityItem.module.css";

interface ItemRootProps {
	children: React.ReactNode;
}
function ItemRoot({ children }: ItemRootProps) {
	return (
		<>
			<div className={styles.entity_item}>{children}</div>
		</>
	);
}

export default ItemRoot;
