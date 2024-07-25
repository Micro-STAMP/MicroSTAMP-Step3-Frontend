import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as ControlAction } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import { ModalConfirm, ModalCreateControlAction } from "@components/Modal";
import { deleteControlAction } from "@http/ControlAction";
import { IControllerControlActionDto } from "@interfaces/IController/IReadController";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface ControlActionsContainerProps {
	controlActions: IControllerControlActionDto[];
	controllerId: number;
}
function ControlActionsContainer({ controlActions, controllerId }: ControlActionsContainerProps) {
	const [modalCreateControlActionOpen, setModalCreateControlActionOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateControlActionOpen(!modalCreateControlActionOpen);
	};

	const [selectedControlAction, setSelectedControlAction] = useState<number | null>(null);
	const [modalDeleteControlAction, setModalDeleteControlAction] = useState(false);
	const toggleModalDeleteControlAction = () =>
		setModalDeleteControlAction(!modalDeleteControlAction);

	const queryClient = useQueryClient();
	const { mutateAsync: requestDeleteControlAction, isPending } = useMutation({
		mutationFn: (id: number) => deleteControlAction(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["controller"] });
			toast.success("Control Action deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteControlAction = async () => {
		if (selectedControlAction) {
			await requestDeleteControlAction(selectedControlAction);
			toggleModalDeleteControlAction();
			setSelectedControlAction(null);
		}
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
								<EditDeleteButton
									onDelete={() => {
										setSelectedControlAction(ca.id);
										toggleModalDeleteControlAction();
									}}
									onEdit={() => {}}
								/>
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
			<ModalConfirm
				open={modalDeleteControlAction}
				onClose={toggleModalDeleteControlAction}
				label="Delete Control Action"
				message="Are you sure you want to delete this control action?"
				onConfirm={handleDeleteControlAction}
				btnText="Delete"
				isLoading={isPending}
			/>
		</>
	);
}

export default ControlActionsContainer;
