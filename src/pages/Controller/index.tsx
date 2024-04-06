import EntityContainer from "@components/EntityContainer";
import TitleDisplay from "@components/TitleDisplay";

function Controller() {
	return (
		<>
			<TitleDisplay controller="Insulin Pump" project="Insulin Pump" />
			<EntityContainer title="Control Actions"> </EntityContainer>
			<EntityContainer title="Variables"> </EntityContainer>
		</>
	);
}

export default Controller;
