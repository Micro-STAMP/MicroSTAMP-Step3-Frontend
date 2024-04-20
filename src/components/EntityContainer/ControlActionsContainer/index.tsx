import { IControlAction } from "@/interfaces/IControlAction";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as ControlAction } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalCreateControlAction } from "@components/Modal";
import { useState } from "react";

interface ControlActionsContainerProps {
	controlActions: IControlAction[];
}
function ControlActionsContainer({ controlActions }: ControlActionsContainerProps) {
	const [modalCreateControlActionOpen, setmodalCreateControlActionOpen] = useState(false);
	const toggleModal = () => {
		setmodalCreateControlActionOpen(!modalCreateControlActionOpen);
	};
	return (
		<>
			<Container title="Control Actions" onClick={toggleModal}>
				<ListWrapper>
					{controlActions.map(ca => (
						<ControlAction.Root key={ca.id}>
							<ControlAction.Name>{ca.name}</ControlAction.Name>
							<ControlAction.Actions>
								<LinkButton to={`/control-action/${ca.slug}`} />
								<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
							</ControlAction.Actions>
						</ControlAction.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateControlAction open={modalCreateControlActionOpen} onClose={toggleModal} />
		</>
	);
}

export default ControlActionsContainer;
