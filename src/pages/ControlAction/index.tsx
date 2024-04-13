import { rules } from "@/json";
import { RulesContainer } from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";

function ControlAction() {
	return (
		<>
			<TitleDisplay controller="Insulin Pump" controlAction="Pump Insulin" />
			<RulesContainer rules={rules} />

			<h1> [ Context Table ] </h1>
		</>
	);
}

export default ControlAction;
