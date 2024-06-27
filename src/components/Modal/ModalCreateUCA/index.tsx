import Button from "@components/Button";
import { ModalProps } from "@components/Modal";
import {
	HazardSelect,
	ModalCreateEntity as Modal,
	ModalContainer,
	ValueSelect
} from "@components/Modal/Templates";
import { getHazards } from "@http/Hazard";
import { createUCA } from "@http/UnsafeControlAction";
import { ITableContext } from "@interfaces/IContextTable";
import { IControllerVariableDto } from "@interfaces/IController/IReadController";
import { ICreateUCA } from "@interfaces/IUnsafeControlAction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SelectOption } from "../Templates/Select/SelectOption";
import TypeSelect from "../Templates/TypeSelect";
import styles from "./ModalCreateUca.module.css";

interface ModalCreateUCAProps extends ModalProps {
	variables: IControllerVariableDto[];
	project_id: number;
	ca_id: number;
	type: string;
	context: ITableContext;
}
function ModalCreateUCA({
	open,
	onClose,
	variables,
	type,
	project_id,
	ca_id,
	context
}: ModalCreateUCAProps) {
	const [selectedHazard, setSelectedHazard] = useState<SelectOption>({
		label: "",
		value: ""
	});
	const [selectedType, setSelectedType] = useState<SelectOption>({
		label: type,
		value: type.toUpperCase().split(" ").join("_")
	});

	const [selectedValues, setSelectedValues] = useState<{ [key: string]: SelectOption }>({});
	const handleSelectChange = (variable: string, value: SelectOption) => {
		setSelectedValues(prevState => ({
			...prevState,
			[variable]: value
		}));
	};

	useEffect(() => {
		context.values.forEach(v => {
			handleSelectChange(v.variable_name, {
				label: v.value_name,
				value: `${v.value_id}`
			});
		});
	}, [context]);

	const getSelectedValuesAsIntList = () => {
		const values = Object.values(selectedValues);
		const intValues = values
			.filter(value => value.value.length > 0)
			.map(value => parseInt(value.value));
		return intValues;
	};

	const { data: hazards, isLoading } = useQuery({
		queryKey: ["hazards", project_id],
		queryFn: () => getHazards(project_id)
	});

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateUCA, isPending } = useMutation({
		mutationFn: (rule: ICreateUCA) => createUCA(rule),
		onSuccess: () => {
			toast.success("UCA created successfully");
			queryClient.invalidateQueries({ queryKey: ["unsafe-control-actions"] });
			queryClient.invalidateQueries({ queryKey: ["ucas-contexts"] });
			setSelectedHazard({ label: "", value: "" });
			setSelectedType({ label: "", value: "" });
			setSelectedValues({});
			onClose();
		},
		onError: () => {
			toast.error("Error creating UCA");
		}
	});

	const handleCreateNewUCA = async () => {
		const newUCA: ICreateUCA = {
			control_action_id: ca_id,
			hazard_id: parseInt(selectedHazard.value),
			type: selectedType.value,
			values_ids: getSelectedValuesAsIntList(),
			project_id: project_id
		};
		await requestCreateUCA(newUCA);
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (!hazards) return <h1>Error</h1>;
	return (
		<ModalContainer open={open} size="large">
			<Modal.Root>
				<Modal.Title title="New Unsafe Control Action" />
				<Modal.Inputs>
					<div className={styles.uca_select_container}>
						<span className={styles.container_title}>Types</span>
						<TypeSelect value={selectedType} onChange={setSelectedType} disabled />
					</div>
					<div className={styles.uca_select_container}>
						<span className={styles.container_title}>Context</span>
						<div className={styles.variables_container}>
							{variables.map(v => (
								<ValueSelect
									key={v.id}
									variable_id={v.id}
									value={{
										label: selectedValues[v.name]
											? selectedValues[v.name].label
											: "",
										value: selectedValues[v.name]
											? selectedValues[v.name].value
											: ""
									}}
									onChange={value => handleSelectChange(`${v.id}`, value)}
									disabled
								/>
							))}
						</div>
					</div>
					<div className={styles.uca_select_container}>
						<span className={styles.container_title}>Hazard</span>
						<HazardSelect
							value={selectedHazard}
							onChange={setSelectedHazard}
							hazards={hazards}
						/>
					</div>
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateNewUCA} isLoading={isPending}>
						Create
					</Button>
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateUCA;
