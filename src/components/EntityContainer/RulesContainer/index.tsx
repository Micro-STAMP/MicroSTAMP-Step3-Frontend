import Button from "@components/Button";
import Container from "@components/EntityContainer/Container";
import ListWrapper from "@components/EntityContainer/Container/ListWrapper";
import { DeleteButton } from "@components/IconButton";
import { ModalConfirm, ModalCreateRule } from "@components/Modal";
import { deleteRule } from "@http/Rule";
import { createUCAByRule } from "@http/UnsafeControlAction";
import { getVariablesByController } from "@http/Variable";
import { IReadListRule } from "@interfaces/IRule/IReadListRule";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
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

	const queryClient = useQueryClient();
	const [selectedRule, setSelectedRule] = useState<number | null>(null);
	const [modalDeleteRule, setModalDeleteRule] = useState(false);
	const toggleModalDeleteRule = () => setModalDeleteRule(!modalDeleteRule);
	const { mutateAsync: requestDeleteRule, isPending } = useMutation({
		mutationFn: (id: number) => deleteRule(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rules"] });
			queryClient.invalidateQueries({ queryKey: ["context-table"] });
			queryClient.invalidateQueries({ queryKey: ["ucas-contexts"] });
			queryClient.invalidateQueries({ queryKey: ["unsafe-control-actions"] });
			toast.success("Rule deleted.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleDeleteRule = async () => {
		if (selectedRule) {
			await requestDeleteRule(selectedRule);
			toggleModalDeleteRule();
			setSelectedRule(null);
		}
	};

	const { mutateAsync: requestCreateUCAsByRule, isPending: isCreating } = useMutation({
		mutationFn: (id: number) => createUCAByRule(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["ucas-contexts"] });
			queryClient.invalidateQueries({ queryKey: ["unsafe-control-actions"] });
			queryClient.invalidateQueries({ queryKey: ["context-table"] });
			toast.success("UCAs created.");
		},
		onError: err => {
			toast.error(err.message);
		}
	});
	const handleCreateUCAsByRule = async (id: number) => {
		await requestCreateUCAsByRule(id);
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
							<DeleteButton
								onClick={() => {
									setSelectedRule(rule.id);
									toggleModalDeleteRule();
								}}
							/>
							<Button
								size="small"
								onClick={() => handleCreateUCAsByRule(rule.id)}
								isLoading={isCreating}
							>
								Apply
							</Button>
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
			<ModalConfirm
				open={modalDeleteRule}
				onClose={toggleModalDeleteRule}
				label="Delete Rule"
				message="Are you sure you want to delete this rule?"
				onConfirm={handleDeleteRule}
				btnText="Delete"
				isLoading={isPending}
			/>
		</>
	);
}

export default RulesContainer;
