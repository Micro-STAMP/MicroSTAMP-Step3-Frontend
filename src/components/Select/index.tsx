import { useState } from "react";
import { BiChevronDown as ArrowDown, BiChevronUp as ArrowUp } from "react-icons/bi";

import styles from "./Select.module.css";

interface SelectProps {
	options: string[];
	value: string;
	onChange: (value: string) => void;
}
function Select({ options, value, onChange }: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<label className={styles.select_container}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={`${styles.select} ${isOpen ? styles.open : ""}`}
			>
				<span>{value ? value : "ANY"}</span>
				{isOpen ? (
					<ArrowUp className={styles.icon} />
				) : (
					<ArrowDown className={styles.icon} />
				)}
			</button>
			{isOpen && (
				<ul className={styles.options}>
					{options.map(op => (
						<li
							className={styles.option}
							key={op}
							onClick={() => {
								onChange(op);
							}}
						>
							{op}
						</li>
					))}
				</ul>
			)}
		</label>
	);
}

export default Select;
