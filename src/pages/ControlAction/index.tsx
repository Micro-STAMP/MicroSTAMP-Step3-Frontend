import { rules } from "@/json";
import Button from "@components/Button";
import { RulesContainer } from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";
import { Link } from "react-router-dom";

function ControlAction() {
	return (
		<>
			<TitleDisplay controller="Insulin Pump" controlAction="Pump Insulin" />
			<RulesContainer rules={rules} />

			<h1> [ Context Table ] </h1>
			<Link to={`/project/insulin-pump/unsafe-control-actions`}>
				<Button size="normal">See Unsafe Control Actions</Button>
			</Link>
		</>
	);
}

export default ControlAction;
