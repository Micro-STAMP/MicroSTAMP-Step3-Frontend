import { IControlAction } from "@/interfaces/IControlAction";
import { Container } from "@components/EntityContainer";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import styles from "./ControlActionsContainer.module.css";

interface ControlActionsContainerProps {
	controlActions: IControlAction[];
}
function ControlActionsContainer({ controlActions }: ControlActionsContainerProps) {
	return (
		<>
			<Container title="Control Actions">
				<div className={styles.controlActionsContainer}>
					{controlActions.map(ca => (
						<div className={styles.controlAction} key={ca.id}>
							<span>{ca.name}</span>
							<div className={styles.actions}>
								<LinkButton to={`/control-action/${ca.slug}`} />
								<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
							</div>
						</div>
					))}
				</div>
			</Container>
		</>
	);
}

export default ControlActionsContainer;
