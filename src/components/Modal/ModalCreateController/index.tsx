import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createController } from "@http/Controller";
import { ICreateController } from "@interfaces/IController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ModalCreateControllerProps extends ModalProps {
	project_id: number;
}
function ModalCreateController({ open, onClose, project_id }: ModalCreateControllerProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateController } = useMutation({
		mutationFn: (controller: ICreateController) => createController(controller),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controllers"] });
		}
	});
	const handleCreateController = () => {
		const controller: ICreateController = { name, project_id };
		requestCreateController(controller);
		onClose();
	};
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Controller" />
				<Modal.Inputs>
					<Input label="Name" value={name} onChange={setName} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateController}>
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

export default ModalCreateController;
