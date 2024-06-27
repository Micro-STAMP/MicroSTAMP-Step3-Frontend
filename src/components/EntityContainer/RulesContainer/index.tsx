import Container from "@components/EntityContainer/Container";
import ListWrapper from "@components/EntityContainer/Container/ListWrapper";
import { DeleteButton } from "@components/IconButton";
import { ModalCreateRule } from "@components/Modal";
import { getVariablesByController } from "@http/Variable";
import { IReadListRule } from "@interfaces/IRule/IReadListRule";
import { useQuery } from "@tanstack/react-query";
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
	rules: IReadListRule[];
	project_id: number;
	controller_id: number;
	ca_id: number;
}
function RulesContainer({ rules, project_id, controller_id, ca_id }: RulesContainerProps) {
	const [modalCreateRuleOpen, setModalCreateRuleOpen] = useState(false);
	const toggleModal = () => {
		setModalCreateRuleOpen(!modalCreateRuleOpen);
	};

	const {
		data: variables,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["rule-variables", controller_id],
		queryFn: () => getVariablesByController(controller_id)
	});

	if (isLoading) return <h1>Loading...</h1>;
	if (!variables || isError) return <h1>Error</h1>;
	return (
		<>
			<Container title="Rules" onClick={toggleModal}>
				<ListWrapper>
					{rules.map(rule => (
						<div className={styles.rule} key={rule.id}>
							<RuleCell tag="Index" value={rule.tag} />
							<RuleCell tag="Types" value={Array.from(rule.types).join(", ")} />
							{rule.values.map(value => (
								<RuleCell
									tag={value.variable_name}
									value={value.value_name}
									key={value.variable_name}
								/>
							))}
							<RuleCell tag="Hazard" value={rule.hazard.name} />
							<DeleteButton onClick={() => {}} />
						</div>
					))}
				</ListWrapper>
			</Container>
			<ModalCreateRule
				variables={variables}
				open={modalCreateRuleOpen}
				onClose={toggleModal}
				project_id={project_id}
				ca_id={ca_id}
			/>
		</>
	);
}

export default RulesContainer;
