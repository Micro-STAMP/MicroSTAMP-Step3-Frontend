import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import { createHazard } from "@http/Hazard";
import { ICreateHazard } from "@interfaces/IHazard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ModalCreateHazardProps extends ModalProps {
	project_id: number;
}
function ModalCreateHazard({ open, onClose, project_id }: ModalCreateHazardProps) {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();
	const { mutate: requestCreateHazard } = useMutation({
		mutationFn: (hazard: ICreateHazard) => createHazard(hazard),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["hazards"] });
		}
	});
	const handleCreateHazard = () => {
		const hazard: ICreateHazard = { name, project_id };
		requestCreateHazard(hazard);
		onClose();
	};

	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Hazard" />
				<Modal.Inputs>
					<Input label="Name" onChange={setName} value={name} />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal" onClick={handleCreateHazard}>
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

export default ModalCreateHazard;
