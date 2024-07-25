import Button from "@components/Button";
import { ModalProps } from "@components/Modal";
import {
	HazardSelect,
	ModalCreateEntity as Modal,
	ModalContainer,
	TypesMultiSelect,
	ValueSelect
} from "@components/Modal/Templates";
import { getHazards } from "@http/Hazard";
import { createRule } from "@http/Rule";
import { ICreateRule } from "@interfaces/IRule";
import { IVariableListItem } from "@interfaces/IVariable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { SelectOption } from "../Templates/Select/SelectOption";
import styles from "./ModalCreateRule.module.css";

interface ModalCreateRuleProps extends ModalProps {
	variables: IVariableListItem[];
	project_id: number;
	ca_id: number;
}
function ModalCreateRule({ open, onClose, variables, project_id, ca_id }: ModalCreateRuleProps) {
	const [selectedHazard, setSelectedHazard] = useState<SelectOption>({
		label: "",
		value: ""
	});

	const [selectedValues, setSelectedValues] = useState<{ [key: string]: SelectOption }>({});
	const handleSelectChange = (variableId: number, value: SelectOption) => {
		setSelectedValues(prevState => ({
			...prevState,
			[variableId]: value
		}));
	};

	const getSelectedValuesAsIntList = () => {
		const values = Object.values(selectedValues);
		const intValues = values
			.filter(value => value.value.length > 0)
			.map(value => parseInt(value.value));
		return intValues;
	};

	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const handleSelectType = (types: string[]) => {
		setSelectedTypes(types);
	};

	const { data: hazards, isLoading } = useQuery({
		queryKey: ["project-hazards", project_id],
		queryFn: () => getHazards(project_id)
	});

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateRule, isPending } = useMutation({
		mutationFn: (rule: ICreateRule) => createRule(rule),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rules"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});

	const handleCreateNewRule = async () => {
		const newRule: ICreateRule = {
			name: "New Rule",
			control_action_id: ca_id,
			hazard_id: parseInt(selectedHazard.value),
			types: selectedTypes.map(t => t.toUpperCase().split(" ").join("_")),
			values_ids: getSelectedValuesAsIntList()
		};
		await requestCreateRule(newRule);

		setSelectedHazard({
			label: "",
			value: ""
		});
		setSelectedValues({});
		setSelectedTypes([]);
		onClose();
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (!hazards) return <h1>Error</h1>;
	return (
		<ModalContainer open={open} size="large">
			<Modal.Root>
				<Modal.Title title="New Rule" />
				<Modal.Inputs>
					<div className={styles.rule_select_container}>
						<span className={styles.container_title}>Types</span>
						<TypesMultiSelect values={selectedTypes} onChange={handleSelectType} />
					</div>
					<div className={styles.rule_select_container}>
						<span className={styles.container_title}>Context</span>
						<div className={styles.variables_container}>
							{variables.map(v => (
								<ValueSelect
									key={v.id}
									variable_id={v.id}
									value={{
										label: selectedValues[v.id]
											? selectedValues[v.id].label
											: "",
										value: selectedValues[v.id]
											? selectedValues[v.id].value
											: ""
									}}
									onChange={value => handleSelectChange(v.id, value)}
								/>
							))}
						</div>
					</div>
					<div className={styles.rule_select_container}>
						<span className={styles.container_title}>Hazard</span>
						<HazardSelect
							value={selectedHazard}
							onChange={setSelectedHazard}
							hazards={hazards}
						/>
					</div>
				</Modal.Inputs>
				<Modal.Buttons>
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateNewRule} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateRule;
