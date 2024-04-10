import { IVariable } from "@/interfaces/IVariable";
import { Container, ListWrapper } from "@components/EntityContainer";
import { EntityItem as Variable } from "@components/EntityItem";
import { AddButton, EditDeleteButton } from "@components/IconButton";

interface VariableContainerProps {
	variables: IVariable[];
}
function VariableContainer({ variables }: VariableContainerProps) {
	return (
		<Container title="Variables">
			<ListWrapper>
				{variables.map(variable => (
					<Variable.Root key={variable.id}>
						<Variable.Display>
							<Variable.Name>{variable.name}</Variable.Name>
							<Variable.Values values={variable.values} />
						</Variable.Display>
						<Variable.Actions>
							<AddButton onClick={() => {}} />
							<EditDeleteButton onEdit={() => {}} onDelete={() => {}} />
						</Variable.Actions>
					</Variable.Root>
				))}
			</ListWrapper>
		</Container>
	);
}

export default VariableContainer;
