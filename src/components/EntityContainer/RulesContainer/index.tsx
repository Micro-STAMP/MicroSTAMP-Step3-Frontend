import { IRule } from "@/interfaces/IRule";
import Container from "@components/EntityContainer/Container";
import ListWrapper from "@components/EntityContainer/Container/ListWrapper";

import { DeleteButton } from "@/components/IconButton";
import styles from "./RulesContainer.module.css";

interface RulesContainerProps {
	rules: IRule[];
}
function RulesContainer({ rules }: RulesContainerProps) {
	return (
		<Container title="Rules">
			<ListWrapper>
				{rules.map(rule => (
					<div className={styles.rule} key={rule.id}>
						<div className={styles.cell}>
							<div className={styles.name}>Index</div>
							<div>{rule.tag}</div>
						</div>
						<div className={styles.cell}>
							<div className={styles.name}>Types</div>
							<div>{rule.types.join(", ")}</div>
						</div>
						{rule.values.map(value => (
							<div className={styles.cell} key={value.variable}>
								<div className={styles.name}>{value.variable}</div>
								<div>{value.value}</div>
							</div>
						))}
						<div className={styles.cell}>
							<div className={styles.name}>Hazard</div>
							<div>{rule.hazard}</div>
						</div>

						<DeleteButton onClick={() => {}} />
					</div>
				))}
			</ListWrapper>
		</Container>
	);
}

export default RulesContainer;
