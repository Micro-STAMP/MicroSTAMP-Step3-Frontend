import { controllers, hazards } from "@/json";
import Button from "@components/Button";
import { ControllersContainer, HazardsContainer, ProjectContainer } from "@components/Container";

function Project() {
	return (
		<>
			<ProjectContainer
				name="Insulin Pump"
				description="The Insulin Pump System is a medical device designed to administer insulin."
			/>
			<ControllersContainer controllers={controllers} />
			<HazardsContainer hazards={hazards} />
			<Button>Export Project</Button>
			<Button variant="secondary">Remove Project</Button>
		</>
	);
}

export default Project;
