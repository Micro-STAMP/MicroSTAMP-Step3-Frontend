import { IVariable } from "@/interfaces/IVariable";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Variable } from "@components/EntityItem";
import { AddButton, EditDeleteButton } from "@components/IconButton";
import { ModalCreateValue, ModalCreateVariable } from "@components/Modal";
import { useState } from "react";

interface VariableContainerProps {
	variables: IVariable[];
}
function VariableContainer({ variables }: VariableContainerProps) {
	const [modalCreateVariableOpen, setModalCreateVariableOpen] = useState(false);
	const toggleModalVariable = () => {
		setModalCreateVariableOpen(!modalCreateVariableOpen);
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
								<AddButton onClick={toggleModalValue} />
								<EditDeleteButton onEdit={() => {}} onDelete={() => {}} />
							</Variable.Actions>
						</Variable.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateVariable open={modalCreateVariableOpen} onClose={toggleModalVariable} />
			<ModalCreateValue open={modalCreateValueOpen} onClose={toggleModalValue} />
		</>
	);
}

export default VariableContainer;
