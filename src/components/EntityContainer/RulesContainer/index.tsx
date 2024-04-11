import { IRule } from "@/interfaces/IRule";
import Container from "@components/EntityContainer/Container";
import ListWrapper from "@components/EntityContainer/Container/ListWrapper";
import { DeleteButton } from "@components/IconButton";
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
	return (
		<Container title="Rules">
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
	);
}

export default RulesContainer;
