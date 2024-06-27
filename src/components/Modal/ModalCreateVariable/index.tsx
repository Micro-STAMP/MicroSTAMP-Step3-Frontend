import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createVariable } from "@http/Variable";
import { ICreateVariable } from "@interfaces/IVariable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ModalCreateVariableProps extends ModalProps {
	controller_id: number;
}
function ModalCreateVariable({ open, onClose, controller_id }: ModalCreateVariableProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateVariable } = useMutation({
		mutationFn: (variable: ICreateVariable) => createVariable(variable),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		}
	});
	const handleCreateVariable = () => {
		const variable: ICreateVariable = { name, controller_id };
		requestCreateVariable(variable);
		onClose();
	};
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Variable" />
				<Modal.Inputs>
					<Input label="Name" value={name} onChange={setName} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateVariable}>
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

export default ModalCreateVariable;
