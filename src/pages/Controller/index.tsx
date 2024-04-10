import { controllers } from "@/json";
import { ControlActionsContainer, VariablesContainer } from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";

function Controller() {
	const controlActions = controllers[0].control_actions;
	const variables = controllers[0].variables;
	return (
		<>
			<TitleDisplay controller="Insulin Pump" project="Insulin Pump" />
			<ControlActionsContainer controlActions={controlActions} />
			<VariablesContainer variables={variables} />
		</>
	);
}

export default Controller;
