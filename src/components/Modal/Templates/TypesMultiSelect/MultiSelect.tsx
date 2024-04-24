import { useState } from "react";
import {
	BiChevronDown as ArrowDown,
	BiChevronUp as ArrowUp,
	BiX as CloseIcon
} from "react-icons/bi";

import styles from "./TypesMultiSelect.module.css";

interface MultiSelectProps {
	options: string[];
	values: string[];
	onChange: (values: string[]) => void;
}
function MultiSelect({ options, values, onChange }: MultiSelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	const selectOption = (option: string) => {
		const isSelected = values.includes(option);
		if (!isSelected) {
			onChange([...values, option]);
		}
	};
	const removeOption = (option: string) => {
		const updatedValue = values.filter(item => item !== option);
		onChange(updatedValue);
	};

	return (
		<label className={styles.multi_select_container}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={`${styles.multi_select} ${isOpen ? styles.open : ""}`}
			>
				{values.length > 0 ? (
					<div className={styles.selected_values}>
						{values.map(value => (
							<div key={value} className={styles.selected_value}>
								<span>{value}</span>
								<CloseIcon
									className={styles.remove_button}
									onClick={() => removeOption(value)}
								/>
							</div>
						))}
					</div>
				) : (
					<span className={styles.label}>Select the types</span>
				)}
				{isOpen ? (
					<ArrowUp className={styles.icon} />
				) : (
					<ArrowDown className={styles.icon} />
				)}
			</button>
			{isOpen && (
				<ul className={styles.options}>
					{options.map(option => (
						<li
							className={`${styles.option} ${
								values.includes(option) ? styles.selected : ""
							}`}
							key={option}
							onClick={() => selectOption(option)}
						>
							<span>{option}</span>
						</li>
					))}
				</ul>
			)}
		</label>
	);
}

export default MultiSelect;
