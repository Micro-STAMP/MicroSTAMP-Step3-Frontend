import { IControlAction } from "@/interfaces/IControlAction";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as ControlAction } from "@components/EntityItem";
import { EditDeleteButton, LinkButton } from "@components/IconButton";

interface ControlActionsContainerProps {
	controlActions: IControlAction[];
}
function ControlActionsContainer({ controlActions }: ControlActionsContainerProps) {
	return (
		<Container title="Control Actions">
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
	);
}

export default ControlActionsContainer;
