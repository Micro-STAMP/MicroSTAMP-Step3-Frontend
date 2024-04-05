import { ReactNode } from "react";
import { BiPlusMedical as PlusIcon } from "react-icons/bi";
import styles from "./EntityContainer.module.css";

interface EntityContainerProps {
	title: string;
	children: ReactNode;
	justTitle?: boolean;
}
function EntityContainer({ title, children, justTitle = false }: EntityContainerProps) {
	return (
		<div className={styles.container}>
			<header>
				<span className={styles.title}>{title}</span>
				{!justTitle && (
					<button type="button">
						<PlusIcon className={styles.icon} />
					</button>
				)}
			</header>
			<div className={styles.content}>{children}</div>
		</div>
	);
}

export default EntityContainer;
