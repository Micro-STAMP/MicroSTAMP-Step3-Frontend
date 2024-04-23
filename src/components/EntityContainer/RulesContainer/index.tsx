import { IRule } from "@/interfaces/IRule";
import { IVariable } from "@/interfaces/IVariable";
import { controllers } from "@/json";
import Container from "@components/EntityContainer/Container";
import ListWrapper from "@components/EntityContainer/Container/ListWrapper";
import { DeleteButton } from "@components/IconButton";
import { ModalCreateRule } from "@components/Modal";
import { useState } from "react";
import styles from "./RulesContainer.module.css";

function RuleCell({ tag, value }: { tag: string; value: string }) {
	return (
		<div className={styles.cell}>
			<div className={styles.name}>{tag}</div>
			<div>{value}</div>
		</div>
	);
}

interface RulesContainerProps {
	rules: IRule[];
}
function RulesContainer({ rules }: RulesContainerProps) {
	const [modalCreateRuleOpen, setModalCreateRuleOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateRuleOpen(!modalCreateRuleOpen);
	};
	const variables = controllers[0].variables as IVariable[];

	return (
		<>
			<Container title="Rules" onClick={toggleModal}>
				<ListWrapper>
					{rules.map(rule => (
						<div className={styles.rule} key={rule.id}>
							<RuleCell tag="Index" value={rule.tag} />
							<RuleCell tag="Types" value={rule.types.join(", ")} />
							{rule.values.map(value => (
								<RuleCell
									tag={value.variable}
									value={value.value}
									key={value.variable}
								/>
							))}
							<RuleCell tag="Hazard" value={rule.hazard} />
							<DeleteButton onClick={() => {}} />
						</div>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateRule
				variables={variables}
				open={modalCreateRuleOpen}
				onClose={toggleModal}
			/>
		</>
	);
}

export default RulesContainer;
