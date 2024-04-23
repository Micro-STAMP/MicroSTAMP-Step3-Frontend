import ModalCreateControlAction from "@components/Modal/ModalCreateControlAction";
import ModalCreateController from "@components/Modal/ModalCreateController";
import ModalCreateHazard from "@components/Modal/ModalCreateHazard";
import ModalCreateProject from "@components/Modal/ModalCreateProject";
import ModalCreateRule from "@components/Modal/ModalCreateRule";
import ModalCreateValue from "@components/Modal/ModalCreateValue";
import ModalCreateVariable from "@components/Modal/ModalCreateVariable";
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
	ModalCreateProject,
	ModalCreateRule,
	ModalCreateValue,
	ModalCreateVariable
};
