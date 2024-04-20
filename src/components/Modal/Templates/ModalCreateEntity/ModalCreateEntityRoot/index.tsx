import styles from "../ModalCreateEntity.module.css";

function ModalCreateEntityRoot({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.modal_create_entity}>{children}</div>
		</>
	);
}

export default ModalCreateEntityRoot;
