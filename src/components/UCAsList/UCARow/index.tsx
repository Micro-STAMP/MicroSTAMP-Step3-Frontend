import { IUnsafeControlAction } from "@/interfaces/IUnsafeControlAction";
import { DeleteButton, EditButton } from "@components/IconButton";
import styles from "./UCARow.module.css";

interface UCARowProps {
	uca: IUnsafeControlAction;
}
function UCARow({ uca }: UCARowProps) {
	const hasRule = uca.rule && uca.rule.length > 0;
	return (
		<div className={styles.uca_row}>
			<div className={styles.uca}>
				<div>
					{uca.name}{" "}
					<span>{hasRule ? `[${uca.hazard}, ${uca.rule}]` : `[${uca.hazard}]`}</span>
				</div>
				{!hasRule && <DeleteButton onClick={() => {}} />}
			</div>
			<div className={styles.constraint}>
				<div>{uca.constraint}</div>
				<EditButton onClick={() => {}} />
			</div>
		</div>
	);
}

export default UCARow;
