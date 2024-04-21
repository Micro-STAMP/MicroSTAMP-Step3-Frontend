import styles from "./Select.module.css";

interface SelectOptions {
	option: string;
	value: string;
}
interface SelectProps {
	options: SelectOptions[];
	handleChange?: () => void;
}
function Select({ options }: SelectProps) {
	return (
		<div className={styles.select_container}>
			<select className={styles.select}>
				{options.map(op => (
					<option value={op.value} className={styles.option} key={op.value}>
						{op.option}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
