import Button from "@components/Button";
import EntityContainer from "@components/EntityContainer";

function Project() {
	return (
		<>
			<EntityContainer title="Project" justTitle>
				Name & Decription
			</EntityContainer>
			<EntityContainer title="Controllers"> controllers </EntityContainer>
			<EntityContainer title="Hazards"> hazards </EntityContainer>
			<>
				<Button onClick={() => console.log()}>Export Project</Button>
				<Button variant="secondary" onClick={() => console.log()}>
					Remove Project
				</Button>
			</>
		</>
	);
}

export default Project;
