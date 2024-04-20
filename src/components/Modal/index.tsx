import ModalCreateControlAction from "@components/Modal/ModalCreateControlAction";
import ModalCreateController from "@components/Modal/ModalCreateController";
import ModalCreateHazard from "@components/Modal/ModalCreateHazard";
import ModalCreateProject from "@components/Modal/ModalCreateProject";
import { ModalCreateEntity } from "@components/Modal/Templates/ModalCreateEntity";

export interface ModalProps {
	open: boolean;
	onClose: () => void;
}

export {
	ModalCreateControlAction,
	ModalCreateController,
	ModalCreateEntity,
	ModalCreateHazard,
	ModalCreateProject
};
