import styles from "../ModalCreateEntity.module.css";

function ModalCreateEntityInputs({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.inputs}>{children}</div>
		</>
	);
}

export default ModalCreateEntityInputs;
