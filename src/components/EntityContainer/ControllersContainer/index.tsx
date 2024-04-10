import { IController } from "@/interfaces/IController";
import { Container } from "@components/EntityContainer";
import { EditDeleteButton, LinkButton } from "@components/IconButton";
import styles from "./ControllersContainer.module.css";

interface ControllersContainerProps {
	controllers: IController[];
}
function ControllersContainer({ controllers }: ControllersContainerProps) {
	return (
		<Container title="Controllers">
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
		</Container>
	);
}

export default ControllersContainer;
