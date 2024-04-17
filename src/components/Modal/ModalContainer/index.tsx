import { ModalProps, Overlay } from "@components/Modal";
import styles from "../Modal.module.css";

interface ModalContainerProps extends ModalProps {
	children: React.ReactNode;
}
function ModalContainer({ children, open }: ModalContainerProps) {
	return (
		<>
			{open && (
				<Overlay>
					<dialog className={styles.modal_container} open={open}>
						{children}
					</dialog>
				</Overlay>
			)}
		</>
	);
}

export default ModalContainer;
