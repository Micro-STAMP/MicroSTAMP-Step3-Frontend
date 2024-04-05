import EntityContainer from "@/components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";

function Project() {
	return (
		<>
			<TitleDisplay controller="Insulin Pump" project="Insulin Pump" />
			<EntityContainer title="Project" justTitle>
				<></>
			</EntityContainer>
			<EntityContainer title="Controller">
				<></>
			</EntityContainer>
		</>
	);
}

export default Project;
