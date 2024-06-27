import { getVariablesByController } from "@http/Variable";
import { useQuery } from "@tanstack/react-query";
import styles from "../ContextTable.module.css";

const types = [
	"Provided",
	"Not provided",
	"Too early",
	"Too late",
	"Out of order",
	"Stopped too soon",
	"Applied too long"
];

interface TableHeaderProps {
	controller_id: number;
}
function TableHeader({ controller_id }: TableHeaderProps) {
	const {
		data: variables,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["context-table-header", controller_id],
		queryFn: () => getVariablesByController(controller_id)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (!variables || isError) return <h1>Error</h1>;
	return (
		<div className={styles.table_header}>
			{variables
				.map(v => v.name)
				.map(col => (
					<div key={col} className={styles.table_cell}>
						{col}
					</div>
				))}
			{types.map(type => (
				<div key={type} className={styles.table_cell}>
					{type}
				</div>
			))}
		</div>
	);
}

export default TableHeader;
