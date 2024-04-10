import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Hazard } from "@components/EntityItem";
import { EditDeleteButton } from "@components/IconButton";

interface HazardsContainerProps {
	hazards: IHazard[];
}
function HazardsContainer({ hazards }: HazardsContainerProps) {
	return (
		<Container title="Hazards">
			<ListWrapper>
				{hazards.map(hazard => (
					<Hazard.Root key={hazard.id}>
						<Hazard.Name>{hazard.name}</Hazard.Name>
						<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
					</Hazard.Root>
				))}
			</ListWrapper>
		</Container>
	);
}

export default HazardsContainer;
