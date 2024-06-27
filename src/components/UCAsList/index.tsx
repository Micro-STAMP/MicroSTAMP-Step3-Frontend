import { getUCAsByController } from "@http/UnsafeControlAction";
import { useQuery } from "@tanstack/react-query";
import UCARow from "./UCARow";
import styles from "./UCAsList.module.css";

interface UCAsListProps {
	controller_id: number;
}
function UCAsList({ controller_id }: UCAsListProps) {
	const {
		data: ucas,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["unsafe-control-actions", controller_id],
		queryFn: () => getUCAsByController(controller_id)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (isError || !ucas) return <h1>Error</h1>;
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
