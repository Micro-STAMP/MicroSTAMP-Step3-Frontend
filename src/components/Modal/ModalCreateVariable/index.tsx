import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createVariable } from "@http/Variable";
import { ICreateVariable } from "@interfaces/IVariable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ModalCreateVariableProps extends ModalProps {
	controller_id: number;
}
function ModalCreateVariable({ open, onClose, controller_id }: ModalCreateVariableProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateVariable, isPending } = useMutation({
		mutationFn: (variable: ICreateVariable) => createVariable(variable),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleCreateVariable = async () => {
		const variable: ICreateVariable = { name, controller_id };
		await requestCreateVariable(variable);
		setName("");
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
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateVariable} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateVariable;
