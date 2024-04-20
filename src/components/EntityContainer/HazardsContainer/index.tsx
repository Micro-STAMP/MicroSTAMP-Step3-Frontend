import { IHazard } from "@/interfaces/IHazard";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Hazard } from "@components/EntityItem";
import { EditDeleteButton } from "@components/IconButton";
import { ModalCreateHazard } from "@components/Modal";
import { useState } from "react";

interface HazardsContainerProps {
	hazards: IHazard[];
}
function HazardsContainer({ hazards }: HazardsContainerProps) {
	const [modalCreateHazardOpen, setModalCreateHazardOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateHazardOpen(!modalCreateHazardOpen);
	};
	return (
		<>
			<Container title="Hazards" onClick={toggleModal}>
				<ListWrapper>
					{hazards.map(hazard => (
						<Hazard.Root key={hazard.id}>
							<Hazard.Name>{hazard.name}</Hazard.Name>
							<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
						</Hazard.Root>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateHazard open={modalCreateHazardOpen} onClose={toggleModal} />
		</>
	);
}

export default HazardsContainer;
