import Button from "@components/Button";
import ContextTable from "@components/ContextTable";
import { RulesContainer } from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";
import { getControlActionById } from "@http/ControlAction";
import { getRules } from "@http/Rule";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useParams } from "react-router-dom";

function ControlAction() {
	const { id } = useParams();
	if (!id) return <Navigate to="/projects" />;

	const { data: controlAction, isLoading } = useQuery({
		queryKey: ["control-action", id],
		queryFn: () => getControlActionById(parseInt(id))
	});

	const { data: rules, isLoading: rulesLoading } = useQuery({
		queryKey: ["rules", id],
		queryFn: () => getRules(parseInt(id))
	});

	if (isLoading || rulesLoading) return <h1>Loading...</h1>;
	if (!controlAction || !rules) return <h1>Error</h1>;
	return (
		<>
			<TitleDisplay
				controller={controlAction.controller_name}
				controlAction={controlAction.name}
			/>
			<RulesContainer
				rules={rules}
				project_id={controlAction.project_id}
				controller_id={controlAction.controller_id}
				ca_id={controlAction.id}
			/>

			<ContextTable controllerId={controlAction.controller_id} ca_id={parseInt(id)} />

			<Link to={`/controller/${controlAction.controller_id}/uca`}>
				<Button size="normal">See Unsafe Control Actions</Button>
			</Link>
		</>
	);
}

export default ControlAction;
