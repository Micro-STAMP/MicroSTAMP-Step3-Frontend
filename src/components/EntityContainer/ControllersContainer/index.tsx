import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Controller } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalCreateController } from "@components/Modal";
import { IReadListController } from "@interfaces/IController";
import { useState } from "react";

interface ControllersContainerProps {
	controllers: IReadListController[];
	project_id: number;
}
function ControllersContainer({ controllers, project_id }: ControllersContainerProps) {
	const [modalCreateControllerOpen, setModalCreateControllerOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateControllerOpen(!modalCreateControllerOpen);
	};
	return (
		<>
			<Container title="Controllers" onClick={toggleModal}>
				<ListWrapper>
					{controllers.map(controller => (
						<Controller.Root key={controller.id}>
							<Controller.Name>{controller.name}</Controller.Name>
							<Controller.Actions>
								<LinkButton to={`/controller/${controller.id}`} />
								<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
							</Controller.Actions>
						</Controller.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateController
				open={modalCreateControllerOpen}
				onClose={toggleModal}
				project_id={project_id}
			/>
		</>
	);
}

export default ControllersContainer;
