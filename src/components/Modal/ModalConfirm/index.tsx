import Button from "@components/Button";
import { ModalProps } from "@components/Modal";
import { ModalCreateEntity as Modal, ModalContainer } from "@components/Modal/Templates";
import styles from "./ModalConfirm.module.css";

interface ModalConfirmProps extends ModalProps {
	label: string;
	message: string;
	onConfirm: () => void | Promise<void>;
	isLoading?: boolean;
	btnText?: string;
}
function ModalConfirm({
	open,
	onClose,
	label,
	message,
	onConfirm,
	isLoading = false,
	btnText = "Confirmar"
}: ModalConfirmProps) {
	return (
		<ModalContainer open={open}>
			<Modal.Root>
				<Modal.Title title={label} />
				<div className={styles.modal_confirm}>{message}</div>
				<Modal.Buttons>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
					<Button onClick={onConfirm} isLoading={isLoading}>
						{btnText}
					</Button>
				</Modal.Buttons>
			</Modal.Root>
		</ModalContainer>
	);
}

export default ModalConfirm;
