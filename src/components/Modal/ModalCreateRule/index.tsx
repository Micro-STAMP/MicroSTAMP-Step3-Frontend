import { IVariable } from "@/interfaces/IVariable";
import Button from "@components/Button";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import Select from "@components/Select";
import { useState } from "react";
import styles from "./ModalCreateRule.module.css";

interface ModalCreateRuleProps extends ModalProps {
	variables: IVariable[];
}
function ModalCreateRule({ open, onClose, variables }: ModalCreateRuleProps) {
	const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
	const handleSelectChange = (variableId: string, value: string) => {
		setSelectedValues(prevState => ({
			...prevState,
			[variableId]: value
		}));
	};

	return (
		<ModalContainer open={open} size="large">
			<Modal.Root>
				<Modal.Title title="New Rule" />
				<div className={styles.selection_container}>
					{variables.map(variable => (
						<div key={variable.id} className={styles.item}>
							<div className={styles.variable}>{variable.name}</div>
							<Select
								options={variable.values.map(value => value.name)}
								value={selectedValues[variable.id] || ""}
								onChange={value => handleSelectChange(variable.id, value)}
							/>
						</div>
					))}
				</div>
				<Modal.Buttons>
					<Button size="normal">Create</Button>
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateRule;
