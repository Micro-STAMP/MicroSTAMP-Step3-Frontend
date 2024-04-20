import styles from "../ModalCreateEntity.module.css";

function ModalCreateEntityButtons({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.buttons}>{children}</div>
		</>
	);
}

export default ModalCreateEntityButtons;
