import { IUnsafeControlAction } from "@/interfaces/IUnsafeControlAction";
import UCARow from "./UCARow";
import styles from "./UCAsList.module.css";

interface UCAsListProps {
	ucas: IUnsafeControlAction[];
}
function UCAsList({ ucas }: UCAsListProps) {
	return (
		<div className={styles.ucas_list}>
			<header className={styles.header}>
				<div className={styles.index}>Unsafe Control Actions</div>
				<div className={styles.index}>Associated Controller's Constraints</div>
			</header>
			<div className={styles.content}>
				{ucas.map(uca => (
					<UCARow uca={uca} key={uca.id} />
				))}
			</div>
		</div>
	);
}

export default UCAsList;
