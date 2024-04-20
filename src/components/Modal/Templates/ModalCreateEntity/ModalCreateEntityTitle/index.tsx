import styles from "../ModalCreateEntity.module.css";

function ModalCreateEntityTitle({ title }: { title: string }) {
	return (
		<>
			<h1 className={styles.title}>{title}</h1>
		</>
	);
}

export default ModalCreateEntityTitle;
