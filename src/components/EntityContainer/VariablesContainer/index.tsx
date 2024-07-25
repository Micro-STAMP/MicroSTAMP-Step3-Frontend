import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Variable } from "@components/EntityItem";
import { AddButton, EditDeleteButton } from "@components/IconButton";
import { ModalConfirm, ModalCreateValue, ModalCreateVariable } from "@components/Modal";
import { deleteVariable } from "@http/Variable";
import { IControllerVariableDto } from "@interfaces/IController/IReadController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface VariableContainerProps {
	variables: IControllerVariableDto[];
	controllerId: number;
}
function VariableContainer({ variables, controllerId }: VariableContainerProps) {
	const [variableId, setVariableId] = useState(0);

	const queryClient = useQueryClient();

	const [modalCreateVariableOpen, setModalCreateVariableOpen] = useState(false);
	const toggleModalVariable = () => {
		setModalCreateVariableOpen(!modalCreateVariableOpen);
	};
	const [selectedVariable, setSelectedVariable] = useState<number | null>(null);
	const [modalDeleteVariable, setModalDeleteVariable] = useState(false);
	const toggleModalDeleteVariable = () => setModalDeleteVariable(!modalDeleteVariable);
	const { mutateAsync: requestDeleteVariable, isPending: isDeletingVar } = useMutation({
		mutationFn: (id: number) => deleteVariable(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
			toast.success("Variable deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteVariable = async () => {
		if (selectedVariable) {
			await requestDeleteVariable(selectedVariable);
			toggleModalDeleteVariable();
			setSelectedVariable(null);
		}
	};

	const [modalCreateValueOpen, setModalCreateValueOpen] = useState(false);
	const toggleModalValue = () => {
		setModalCreateValueOpen(!modalCreateValueOpen);
	};

	return (
		<>
			<Container title="Variables" onClick={toggleModalVariable}>
				<ListWrapper>
					{variables.map(variable => (
						<Variable.Root key={variable.id}>
							<Variable.Display>
								<Variable.Name>{variable.name}</Variable.Name>
								<Variable.Values values={variable.values} />
							</Variable.Display>
							<Variable.Actions>
								<AddButton
									onClick={() => {
										toggleModalValue();
										setVariableId(variable.id);
									}}
								/>
								<EditDeleteButton
									onDelete={() => {
										setSelectedVariable(variable.id);
										toggleModalDeleteVariable();
									}}
									onEdit={() => {}}
								/>
							</Variable.Actions>
						</Variable.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateVariable
				open={modalCreateVariableOpen}
				onClose={toggleModalVariable}
				controller_id={controllerId}
			/>
			<ModalConfirm
				open={modalDeleteVariable}
				onClose={toggleModalDeleteVariable}
				label="Delete Variable"
				message="Are you sure you want to delete this variable?"
				onConfirm={handleDeleteVariable}
				btnText="Delete"
				isLoading={isDeletingVar}
			/>
			<ModalCreateValue
				open={modalCreateValueOpen}
				onClose={toggleModalValue}
				variable_id={variableId}
			/>
		</>
	);
}

export default VariableContainer;
