import EntityContainer from "@/components/EntityContainer";

function Project() {
	return (
		<>
			<EntityContainer title="Project" justTitle>
				Name & Decription
			</EntityContainer>
			<EntityContainer title="Controllers"> controllers </EntityContainer>
			<EntityContainer title="Hazards"> hazards </EntityContainer>
		</>
	);
}

export default Project;
