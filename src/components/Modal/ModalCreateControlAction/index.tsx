import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createControlAction } from "@http/ControlAction";
import { ICreateControlAction } from "@interfaces/IControlAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ModalCreateControlActionProps extends ModalProps {
	controller_id: number;
}
function ModalCreateControlAction({ open, onClose, controller_id }: ModalCreateControlActionProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateControlAction } = useMutation({
		mutationFn: (ca: ICreateControlAction) => createControlAction(ca),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		}
	});
	const handleCreateControlAction = () => {
		const ca: ICreateControlAction = { name, controller_id };
		requestCreateControlAction(ca);
		onClose();
	};

	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Control Action" />
				<Modal.Inputs>
					<Input label="Name" value={name} onChange={setName} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateControlAction}>
						Create
					</Button>
					<Button size="normal" variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateControlAction;
