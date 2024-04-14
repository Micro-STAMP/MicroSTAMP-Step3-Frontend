import { ucas } from "@/json";
import Button from "@components/Button";
import TitleDisplay from "@components/TitleDisplay";
import UCAsList from "@components/UCAsList";

function UCAs() {
	return (
		<>
			<TitleDisplay project="Insulin Pump" controller="Pump Insulin" />
			<UCAsList ucas={ucas} />
			<div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
				<Button>Export JSON</Button>
			</div>
		</>
	);
}

export default UCAs;
