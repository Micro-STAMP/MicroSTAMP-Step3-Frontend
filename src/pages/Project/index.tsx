import { controllers, hazards } from "@/json";
import Button from "@components/Button";
import {
	ControllersContainer,
	HazardsContainer,
	ProjectContainer
} from "@components/EntityContainer";
import { CSSProperties } from "react";

function Project() {
	const buttonsDiv: CSSProperties = {
		display: "flex",
		justifyContent: "end",
		gap: "8px",
		flexWrap: "wrap",
		width: "100%"
	};

	return (
		<>
			<ProjectContainer
				name="Insulin Pump"
				description="The Insulin Pump System is a medical device designed to administer insulin."
			/>
			<ControllersContainer controllers={controllers} />
			<HazardsContainer hazards={hazards} />

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
