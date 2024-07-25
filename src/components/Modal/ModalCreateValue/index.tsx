import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createValue } from "@http/Value";
import { ICreateValue } from "@interfaces/IValue";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ModalCreateValueProps extends ModalProps {
	variable_id: number;
}
function ModalCreateValue({ open, onClose, variable_id }: ModalCreateValueProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateValue, isPending } = useMutation({
		mutationFn: (value: ICreateValue) => createValue(value),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});

	const handleCreateValue = async () => {
		const variable: ICreateValue = { name, variable_id };
		await requestCreateValue(variable);
		setName("");
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
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateValue} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateValue;
