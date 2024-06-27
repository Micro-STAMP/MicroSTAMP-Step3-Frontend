import { ITableContext } from "@interfaces/IContextTable";
import { IReadController } from "@interfaces/IController";
import { IReadContextUCA } from "@interfaces/IUnsafeControlAction";
import styles from "../ContextTable.module.css";
import UnsafeButton from "../UnsafeButton";

const types = [
	"Provided",
	"Not provided",
	"Too early",
	"Too late",
	"Out of order",
	"Stopped too soon",
	"Applied too long"
];

interface TableRowProps {
	context: ITableContext;
	ca_id: number;
	controller: IReadController;
	ucas: IReadContextUCA[];
}
function TableRow({ context, ca_id, controller, ucas }: TableRowProps) {
	return (
		<div className={styles.table_row}>
			{context.values.map(value => (
				<div key={value.value_id} className={styles.table_cell}>
					{value.value_name}
				</div>
			))}
			{types.map(type => (
				<div key={type} className={styles.table_cell}>
					<UnsafeButton
						context={context}
						type={type}
						ca_id={ca_id}
						controller={controller}
						ucas={ucas}
					/>
				</div>
			))}
		</div>
	);
}

export default TableRow;
