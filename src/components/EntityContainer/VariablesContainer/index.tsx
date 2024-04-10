import { Container } from "@/components/EntityContainer";
import { IVariable } from "@/interfaces/IVariable";
import { AddButton, EditDeleteButton } from "@components/IconButton";
import { BiX as X } from "react-icons/bi";

import styles from "./VariablesContainer.module.css";

interface VariableContainerProps {
	variables: IVariable[];
}
function VariableContainer({ variables }: VariableContainerProps) {
	return (
		<Container title="Variables">
			<div className={styles.variablesContainer}>
				{variables.map(variable => (
					<div className={styles.variable} key={variable.id}>
						<div className={styles.details}>
							<span className={styles.varName}>{variable.name}</span>
							<div className={styles.values}>
								{variable.values.map(value => (
									<div className={styles.value} key={value.id}>
										<button type="button">
											<X />
										</button>
										<span>{value.name}</span>
									</div>
								))}
							</div>
						</div>
						<div className={styles.actions}>
							<AddButton onClick={() => {}} />
							<EditDeleteButton onEdit={() => {}} onDelete={() => {}} />
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}

export default VariableContainer;
