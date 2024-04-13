import UCAsList from "@/components/UCAsList";
import TitleDisplay from "@components/TitleDisplay";

function UCAs() {
	return (
		<>
			<TitleDisplay project="Insulin Pump" controller="Pump Insulin" />
			<UCAsList />
		</>
	);
}

export default UCAs;
