import styles from "./Input.module.css";

interface InputProps {
	label: string;
	type?: React.HTMLInputTypeAttribute;
	required?: boolean;

	// value: string;
	// updateValue: (value: string) => void;
}
function Input({ label, required = false, type = "text" }: InputProps) {
	return (
		<label className={styles.label}>
			<input required={required} className={styles.input} type={type} />
			<span className={styles.name}>{label}</span>
		</label>
	);
}

export default Input;
