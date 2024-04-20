import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";

function ModalCreateHazard({ open, onClose }: ModalProps) {
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Hazard" />
				<Modal.Inputs>
					<Input label="Name" />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal">Create</Button>
					<Button size="normal" variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateHazard;
