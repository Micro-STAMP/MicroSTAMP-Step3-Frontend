import EntityContainer from "@components/EntityContainer";
import { EditButton } from "@components/IconButton";
import styles from "./Project.module.css";

function Project() {
	return (
		<>
			<EntityContainer title="Project" justTitle>
				<div className={styles.projectContainer}>
					<div className={styles.details}>
						<div className={styles.name}>
							<div>
								<strong>Name: </strong>
								Insulin Pump
							</div>
							<EditButton onClick={() => console.log("edit project")} />
						</div>
						<div className={styles.description}>
							<div>
								<strong>Description: </strong>
								The Insulin Pump System is a medical device designed to administer
								insulin.
							</div>
							<EditButton onClick={() => console.log("edit project")} />
						</div>
					</div>
				</div>
			</EntityContainer>
			<EntityContainer title="Controllers"> controllers </EntityContainer>
			<EntityContainer title="Hazards"> hazards </EntityContainer>
		</>
	);
}

export default Project;
