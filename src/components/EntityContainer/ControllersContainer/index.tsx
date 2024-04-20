import { IController } from "@/interfaces/IController";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Controller } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalCreateController } from "@components/Modal";
import { useState } from "react";

interface ControllersContainerProps {
	controllers: IController[];
}
function ControllersContainer({ controllers }: ControllersContainerProps) {
	const [modalCreateControllerOpen, setmodalCreateControllerOpen] = useState(false);
	const toggleModal = () => {
		setmodalCreateControllerOpen(!modalCreateControllerOpen);
	};
	return (
		<>
			<Container title="Controllers" onClick={toggleModal}>
				<ListWrapper>
					{controllers.map(controller => (
						<Controller.Root key={controller.id}>
							<Controller.Name>{controller.name}</Controller.Name>
							<Controller.Actions>
								<LinkButton to={`/controller/${controller.slug}`} />
								<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
							</Controller.Actions>
						</Controller.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateController open={modalCreateControllerOpen} onClose={toggleModal} />
		</>
	);
}

export default ControllersContainer;
