import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Controller } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalConfirm, ModalCreateController } from "@components/Modal";
import { deleteController } from "@http/Controller";
import { IReadListController } from "@interfaces/IController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ControllersContainerProps {
	controllers: IReadListController[];
	project_id: number;
}
function ControllersContainer({ controllers, project_id }: ControllersContainerProps) {
	const [modalCreateControllerOpen, setModalCreateControllerOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateControllerOpen(!modalCreateControllerOpen);
	};

	const [selectedController, setSelectedController] = useState<number | null>(null);
	const [modalDeleteController, setModalDeleteController] = useState(false);
	const toggleModalDeleteController = () => setModalDeleteController(!modalDeleteController);

	const queryClient = useQueryClient();
	const { mutateAsync: requestDeleteController, isPending } = useMutation({
		mutationFn: (id: number) => deleteController(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project-controllers"] });
			toast.success("Controller deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteController = async () => {
		if (selectedController) {
			await requestDeleteController(selectedController);
			toggleModalDeleteController();
			setSelectedController(null);
		}
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
								<EditDeleteButton
									onDelete={() => {
										setSelectedController(controller.id);
										toggleModalDeleteController();
									}}
									onEdit={() => {}}
								/>
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
			<ModalConfirm
				open={modalDeleteController}
				onClose={toggleModalDeleteController}
				label="Delete Controller"
				message="Are you sure you want to delete this controller?"
				onConfirm={handleDeleteController}
				btnText="Delete"
				isLoading={isPending}
			/>
		</>
	);
}

export default ControllersContainer;
