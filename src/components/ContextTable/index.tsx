import { getContextTableByController } from "@http/ContextTable";
import { getControllerById } from "@http/Controller";
import { getUCAsContextByControlAction } from "@http/UnsafeControlAction";
import { useQuery } from "@tanstack/react-query";
import styles from "./ContextTable.module.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface ContextTableProps {
	controllerId: number;
	ca_id: number;
}
function ContextTable({ controllerId, ca_id }: ContextTableProps) {
	const {
		data: contextTable,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["context-table", controllerId],
		queryFn: () => getContextTableByController(controllerId),
		retry: false
	});

	const { data: ucas } = useQuery({
		queryKey: ["ucas-contexts", controllerId],
		queryFn: () => getUCAsContextByControlAction(ca_id)
	});

	const { data: controller } = useQuery({
		queryKey: ["context-table-controller", controllerId],
		queryFn: () => getControllerById(controllerId)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (contextTable === undefined) {
		return <h2>A context table has not been created for this controller yet.</h2>;
	}
	if (isError || !controller || !ucas) return <h1>Error</h1>;
	return (
		<div className={styles.context_table_container}>
			<TableHeader controller_id={contextTable.controller_id} />
			{contextTable.contexts.map(context => (
				<TableRow
					key={context.id}
					context={context}
					ca_id={ca_id}
					controller={controller}
					ucas={ucas}
				/>
			))}
		</div>
	);
}

export default ContextTable;
