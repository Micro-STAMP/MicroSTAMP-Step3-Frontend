import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createController } from "@http/Controller";
import { ICreateController } from "@interfaces/IController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ModalCreateControllerProps extends ModalProps {
	project_id: number;
}
function ModalCreateController({ open, onClose, project_id }: ModalCreateControllerProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateController, isPending } = useMutation({
		mutationFn: (controller: ICreateController) => createController(controller),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project-controllers"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleCreateController = async () => {
		const controller: ICreateController = { name, project_id };
		await requestCreateController(controller);
		setName("");
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
					<Button size="normal" variant="secondary" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateController} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateController;
