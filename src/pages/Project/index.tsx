import Button from "@components/Button";
import {
	ControllersContainer,
	HazardsContainer,
	ProjectContainer
} from "@components/EntityContainer";
import { getControllers } from "@http/Controller";
import { getHazards } from "@http/Hazard";
import { getProjectById } from "@http/Project";
import { useQuery } from "@tanstack/react-query";
import { CSSProperties } from "react";
import { Navigate, useParams } from "react-router-dom";

const buttonsDiv: CSSProperties = {
	display: "flex",
	justifyContent: "end",
	gap: "8px",
	flexWrap: "wrap",
	width: "100%"
};

function Project() {
	const { id } = useParams();
	if (!id) return <Navigate to="/projects" />;

	const {
		data: project,
		isLoading: projectLoading,
		isError: projectError
	} = useQuery({
		queryKey: ["project", id],
		queryFn: () => getProjectById(parseInt(id))
	});

	const {
		data: hazards,
		isLoading: hazardsLoading,
		isError: hazardsError
	} = useQuery({
		queryKey: ["hazards", id],
		queryFn: () => getHazards(parseInt(id))
	});

	const {
		data: controllers,
		isLoading: controllersLoading,
		isError: controllersError
	} = useQuery({
		queryKey: ["controllers", id],
		queryFn: () => getControllers(parseInt(id))
	});

	if (projectLoading || hazardsLoading || controllersLoading) return <h1>Loading...</h1>;
	if (projectError || project === undefined) return <h1>Error</h1>;
	if (hazardsError || hazards === undefined) return <h1>Error</h1>;
	if (controllersError || controllers === undefined) return <h1>Error</h1>;
	return (
		<>
			<ProjectContainer name={project.name} description={project.description} />
			<ControllersContainer controllers={controllers} project_id={parseInt(id)} />
			<HazardsContainer hazards={hazards} project_id={parseInt(id)} />

			<div style={buttonsDiv}>
				<Button size="normal">Export Project</Button>
				<Button variant="secondary" size="normal">
					Remove Project
				</Button>
			</div>
		</>
	);
}

export default Project;
