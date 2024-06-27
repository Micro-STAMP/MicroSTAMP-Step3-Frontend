import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createValue } from "@http/Value";
import { ICreateValue } from "@interfaces/IValue";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ModalCreateValueProps extends ModalProps {
	variable_id: number;
}
function ModalCreateValue({ open, onClose, variable_id }: ModalCreateValueProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateValue } = useMutation({
		mutationFn: (value: ICreateValue) => createValue(value),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		}
	});

	const handleCreateValue = () => {
		const variable: ICreateValue = { name, variable_id };
		requestCreateValue(variable);
		onClose();
	};

	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Value" />
				<Modal.Inputs>
					<Input label="Name" value={name} onChange={setName} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateValue}>
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

export default ModalCreateValue;
