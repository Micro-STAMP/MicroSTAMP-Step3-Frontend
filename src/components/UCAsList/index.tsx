import styles from "./UCAsList.module.css";

function UCAsList() {
	return (
		<div className={styles.ucas_list}>
			<header className={styles.header}>
				<div className={styles.index}>Unsafe Control Actions</div>
				<div className={styles.index}>Associated Controller's Constraints</div>
			</header>
		</div>
	);
}

export default UCAsList;
