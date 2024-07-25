import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Hazard } from "@components/EntityItem";
import { EditDeleteButton } from "@components/IconButton";
import { ModalConfirm, ModalCreateHazard } from "@components/Modal";
import { deleteHazard } from "@http/Hazard";
import { IReadHazard } from "@interfaces/IHazard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface HazardsContainerProps {
	hazards: IReadHazard[];
	project_id: number;
}
function HazardsContainer({ hazards, project_id }: HazardsContainerProps) {
	const [modalCreateHazardOpen, setModalCreateHazardOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateHazardOpen(!modalCreateHazardOpen);
	};

	const [selectedHazard, setSelectedHazard] = useState<number | null>(null);
	const [modalDeleteHazard, setModalDeleteHazard] = useState(false);
	const toggleModalDeleteHazard = () => setModalDeleteHazard(!modalDeleteHazard);

	const queryClient = useQueryClient();
	const { mutateAsync: requestDeleteHazard, isPending } = useMutation({
		mutationFn: (id: number) => deleteHazard(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project-hazards"] });
			toast.success("Hazard deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteHazard = async () => {
		if (selectedHazard) {
			await requestDeleteHazard(selectedHazard);
			toggleModalDeleteHazard();
			setSelectedHazard(null);
		}
	};

	return (
		<>
			<Container title="Hazards" onClick={toggleModal}>
				<ListWrapper>
					{hazards.map(hazard => (
						<Hazard.Root key={hazard.id}>
							<Hazard.Name>{hazard.name}</Hazard.Name>
							<EditDeleteButton
								onDelete={() => {
									setSelectedHazard(hazard.id);
									toggleModalDeleteHazard();
								}}
								onEdit={() => {}}
							/>
						</Hazard.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateHazard
				open={modalCreateHazardOpen}
				onClose={toggleModal}
				project_id={project_id}
			/>
			<ModalConfirm
				open={modalDeleteHazard}
				onClose={toggleModalDeleteHazard}
				label="Delete Hazard"
				message="Are you sure you want to delete this hazard?"
				onConfirm={handleDeleteHazard}
				btnText="Delete"
				isLoading={isPending}
			/>
		</>
	);
}

export default HazardsContainer;
