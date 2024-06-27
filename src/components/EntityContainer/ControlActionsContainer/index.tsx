import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as ControlAction } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalCreateControlAction } from "@components/Modal";
import { IControllerControlActionDto } from "@interfaces/IController/IReadController";
import { useState } from "react";

interface ControlActionsContainerProps {
	controlActions: IControllerControlActionDto[];
	controllerId: number;
}
function ControlActionsContainer({ controlActions, controllerId }: ControlActionsContainerProps) {
	const [modalCreateControlActionOpen, setModalCreateControlActionOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateControlActionOpen(!modalCreateControlActionOpen);
	};
	return (
		<>
			<Container title="Control Actions" onClick={toggleModal}>
				<ListWrapper>
					{controlActions.map(ca => (
						<ControlAction.Root key={ca.id}>
							<ControlAction.Name>{ca.name}</ControlAction.Name>
							<ControlAction.Actions>
								<LinkButton to={`/control-action/${ca.id}`} />
								<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
							</ControlAction.Actions>
						</ControlAction.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateControlAction
				open={modalCreateControlActionOpen}
				onClose={toggleModal}
				controller_id={controllerId}
			/>
		</>
	);
}

export default ControlActionsContainer;
