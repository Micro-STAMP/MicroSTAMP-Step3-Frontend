import Button from "@components/Button";
import Input from "@components/Input";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";

function ModalCreateProject({ open, onClose }: ModalProps) {
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title="New Project" />
				<Modal.Inputs>
					<Input label="Name" />
					<Input label="Description" />
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

export default ModalCreateProject;
