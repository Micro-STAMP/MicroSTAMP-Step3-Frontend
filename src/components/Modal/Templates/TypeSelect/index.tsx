import Select from "../Select";
import { SelectOption } from "../Select/SelectOption";
import styles from "./TypeSelect.module.css";

const types = [
	"Provided",
	"Not provided",
	"Too early",
	"Too late",
	"Out of order",
	"Stopped too soon",
	"Applied too long"
];

interface TypeSelectProps {
	value: SelectOption;
	onChange: (value: SelectOption) => void;
	disabled?: boolean;
}
function TypeSelect({ value, onChange, disabled = false }: TypeSelectProps) {
	if (value.label === "") value.label = types[0];
	return (
		<div className={styles.type_select}>
			<div className={styles.label}>Type</div>
			<Select
				options={types.map(t => ({
					label: t,
					value: t.toUpperCase().split(" ").join("_")
				}))}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
}

export default TypeSelect;
