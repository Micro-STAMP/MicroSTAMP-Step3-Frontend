import { EntityItem as Controller } from "@/components/EntityItem";
import { IController } from "@/interfaces/IController";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EditDeleteButton, LinkButton } from "@components/IconButton";

interface ControllersContainerProps {
	controllers: IController[];
}
function ControllersContainer({ controllers }: ControllersContainerProps) {
	return (
		<Container title="Controllers">
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
	);
}

export default ControllersContainer;
