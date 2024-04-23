import { IVariable } from "@/interfaces/IVariable";
import Select from "./Select";
import styles from "./ValueSelect.module.css";

interface ValueSelectProps {
	variable: IVariable;
	value: string;
	onChange: (value: string) => void;
}
function ValueSelect({ variable, value, onChange }: ValueSelectProps) {
	return (
		<div className={styles.value_select}>
			<div className={styles.variable}>{variable.name}</div>
			<Select
				options={variable.values.map(value => value.name)}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default ValueSelect;
