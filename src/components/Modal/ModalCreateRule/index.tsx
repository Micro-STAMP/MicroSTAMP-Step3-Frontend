import { IVariable } from "@/interfaces/IVariable";
import Button from "@components/Button";
import { ModalProps } from "@components/Modal";
import {
	ModalCreateEntity as Modal,
	ModalContainer,
	TypesMultiSelect,
	ValueSelect
} from "@components/Modal/Templates";
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

	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const handleSelectType = (types: string[]) => {
		setSelectedTypes(types);
	};

	return (
		<ModalContainer open={open} size="large">
			<Modal.Root>
				<Modal.Title title="New Rule" />
				<Modal.Inputs>
					<span className={styles.container_title}>Types</span>
					<TypesMultiSelect values={selectedTypes} onChange={handleSelectType} />

					<span className={styles.container_title}>Context</span>
					<div className={styles.variables_container}>
						{variables.map(variable => (
							<ValueSelect
								key={variable.id}
								variable={variable}
								value={selectedValues[variable.id] || ""}
								onChange={value => handleSelectChange(variable.id, value)}
							/>
						))}
					</div>

					<span className={styles.container_title}>Hazard</span>
					<div className={styles.hazard_container}>Selecionar o Hazard</div>
				</Modal.Inputs>
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
