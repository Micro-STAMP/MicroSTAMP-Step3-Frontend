import EntityContainer from "@components/EntityContainer";
import { EditDeleteButton } from "@components/IconButton";
import styles from "./HazardsContainer.module.css";

interface HazardsContainerProps {
	hazards: IHazard[];
}
function HazardsContainer({ hazards }: HazardsContainerProps) {
	return (
		<EntityContainer title="Hazards">
			<div className={styles.hazardsContainer}>
				{hazards.map(hazard => (
					<div className={styles.hazard} key={hazard.id}>
						<span>{hazard.name}</span>
						<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
					</div>
				))}
			</div>
		</EntityContainer>
	);
}

export default HazardsContainer;
