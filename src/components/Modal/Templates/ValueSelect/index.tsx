import { getVariableById } from "@http/Variable";
import { useQuery } from "@tanstack/react-query";
import Select from "../Select";
import { SelectOption } from "../Select/SelectOption";
import styles from "./ValueSelect.module.css";

interface ValueSelectProps {
	variable_id: number;
	value: SelectOption;
	onChange: (value: SelectOption) => void;
	disabled?: boolean;
}
function ValueSelect({ variable_id, value, onChange, disabled = false }: ValueSelectProps) {
	const {
		data: variable,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["variable-value-select", variable_id],
		queryFn: () => getVariableById(variable_id)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (!variable || isError) return <h1>Error</h1>;
	return (
		<div className={styles.value_select}>
			<div className={styles.variable}>{variable.name}</div>
			<Select
				options={variable.values.map(value => ({
					label: value.name,
					value: `${value.id}`
				}))}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
}

export default ValueSelect;
