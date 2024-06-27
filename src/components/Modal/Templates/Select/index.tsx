import { useState } from "react";
import { BiChevronDown as ArrowDown, BiChevronUp as ArrowUp } from "react-icons/bi";
import styles from "./Select.module.css";
import { SelectOption } from "./SelectOption";

interface SelectProps {
	options: SelectOption[];
	value: SelectOption;
	onChange: (value: SelectOption) => void;
	optionsPosition?: "top" | "bottom";
	disabled?: boolean;
}
function Select({
	options,
	value,
	onChange,
	optionsPosition = "bottom",
	disabled = false
}: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	const options_class = `${styles.options} ${
		optionsPosition === "top" ? styles.options_top : ""
	}`;
	const select_class = `${styles.select} ${
		isOpen ? (optionsPosition === "top" ? styles.open_top : styles.open_bottom) : ""
	}`;
	return (
		<label className={styles.select_container}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={select_class}
				disabled={disabled}
			>
				<span>{value.label ? value.label : "ANY"}</span>
				{isOpen ? (
					<ArrowUp className={styles.icon} />
				) : (
					<ArrowDown className={styles.icon} />
				)}
			</button>
			{isOpen && !disabled && (
				<ul className={options_class}>
					{options.map(op => (
						<li
							className={styles.option}
							key={op.value}
							onClick={() => {
								onChange({
									label: op.label,
									value: op.value
								});
							}}
						>
							{op.label}
						</li>
					))}
				</ul>
			)}
		</label>
	);
}

export default Select;
