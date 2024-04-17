import ModalContainer from "@components/Modal/ModalContainer";
import ModalNewProject from "@components/Modal/ModalNewProject";
import Overlay from "@components/Modal/Overlay";

export interface ModalProps {
	open: boolean;
	onClose: () => void;
}

export { ModalContainer, ModalNewProject, Overlay };
