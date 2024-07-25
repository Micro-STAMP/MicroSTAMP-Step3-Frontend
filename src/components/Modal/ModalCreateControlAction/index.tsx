import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createControlAction } from "@http/ControlAction";
import { ICreateControlAction } from "@interfaces/IControlAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ModalCreateControlActionProps extends ModalProps {
	controller_id: number;
}
function ModalCreateControlAction({ open, onClose, controller_id }: ModalCreateControlActionProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutateAsync: requestCreateControlAction, isPending } = useMutation({
		mutationFn: (ca: ICreateControlAction) => createControlAction(ca),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleCreateControlAction = async () => {
		const ca: ICreateControlAction = { name, controller_id };
		await requestCreateControlAction(ca);
		setName("");
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
					<Button size="normal" variant="secondary" onClick={onClose}>
						Cancel
					</Button>
					<Button size="normal" onClick={handleCreateControlAction} isLoading={isPending}>
						Create
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateControlAction;
