import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";

function ModalCreateVariable({ open, onClose }: ModalProps) {
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Variable" />
				<Modal.Inputs>
					<Input label="Name" />
				</Modal.Inputs>
				<Modal.Buttons>
					<Button size="normal">Create</Button>
					<Button variant="secondary" size="normal" onClick={onClose}>
						Cancel
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalCreateVariable;
