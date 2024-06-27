import { DeleteButton, EditButton } from "@components/IconButton";
import { getConstraintByUCA } from "@http/Constraint";
import { IReadUCA } from "@interfaces/IUnsafeControlAction";
import { useQuery } from "@tanstack/react-query";
import styles from "./UCARow.module.css";

interface UCARowProps {
	uca: IReadUCA;
}
function UCARow({ uca }: UCARowProps) {
	const {
		data: constraint,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["uca-constraint", uca],
		queryFn: () => getConstraintByUCA(uca.id)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (isError || !constraint) return <h1>Error</h1>;
	return (
		<div className={styles.uca_row}>
			<div className={styles.uca}>
				<div>
					{uca.name}
					<span>
						{uca.rule_tag
							? `[${uca.hazard_tag}, ${uca.rule_tag}]`
							: `[${uca.hazard_tag}]`}
					</span>
				</div>
				{!uca.rule_tag && <DeleteButton onClick={() => {}} />}
			</div>
			<div className={styles.constraint}>
				<div>{constraint.name}</div>
				<EditButton onClick={() => {}} />
			</div>
		</div>
	);
}

export default UCARow;
