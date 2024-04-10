import { IController } from "@/interfaces/IController";
import EntityContainer from "@components/EntityContainer";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import styles from "./ControllersContainer.module.css";

interface ControllersContainerProps {
	controllers: IController[];
}
function ControllersContainer({ controllers }: ControllersContainerProps) {
	return (
		<EntityContainer title="Controllers">
			<div className={styles.controllersContainer}>
				{controllers.map(controller => (
					<div className={styles.controller} key={controller.id}>
						<span>{controller.name}</span>
						<div className={styles.actions}>
							<LinkButton to={`/controller/${controller.slug}`} />
							<EditDeleteButton onDelete={() => {}} onEdit={() => {}} />
						</div>
					</div>
				))}
			</div>
		</EntityContainer>
	);
}

export default ControllersContainer;
