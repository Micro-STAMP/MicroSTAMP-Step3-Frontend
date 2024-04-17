import Button from "@components/Button";
import { ModalContainer, ModalProps } from "@components/Modal";

function ModalNewProject({ open, onClose }: ModalProps) {
	return (
		<ModalContainer open={open} onClose={onClose}>
			<Button onClick={onClose}>X</Button>
		</ModalContainer>
	);
}

export default ModalNewProject;
